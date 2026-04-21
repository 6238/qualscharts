# FRC Lap Charts

Qualification ranking progression charts for FRC events, powered by [The Blue Alliance](https://www.thebluealliance.com/).

Charts show each team's rank after every qualification match — analagous to the lap charts used in motorsport timing & scoring.

## Usage

Navigate to the root to enter an event key, or link directly to a chart:

```
https://qualscharts.popcornpenguins.com/?event=2026cancmp
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

## How ranking is calculated

After each qualification match, all teams are ranked by their **average ranking points (RP) per match played** at that point in the event. Teams that have not yet played any matches are shown below all teams that have. This matches the FRC ranking methodology.

Tiebreaking within equal average RP is only correct for 2026. For other years, it uses only ranking points and total points.

