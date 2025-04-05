"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

// Country mapping object
const COUNTRY_CODES: { [key: string]: string } = {
  _somaliland: "Somaliland",
  ae: "United Arab Emirates",
  af: "Afghanistan",
  al: "Albania",
  am: "Armenia",
  ao: "Angola",
  ar: "Argentina",
  at: "Austria",
  au: "Australia",
  az: "Azerbaijan",
  ba: "Bosnia and Herzegowina",
  bd: "Bangladesh",
  be: "Belgium",
  bf: "Burkina Faso",
  bg: "Bulgaria",
  bi: "Burundi",
  bj: "Benin",
  bn: "Brunei",
  bo: "Bolivia",
  br: "Brazil",
  bs: "Bahamas",
  bt: "Bhutan",
  bw: "Botswana",
  by: "Belarus",
  bz: "Belize",
  ca: "Canada",
  cd: "Democratic Republic of the Congo",
  cf: "Central African Republic",
  cg: "Congo",
  ch: "Switzerland",
  ci: "Cote d'Ivoire",
  cl: "Chile",
  cm: "Cameroon",
  cn: "China",
  co: "Colombia",
  cr: "Costa Rica",
  cu: "Cuba",
  cy: "Cyprus",
  cz: "Czech",
  de: "Germany",
  dj: "Djibouti",
  dk: "Denmark",
  do: "Dominican Republic",
  dz: "Algeria",
  ec: "Ecuador",
  ee: "Estonia",
  eg: "Egypt",
  eh: "West Sahara",
  er: "Eritrea",
  es: "Spain",
  et: "Ethiopia",
  fi: "Finland",
  fj: "Fiji",
  fk: "Falkland Islands",
  fr: "France",
  ga: "Gabon",
  gb: "United Kingdom",
  ge: "Georgia",
  gh: "Ghana",
  gl: "Greenland",
  gm: "Gambia",
  gn: "Guinea",
  gq: "Equatorial Guinea",
  gr: "Greece",
  gt: "Guatemala",
  gw: "Guinea-Bissau",
  gy: "Guyana",
  hn: "Honduras",
  hr: "Croatia",
  ht: "Haiti",
  hu: "Hungary",
  id: "Indonesia",
  ie: "Ireland",
  il: "Israel",
  in: "India",
  iq: "Iraq",
  ir: "Iran",
  is: "Iceland",
  it: "Italy",
  jm: "Jamaica",
  jo: "Jordan",
  jp: "Japan",
  ke: "Kenya",
  kg: "Kyrgyzstan",
  kh: "Cambodia",
  kp: "North Korea",
  kr: "South Korea",
  kw: "Kuwait",
  kz: "Kazakhstan",
  la: "Laos",
  lb: "Lebanon",
  lk: "Sri Lanka",
  lr: "Liberia",
  ls: "Lesotho",
  lt: "Lithuania",
  lu: "Luxembourg",
  lv: "Latvia",
  ly: "Libya",
  ma: "Morocco",
  md: "Moldova",
  me: "Montenegro",
  mg: "Madagascar",
  mk: "Macedonia",
  ml: "Mali",
  mm: "Myanmar",
  mn: "Mongolia",
  mr: "Mauritania",
  mw: "Malawi",
  mx: "Mexico",
  my: "Malaysia",
  mz: "Mozambique",
  na: "Namibia",
  nc: "New Caledonia",
  ne: "Niger",
  ng: "Nigeria",
  ni: "Nicaragua",
  nl: "Netherlands",
  no: "Norway",
  np: "Nepal",
  nz: "New Zealand",
  om: "Oman",
  pa: "Panama",
  pe: "Peru",
  pg: "Papua New Guinea",
  ph: "Philippines",
  pk: "Pakistan",
  pl: "Poland",
  pr: "Puerto Rico",
  ps: "Palestine",
  pt: "Portugal",
  py: "Paraguay",
  qa: "Qatar",
  ro: "Romania",
  rs: "Serbia",
  ru: "Russia",
  rw: "Rwanda",
  sa: "Saudi Arabia",
  sb: "Solomon Islands",
  sd: "Sudan",
  se: "Sweden",
  sg: "Singapore",
  si: "Slovenia",
  sk: "Slovakia",
  sl: "Sierra Leone",
  sn: "Senegal",
  so: "Somalia",
  sr: "Suriname",
  ss: "South Sudan",
  sv: "El Salvador",
  sy: "Syria",
  sz: "Swaziland",
  td: "Chad",
  tf: "Fr. S. Antarctic Lands",
  tg: "Togo",
  th: "Thailand",
  tj: "Tajikistan",
  tl: "Timor-Leste",
  tm: "Turkmenistan",
  tn: "Tunisia",
  tr: "Turkey",
  tt: "Trinidad and Tobago",
  tw: "Taiwan",
  tz: "Tanzania",
  ua: "Ukraine",
  ug: "Uganda",
  us: "United States",
  uy: "Uruguay",
  uz: "Uzbekistan",
  ve: "Venezuela",
  vn: "Vietnam",
  vu: "Vanuatu",
  ye: "Yemen",
  za: "South Africa",
  zm: "Zambia",
  zw: "Zimbabwe",
};

