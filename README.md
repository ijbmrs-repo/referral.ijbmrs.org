# IJBMRS Referral System

This is a lightweight referral redirect system for IJBMRS.

## How it works
- Each referral link follows this format:
  https://referral.ijbmrs.org/{name}

- Example:
  https://referral.ijbmrs.org/fenil-shah

- The system redirects users to:
  https://www.ijbmrs.org/submit-paper?ref=fenil-shah

## Features
- No tracking
- No cookies
- No database
- No logs
- Serverless (Cloudflare Workers)

## Status
Stable & production-ready
