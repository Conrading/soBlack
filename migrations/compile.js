const solc = require("solc");
const path = require("path");
const fs = require("fs-extra");

const buildPath = path.resolve(__dirname, "../build");
fs.removeSync(buildPath);

const testPath = path.resolve(__dirname, "../contracts", "test_ein.sol");
const source = fs.readFileSync(testPath, "utf8");
const output = solc.compile(source, 1).contracts[":test_ein"];

fs.ensureDirSync(buildPath);
fs.outputJsonSync(path.resolve(buildPath, "test_ein.json"), output);