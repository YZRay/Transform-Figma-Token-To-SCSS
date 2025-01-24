# Token Transformer and Builder

用來處理和轉換設計系統的 Tokens。從原始 Tokens 進行轉換、生成轉換後的 Tokens，並且構建對應的 SCSS 和 CSS 文件。

## 使用流程

1. **轉換 Tokens**
   `transform-token.cjs` 會從原始的 `tokens.json` 文件讀取 Tokens，並使用 `token-transformer` 進行轉換處理。轉換後的結果會存儲在 `tokens-transformed.json` 文件中。轉換過程會依據 `transformerOptions` 設定來處理字體、邊界、陰影等屬性。

2. **構建 SCSS 和 CSS 文件**
   `build-output.js` 會讀取 `tokens-transformed.json`，並基於該文件生成對應的 SCSS 變數和 CSS 變數，並將其保存到 `src/scss/helpers/` 目錄下。

## 使用指令

在 `package.json` 中定義了以下的 NPM 腳本：

- `npm run transform`: 這個腳本會執行兩個步驟：
    1. 轉換 `tokens.json` 文件成 `tokens-transformed.json`
    2. 生成 SCSS 和 CSS 變數

## 配置說明

### `transform-token.cjs`
這個腳本處理 Tokens 的轉換：

- 讀取原始的 `tokens.json`。
- 使用 `token-transformer` 模塊轉換 Tokens，並將轉換後的結果寫入 `tokens-transformed.json`。
- `transformerOptions` 設置控制了如何處理 Tokens，比如陰影、邊框等。

### `build-output.js`
這個腳本負責將 `tokens-transformed.json` 中的 Tokens 轉換為 SCSS 和 CSS 格式的變數文件：

- `scss/variables` 格式的檔案會儲存在 `src/scss/helpers/_token.scss`。
- `css/variables` 格式的檔案會儲存在 `src/scss/helpers/_css-token.scss`。

### `style-dictionary`
`StyleDictionary` 用 Tokens 輸出為不同的格式（例如 SCSS、CSS、JSON）。
使用了 `@tokens-studio/sd-transforms` 來處理自定義轉換過程，例如顏色的命名規則和陰影的處理。

## 結構說明

- `tokens/tokens.json`：原始的設計 Tokens 文件。
- `tokens/tokens-transformed.json`：經過轉換後的 Tokens 文件。
- `src/scss/helpers/_token.scss`：包含設計 Tokens 的 SCSS 變數。
- `src/scss/helpers/_css-token.scss`：包含設計 Tokens 的 CSS 變數。

## 依賴

- `style-dictionary` - 用於將 Tokens 輸出為各種格式。
- `@tokens-studio/sd-transforms` - 用於處理 Tokens 的自定義轉換。
- `token-transformer` - 用來轉換 Tokens 的工具。
