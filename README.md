## Schemas (Release v0.4.0)

This repository publishes the canonical **data contracts** for the DTG assurance ecosystem.

**Last reviewed:** 2026-03-05

## Upstream Origin

This repository is forked from https://github.com/archetech/schemas.
The project builds upon the original structure while evolving schema governance and validation practices to support Archon use cases.

# schemas
Standard Archon schemas

- Agent credential [schemas](credentials/agent/v1/README.md)
- Decentralized Trust Graph (DTG) credential [schemas](credentials/dtg/v1/README.md)
- Reputation credential [schemas](credentials/reputation/v1/README.md)
## Ecosystem & related repositories

This repository is part of a small assurance ecosystem:

- **`schemas` (this repo):** canonical data contracts for credentials, controls, and machine-checkable declarations.
- **DCAS (`dtg-conformance-assurance`):** the assurance method and verifier workflow that evaluates conformance claims built on these contracts.
- **Domain baselines (example: `agent-name-assurance-baseline`):** normative requirements for specific domains that produce declarations and evidence bundles evaluable via DCAS.

**Canonical ownership:** Assurance Levels (AL1–AL4) are defined *normatively* in `assurance/assurance-levels.md`. Downstream repos MUST reference this document instead of copying AL semantics.

See also: `docs/cross-repo-governance.md`.


## Conformance

This repository supports implementer-facing conformance artifacts to enable ecosystem alignment and auditable interoperability claims.

- Human-readable template: `conformance/IMPLEMENTER-DECLARATION.md`
- Machine-readable declaration schema: `conformance/conformance-declaration.schema.json`
- Example declaration: `conformance/examples/example-declaration.json`

Implementers SHOULD pin to a tagged release and reference schemas by `$id` where possible.


## Controls

This repository maintains a lightweight Controls Registry to support ecosystem conformance and assurance claims.

- Human-readable registry: `controls/controls.md`
- Machine-readable registry: `controls/controls.json`
- Registry schema: `controls/controls.schema.json`

## Schema Versioning Policy

This repository follows semantic governance for schema evolution.

### Major Versions (`vN/`)
- Represent semantic compatibility boundaries.
- Breaking structural or validation changes require a new `v(N+1)/` directory.

### Minor / Patch Releases
Within a major version directory, the following changes are generally allowed:
- Clarify descriptions and documentation
- Add optional properties
- Add new schemas (with examples)

Changes that MAY be breaking (treat with caution):
- Tightening validation constraints
- Changing required properties
- Altering semantic interpretation of existing fields

When in doubt, changes that invalidate previously valid payloads MUST be treated as breaking.

### Consumer Guidance
Implementers SHOULD:
- Pin to tagged releases for production use.
- Avoid referencing `main` for production validation.
- Use `$id` as the canonical identifier for schema references once published via a stable hosting endpoint (e.g., GitHub Pages).


## Assurance

This repository defines **assurance levels** (AL1–AL4) to distinguish schema-validity from trust posture.

- Human-readable: `assurance/assurance-levels.md`
- Machine-readable: `assurance/assurance-levels.json` (validated by `assurance/assurance.schema.json`)

## Control ↔ Assurance Mapping

A control-to-assurance matrix defines required/recommended controls per level:

- `controls/mappings/control-assurance-matrix.json`

## Tools

Reference scripts for implementers and CI parity:

- `tools/validate-conformance.js` — validate conformance, controls, assurance, and registry simulation artifacts via AJV CLI
- `tools/lint-schemas.js` — lightweight schema linting (identity + documentation hygiene)

## Registry Simulation (Non-normative)

Example artifacts showing how an ecosystem might index implementers and their declarations:

- `registry/sample-registry.json`
- `registry/registry.schema.json`

## Ecosystem interoperability

See `docs/ecosystem-interoperability.md` and `docs/architecture.md` for how this repo composes with DTG Labs upstream work (`dtg-credentials`, `verifiable-trust-infrastructure`, `openVTC`).
