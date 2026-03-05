# Changelog

## v0.3.0

- Add ecosystem interoperability documentation and upstream references (dtg-credentials, verifiable-trust-infrastructure, openVTC).
- Add non-normative architecture diagram for cross-repo composition.



All notable changes to this project will be documented in this file.

---

## [0.3.0] - Unreleased

### Added
- Assurance levels registry (AL1–AL4) and schemas
- Control-to-assurance matrix (machine-readable + validated)
- Reference validation and linting tools
- Minimal trust model document
- Registry simulation artifacts
- Controls Registry (controls.md + controls.json + schema) for control IDs and assurance mapping handles

- Conformance artifacts: implementer declaration template, machine-readable declaration schema, and example declaration
- Non-normative trust assumptions / threat model document (`docs/TRUST-ASSUMPTIONS.md`)

### Improved
- Repository adoption readiness by enabling auditable conformance claims

---

## [0.2.1] - 2026-03-05

### Fixed
- GitHub Actions schema validation workflow indentation so all validation steps execute reliably.

### Changed
- Removed stale macOS artifacts (e.g., `.DS_Store`).
- Added `VERSION` file to make release pinning explicit in automation and downstream repos.

---


## [0.2.0] - 2026-02-21

### Added
- `$id` to all schemas for stable canonical referencing
- Extended CI validation to cover DTG, Agent, and Reputation example payloads
- Example payloads for Agent and Reputation schema families
- Schema Versioning Policy in README
- This changelog file

### Notes
- Governance and operability hardening release; no intended breaking schema changes relative to v0.1.0.

---

## [0.1.0] - 2026-02-21

### Added
- Initial DTG, Agent, and Reputation schema families
- DTG example validation via GitHub Actions
- Initial repository structure and licensing

### Lineage
- Forked from https://github.com/archetech/schemas