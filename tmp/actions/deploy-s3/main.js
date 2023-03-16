const core = require("@actions/core");
const github = require("@actions/github");
const exec = require("@actions/exec");

function run() {
  const bucket = core.getInput("bucket", { required: true });
  const bucketRegion = core.getInput("bucket-region", { required: true });
  const distFolder = core.getInput("dist-folder", { required: true });

  core.notice(`bucket: ${bucket}`);
  core.notice(`bucketRegion: ${bucketRegion}`);
  core.notice(`distFolder: ${distFolder}`);

  const websiteUrl = "https://aws.amazon.com/";
  core.setOutput("website-url", websiteUrl);
}

run();
