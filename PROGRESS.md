# agent-test-scope Progress

| Field | Current value |
|---|---|
| Overall | 2% |
| Current phase | Phase 0 — Contract Foundation |
| Current task | TS-002 — Define request/result TypeScript types |
| Repository state | npm/TypeScript scaffold established; runtime implementation not started |
| Last verified commit | `d1348982aea9b4780f9eb419103346e8438c2a7b` — TS-001 scaffold |
| Blockers | None known |
| Release readiness | Not ready |

## Capability Matrix

| Capability | Status |
|---|---|
| Goal / product boundary | DEFINED |
| Normative specification | DRAFT |
| Technical design | DRAFT |
| Package scaffold | PASS |
| Schema validation | TODO |
| Safe discovery | TODO |
| Vitest discovery | TODO |
| Jest discovery | TODO |
| Node test discovery | TODO |
| Direct test mapping | TODO |
| Static import evidence | TODO |
| Evidence ranking | TODO |
| Risk engine | TODO |
| Verification planner | TODO |
| CLI | TODO |
| Library API | TODO |
| Agent skill | TODO |
| Package smoke | TODO |
| Coverage gate | TODO |
| Benchmark | TODO |
| Release | TODO |

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

Documentation package has defined the initial product contract and execution plan.

TS-001 scaffold evidence now exists: package metadata, TypeScript configuration, CLI/library entrypoint declarations, package hygiene files, and design-specified directories. JSON parsing, scaffold-path assertions, whitespace validation, deterministic enumeration, and `npm pack --dry-run --json` passed.

No runtime implementation evidence exists yet. TypeScript and Vitest checks were not run because dependencies are not installed and package installation is prohibited.

## Next Best Move

Implement **TS-002 — request/result TypeScript types**, then establish the schema/type skeleton before framework and mapping logic.

Avoid implementing framework logic before the request/result envelope and safety boundaries exist.

## Known Risks

1. TypeScript and Vitest are not installed locally, so runtime verification is currently unavailable without the prohibited package-install step.
   - Mitigation: keep the scaffold declarative and record the bounded validation gap explicitly.

2. Test selection can easily become heuristic-heavy.
   - Mitigation: evidence classes + strict confidence ceiling.

2. Monorepo ambiguity may cause unsafe broad claims.
   - Mitigation: single-package full support first; ambiguous workspace behavior becomes partial/error.

3. Static imports cannot prove runtime behavior.
   - Mitigation: explicit partial/unknown semantics.

4. Command generation could be confused with execution.
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

For TS-001, the applicable scaffold checks passed; typecheck and test execution remain pending until dependencies are available through an authorized setup.

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
