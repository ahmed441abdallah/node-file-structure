import { query } from "../../../database/dbConnections.js"
export const getAllProducts = (req, res) => {
    query.execute('select * from products', (err, result) => {
        if (err) {
            return res.status(400).json({ message: err.message })
        }
        else {
            return res.status(200).json({ message: "success", data: result })
        }
    })

}
export const addProduct = (req, res) => {
    const { name, price, descriptions } = req.body;
    query.execute(`insert into products (name,price,descriptions) values ('${name}','${price}','${descriptions}')`, (err, result) => {
        if (err) {
            return res.status(400).json({ message: err.message })
        }
        else {
            return res.status(200).json({ message: 'success' })
        }
    })
}
export const getProductById = (req, res) => {
    const { id } = req.params;
    query.execute(`select * from products where id = ${id}`, (err, result) => {
        if (err) {
            return res.status(400).json({ message: err.message })
        }
        else {
            return res.status(200).json({ data: result })
        }
    })

}
export const deleteProduct = (req, res) => {
    const { id } = req.body;
    query.execute(`delete from products where id=${id}`, (err, data) => {
        if (err) {
            return res.status(400).json({ message: err.message })
        }
        else {
            return res.status(200).json({ message: 'success' })
        }
    })

}
export const updateProduct = (req, res) => {
    const { id, name, price, descriptions } = req.body;
    query.execute(`update products set name='${name}',price='${price}',descriptions='${descriptions}' where id=${id}`, (err, result) => {
        if (err) {
            return res.status(400).json({ message: err.message })
        }
        else {
            return res.status(200).json({ message: 'Product updated successfully' })
        }
    })
}