const MAP = {
  jefmayer: {
    test: "http://localhost:5000",
    prod: "https://www.jefmayer.com"
  },
  playwright: {
    prod: "https://playwright.dev"
  }
};

const testEnv  = process.env.TEST_ENV;
const testSite = process.env.TEST_SITE;

if (!testSite) {
  console.error("Missing --site. Example: --site=jefmayer");
  process.exit(1);
}

if (!testEnv) {
  console.error("Missing --env. Example: --env=prod");
  process.exit(1);
}

if (!MAP[testSite]) {
  console.error(`Unknown site '${testSite}'. Known sites: ${Object.keys(MAP).join(", ")}`);
  process.exit(1);
}

if (!MAP[testSite][testEnv]) {
  console.error(
    `Unknown env '${testEnv}' for site '${testSite}'. Known envs: ${Object.keys(MAP[testSite]).join(", ")}`
  );
  process.exit(1);
}

process.stdout.write(MAP[testSite][testEnv]);
