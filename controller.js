'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function (req, res) {
    response.ok("Aplikasi REST API ku berjalan!", res)
};

//menampilkan semua data toko
exports.tampilsemuatoko = function (req, res) {
    connection.query('SELECT * FROM toko', function (error, rows, fileds) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res)
        }
    });
};

//menampilkan semua data toko berdasarkan id
exports.tampilberdasarkanid = function (req, res) {
    let id = req.params.id;
    connection.query('SELECT * FROM toko WHERE id_toko = ?', [id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok(rows, res);
            }
        });
};

//menambahkan data toko
exports.tambahToko = function (req, res) {
    var nama_toko = req.body.nama_toko;
    var alamat = req.body.alamat;
    var kategori = req.body.kategori;

    connection.query('INSERT INTO toko (nama_toko, alamat, kategori) VALUES(?,?,?)',
        [nama_toko, alamat, kategori],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Menambahkan Data!", res)
            }
        });
};