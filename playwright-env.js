const MAP = {
  jefmayer: {
    prod: "https://www.jefmayer.com"
  }
};

const site = process.env.npm_config_site;
const env  = process.env.npm_config_env;

if (!site) {
  console.error("Missing --site. Example: --site=jefmayer");
  process.exit(1);
}

if (!env) {
  console.error("Missing --env. Example: --env=prod");
  process.exit(1);
}

if (!MAP[site]) {
  console.error(`Unknown site '${site}'. Known sites: ${Object.keys(MAP).join(", ")}`);
  process.exit(1);
}

if (!MAP[site][env]) {
  console.error(
    `Unknown env '${env}' for site '${site}'. Known envs: ${Object.keys(MAP[site]).join(", ")}`
  );
  process.exit(1);
}

process.stdout.write(MAP[site][env]);
