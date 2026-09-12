# agent-test-scope Progress

| Field | Current value |
|---|---|
| Overall | 96% |
| Current phase | Phase 1 — Release Hardening |
| Current task | TS-068–TS-069 — dual package compatibility and controlled published-package pilot |
| Repository state | V0.1 implementation plus MIT licensing, committed npm lockfile, dependency-backed clean install, npm metadata, dual ESM/CommonJS outputs, prepack/publish gates, green Node 20/22 CI baseline, release configuration check, tag-triggered Trusted Publishing workflow, and a verified published-package pilot |
| Last verified commit | `0629f9b` — dual ESM/CommonJS package entrypoints and controlled published-package pilot |
| Blockers | The `0.1.1` candidate still needs a push, candidate CI run, and explicit registry publication. npm Trusted Publisher/environment configuration and copyright-holder confirmation remain external/legal gates |
| Release readiness | `0.1.0` is published and pilot-verified; `0.1.1` is locally release-ready but not yet CI- or registry-verified |

## Capability Matrix

| Capability | Status |
|---|---|
| Goal / product boundary | DEFINED |
| Normative specification | DRAFT |
| Technical design | DRAFT |
| Package scaffold | PASS |
| Schema validation | PASS |
| Safe discovery | PASS |
| Vitest discovery | PASS |
| Jest discovery | PASS |
| Node test discovery | PASS |
| Direct test mapping | PASS |
| Static import evidence | PASS |
| Evidence ranking | PASS |
| Risk engine | PASS |
| Verification planner | PASS |
| CLI | PASS |
| Library API | PASS |
| Agent skill | PASS |
| Package smoke | PASS — extracted tarball ESM/CJS public-entrypoint smoke and clean install passed |
| Coverage gate | PASS |
| Benchmark | PASS |
| Release | CANDIDATE — local gates and pilot pass; candidate GitHub/registry execution pending |

## Current Product Truth

Target V0.1:

```text
changed files
      ↓
safe project/test discovery
      ↓
static evidence
      ↓
test ranking
      ↓
risk
      ↓
minimum / recommended / release verification
      ↓
stable JSON
```

Supported target:

```text
JS / JSX / TS / TSX
Vitest / Jest / Node test
```

Core constraints:

```text
no LLM
no network
no test execution
no repository mutation
no hidden confidence
```

## Latest Evidence

The V0.1 runtime slice is implemented in `src/core/` with one shared CLI/library engine. It returns versioned JSON for all four operations and keeps commands as `executed: false` data. Ambiguous equally strong mappings are retained with an explicit warning, external impact-unavailable evidence is surfaced as `partial`, and the benchmark fixture verifies bounded discovery plus repeated-output equality.

TS-001 scaffold evidence now exists: package metadata, TypeScript configuration, CLI/library entrypoint declarations, package hygiene files, and design-specified directories. JSON parsing, scaffold-path assertions, whitespace validation, deterministic enumeration, and `npm pack --dry-run --json` passed.

Runtime evidence: the dependency-backed `npm ci`, declared `npm run verify`, 17 native tests, coverage (92.44% lines, 80.35% branches, 95.96% functions), schema, capability, extracted-tarball ESM/CJS smoke, benchmark, documentation, release, and both audit modes pass locally for the `0.1.1` candidate. The remote baseline workflow run `34666708939` is green on Node 20.x and Node 22.x after keeping built-in coverage enforced on Node 22.x for the known Node 20 source-map coverage regression. The `0.1.0` registry artifact was independently extracted and exercised by `scripts/pilot-published.mjs`: the Skill loaded, `capabilities/discover/plan` returned bounded results, commands stayed `executed: false`, and the fixture was byte-for-byte unchanged. Release hardening includes `prepack`, `prepublishOnly`, npm metadata, locked CI, a fail-closed release check, dual ESM/CommonJS entrypoints, and tag-triggered Trusted Publishing configuration. The `0.1.1` publish dry-run is clean and includes the public library, CLI, schemas, Skill, MIT license, and both module outputs.

## Next Best Move

The next handoff is to push commit `0629f9b`, confirm its Node 20/22 GitHub run, then configure/verify npm Trusted Publishing and publish only from the matching `v0.1.1` tag. The controlled pilot is sufficient for the package boundary; it is not evidence of model quality or a specific agent host's sandbox behavior.

Avoid implementing framework logic before the request/result envelope and safety boundaries exist.

## Known Risks

1. The package has no runtime dependencies, but release correctness still depends on the candidate's clean install and CI environment.
   - Mitigation: the committed lockfile, local `npm ci`, and full local gates pass; repeat them in the candidate GitHub run.

2. Test selection can easily become heuristic-heavy.
   - Mitigation: evidence classes + strict confidence ceiling.

3. Monorepo ambiguity may cause unsafe broad claims.
   - Mitigation: single-package full support first; ambiguous workspace behavior becomes partial/error.

4. Static imports cannot prove runtime behavior.
   - Mitigation: explicit partial/unknown semantics.

5. Command generation could be confused with execution.
   - Mitigation: commands are structured data only.

## Completion Evidence Required

Before V0.1 can be called complete:

```text
npm run verify
npm run coverage
npm run schema:check
npm run smoke:pack
npm run capability:check
npm run benchmark:check
npm run docs:check
npm run release:check
npm audit
```

All applicable checks must pass from the actual repository/package artifact.

For the implemented slice and `0.1.1` candidate, direct ESM/CJS typecheck, 17 runtime tests, schema check, capability check, extracted tarball CLI/library smoke, coverage thresholds, benchmark bound, docs check, deterministic repeated output, root/symlink/secret/resource fixtures, CLI/library parity, committed-lockfile `npm ci`, dependency-complete `npm run verify`, `npm audit`, and release configuration checks passed. The pushed baseline GitHub CI run `34666708939` is green for both Node 20.x and Node 22.x, with coverage enforced on Node 22.x. The published `0.1.0` host-like pilot passed; a real `0.1.1` Trusted Publishing release remains unexecuted.

## Progress Update Rule

Update this file after every coherent verified task slice.

Record:

- actual current task;
- actual pass/fail evidence;
- current repository state;
- last verified commit;
- blockers;
- next best move.

Do not copy the entire task history here. `TASK.md` owns the work inventory.
