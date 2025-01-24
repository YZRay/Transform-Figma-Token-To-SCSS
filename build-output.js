import { register } from "@tokens-studio/sd-transforms";
import StyleDictionary from "style-dictionary";

// will register them on StyleDictionary object
// that is installed as a dependency of this package.
register(StyleDictionary);

const sd = new StyleDictionary({
  // make sure to have source match your token files!
  // be careful about accidentally matching your package.json or similar files that are not tokens
  source: ["./tokens/tokens-transformed.json"],
  preprocessors: ["tokens-studio"], // <-- since 0.16.0 this must be explicit
  platforms: {
    scss: {
      transformGroup: "tokens-studio", // <-- apply the tokens-studio transformGroup to apply all transforms
      transforms: ["name/kebab", "ts/opacity", "ts/shadow/innerShadow"], // <-- add a token name transform for generating token names, default is camel
      buildPath: "src/scss/helpers/",
      files: [
        {
          destination: "_token.scss",
          format: "scss/variables",
        },
        {
          destination: "_css-token.scss",
          format: "css/variables",
        },
      ],
    },
  },
});

await sd.cleanAllPlatforms();
await sd.buildAllPlatforms();
