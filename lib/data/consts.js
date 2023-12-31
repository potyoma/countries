import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export const DATA_FILE_PATH = path.resolve(
  __dirname,
  "..",
  "..",
  "sources",
  "data.json"
);

export const FIELDS = ["name", "capital", "region", "population", "flags"];
export const BASE_URL = "https://restcountries.com/v3.1/";
export const FULL_FIELDS = FIELDS.concat([
  "nativeName",
  "subregion",
  "tld",
  "languages",
  "borders",
  "currencies",
]);
