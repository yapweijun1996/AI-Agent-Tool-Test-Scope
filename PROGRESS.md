# agent-test-scope Progress

| Field | Current value |
|---|---|
| Overall | 85% |
| Current phase | Phase 1 — V0.1 Verification and Release Evidence |
| Current task | V0.1 handoff — release review complete |
| Repository state | V0.1 contract, bounded discovery, framework detection, static mapping, risk, planner, CLI, library, schemas, skill, and local verification scripts implemented |
| Last verified commit | Latest local commit — deterministic test scope planner and V0.1 verification gates |
| Blockers | Dependency-backed `npm run verify` unavailable in the no-dependencies checkout |
| Release readiness | Reviewed — NOT READY without dependency-backed clean install/verify |

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
| Package smoke | PASS — extracted tarball public-entrypoint smoke; clean install pending |
| Coverage gate | PASS |
| Benchmark | PASS |
| Release | REVIEWED — NOT READY (dependency environment gate) |

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

Runtime evidence: strict TypeScript compilation passed using the existing local TypeScript toolchain from the sibling Symbol Search workspace; 17 native Node tests passed; coverage passed at lines 92.44%, branches 80.35%, and functions 95.96%; schema, capability, extracted-tarball CLI/library smoke, benchmark, and documentation checks passed. The repository's declared `npm run verify` was attempted but stops at typecheck because this checkout has no installed `@types/node`; package installation is prohibited by the product boundary. The equivalent direct typecheck passed with the existing sibling toolchain and its type roots.

## Next Best Move

V0.1 implementation and safe local verification are complete. The next external handoff action is to run the dependency-backed clean-install/verify gate in an authorized environment; no further product-code change is currently indicated.

Avoid implementing framework logic before the request/result envelope and safety boundaries exist.

## Known Risks

1. The local repository has no installed TypeScript/Vitest dependencies; direct TypeScript compilation used an existing sibling compiler and tests use Node's native runner.
   - Mitigation: keep verification commands explicit and record the dependency-backed npm gate as pending.

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
```

All applicable checks must pass from the actual repository/package artifact.

For the implemented slice, direct typecheck, 17 runtime tests, schema check, capability check, extracted tarball CLI/library smoke, coverage thresholds, benchmark bound, docs check, deterministic repeated output, root/symlink/secret/resource fixtures, and CLI/library parity passed. A clean dependency-backed install and dependency-complete `npm run verify` remain unavailable because package installation is outside the allowed boundary; the attempted npm gate failed only at missing Node type declarations before test execution.

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
