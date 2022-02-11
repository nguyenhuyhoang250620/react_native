'use strict'

const util = require('util')
const mysql = require('mysql')
const db = require('./../db')

const table = 'products'

module.exports = {
    get: (req, res) => {
        let start = (req.params.page-1)*2;
        var query = 'SELECT COUNT(*) as total FROM products'
        db.query(query, function(err, rows, fields) {
            if (err) throw err;
            let total = Math.ceil(rows[0].total/2);
            let sql = 'SELECT * FROM products LIMIT '+start+',2';
            db.query(sql, (err, response) => {
                if (err) throw err
                res.json({response,total})
            })
        });
        
    },
    detail: (req, res) => {
        let sql = 'SELECT * FROM products WHERE id = ?'
        db.query(sql, [req.params.productId], (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },
    update: (req, res) => {
        let data = req.body;
        let productId = req.params.productId;
        let sql = 'UPDATE products SET ? WHERE id = ?'
        db.query(sql, [data, productId], (err, response) => {
            if (err) throw err
            res.json({message: 'Update success!'})
        })
    },
    store: (req, res) => {
        let data = req.body;
        let sql = 'INSERT INTO products SET ?'
        db.query(sql, [data], (err, response) => {
            if (err) throw err
            res.json({message: 'Insert success!'})
        })
    },
    delete: (req, res) => {
        let sql = 'DELETE FROM products WHERE id = ?'
        db.query(sql, [req.params.productId], (err, response) => {
            if (err) throw err
            res.json({message: 'Delete success!'})
        })
    }
}