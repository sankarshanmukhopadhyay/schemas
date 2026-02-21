# Implementer Conformance Declaration

This document is a human-readable conformance declaration for implementers using the schemas in this repository.

> **Note:** A machine-readable equivalent is provided at `conformance/conformance-declaration.schema.json` with an example at `conformance/examples/example-declaration.json`.

---

## 1. Implementer Details

- **Organization / Project name:** _<name>_
- **Primary contact:** _<person / role>_
- **Contact email:** _<email>_
- **Website / Repository (optional):** _<url>_

## 2. Declaration

The implementer declares conformance to one or more schema families and versions published in this repository, as scoped below.

- **Repository:** _<repo url>_
- **Release tag / version pinned:** _<e.g., v0.3.0>_
- **Declaration date (UTC):** _<YYYY-MM-DD>_

## 3. Conformance Scope

Describe what is being claimed and what is not.

### 3.1 Schema families covered
Check all that apply:

- [ ] DTG (`credentials/dtg/v1`)
- [ ] Agent (`credentials/agent/v1`)
- [ ] Reputation (`credentials/reputation/v1`)

### 3.2 Schemas covered

List each schema you claim conformance to, ideally by `$id` (preferred) and file path.

| Schema `$id` (preferred) | Relative path | Notes |
|---|---|---|
| _<schema $id>_ | _<credentials/...json>_ | _<evidence summary>_ |

### 3.3 Roles covered

- [ ] Issuer
- [ ] Holder / Subject
- [ ] Verifier / Relying party
- [ ] Registry / Directory (if applicable)

## 4. Evidence & Test Basis

Provide links or references to tests, fixtures, logs, or CI runs that support this declaration.

- **Validation tooling:** _<e.g., ajv-cli, custom validator, etc.>_
- **Test vectors / fixtures:** _<links>_
- **CI run(s):** _<links>_
- **Notes:** _<any constraints or assumptions>_

## 5. Known Limitations / Deviations

List any known deviations from the schema(s) or partial implementation areas.

- _<limitation 1>_
- _<limitation 2>_

## 6. Statement of Integrity

The implementer affirms that this declaration is accurate to the best of their knowledge, and that material changes to the implementation or schema version pinned may invalidate this declaration.

## 7. Sign-off

- **Name / Role:** _<name>_
- **Organization:** _<org>_
- **Signature (optional):** _<signature>_
- **Date (UTC):** _<YYYY-MM-DD>_


## Assurance

- **Assurance Level (AL1–AL4):** _e.g., AL2_
- **Controls Implemented:** list control IDs (e.g., `SC-CORE-01`, `SC-CONF-01`) and any deviations.
- **Control-to-Assurance Matrix Reference:** (optional) point to the matrix used for interpretation.
