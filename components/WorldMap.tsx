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
    <div className="flex">
      <div className="relative flex-1">
        <div
          id="map-container"
          className="w-full h-screen flex items-center justify-center"
        />
        {tooltip.show && (
          <div
            className="absolute z-10 bg-black text-white px-2 py-1 rounded text-sm pointer-events-none"
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

      <div className="w-1/3 h-screen flex items-center justify-center bg-gray-100">
        {selectedImage.show && (
          <div className="p-4">
            <Image
              src={`/generated_images/${selectedImage.country.replace(
                /\s+/g,
                "_"
              )}.jpg`}
              alt={`Woman from ${selectedImage.country}`}
              width={400}
              height={400}
              className="rounded-lg shadow-lg"
              style={{ objectFit: "cover" }}
              priority
            />
            <p className="text-center mt-2 text-gray-700">
              Woman from {selectedImage.country}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WorldMap;
