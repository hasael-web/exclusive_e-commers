const __TEST__ = process.env.NODE_ENV === "test";
const __DEV__ = process.env.NODE_ENV === "development";
const __PROD__ = process.env.NODE_ENV === "production";
const __IS_BROWSER__ = typeof window !== "undefined";

export { __DEV__, __IS_BROWSER__, __PROD__, __TEST__ };
