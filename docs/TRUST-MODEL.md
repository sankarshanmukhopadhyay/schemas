# Trust Model (Minimal)

This document explains what this repository **does** and **does not** guarantee.

## What these schemas provide

- **Structural interoperability:** A shared JSON shape for credentials and related artifacts.
- **Validation discipline:** Example payloads validated in CI to prevent schema regressions.
- **Governance handles:** Controls and assurance level registries to support ecosystem profiling.
- **Conformance mechanism:** A machine-readable declaration format for implementers.

## What these schemas do NOT provide

- **Issuer legitimacy:** A schema-valid credential can still be issued by an untrusted party.
- **Cryptographic authenticity:** Schemas do not guarantee signatures, key custody, or verification success.
- **Policy correctness:** Whether a credential should be accepted is a *policy decision* outside the schema.
- **Operational security:** Rate limits, storage security, and endpoint hardening are implementation responsibilities.

## Actors

- **Issuer:** Produces credentials that conform to these schemas.
- **Holder / Subject:** Holds or is described by credentials.
- **Verifier / Relying Party:** Validates structure and then applies policy.
- **Registry / Trust Operator:** Publishes schemas, controls, and assurance profiles; may curate implementer declarations.
- **Auditor (optional):** Independently reviews evidence and conformance claims (AL4).

## Trust posture in one sentence

**Schema-validity is necessary for interoperability, but insufficient for trust.**

Ecosystems SHOULD adopt assurance levels and controls to turn conformance into a decision-support signal.
