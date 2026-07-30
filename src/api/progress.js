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

export async function startSession(prolificId, nickname) {
  const response = await fetch(`${API_BASE_URL}/api/session`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ prolificId, nickname }),
  });

  if (!response.ok) {
    throw new Error("Could not start participant session");
  }

  return response.json();
}
