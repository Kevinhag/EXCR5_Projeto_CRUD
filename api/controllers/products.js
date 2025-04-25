import { db } from "../db.js";

export const getProducts = (req, res) => {
  const q = "SELECT * FROM product";
  db.query(q, (err, data) =>
    err ? res.status(500).json(err) : res.status(200).json(data)
  );
};

export const insertProduct = (req, res) => {
  const {
    name,
    brand,
    price,
    stock,
    description,
    rating,
    is_new,
    on_sale,
    part_type,
    manufacturer,
    product_line,
    model
  } = req.body;

  const q = `
    INSERT INTO product 
      (name, brand, price, stock, description, rating, is_new, on_sale, part_type, date_added, manufacturer, product_line, model)
    VALUES 
      (?, ?, ?, ?, ?, ?, ?, ?, ?, NOW(), ?, ?, ?)
  `;
  const values = [ name, brand, price, stock, description, rating, is_new, on_sale, part_type, manufacturer, product_line, model ];

  db.query(q, values, (err, result) =>
    err ? res.status(500).json(err) : res.status(201).json({ id: result.insertId })
  );
};

export const deleteProduct = (req, res) => {
  const { id } = req.params;
  const q = "DELETE FROM product WHERE id = ?";
  db.query(q, [id], (err, result) =>
    err ? res.status(500).json(err) : res.status(200).json({ affectedRows: result.affectedRows })
  );
};

export const updateProduct = (req, res) => {
  const { id } = req.params;
  const {
    name,
    brand,
    price,
    stock,
    description,
    rating,
    is_new,
    on_sale,
    part_type,
    manufacturer,
    product_line,
    model
  } = req.body;

  const q = `
    UPDATE product
    SET
      name        = ?,
      brand       = ?,
      price       = ?,
      stock       = ?,
      description = ?,
      rating      = ?,
      is_new      = ?,
      on_sale     = ?,
      part_type   = ?,
      manufacturer= ?,
      product_line= ?,
      model       = ?
    WHERE id = ?
  `;
  const values = [ name, brand, price, stock, description, rating, is_new, on_sale, part_type, manufacturer, product_line, model, id ];

  db.query(q, values, (err, result) =>
    err ? res.status(500).json(err) : res.status(200).json({ changedRows: result.changedRows })
  );
};
