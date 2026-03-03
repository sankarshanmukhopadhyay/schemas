# Cross-repo governance and drift prevention

This ecosystem is intentionally split across multiple repositories. That split only works if we prevent **semantic drift** across duplicated concepts.

## Canonical sources

- **Assurance Levels (AL1–AL4):** canonical definition lives in `assurance/assurance-levels.md` in this repository.
- **Schema identifiers (`$id`) and registries:** canonical definition lives in this repository.

Downstream repositories MUST reference canonical sources rather than copy-pasting definitions.

## Reuse rules

1. **Do not duplicate AL semantics** in downstream repos.
   - Downstream repos MAY publish *operational interpretations* (for example, evidence depth and audit cadence) but MUST not redefine AL meaning.
2. **Do not fork schema IDs (`$id`)** without a version bump and an explicit compatibility note.
3. **If a downstream repo needs extensions, prefer “extend” over “copy”.**
   - Add an extension schema that references the canonical schema.

## Change management

Changes that affect interoperability SHOULD be coordinated:

- A breaking change MUST include:
  - a version bump (SemVer),
  - a compatibility note,
  - and a short migration guide.
- Cross-repo changes SHOULD be tracked as a single issue thread (or a small set of linked issues) across the impacted repos.

## Version alignment guidance

When referencing canonical concepts across repos:

- Prefer pinning to a released tag when available.
- If referencing `main`, document the expected commit or version in downstream compatibility notes.

