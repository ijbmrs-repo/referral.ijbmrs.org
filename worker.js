export default {
  async fetch(request) {
    const url = new URL(request.url);
    const slug = url.pathname.replace("/", "");

    // Base submission URL
    const submissionURL = "https://www.ijbmrs.org/submit-paper";

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
