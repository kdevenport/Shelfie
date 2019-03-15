CREATE TABLE IF NOT EXISTS products(
    product_id SERIAL PRIMARY KEY,
    name VARCHAR(25),
    price INTEGER,
    image_url TEXT
);