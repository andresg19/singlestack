CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    fullname VARCHAR(100),
    email TEXT
);

INSERT INTO users (fullname, email) VALUES
('joe', 'joe@gmail.com');
