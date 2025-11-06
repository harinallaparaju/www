import type { APIRoute } from "astro";

const DEFAULT_BACKEND = import.meta.env.PUBLIC_BASE_URL || "http://localhost:4321";

/**
 * Returns { result: "<country, city or fallback>" }
 * This is intentionally tolerant: if the upstream service is unreachable,
 * we return a friendly fallback instead of crashing.
 */
export const get: APIRoute = async ({ request }) => {
  try {
    // If you used a different path earlier, place it in PUBLIC_BASE_URL (e.g. https://example.com)
    const base = DEFAULT_BACKEND.replace(/\/$/, "");
    // Example endpoint path - your existing backend might be different.
    // We'll call `${base}/get/visitor` safely.
    const url = `${base}/get/visitor`;

    // Timeout wrapper 3s
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), 3000);

    const res = await fetch(url, { signal: controller.signal }).finally(() => clearTimeout(id));
    if (!res.ok) {
      // upstream failed; return fallback
      return new Response(JSON.stringify({ result: "Unknown" }), { status: 200 });
    }

    const json = await res.json().catch(() => ({ result: "Unknown" }));
    const result = json?.result || json?.location || "Unknown";

    return new Response(JSON.stringify({ result }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    // Never throw to the renderer; return safe fallback
    return new Response(JSON.stringify({ result: "Unknown" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }
};
