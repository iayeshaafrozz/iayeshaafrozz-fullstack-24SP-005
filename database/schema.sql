create table products (
  id serial primary key,
  name text not null,
  price numeric not null
);

insert into products (name, price) values
  ('Laptop', 85000),
  ('Mouse', 1500),
  ('Keyboard', 3500);
