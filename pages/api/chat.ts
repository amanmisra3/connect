import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const fileName = path.join(__dirname, "../../utils/chatMsgs.json");
const fileData = JSON.parse(fs.readFileSync(fileName).toString());

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).send(fileData);
  return new Response(fileData, {
    status: 200,
    headers: {
      "content-type": "application/json",
      "cache-control": "public, s-maxage=1, stale-while-revalidate=1",
    },
  });
}
