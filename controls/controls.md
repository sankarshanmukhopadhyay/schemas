# Controls Registry (Non-Normative)

This repository includes a lightweight **Controls Registry** to support ecosystem conformance and assurance claims.
Controls provide stable identifiers that implementers can reference in documentation, audits, and conformance declarations.

This registry is **non-normative**: it does not change schema validation rules.
It exists to make governance and assurance **addressable**.

## Control ID format

Control IDs follow:

- `SC-CORE-XX` for repository-wide controls (schema identity, CI discipline, etc.)
- `SC-DTG-XX` for DTG credential family controls
- `SC-AGENT-XX` for Agent credential family controls
- `SC-REP-XX` for Reputation credential family controls

Where `XX` is a two-digit sequence (e.g., `01`, `02`).

## How to use

Implementers SHOULD:

1. Pin schema consumption to tagged releases.
2. Reference relevant control IDs in their conformance declaration.
3. Provide evidence (test logs, deployment configs, signed artifacts) aligned to the referenced controls.

## Registry artifacts

- Human-readable registry: `controls/controls.md` (this document)
- Machine-readable registry: `controls/controls.json`
- Validation schema: `controls/controls.schema.json`

## Notes

Controls are intended to be:
- **stable** across patch/minor repository releases
- **expanded** over time as governance needs mature
- **mapped** in future releases to assurance levels, threat models, and ecosystem-specific requirements
