(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_fcb680._.js", {

"[project]/components/WorldMap.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
const WorldMap = ()=>{
    _s();
    const [tooltip, setTooltip] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        show: false,
        text: "",
        x: 0,
        y: 0
    });
    const [selectedImage, setSelectedImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        show: false,
        country: ""
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WorldMap.useEffect": ()=>{
            // Load and inject the SVG
            fetch("/world-map.svg").then({
                "WorldMap.useEffect": (response)=>response.text()
            }["WorldMap.useEffect"]).then({
                "WorldMap.useEffect": (svgContent)=>{
                    const mapContainer = document.getElementById("map-container");
                    if (mapContainer) {
                        mapContainer.innerHTML = svgContent;
                        // Get all paths and g elements (some countries might be in g elements)
                        const allPaths = mapContainer.querySelectorAll("path, g");
                        allPaths.forEach({
                            "WorldMap.useEffect": (element)=>{
                                element.style.fill = "#ECEFF1";
                                element.style.stroke = "#607D8B";
                                element.style.strokeWidth = "0.5";
                                element.style.transition = "fill 0.2s";
                                element.addEventListener("mousemove", {
                                    "WorldMap.useEffect": (e)=>{
                                        const id = element.id || "";
                                        console.log("Element ID:", id); // Debug log
                                        if (id === "ca") {
                                            const countryName = "Canada";
                                            console.log("Showing country:", countryName); // Debug log
                                            setTooltip({
                                                show: true,
                                                text: countryName,
                                                x: e.clientX,
                                                y: e.clientY
                                            });
                                            setSelectedImage({
                                                show: true,
                                                country: countryName
                                            });
                                            element.style.fill = "#D0D9DC";
                                        }
                                    }
                                }["WorldMap.useEffect"]);
                                element.addEventListener("mouseleave", {
                                    "WorldMap.useEffect": ()=>{
                                        setTooltip({
                                            show: false,
                                            text: "",
                                            x: 0,
                                            y: 0
                                        });
                                        setSelectedImage({
                                            show: false,
                                            country: ""
                                        });
                                        element.style.fill = "#ECEFF1";
                                    }
                                }["WorldMap.useEffect"]);
                            }
                        }["WorldMap.useEffect"]);
                    }
                }
            }["WorldMap.useEffect"]);
        }
    }["WorldMap.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative flex-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        id: "map-container",
                        className: "w-full h-screen flex items-center justify-center"
                    }, void 0, false, {
                        fileName: "[project]/components/WorldMap.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this),
                    tooltip.show && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute z-10 bg-black text-white px-2 py-1 rounded text-sm pointer-events-none",
                        style: {
                            left: `${tooltip.x + 10}px`,
                            top: `${tooltip.y - 20}px`,
                            transform: "translate(-50%, -100%)"
                        },
                        children: tooltip.text
                    }, void 0, false, {
                        fileName: "[project]/components/WorldMap.tsx",
                        lineNumber: 71,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/WorldMap.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-1/3 h-screen flex items-center justify-center bg-gray-100",
                children: selectedImage.show && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: `/generated_images/Canada.jpg`,
                            alt: "Woman from Canada",
                            width: 400,
                            height: 400,
                            className: "rounded-lg shadow-lg",
                            style: {
                                objectFit: "cover"
                            },
                            priority: true
                        }, void 0, false, {
                            fileName: "[project]/components/WorldMap.tsx",
                            lineNumber: 88,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-center mt-2 text-gray-700",
                            children: "Woman from Canada"
                        }, void 0, false, {
                            fileName: "[project]/components/WorldMap.tsx",
                            lineNumber: 97,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/WorldMap.tsx",
                    lineNumber: 87,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/WorldMap.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/WorldMap.tsx",
        lineNumber: 63,
        columnNumber: 5
    }, this);
};
_s(WorldMap, "9vRcObM3V7MFQnL6Rk4x9Z1qAbs=");
_c = WorldMap;
const __TURBOPACK__default__export__ = WorldMap;
var _c;
__turbopack_refresh__.register(_c, "WorldMap");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=_fcb680._.js.map