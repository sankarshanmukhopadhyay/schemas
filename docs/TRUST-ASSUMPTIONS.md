# Trust Assumptions & Threat Model (Non-normative)

This document provides a lightweight, non-normative framing of assumptions and threats relevant to the credential schemas in this repository.
It is intended to help implementers avoid category errors: schemas specify *shape*, not *truth*.

## Scope

- **In scope:** Credential payload structure, schema families, validation expectations, and implementer conformance declarations.
- **Out of scope:** Cryptographic suites, DID methods, registry governance, policy evaluation logic, and legal/compliance requirements.

## Baseline Trust Assumptions

1. **Issuer identification exists.** Implementations can resolve or otherwise identify the issuer (e.g., via DID resolution, X.509, registry lookup).
2. **Verification policies are external.** Schemas do not encode policy; verifiers apply local policy and risk appetite.
3. **Time is adversarial.** Credentials may be replayed, cached, or presented out of context; use expiry and revocation where appropriate.
4. **Transport is not enough.** TLS protects transit, not the long-lived use of credential data; consider signing and integrity controls.

## Threats (Illustrative)

### Forgery & Impersonation
- Malicious actors may mint structurally valid credentials that are semantically fraudulent.
- Mitigation: issuer authentication, signature verification, registry-based allowlists/denylists, and policy controls.

### Replay & Stale Assertions
- Old credentials may be replayed to obtain access or trust.
- Mitigation: expiry, revocation, short-lived assertions, and verifier-side freshness requirements.

### Confused Deputy / Delegation Abuse
- Agent-like credentials can be used to expand privilege through misinterpreted scope.
- Mitigation: explicit capability scoping, audience restrictions, and least-privilege policy evaluation.

### Schema Drift
- Implementers may unintentionally diverge from schema expectations across versions.
- Mitigation: pin to tagged releases, validate with CI, and publish conformance declarations.

## Implementation Guidance

- Treat schema validation as **necessary but not sufficient**.
- Prefer referencing schemas by `$id` (stable) rather than repository paths (mutable).
- Publish a machine-readable conformance declaration when claiming interoperability.

