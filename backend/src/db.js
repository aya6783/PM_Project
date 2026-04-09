import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataDir = path.join(__dirname, '..', 'data');
if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });

const file = path.join(dataDir, 'db.json');
const adapter = new JSONFile(file);
const defaultData = { users: [], doctors: [], appointments: [] };
export const db = new Low(adapter, defaultData);

export async function initDB() {
  await db.read();
  db.data ||= structuredClone(defaultData);
  await db.write();
}

export function getNextId(collection) {
  const items = db.data[collection] || [];
  return items.length ? Math.max(...items.map((item) => Number(item.id))) + 1 : 1;
}
