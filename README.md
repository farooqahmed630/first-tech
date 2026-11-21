# TechPulse — MERN Stack

TechPulse is a tech / AI tools blog based on the uploaded homepage design: dark navy/purple theme, hero "Technology aur AI Tools", Popular AI Tools, Latest Tech Blogs, Why Choose TechPulse, Testimonials, Newsletter and Footer.

**First tech in the design:** ChatGPT — first in "Most Popular AI Tools", 4.9 rating (2M+).

## Stack (MERN)
- **MongoDB** — Mongoose models: Tool, Blog, Testimonial, Subscriber
- **Express** — REST API in `server/`
- **React** — Vite app in `client/`
- **Node.js** — server runtime

## Project structure
```
techpulse/
  assets/            # original generated webp assets
  client/            # Vite + React frontend
    public/assets/   # hero-robot.webp, why-choose-laptop.webp, blog-thumbnails.webp, testimonial-avatars.webp
    src/components/  # Header, Hero, Features, PopularTools, LatestBlogs, WhyChoose, Testimonials, Newsletter, Footer
    src/data/seed.js # fallback seed data (site renders without backend)
  server/            # Express + Mongoose API
    models/          # Tool.js, Blog.js, Testimonial.js, Subscriber.js
    routes/api.js    # /api/tools /api/blogs /api/testimonials /api/newsletter
    data/seedData.js # exactly the design data
    server.js
  vercel.json
```

## Run locally
```bash
# 1. Install
npm run install:all

# 2. Backend (optional — frontend works without it via seed fallback)
cp server/.env.example server/.env   # fill in MONGODB_URI
npm run dev:server                   # http://localhost:5000/api/health
npm --prefix server run seed         # optional: seed MongoDB

# 3. Frontend
npm run dev:client                   # http://localhost:5173
```

The API returns seed data if MongoDB is not connected, so the demo always works.

## API
- `GET /api/tools`
- `GET /api/blogs`
- `GET /api/testimonials`
- `POST /api/newsletter` — `{ "email": "you@example.com" }`
- `GET /api/health`

## GitHub
Suggested repo name: **first-tech**
```bash
git init
git add .
git commit -m "TechPulse MERN - initial commit"
# Create a repo named first-tech on github.com, then:
git remote add origin https://github.com/<your-username>/first-tech.git
git branch -M main
git push -u origin main
```

## Vercel deployment
1. Push the repo to GitHub (above).
2. Go to vercel.com → Add New → Project → Import your `first-tech` GitHub repo.
3. Vercel reads `vercel.json`: build = `npm --prefix client install && npm --prefix client run build`, output = `client/dist`, framework = Vite.
4. (Optional, for a live backend) Deploy `server/` separately (Render/Railway/Vercel serverless) and set `MONGODB_URI` there; set the frontend API base if you split deployments.
5. Deploy — Vercel gives you a live URL like `https://first-tech.vercel.app`.

> Note: GitHub username `farooqahmed630it` returned 404 via web and the GitHub API on 2026-11-21, so the repo could not be created under that exact name yet. Confirm the correct username / sign in to GitHub, then follow the steps above.
