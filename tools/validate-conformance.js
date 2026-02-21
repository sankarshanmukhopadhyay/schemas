#!/usr/bin/env node
/**
 * Reference validator for this repository.
 *
 * This tool intentionally avoids dependencies and shells out to `ajv` (ajv-cli).
 * Usage:
 *   node tools/validate-conformance.js
 */
const { execSync } = require("child_process");
const fs = require("fs");

function run(cmd) {
  execSync(cmd, { stdio: "inherit", shell: "/bin/bash" });
}

function exists(p) {
  try { fs.accessSync(p); return true; } catch { return false; }
}

if (!exists("conformance/conformance-declaration.schema.json")) {
  console.error("ERROR: run from repository root.");
  process.exit(1);
}

try {
  console.log("== Validating conformance declaration example ==");
  run('ajv validate -s conformance/conformance-declaration.schema.json -d conformance/examples/example-declaration.json --strict=false');

  console.log("== Validating controls registry ==");
  run('ajv validate -s controls/controls.schema.json -d controls/controls.json --strict=false');

  console.log("== Validating assurance registry ==");
  run('ajv validate -s assurance/assurance.schema.json -d assurance/assurance-levels.json --strict=false');

  console.log("== Validating control-to-assurance matrix ==");
  run('ajv validate -s controls/mappings/control-assurance-matrix.schema.json -d controls/mappings/control-assurance-matrix.json --strict=false');

  console.log("== Validating registry simulation ==");
  run('ajv validate -s registry/registry.schema.json -d registry/sample-registry.json --strict=false');

  console.log("OK");
} catch (e) {
  process.exit(2);
}
