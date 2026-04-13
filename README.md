# Cheltenham Half Marathon Training App

A personal PWA training tracker for Cheltenham Half Marathon 2026.  
Target: **sub-1:25:00** · Built for iPhone home screen.

---

## 🚀 Deploy to Vercel (5 minutes)

### Step 1 — Push to GitHub
1. Go to [github.com/new](https://github.com/new)
2. Create a new repo called `cheltenham-hm`
3. Upload all files in this folder (drag and drop the files into the GitHub web UI)
4. Click **Commit changes**

### Step 2 — Deploy on Vercel
1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **Add New Project**
3. Select your `cheltenham-hm` repo
4. Click **Deploy** — no settings needed, it's a static site

Vercel gives you a URL like `cheltenham-hm.vercel.app` — that's your app!

### Step 3 — Add to iPhone Home Screen
1. Open your Vercel URL in **Safari** on your iPhone
2. Tap the **Share** button (box with arrow at bottom)
3. Scroll down and tap **Add to Home Screen**
4. Tap **Add**

The app icon appears on your home screen and opens full-screen like a native app. ✅

---

## Features

- **Plan** — 12-week training schedule with tick-off and time logging
- **PBs** — Personal best tracker with auto pace calculation
- **Progress** — Visual weekly completion bars
- **Routes** — Upload GPX/FIT/TCX files, send to Garmin
- **Connect** — Links to Strava and Garmin Connect
- **Coach** — AI running coach powered by Claude
- **Customize** — Ask AI to update the app, change settings, export data

---

## Strava / Garmin full integration (optional)

For automatic run syncing, you'll need API keys:

1. **Strava**: Create an app at [strava.com/settings/api](https://strava.com/settings/api)
2. **Garmin**: Apply at [developer.garmin.com](https://developer.garmin.com)

Then add a `vercel.json` with environment variables and a small API route in `/api/`.  
This is optional — the app works great without it using the manual Strava/Garmin links.

---

## Local development

Just open `index.html` in a browser. No build step needed.
