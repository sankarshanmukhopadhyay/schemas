# Assurance Levels

This repository distinguishes between **schema validity** and **trust posture**.

A JSON document can be schema-valid while still being untrustworthy (wrong issuer, missing signatures, unverifiable provenance, etc.).
Assurance levels provide a shared language for implementers and ecosystem operators to describe **how strong** a conformance claim is.

## Levels

### AL1 — Structural Conformance
**Goal:** Prove payloads conform to schemas.

**Requirements:**
- Payloads validate against the published schemas.

**Non-goals:**
- No requirement to publish a conformance declaration.
- No evidence requirements.

### AL2 — Declared Conformance + Controls
**Goal:** Make conformance claims **auditable and repeatable**.

**Requirements:**
- Publish a machine-readable conformance declaration (`conformance/`).
- Declare applicable controls and scope (schema families / schemas / roles).
- Validate declaration structure in CI or an equivalent pipeline.

### AL3 — Evidence-backed Conformance
**Goal:** Move from claims to **verifiable supporting evidence**.

**Requirements:**
- All AL2 requirements.
- Provide evidence references (test logs, build attestation, provenance links, etc.).
- Provide integrity metadata for the declaration (hash/signature pointer, timestamping policy, etc.).

### AL4 — Independently Assured Conformance
**Goal:** Provide high-confidence assurance suitable for regulated or high-impact deployments.

**Requirements:**
- All AL3 requirements.
- Independent review or audit of conformance and evidence.
- Documented audit scope and outcomes (public or controlled-access).

## Notes
- Assurance levels are **ecosystem agreements**, not cryptographic guarantees by themselves.
- Ecosystems may profile or constrain these levels for specific trust networks.
