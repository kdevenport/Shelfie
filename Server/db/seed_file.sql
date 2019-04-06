CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(25),
    price INTEGER,
    image_url TEXT
);