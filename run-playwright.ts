const { spawnSync } = require("child_process");

const site = process.env.npm_config_site;
const specKey = process.env.npm_config_spec;
const headedFlag = process.env.npm_config_headed;
const envName = process.env.npm_config_env || process.env.TEST_ENV || "uat";
const project = process.env.npm_config_project || process.env.TEST_PROJECT || "Chrome";

const SPEC_MAP = {
  "portfolio-nav-anchor": "playwright/websites/jefmayer.com/portfolio-nav-anchor.spec.ts"
};

if (!specKey) {
  console.error("Missing --spec. Example: --spec=contact-form-validation");
  process.exit(1);
}

const specPath = SPEC_MAP[specKey];
if (!specPath) {
  console.error(`Unknown spec '${specKey}'. Known specs: ${Object.keys(SPEC_MAP).join(", ")}`);
  process.exit(1);
}

const result = spawnSync("node", ["playwright-env.ts"], {
  env: {
    ...process.env,
    TEST_ENV: envName,
    TEST_SITE: site,
  },
  encoding: "utf-8"
});
if (result.status !== 0) process.exit(result.status);

const BASE_URL = result.stdout.trim();

const pwArgs = [
  "playwright",
  "test",
  specPath
];
if (project) {
  pwArgs.push(`--project=${project}`);
}

const headed = headedFlag !== "false";
if (headed) {
  pwArgs.push("--headed");
}

const pw = spawnSync(process.platform === "win32" ? "npx.cmd" : "npx", pwArgs, {
  env: {
    ...process.env,
    BASE_URL,
    TEST_ENV: envName,
    TEST_SITE: site,
  },
  stdio: "inherit"
});

process.exit(pw.status);
