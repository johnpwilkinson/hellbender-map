module.exports = {
  forbidden: [
    // EDIT-ME: sdd-derived rules (begin)
    {
      name: "sdd-drill-register-hellbender-map-drill-isolation",
      comment: "sdd-derived from kiro design commitment \"Drill isolation\": `src/drill/drill-register-hellbender-map` MUST NOT import `src/components` — the drill owns no source modules; this guards the reserved drill source path.",
      severity: "warn",
      from: { path: "^src/drill/drill-register-hellbender-map" },
      to: { path: "^src/components" },
    },
    {
      name: "sdd-drill-register-hellbender-map-product-isolation",
      comment: "sdd-derived from kiro design commitment \"Product isolation\": `src/components` MUST NOT import `src/drill/drill-register-hellbender-map` — product code never depends on a throwaway drill marker.",
      severity: "warn",
      from: { path: "^src/components" },
      to: { path: "^src/drill/drill-register-hellbender-map" },
    },
    // EDIT-ME: sdd-derived rules (end)
  ],
  options: {
    doNotFollow: { path: "node_modules" },
    tsPreCompilationDeps: true,
    tsConfig: { fileName: "tsconfig.json" },
    exclude: { path: "\\.(test|spec)\\.(ts|tsx)$" },
  },
};
