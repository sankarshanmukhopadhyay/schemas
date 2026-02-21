## Upstream Origin

This repository is forked from https://github.com/archetech/schemas.
The project builds upon the original structure while evolving schema governance and validation practices to support Archon use cases.

# schemas
Standard Archon schemas

- Agent credential [schemas](credentials/agent/v1/README.md)
- Decentralized Trust Graph (DTG) credential [schemas](credentials/dtg/v1/README.md)
- Reputation credential [schemas](credentials/reputation/v1/README.md)
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

