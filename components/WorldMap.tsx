"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const WorldMap = () => {
  const [tooltip, setTooltip] = useState({ show: false, text: "", x: 0, y: 0 });
  const [selectedImage, setSelectedImage] = useState({
    show: false,
    country: "",
  });

  useEffect(() => {
    // Load and inject the SVG
    fetch("/world-map.svg")
      .then((response) => response.text())
      .then((svgContent) => {
        const mapContainer = document.getElementById("map-container");
        if (mapContainer) {
          mapContainer.innerHTML = svgContent;

          // Get all paths and g elements (some countries might be in g elements)
          const allPaths = mapContainer.querySelectorAll("path, g");
          allPaths.forEach((element) => {
            element.style.fill = "#ECEFF1";
            element.style.stroke = "#607D8B";
            element.style.strokeWidth = "0.5";
            element.style.transition = "fill 0.2s";

            element.addEventListener("mousemove", (e) => {
              const id = element.id || "";
              console.log("Element ID:", id); // Debug log

              if (id === "ca") {
                const countryName = "Canada";
                console.log("Showing country:", countryName); // Debug log

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
                element.style.fill = "#D0D9DC";
              }
            });

            element.addEventListener("mouseleave", () => {
              setTooltip({ show: false, text: "", x: 0, y: 0 });
              setSelectedImage({ show: false, country: "" });
              element.style.fill = "#ECEFF1";
            });
          });
        }
      });
  }, []);

  return (
    <div className="flex">
      {/* Map container */}
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

      {/* Image container */}
      <div className="w-1/3 h-screen flex items-center justify-center bg-gray-100">
        {selectedImage.show && (
          <div className="p-4">
            <Image
              src={`/generated_images/Canada.jpg`}
              alt="Woman from Canada"
              width={400}
              height={400}
              className="rounded-lg shadow-lg"
              style={{ objectFit: "cover" }}
              priority
            />
            <p className="text-center mt-2 text-gray-700">Woman from Canada</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WorldMap;
