import express from "express";
import { createServer } from "http";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3000;
const TBA_KEY = process.env.TBA_API_KEY;
const TBA_BASE = "https://www.thebluealliance.com/api/v3";

if (!TBA_KEY) {
  console.error("ERROR: TBA_API_KEY environment variable is not set.");
  process.exit(1);
}

// Serve frontend
app.use(express.static(join(__dirname, "public")));

// TBA proxy — /api/tba/<path> → TBA API
app.get("/api/tba/*", async (req, res) => {
  const tbPath = req.params[0];
  const query  = new URLSearchParams(req.query).toString();
  const url    = `${TBA_BASE}/${tbPath}${query ? "?" + query : ""}`;

  try {
    const upstream = await fetch(url, {
      headers: { "X-TBA-Auth-Key": TBA_KEY }
    });
    const body = await upstream.text();
    res.status(upstream.status)
       .set("Content-Type", "application/json")
       .send(body);
  } catch (err) {
    console.error("TBA proxy error:", err);
    res.status(502).json({ error: "Failed to reach The Blue Alliance API" });
  }
});

app.listen(PORT, () => {
  console.log(`Lap charts running on port ${PORT}`);
});
