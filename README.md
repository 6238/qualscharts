# FRC Lap Charts

Qualification ranking progression charts for FRC events, powered by [The Blue Alliance](https://www.thebluealliance.com/).

Charts show each team's rank after every qualification match — analagous to the lap charts used in motorsport timing & scoring.

## Usage

Navigate to the root to enter an event key, or link directly to a chart:

```
https://lapcharts.popcornpenguins.com/?event=2026cancmp
```

## Running locally

```bash
npm install
TBA_API_KEY=your_key_here npm start
```

Then open http://localhost:3000.

For development with auto-restart on file changes:

```bash
TBA_API_KEY=your_key_here npm run dev
```

## Deploying to Railway

1. Push this repo to GitHub.
2. In Railway, create a new project → **Deploy from GitHub repo**.
3. Add an environment variable: `TBA_API_KEY` = your TBA API key.
4. Railway will detect Node.js automatically and run `npm start`.
5. Add your custom domain (`lapcharts.popcornpenguins.com`) in Railway's Settings → Networking.

## How ranking is calculated

After each qualification match, all teams are ranked by their **average ranking points (RP) per match played** at that point in the event. Teams that have not yet played any matches are shown below all teams that have. This matches the FRC ranking methodology.

Tiebreaking within equal average RP is not currently applied (FRC tiebreakers require additional match score fields). For the purposes of the chart the order of tied teams is stable but arbitrary.
