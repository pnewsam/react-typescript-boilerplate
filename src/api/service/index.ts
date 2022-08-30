type Options = {
  method: string; // ie. GET or POST
};

export const get = (url: string, options?: Options) =>
  fetch(url, { ...options, method: "GET" })
    .then((response) => response.json())
    .then((data) => data);

export const post = (url: string, options?: Options) =>
  fetch(url, { ...options, method: "POST" })
    .then((response) => response.json())
    .then((data) => data);
