import { createApi } from "unsplash-js";

const UNSPLASH_ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

const unsplash = createApi({
  accessKey: UNSPLASH_ACCESS_KEY,
});

export default unsplash;
