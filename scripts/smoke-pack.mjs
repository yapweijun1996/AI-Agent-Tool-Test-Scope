import assert from "node:assert/strict";
import { existsSync, mkdtempSync, readFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { resolve, join } from "node:path";
import { execFileSync, spawnSync } from "node:child_process";

const root = resolve(new URL("..", import.meta.url).pathname);
const packageJson = JSON.parse(readFileSync(resolve(root, "package.json"), "utf8"));
for (const file of ["dist/index.js", "dist/index.d.ts", "dist/cli.js", "schemas/request.schema.json", "schemas/result.schema.json", "schemas/capabilities.schema.json"]) assert.ok(existsSync(resolve(root, file)), `packaged file is missing: ${file}`);
assert.equal(packageJson.main, "./dist/index.js");
assert.equal(packageJson.bin["agent-test-scope"], "./dist/cli.js");
const output = mkdtempSync(join(tmpdir(), "agent-test-scope-pack-"));
try {
  const packed = JSON.parse(execFileSync("npm", ["pack", "--ignore-scripts", "--pack-destination", output, "--json"], { cwd: root, encoding: "utf8" }))[0];
  assert.equal(typeof packed.filename, "string");
  const archive = join(output, packed.filename);
  const extracted = join(output, "package");
  execFileSync("tar", ["-xzf", archive, "-C", output]);
  assert.ok(existsSync(join(extracted, "dist", "index.js")));
  assert.ok(existsSync(join(extracted, "dist", "cli.js")));
  assert.ok(existsSync(join(extracted, "schemas", "request.schema.json")));
  const api = await import(`file://${join(extracted, "dist", "index.js")}`);
  assert.equal(api.getCapabilities(extracted).status, "complete");
  const cliProcess = spawnSync(process.execPath, [join(extracted, "dist", "cli.js"), "capabilities", "--root", extracted], { encoding: "utf8" });
  assert.equal(cliProcess.status, 0, `packaged CLI failed: ${cliProcess.stderr}`);
  assert.ok(cliProcess.stdout.trim(), `packaged CLI returned no stdout: ${cliProcess.stderr}`);
  const cli = JSON.parse(cliProcess.stdout);
  assert.equal(cli.status, "complete");
  console.log("Packaged tarball smoke passed");
} finally {
  rmSync(output, { recursive: true, force: true });
}
