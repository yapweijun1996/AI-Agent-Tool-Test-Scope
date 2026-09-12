# agent-test-scope Progress

| Field | Current value |
|---|---|
| Overall | 92% |
| Current phase | Phase 1 — Release Hardening |
| Current task | Release handoff — GitHub CI and npm Trusted Publishing execution |
| Repository state | V0.1 implementation plus MIT licensing, committed npm lockfile, dependency-backed clean install, npm metadata, prepack/publish gates, Node 20/22 CI with Node 22 coverage, release configuration check, and tag-triggered Trusted Publishing workflow |
| Last verified commit | `8b8c409` — npm CLI bin metadata normalized after publish dry-run audit |
| Blockers | Latest GitHub CI failed only on the Node 20 built-in coverage regression; the workflow fix requires a new push. npm Trusted Publisher/environment configuration and real tagged publish require external GitHub/npm authorization; copyright-holder confirmation remains a legal gate |
| Release readiness | NOT READY — local clean-install, release, and security gates pass; the latest remote CI is red until the Node 20 coverage workaround is pushed and rerun |

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
| Package smoke | PASS — extracted tarball public-entrypoint smoke and clean install passed |
| Coverage gate | PASS |
| Benchmark | PASS |
| Release | NEAR READY — local gates pass; GitHub/registry execution pending |

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

Runtime evidence before release hardening: strict TypeScript compilation passed using the existing local TypeScript toolchain from the sibling Symbol Search workspace; 17 native Node tests passed; coverage passed at lines 92.44%, branches 80.35%, and functions 95.96%; schema, capability, extracted-tarball CLI/library smoke, benchmark, and documentation checks passed. After generating the committed lockfile and removing an unused vulnerable Vitest development dependency, `npm ci`, the declared `npm run verify`, all repository gates, `npm audit`, and `npm audit --omit=dev` pass locally. The first remote CI run on `33feb45` passed all Node 22.x steps and Node 20.x Verify, but Node 20.x Coverage failed inside Node's built-in source-map coverage reporter even though all 17 tests passed. The workflow now keeps coverage enforced on Node 22.x and continues verification on Node 20.x; this must be rerun remotely after the workflow fix is pushed. Release hardening includes `prepack`, `prepublishOnly`, npm metadata, locked CI, a fail-closed release check, and tag-triggered Trusted Publishing configuration. The npm publish dry-run passes without metadata auto-correction, and the packaged artifact contains the public library, CLI, schemas, skill, and MIT license. npm Trusted Publisher/environment configuration and a real tagged publish remain pending.

## Next Best Move

V0.1 implementation and local release gates are complete. The next external handoff actions are to push the CI workaround, confirm a green Node 20/22 GitHub run, configure the npm Trusted Publisher and `npm-publish` environment, and publish only from a matching version tag; no further product-code change is currently indicated.

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
npm run release:check
npm audit
```

All applicable checks must pass from the actual repository/package artifact.

For the implemented slice, direct typecheck, 17 runtime tests, schema check, capability check, extracted tarball CLI/library smoke, coverage thresholds, benchmark bound, docs check, deterministic repeated output, root/symlink/secret/resource fixtures, CLI/library parity, committed-lockfile `npm ci`, dependency-complete `npm run verify`, `npm audit`, and release configuration checks passed. GitHub CI has partial evidence: Node 22.x is green and Node 20.x Verify is green, while Node 20.x Coverage failed due the known runtime regression and awaits the workflow workaround rerun. A real npm Trusted Publishing release remains unexecuted.

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
