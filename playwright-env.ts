const MAP = {
  jefmayer: {
    prod: "https://www.jefmayer.com"
  }
};

const siteConfigVar = process.env.npm_config_site;
const envConfigVar  = process.env.npm_config_env || process.env.TEST_ENV || 'uat';

if (!siteConfigVar) {
  console.error("Missing --site. Example: --site=jefmayer");
  process.exit(1);
}

if (!envConfigVar) {
  console.error("Missing --env. Example: --env=prod");
  process.exit(1);
}

if (!MAP[siteConfigVar]) {
  console.error(`Unknown site '${siteConfigVar}'. Known sites: ${Object.keys(MAP).join(", ")}`);
  process.exit(1);
}

if (!MAP[siteConfigVar][envConfigVar]) {
  console.error(
    `Unknown env '${envConfigVar}' for site '${siteConfigVar}'. Known envs: ${Object.keys(MAP[siteConfigVar]).join(", ")}`
  );
  process.exit(1);
}

process.stdout.write(MAP[siteConfigVar][envConfigVar]);
