# agent-test-scope Task Board

| Field | Value |
|---|---|
| Milestone | V0.1 |
| Status | Not started |
| Current task | TS-001 |
| Execution rule | One coherent verified slice at a time |

Status values:

```text
TODO
ACTIVE
BLOCKED
PASS
```

## P0 — Contract and Safety

- [ ] **TS-001** Scaffold package and repository structure
- [ ] **TS-002** Define request/result TypeScript types
- [ ] **TS-003** Add JSON schemas and runtime validation
- [ ] **TS-004** Implement canonical root handling
- [ ] **TS-005** Implement path containment checks
- [ ] **TS-006** Implement ignore/generated/vendor filtering
- [ ] **TS-007** Implement secret-file exclusion
- [ ] **TS-008** Implement symlink safety
- [ ] **TS-009** Add file/byte/result/deadline limits
- [ ] **TS-010** Add deterministic discovery ordering

## P1 — Framework Discovery

- [ ] **TS-011** Detect Vitest
- [ ] **TS-012** Detect Jest
- [ ] **TS-013** Detect Node.js native test runner
- [ ] **TS-014** Detect test scripts
- [ ] **TS-015** Detect typecheck/build scripts
- [ ] **TS-016** Discover `*.test.*`
- [ ] **TS-017** Discover `*.spec.*`
- [ ] **TS-018** Discover `test/`, `tests/`, `__tests__/`

## P1 — Mapping and Evidence

- [ ] **TS-019** Implement direct basename mapping
- [ ] **TS-020** Implement co-located mapping
- [ ] **TS-021** Parse bounded static ESM imports
- [ ] **TS-022** Parse bounded static CommonJS require
- [ ] **TS-023** Build repository-local static relationship graph
- [ ] **TS-024** Normalize evidence model
- [ ] **TS-025** Assign confidence by evidence class
- [ ] **TS-026** Implement deterministic ranking
- [ ] **TS-027** Report ambiguity explicitly

## P1 — Risk and Planning

- [ ] **TS-028** Define policy-based risk signals
- [ ] **TS-029** Implement low/medium/high/critical/unknown classifier
- [ ] **TS-030** Generate minimum verification
- [ ] **TS-031** Generate recommended verification
- [ ] **TS-032** Generate release verification
- [ ] **TS-033** Generate commands with provenance
- [ ] **TS-034** Ensure commands are never executed

## P1 — Public Interfaces

- [ ] **TS-035** Implement `capabilities`
- [ ] **TS-036** Implement `discover`
- [ ] **TS-037** Implement `plan`
- [ ] **TS-038** Implement `explain`
- [ ] **TS-039** Implement shared library API
- [ ] **TS-040** Implement CLI
- [ ] **TS-041** Add CLI/library parity tests

## P2 — External Evidence

- [ ] **TS-042** Define versioned external evidence adapter contract
- [ ] **TS-043** Add Project Profile adapter
- [ ] **TS-044** Add Symbol Search adapter
- [ ] **TS-045** Add Change Impact adapter

These may move after V0.1 if standalone quality is not yet proven.

## P0 — Verification and Release

- [ ] **TS-046** Contract tests
- [ ] **TS-047** Framework fixture matrix
- [ ] **TS-048** Mapping fixture matrix
- [ ] **TS-049** Static import fixtures
- [ ] **TS-050** Security/root/symlink fixtures
- [ ] **TS-051** Resource-limit and timeout fixtures
- [ ] **TS-052** Repeated-output determinism tests
- [ ] **TS-053** Coverage gates
- [ ] **TS-054** Schema check
- [ ] **TS-055** Package tarball smoke
- [ ] **TS-056** Capability check
- [ ] **TS-057** Benchmark check
- [ ] **TS-058** Documentation consistency check
- [ ] **TS-059** Add `skills/agent-test-scope/SKILL.md`
- [ ] **TS-060** Release-readiness review

## Task Completion Template

For each completed task record:

```text
ID:
Status:
Goal:
Files changed:
Acceptance criteria:
Validation:
Evidence:
Known limitations:
Commit:
```

A task cannot be marked `PASS` from source inspection alone when runtime verification is applicable.
