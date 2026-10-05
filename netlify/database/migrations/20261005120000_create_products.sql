CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  price NUMERIC NOT NULL
);

INSERT INTO products (name, price) VALUES
  ('Laptop', 85000),
  ('Mouse', 1500),
  ('Keyboard', 3500);
