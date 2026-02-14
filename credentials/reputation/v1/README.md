# Reputation Credential Schemas

General-purpose reputation schemas for evaluating any DID holder — agents, people, services, or nodes.

## Schemas

### [reputation-credential.json](reputation-credential.json)

Express reputation about a DID holder in a specific domain over a bounded time period.

**Use case:** A node operator issues a reputation credential to an advisor agent after a month of fleet management, recording revenue improvement, actions taken, and uptime.

**Core fields:**
- `domain` — Profile identifier (e.g., `hive:advisor`, `agent:general`)
- `period` — Evaluation window (start/end timestamps)
- `metrics` — Domain-specific measurements (defined by the profile)
- `outcome` — `renew` (positive), `revoke` (negative), or `neutral` (informational)
- `evidence` — References to signed receipts, snapshots, or attestations

### [reputation-profile.json](reputation-profile.json)

Define valid metric keys, types, and semantics for a reputation domain. Published as a credential to enable discovery and validation.

**Use case:** The Lightning Hive publishes a `hive:advisor` profile defining metrics like `revenue_delta_pct`, `actions_taken`, `uptime_pct`, and `channels_managed`.

**Core fields:**
- `domain` — Unique profile identifier
- `version` — Semantic version
- `metrics` — Metric definitions with types, ranges, and descriptions
- `requiredMetrics` / `optionalMetrics` — Which metrics must/may appear

## Domain Profiles

Profile identifiers follow the `namespace:type` pattern:

| Profile | Subject | Issuer | Key Metrics |
|---------|---------|--------|-------------|
| `hive:advisor` | Fleet advisor (agent/human) | Node operator | revenue_delta_pct, actions_taken, uptime_pct |
| `hive:node` | Lightning node | Peer node / monitoring service | routing_reliability, uptime, htlc_success_rate |
| `agent:general` | AI agent | Task delegator / platform | task_completion_rate, accuracy, response_time_ms |

New profiles are added by publishing `DIDReputationProfile` credentials.

## Design

- **W3C VC 2.0** compliant (`validFrom`/`validUntil`, standard context)
- **Domain-agnostic** base schema with extensible profiles
- **Sybil-resistant** aggregation via issuer diversity, stake weighting, and evidence verification
- **Composable** across domains — a DID's reputation in multiple domains can be queried and aggregated

## Full Specification

See [DID Reputation Schema](https://github.com/lightning-goats/cl-hive/blob/main/docs/planning/DID-REPUTATION-SCHEMA.md) for the complete design document including aggregation algorithms, sybil resistance analysis, and implementation notes.

## Contributing

When proposing new domain profiles:
- Follow the `namespace:type` naming convention
- Define clear metric types and ranges
- Distinguish required vs optional metrics
- Document intended subject and issuer types
