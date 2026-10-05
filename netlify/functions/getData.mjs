import { getDatabase } from "@netlify/database";

export default async (req) => {
  try {
    const db = getDatabase();

    if (req.method === "POST") {
      const { name, price } = await req.json();
      if (!name || price === "" || price === undefined || isNaN(Number(price))) {
        return Response.json(
          { error: "Name and a valid price are required" },
          { status: 400 }
        );
      }
      await db.sql`INSERT INTO products (name, price) VALUES (${name}, ${Number(price)})`;
    }

    const rows = await db.sql`SELECT * FROM products ORDER BY id`;
    return Response.json(rows);
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
};
