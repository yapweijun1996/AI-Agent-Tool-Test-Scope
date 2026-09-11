# agent-test-scope

`agent-test-scope` is a deterministic, local-first, read-only verification planner for AI coding agents. Given changed files, it returns bounded test recommendations, verification commands, evidence, confidence, risk, diagnostics, and escalation guidance.

## Boundary

The analysis core reads repository files as data. It never runs tests, builds, package scripts, installers, project code, network calls, or LLM calls, and it does not modify the target repository. Commands in results are recommendations with `executed: false`.

V0.1 supports JavaScript, TypeScript, JSX, and TSX repositories with Vitest, Jest, and Node.js native test conventions. Static imports and `require()` calls are bounded evidence; dynamic loading is reported as partial rather than treated as confirmed reachability.

## Usage

```bash
npm install
npx --no-install agent-test-scope capabilities --root .
npx --no-install agent-test-scope discover --root .
npx --no-install agent-test-scope plan --root . --changed src/order/service.ts
npx --no-install agent-test-scope explain --root . --changed src/order/service.ts --path tests/order/service.test.ts
```

The CLI writes one JSON result to stdout and human-readable copies of diagnostics to stderr. `complete` means planning completed within the evidence boundary; it never means tests passed. `partial` means useful evidence exists with a bounded limitation. `error` means the request or root boundary must be corrected.

The library exposes `getCapabilities`, `discoverTests`, `planTestScope`, `explainRecommendation`, and `execute` from `agent-test-scope`.

## Result model

Every recommendation retains its evidence type and confidence. Direct filename mapping and explicit static imports may be `confirmed`; static transitive reachability is `strong`; naming, proximity, and fallback conventions are at most `candidate`. Risk describes verification breadth, not failure probability.

The planner returns `minimum`, `recommended`, and `release` levels. It does not select tests from runtime coverage, diagnose failures, generate tests, calculate blast radius, or replace Project Profile, Symbol Search, Code Slice, Change Impact, Error Lens, Patch Guard, or Release Guard.

See [SPEC.md](./SPEC.md) for the normative contract and [skills/agent-test-scope/SKILL.md](./skills/agent-test-scope/SKILL.md) for agent workflow guidance.
