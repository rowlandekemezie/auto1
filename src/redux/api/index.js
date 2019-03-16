export function apiCall(url, method = "GET") {
  return fetch(url, { method }).then(response => {
    if (!response.ok) throw response;
    return response.json();
  });
}
