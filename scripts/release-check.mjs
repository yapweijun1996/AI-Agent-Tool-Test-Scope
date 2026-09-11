import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = dirname(fileURLToPath(import.meta.url));
const packageJson = JSON.parse(readFileSync(join(root, "..", "package.json"), "utf8"));
const repositoryUrl = "git+https://github.com/yapweijun1996/AI-Agent-Tool-Test-Scope.git";

assert.equal(packageJson.repository?.url, repositoryUrl);
assert.equal(packageJson.bugs?.url, "https://github.com/yapweijun1996/AI-Agent-Tool-Test-Scope/issues");
assert.equal(packageJson.publishConfig?.access, "public");
assert.equal(packageJson.publishConfig?.registry, "https://registry.npmjs.org");
assert.equal(packageJson.scripts?.prepack, "npm run build");
assert.equal(packageJson.scripts?.prepublishOnly, "npm run verify && npm run release:check");
assert.equal(typeof packageJson.version, "string");
assert.ok(packageJson.version.length > 0);
assert.ok(typeof packageJson.license === "string" && packageJson.license.length > 0, "package.json license must be selected before release");
assert.ok(existsSync(join(root, "..", "package-lock.json")), "package-lock.json is required for reproducible release verification");

const ci = readFileSync(join(root, "..", ".github", "workflows", "ci.yml"), "utf8");
const publish = readFileSync(join(root, "..", ".github", "workflows", "publish.yml"), "utf8");
assert.match(ci, /npm run verify/);
assert.match(ci, /npm run coverage/);
assert.match(publish, /id-token:\s*write/);
assert.match(publish, /npm publish --provenance --access public/);
assert.match(publish, /tags:/);
assert.match(publish, /v\*/);
assert.ok(existsSync(join(root, "..", "README.md")));

console.log("Release configuration baseline passed; legal license selection and clean-install execution remain external gates");
