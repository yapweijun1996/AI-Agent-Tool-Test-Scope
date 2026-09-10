# agent-test-scope Progress

| Field | Current value |
|---|---|
| Overall | 0% |
| Current phase | Phase 0 — Contract Foundation |
| Current task | TS-001 — Scaffold package and repository structure |
| Repository state | Not yet established |
| Last verified commit | None |
| Blockers | None known |
| Release readiness | Not ready |

## Capability Matrix

| Capability | Status |
|---|---|
| Goal / product boundary | DEFINED |
| Normative specification | DRAFT |
| Technical design | DRAFT |
| Package scaffold | TODO |
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

No runtime implementation evidence exists yet.

Therefore no implementation capability is marked PASS.

## Next Best Move

Implement **TS-001 — package/repository scaffold**, then immediately establish:

1. schema/type skeleton;
2. shared CLI/library core;
3. verification scripts;
4. first contract test.

Avoid implementing framework logic before the request/result envelope and safety boundaries exist.

## Known Risks

1. Test selection can easily become heuristic-heavy.
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
