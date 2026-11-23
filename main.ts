// One office joke: standing desk, no chair, wellness program.
import { mkdir, writeFile } from "node:fs/promises";

const joke = "I asked for a standing desk, so they took my chair and called it a wellness program.";

if (joke.length >= 200) throw new Error("joke must be under 200 characters");

await mkdir("/output", { recursive: true });
await writeFile("/output/entry.txt", joke, "utf8");
