const fs = require("fs");
const { transformTokens } = require("token-transformer");

// 讀取 JSON 檔案
const rawTokens = JSON.parse(fs.readFileSync("./tokens/tokens.json", "utf-8"));

const setsToUse = Object.keys(rawTokens);

const excludes = [];

const transformerOptions = {
  expandTypography: true,
  expandShadow: false,
  expandComposition: true,
  expandBorder: false,
  preserveRawValue: false,
  throwErrorWhenNotResolved: true,
  resolveReferences: true,
};

// 轉換 tokens
const resolved = transformTokens(
  rawTokens,
  setsToUse,
  excludes,
  transformerOptions
);

fs.writeFileSync(
  "./tokens/tokens-transformed.json",
  JSON.stringify(resolved, null, 2),
  "utf-8"
);
