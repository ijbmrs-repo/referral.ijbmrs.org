export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const slug = url.pathname.replace(/^\/+|\/+$/g, "");

    // If no slug, show landing page
    if (!slug) {
      return Response.redirect("https://referral.ijbmrs.org/", 302);
    }

    // Fetch referral mappings
    const response = await fetch(env.LINKS_JSON);
    const links = await response.json();

    // Invalid or inactive referral
    if (!links[slug] || links[slug].active !== true) {
      return new Response("Invalid or inactive referral link.", {
        status: 404,
        headers: { "Content-Type": "text/plain" }
      });
    }

    // Create click log
    const logEntry = {
      referrer_slug: slug,
      referrer_name: links[slug].name,
      destination: links[slug].destination,
      timestamp: new Date().toISOString()
    };

    // Store log (Cloudflare KV)
    await env.CLICKS.put(
      crypto.randomUUID(),
      JSON.stringify(logEntry)
    );

    // Redirect user
    return Response.redirect(links[slug].destination, 302);
  }
};
