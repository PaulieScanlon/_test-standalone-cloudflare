import { Mastra } from "@mastra/core/mastra";
// import { PinoLogger } from "@mastra/loggers";
import { weatherWorkflow } from "./workflows/weather-workflow";
import { weatherAgent } from "./agents/weather-agent";
import { CloudflareDeployer } from "@mastra/deployer-cloudflare";

export const mastra = new Mastra({
  workflows: { weatherWorkflow },
  agents: { weatherAgent },
  // logger: new PinoLogger({
  //   name: "Mastra",
  //   level: "info"
  // }),
  deployer: new CloudflareDeployer({
    projectName: "test-standalone-cloudflare",
    scope: "a38ed3b8625e5f1e0b41e2c1c5aab2ff", // from the browsers address bar
    auth: {
      apiToken: process.env.CLOUDFLARE_API_TOKEN!,
      apiEmail: "pauliescanlon@gmail.com"
    }
  })
});
