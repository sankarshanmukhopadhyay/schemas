# Architecture snapshot

This diagram is a **non-normative** view of how the repo set composes with DTG Labs upstream work.

```mermaid
flowchart TB
  subgraph A[Assurance & Conformance Layer (this repo set)]
    S[Schemas]
    D[DCAS]
    N[ANAB]
    S --> D --> N
  end

  subgraph C[Credential Semantics]
    DC[dtg-credentials]
  end

  subgraph I[Ecosystem Architecture]
    VTI[verifiable-trust-infrastructure]
  end

  subgraph R[Reference Implementations]
    O[openVTC]
  end

  %% Intended dependency direction
  DC --> VTI --> O

  %% Interop touchpoints (non-normative)
  S -. schemas for claims .- DC
  D -. assurance profiles .- VTI
  N -. identifier trust tasks .- O
```

## Notes

- Solid arrows represent a typical dependency direction.
- Dotted edges represent interoperability touchpoints (mapping, evaluation, or integration), not hard dependencies.
