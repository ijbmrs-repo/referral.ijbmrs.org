# referral.ijbmrs.org

A lightweight referral redirection and tracking system for IJBMRS.

---

## Purpose

`referral.ijbmrs.org` is designed to create named referral links that:
- Track referral traffic
- Record timestamped clicks
- Redirect users to official IJBMRS portals

The system is intentionally simple, transparent, and auditable.

---

## How It Works

- Each referrer is assigned a unique URL slug  
  Example:  
  https://referral.ijbmrs.org/fenil-shah

- When the link is clicked:
  1. The referral slug is detected
  2. A timestamped click record is created
  3. The user is redirected to a predefined official destination

---

## What This System Does NOT Do

- It does not influence editorial decisions
- It does not affect peer review
- It does not guarantee publication
- It does not collect personal data from visitors

---

## Governance & Ethics

Referral tracking is used solely for engagement analytics and institutional reporting.

All manuscripts, applications, and submissions follow the same independent editorial and review procedures, regardless of referral source.

---

## Technology Stack

- GitHub (version control)
- Cloudflare Pages / Workers (hosting & redirects)
- Custom domain: referral.ijbmrs.org

---

## Status

🚧 Initial setup in progress  
This repository is under active development.
