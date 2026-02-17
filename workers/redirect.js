export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const slug = url.pathname.replace(/^\/+|\/+$/g, "");

    // Root path → landing page
    if (!slug) {
      return fetch(request);
    }

    // Fetch referral mappings (SAFE: no recursion)
    const origin = new URL(request.url).origin;
    const response = await fetch(`${origin}/data/links.json`);
    const links = await response.json();

    // Invalid or inactive referral
    if (!links[slug] || links[slug].active !== true) {
      return new Response("Invalid or inactive referral link.", {
        status: 404,
        headers: { "Content-Type": "text/plain" }
      });
    }

    // Log click
    const logEntry = {
      referrer_slug: slug,
      referrer_name: links[slug].name,
      destination: links[slug].destination,
      timestamp: new Date().toISOString()
    };

    await env.CLICKS.put(
      crypto.randomUUID(),
      JSON.stringify(logEntry)
    );

    // Redirect
    return Response.redirect(links[slug].destination, 302);
  }
};
