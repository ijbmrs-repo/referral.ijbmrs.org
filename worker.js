export default {
  async fetch(request) {
    const url = new URL(request.url);
    const slug = url.pathname.replace("/", "");

    const submissionURL =
      "https://docs.google.com/forms/d/e/1FAIpQLSfxw2pM90HnukCD9GOV6PZ3r6E5B0XGDAxPfrq3xdqROuSqgg/viewform";

    // HOME PAGE WITH REFERRAL LINK MAKER
    if (!slug) {
      return new Response(
        `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>IJBMRS Custom Referral Link Maker</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
    body {
      font-family: Arial, sans-serif;
      background: #f5f7fb;
      margin: 0;
      padding: 0;
    }
    .container {
      max-width: 720px;
      margin: 80px auto;
      background: #ffffff;
      padding: 40px;
      border-radius: 10px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.08);
    }
    h1 {
      color: #1a237e;
    }
    p {
      color: #333;
      line-height: 1.6;
    }
    input {
      width: 100%;
      padding: 12px;
      margin-top: 10px;
      font-size: 16px;
      border-radius: 6px;
      border: 1px solid #ccc;
    }
    button {
      margin-top: 15px;
      padding: 12px 20px;
      background: #1a237e;
      color: white;
      border: none;
      border-radius: 6px;
      font-size: 16px;
      cursor: pointer;
    }
    button:hover {
      background: #0f1854;
    }
    .result {
      margin-top: 20px;
      background: #f1f3f6;
      padding: 15px;
      border-radius: 6px;
      font-family: monospace;
      word-break: break-all;
    }
    footer {
      margin-top: 30px;
      font-size: 14px;
      color: #666;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>IJBMRS Custom Referral Link Maker</h1>

    <p>
      Enter your name below to generate your personal IJBMRS referral link.
      You may share this link with authors for manuscript submission.
    </p>

    <input
      type="text"
      id="name"
      placeholder="Enter your name (e.g. Fenil Shah)"
    />

    <button onclick="generateLink()">Generate Referral Link</button>

    <div id="output" class="result" style="display:none;"></div>

    <footer>
      © IJBMRS · No tracking · No data storage
    </footer>
  </div>

<script>
  function generateLink() {
    const name = document.getElementById("name").value.trim();
    if (!name) {
      alert("Please enter your name");
      return;
    }

    const slug = name
      .toLowerCase()
      .replace(/[^a-z0-9 ]/g, "")
      .replace(/\\s+/g, "-");

    const link = window.location.origin + "/" + slug;
    const output = document.getElementById("output");

    output.style.display = "block";
    output.innerText = link;
  }
</script>
</body>
</html>
        `,
        {
          headers: {
            "Content-Type": "text/html; charset=UTF-8",
          },
        }
      );
    }

    // REFERRAL REDIRECT
    return Response.redirect(
      `${submissionURL}?ref=${slug}`,
      302
    );
  },
};
