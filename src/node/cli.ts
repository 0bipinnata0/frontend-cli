// import libs from "@tom/frontend-lib";

import * as libs from "@tom/frontend-lib";

const version = require("../../package.json").version;

/*
tom-test init

tom-test init --key value

tom-test --version


> throw error
tom-test


*/
const options = process.argv.slice(2);
const input = options[0];
if (input === "init") {
  const [key, value] = options.slice(1);
  if (key && value) {
    console.info(libs);
    libs[input]({ key: key.replace(/--*/g, ""), value });
  } else {
    libs[input]();
  }
} else if (["version", "V"].includes(input.replace(/--|-*/g, ""))) {
  console.info(`当前版本是${version}`);
} else {
  console.info("不支持的参数");
}

