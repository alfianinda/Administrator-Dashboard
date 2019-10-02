const express = require('express');
const app = express();
// console.log(app);

const bodyParser = require('body-parser');
const koneksi = require('cors');
const upload=require('express-fileupload');

const crypto = require('crypto');
const secret = 'abcdefg';

const mysql = require('mysql');
const db = mysql.createConnection({
  host:'localhost',
  port:'3306',
  user:'root',
  password:'',
  database:'webaku',
  multipleStatements: true
})
db.connect();

app.use(koneksi());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(upload());

//==========================================Category=================================================
app.get('/category', (req,res)=> {
    var sql =`SELECT * FROM category`;

    db.query(sql, (kaloError, hasil)=>{
        if (kaloError){
            throw kaloError;
        }  else {
           res.send(hasil)
       }
    }) 
})
//==========================================Postproducts=============================================
app.get('/postproducts', (req, res) =>{
    // var panggilData = `SELECT * FROM product`;
    var panggilData = `SELECT product.product_id, category.category_name, product.filegambar, product.product_name, product.product_desc, product.product_price, product.upload FROM product JOIN category ON product.category_id = category.category_id`;
  
    db.query(panggilData, (err, result)=>{
        if(err){
            throw err;
        }else{
            res.send(result);
        }
    });
})

//==========================================Postproductstambah=============================================

app.post('/postproductstambah', (req, res) => {
    var fileName= req.files.file.name;
    var productName = req.body.productname;
    var productDesc = req.body.productdesc;
    var productPrice = req.body.productprice;
    var Category = req.body.category;

    var uploadTime = (new Date ((new Date((new Date(new Date())).toISOString() )).getTime() - ((new Date()).getTimezoneOffset()*60000))).toISOString().slice(0, 19).replace('T', ' ');
    
    if (req.files){
        var fungsiFile= req.files.file;

        fungsiFile.mv("./tampunganFile/" +fileName ,(kaloError) =>{
            if(kaloError){
                throw kaloError;
            }else {
                var sql = `INSERT INTO product VALUES("${''}","${Category}", "${fileName}", "${productName}","${productDesc}","${productPrice}","${uploadTime}")`;
                db.query(sql, (kaloError, hasilnya) => {
                    if(kaloError){
                        throw kaloError;
                        }else{
                            res.send('1')
                        }                    
                });
            }
        })
    }
    //untuk menambahkan gambar kedua, ketiga, dst, di sini dikasih 'if else' --> diulang lagi dari var fungsiFile dst
    //yang di bagian backend 'update' juga dirubah, ditambah kolom filegambar2 dst...
    //di frontend admin juga dirubah/ditambah yang ada file gambarnya
    //di frontend user juga dirubah di bagian component 'Deskripsi'
 });

//==========================================Postproductsedit=============================================
/**Untuk mengambil data per baris */
app.get('/postproductsedit/:id', (req,res) => {
    /**Menyiapkan query untuk ke MySQL */
    var grabData = `SELECT * FROM product WHERE product_id = ${req.params.id}`;
    /**Mengeksekusi query dengan syntax nodeJS */
    db.query(grabData, (kaloError, hasilquery) => {
        if(kaloError) {
            /**Mengeluarkan pesan error apabila terjadi kesalahan */
            throw kaloError;
        } else {
            /**Menyiapkan hasil query untuk siap dikirim */
            res.send(hasilquery);
        }
    }) 
});

//==========================================delete=============================================
app.post('/delete', (req,res) => {
    var id=req.body.id;
    //console.log(id)
    var hapusData =`DELETE FROM product WHERE product_id=?`;
    db.query(hapusData,id, (err,hasil) =>{
        if (err){
            throw err;
        }else{
            res.send('1')
        }
    })
})

//==========================================update=============================================
app.post('/updatelo', (req, res) => {
    var id = req.body.id;
    var Category=req.body.category;
    var productName = req.body.productnameupdate;
    var productDesc =req.body.productdescupdate;
    var productPrice = req.body.productpriceupdate;
    var uploadTime = (new Date ((new Date((new Date(new Date())).toISOString() )).getTime() - ((new Date()).getTimezoneOffset()*60000))).toISOString().slice(0, 19).replace('T', ' ');

        if(req.files){
            var fileName = req.files.file.name;
            var fungsiFile = req.files.file;
            fungsiFile.mv("./tampunganFile/"+fileName, (kaloError) =>{
                if(kaloError){
                    throw kaloError;
                } else {
                        var queryUpdate = `UPDATE product SET filegambar ="${fileName}",product_name ="${productName}",product_desc="${productDesc}", 
                            product_price = "${productPrice}", upload ="${uploadTime}" WHERE product_id="${id}"`;
                        db.query(queryUpdate, (err, result) => {
                            if(err){
                                throw err; 
                            } else {
                                res.send('Update Success');
                            }
                        });
                }
            })
                } else {
                        var queryUpdate = `UPDATE product SET product_name ="${productName}",product_desc="${productDesc}", 
                            product_price = "${productPrice}", upload="${uploadTime}" WHERE product_id="${id}"`;
                        db.query(queryUpdate, (err, result) => {
                            if(err){
                                throw err;
                            } else {
                                res.send('Update Success without image !');
                            }
                        });
                    }
            });
//======================================Loginadmin==========================================
app.post('/loginadmin', (req, res) => {
    var Email =req.body.email;
    var Password =req.body.password; 

    console.log(Email)
    console.log(Password)
    var sql = `SELECT * FROM admin`;
    db.query(sql, (error, result) => {
        if(error) { 
            throw error;
        } else { 
            for(var i=0; i < result.length; i++ ){
                //variabel email yang dipost apakah sama dengan result database (var sql) baris ke i, kolom email)
                if(Email === result[i].email && Password === result[i].password){
                  console.log('Yeay, that is correct account')
                  var userID= result[i].admin_id; res.send((userID).toString());
                  break;  
                } 
                else if (i === result.length - 1) {                   
                    console.log('Your email or password is incorrect, please try again...')
                }
            }
        }
    });
});

//========================================jalankan===========================================
var port = 5000;
app.listen(port, () => {
  console.log(`Server berjalan di ${port}...`)
});