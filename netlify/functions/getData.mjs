import { getDatabase } from "@netlify/database";

export default async () => {
  try {
    const db = getDatabase();
    const rows = await db.sql`SELECT * FROM products ORDER BY id`;
    return Response.json(rows);
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
};
