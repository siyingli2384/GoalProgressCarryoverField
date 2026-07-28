const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

export function saveProgress(payload, options = {}) {
  const body = JSON.stringify(payload);
  const url = `${API_BASE_URL}/api/progress`;

  if (options.useBeacon && navigator.sendBeacon) {
    return navigator.sendBeacon(
      url,
      new Blob([body], { type: "application/json" })
    );
  }

  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body,
    keepalive: Boolean(options.keepalive),
  });
}
