# Ecosystem interoperability (pre-Phase 4)

This repo is designed to compose with upstream DTG Labs projects. The goal is **interoperability by construction**: clear role boundaries, explicit assumptions, and traceable artifacts.

## Upstream projects in scope

- **dtg-credentials**: credential schemas and issuance/verifier semantics used by ecosystem implementations.
- **verifiable-trust-infrastructure**: reference architecture and operational building blocks for verifiable trust ecosystems.
- **openVTC**: reference implementation patterns and tooling for deploying and operating verifiable trust components.

## Compatibility model

This repository provides the **assurance/conformance layer**. The upstream repos provide **ecosystem architecture + credential semantics + implementation surfaces**.

### What composes cleanly

- Use *dtg-credentials* as a credential schema substrate and map credential families to this repo’s data structures and assurance expectations.
- Use *verifiable-trust-infrastructure* to describe system architecture; use this repo to define how that architecture is assessed (controls, evidence, evaluation workflows).
- Use *openVTC* as a reference deployment surface for validating conformance and evidence collection patterns.

### What is explicitly out of scope

- This repo does not define new VC data model semantics beyond what is required for assurance artifacts.
- This repo does not attempt to be a certification program or an authority.
- This repo does not ship production-grade infrastructure components (that’s where openVTC and VTI fit).

## Next step

Phase 4 introduces transport alignment (TSP). These upstream repos do not force a redesign, but they provide the **realistic integration targets** that TSP should be validated against.
