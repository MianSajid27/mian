import axios from "axios";
// import { getToken } from "./get-token";

let baseURL:any, token:any;

if (process && process.env.NEXT_PUBLIC_APP_ENV === 'local') {
  baseURL = process.env.NEXT_PUBLIC_LOCAL_BACKEND_BASE_URL;
  token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjA5MmE2ZmYxNWNjNWQ3MTBiNWU5MGE4YmNhY2YzZTI5NTE5ODdiNDM1Y2Q0ZTU5ZGI0OWNhNWQ0ODMzMjA0N2UzZmQ5ZmNmOWFhNDhiNDhmIn0.eyJhdWQiOiIzMiIsImp0aSI6IjA5MmE2ZmYxNWNjNWQ3MTBiNWU5MGE4YmNhY2YzZTI5NTE5ODdiNDM1Y2Q0ZTU5ZGI0OWNhNWQ0ODMzMjA0N2UzZmQ5ZmNmOWFhNDhiNDhmIiwiaWF0IjoxNjYyMDM5Njk0LCJuYmYiOjE2NjIwMzk2OTQsImV4cCI6MTY5MzU3NTY5NCwic3ViIjoiNjA5Iiwic2NvcGVzIjpbXX0.YEGU7LYddcuHnTUaLXQBczzbrejkAb3DnjnzYfrsKO2Z9ybehpKGLbuUIthW5x55ukJ1UWYeQLLmTdngUazBur5jkEVO4rop8J0rS_FRawc5KVRiZ5fmEb-wJj4aap2dwhko00Jq9egyBkFqQkkiMnDSfZp2LO3CdSkHIJ481NN-hAh9b0m7EwW1INKcW0voD98h324O86fQYdwd3JOD7A3PjdVdLdhByZFaRHbQozU2_VwCq6kWjE1w1X0zPGO-UpNX7sryiXwAxtYBitYx0V8Q6YBNU5umHHH9O7xJJmV_Ip6opHqnF1J7FEZD5GHmVeJdzlaTn9NcSrF1_luEDThYZf_hYPKYXeixnP3sjUHTeppDlN8G9dsB0hKUXLC4u3vJeUEkyPBy7pxyx5DHDmcV4GBnJTyiR4j9aYzFsACOHUZ8IvrIu-xg-N_7flTqCH4fFMQlkznwYed0FtWWthVf9d9MmxuMtH3wbVUtGCbaZd5Zdu44L99bOQJL-yuuGPiB2JmY3EWqbYb99i9lE-hJou83tW9nONupkt6YnOVgUy3Qwk-JZhNis1TTcwxTdLht-vMGHnDs-mJLTnEcRDYplTcLMnKwqtVJuH4RNaVlY_BQ9Qn1eJVWE44efSTy6DkvV6Ey8pyzw2kHN2ccB6wIzr78d3Wedwu9LZBvy58";
}
else if (process && process.env.NEXT_PUBLIC_APP_ENV === 'development') {
  baseURL = process.env.NEXT_PUBLIC_IGNITE_BACKEND_BASE_URL;
  // hard coded token of sf-dev.myignite.online
  token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjkyYzJkNGQyMWQyMzdmMTE4YzljNWQ3YWVmZGIzNTRkN2M4NmMxN2FlOTUzNjE4MTA5MThmYTliZTI2NWMwNmQ1NzVjNDVhOTMxZjE0MDMwIn0.eyJhdWQiOiIzMiIsImp0aSI6IjkyYzJkNGQyMWQyMzdmMTE4YzljNWQ3YWVmZGIzNTRkN2M4NmMxN2FlOTUzNjE4MTA5MThmYTliZTI2NWMwNmQ1NzVjNDVhOTMxZjE0MDMwIiwiaWF0IjoxNjYyMTAxMTg0LCJuYmYiOjE2NjIxMDExODQsImV4cCI6MTY5MzYzNzE4NCwic3ViIjoiNzc4Iiwic2NvcGVzIjpbXX0.REEwYNsEOrL69jTPDuR2AlSZaTi6kSdonRlpG95Yo4wIL9lkX-GkRqDl4TTs7iEAFnL80cvUTpv69q7HS9M-E61e8MLOze11EAptiVQ3Sl71U75dJuGHJsTGje6gndwqwts3MwewjD71YG690ESaLmE2X5Z2xJLMvooxo3uqpdR4NRk9k_TE0bEIi8p0rrlqgYTRHN-CP3ZU_bH2Qk_YekuVbLBOjk97qio1zf838Y5HzchFR-Xba21Rw6eWjGKnviiQc4cMV9FVDCyVfnkDevGFZInCrX3I644eToxgUWqm0iv6ISDprh_wU_enEzUhsy7f0yNresuagqveXyHPKefs2dBoZpxmjGJzSejMhBxbC9QwptdQkZlvRFjMmcg7RirapanRjXAkpzhdfnZvK7YlyAL3Ro9MkqX-KvX-dkiGzywPxfTR9cJ6PloIvxbzlkQYeEcSRI5P93IKVHy10fKP5VvxskHrUH9x1wOag84JCqGiZnSMzoPCH-Q8IXifGS4zWxr1971daVPT_YJCoFzlHtEzMj8sIk7VLrHjzj9lZgztHSH3xgT4te-ANp-v5mcq07kJvPTnvyc90juvknsVDSiD5S5oeRzFyloA5Ou5xfml6MdQDjsNl0ffRvsdKp2gGY92pNnVz9rnlbszJhs_TLRiVFw1aYmhKYxlvXQ";
}

const http = axios.create({
  baseURL,
  timeout: 30000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// Change request data/error here
http.interceptors.request.use(
  (config) => {
    // const token = getToken();
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token ? token : ""}`,
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default http;