const WorldMap = () => {
  const [tooltip, setTooltip] = useState({ show: false, text: "", x: 0, y: 0 });
  const [selectedImage, setSelectedImage] = useState({
    show: false,
    country: "",
  });

  useEffect(() => {
    fetch("/world-map.svg")
      .then((response) => response.text())
      .then((svgContent) => {
        const mapContainer = document.getElementById("map-container");
        if (mapContainer) {
          mapContainer.innerHTML = svgContent;

          // Get both paths and groups
          const allElements = mapContainer.querySelectorAll("path, g");

          allElements.forEach((element) => {
            // Apply styles to both the element and its children
            const applyStyles = (el: Element) => {
              if (el instanceof SVGElement) {
                el.style.fill = "#ECEFF1";
                el.style.stroke = "#607D8B";
                el.style.strokeWidth = "0.5";
                el.style.transition = "fill 0.2s";
                el.style.cursor = "pointer"; // Add cursor pointer
              }
            };

            applyStyles(element);
            if (element instanceof SVGGElement) {
              element.querySelectorAll("path").forEach(applyStyles);
            }

            const handleMouseMove = (e: MouseEvent) => {
              const id = element.id || "";
              console.log("Hover ID:", id); // Debug log

              const countryName = COUNTRY_CODES[id];
              console.log("Country Name:", countryName); // Debug log

              if (countryName) {
                // Apply hover style to both the element and its children
                const applyHoverStyle = (el: Element) => {
                  if (el instanceof SVGElement) {
                    el.style.fill = "#D0D9DC";
                  }
                };

                applyHoverStyle(element);
                if (element instanceof SVGGElement) {
                  element.querySelectorAll("path").forEach(applyHoverStyle);
                }

                setTooltip({
                  show: true,
                  text: countryName,
                  x: e.clientX,
                  y: e.clientY,
                });
                setSelectedImage({
                  show: true,
                  country: countryName,
                });
              }
            };

            const handleMouseLeave = () => {
              // Reset style for both the element and its children
              const resetStyle = (el: Element) => {
                if (el instanceof SVGElement) {
                  el.style.fill = "#ECEFF1";
                }
              };

              resetStyle(element);
              if (element instanceof SVGGElement) {
                element.querySelectorAll("path").forEach(resetStyle);
              }

              setTooltip({ show: false, text: "", x: 0, y: 0 });
              setSelectedImage({ show: false, country: "" });
            };

            element.addEventListener("mousemove", handleMouseMove);
            element.addEventListener("mouseleave", handleMouseLeave);
          });
        }
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="w-full py-6 px-4 text-center bg-white/80 dark:bg-black/80 backdrop-blur-sm fixed top-0 z-50">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
          WorldWomanMap
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Discover women from around the world
        </p>
      </header>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row pt-24">
        {/* Map Container */}
        <div className="relative flex-1 min-h-[60vh] lg:min-h-screen">
          <div
            id="map-container"
            className="w-full h-full flex items-center justify-center p-4"
          />
          {tooltip.show && (
            <div
              className="absolute z-10 bg-black/80 text-white px-3 py-2 rounded-lg text-sm pointer-events-none backdrop-blur-sm"
              style={{
                left: `${tooltip.x + 10}px`,
                top: `${tooltip.y - 20}px`,
                transform: "translate(-50%, -100%)",
              }}
            >
              {tooltip.text}
            </div>
          )}
        </div>

        {/* Image Container */}
        <div className="w-full lg:w-1/3 min-h-[40vh] lg:min-h-screen bg-white dark:bg-gray-800 shadow-xl">
          {selectedImage.show ? (
            <div className="p-6 h-full flex flex-col items-center justify-center">
              <div className="relative w-full max-w-md aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={`/generated_images/${selectedImage.country.replace(
                    /\s+/g,
                    "_"
                  )}.jpg`}
                  alt={`Woman from ${selectedImage.country}`}
                  fill
                  className="object-cover transition-transform hover:scale-105 duration-500"
                  priority
                />
              </div>
              <h2 className="mt-6 text-2xl font-semibold text-gray-800 dark:text-white">
                Woman from {selectedImage.country}
              </h2>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Click on different countries to explore more
              </p>
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center p-6 text-center">
              <div className="text-gray-400 dark:text-gray-500">
                {/* Simple Globe Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 mx-auto mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h3 className="text-xl font-medium">Hover over a country</h3>
                <p className="mt-2 text-gray-500">
                  Discover women from around the world
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorldMap;
