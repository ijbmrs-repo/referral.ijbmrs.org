export default {
  async fetch(request) {
    const url = new URL(request.url);
    const slug = url.pathname.replace("/", "");

    // Base submission URL
    const submissionURL = "https://docs.google.com/forms/d/e/1FAIpQLSfxw2pM90HnukCD9GOV6PZ3r6E5B0XGDAxPfrq3xdqROuSqgg/viewform";

    // Root URL message
    if (!slug) {
      return new Response("IJBMRS Referral System is Live", {
        status: 200,
        headers: { "Content-Type": "text/plain" },
      });
    }

    // Redirect with referral parameter
    return Response.redirect(
      `${submissionURL}?ref=${slug}`,
      302
    );
  },
};
