import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
// import { connect } from 'react-redux';
import Cookies from 'universal-cookie';
import './../style/gayaku.css';
import Header from './Header';
import Footer from './Footer';

const cookies = new Cookies()

class Postproductstambah extends Component {

    state= {
        filegambar:'',
        productname:'',
        productdesc:'',
        productprice:'',
        isicategoryupdate: [],
        category:'',
        hasil:true
    }

    //menampilkan pilihan kategori
    componentDidMount() {
        axios.get('http://localhost:5000/category')
        .then((ambilData) => {
            console.log(ambilData)
            this.setState({
                isicategoryupdate:ambilData.data,                
            })
        })
        
    }

    //fungsi perubahan bagian file
    onchange =(e) => {
        switch(e.target.name){
            case'productfilegambar':
            this.setState({
                filegambar:e.target.files[0],
            });
            break;
        }
    }

    //fungsi perubahan bagian input data 
    value =(e) => {
        this.setState({
            productname:e.productnameupdate.value, //variable productname yang mau disetstate/diubah valuenya, sedangkan e.productnameupdate, productnameupdate nya merupakan ref. 
            productdesc:e.productdescupdate.value,
            productprice:e.productpriceupdate.value,
            category:this.category.value
        })
    }

    //supaya tidak terjadi pengulangan submit 2x (prevent default)
    tambahData = (e) =>{
        e.preventDefault();
        let formData = new FormData();
        formData.append('file',this.state.filegambar); //file setelah append merupakan file di backend (body.file), kalo state.filegambar, filegambar nya merupakan state/variabel yang udah ditentukan di atas
        formData.append('productname',this.state.productname);
        formData.append('productdesc',this.state.productdesc);
        formData.append('productprice',this.state.productprice);       
        formData.append('category',this.state.category);
        axios.post('http://localhost:5000/postproductstambah/', formData)
        .then((ambilData)=>{
            var notife = ambilData.data
            if(notife==1){
                alert("the data have been successfully added")
            }
        })
    }

  render() {
      //login cookies
      if (cookies.get('adminID') === undefined)
      {
          return <Redirect to='/' />
      }

      //berikut tidak ada hubungan dengan fungsi login di atas

    const hasil = this.state.isicategoryupdate.map((Category, index)=>{
        var urutan = index +1;
        var categoryID = Category.category_id; //categoryID adalah variabel biasa, productcategori adalah parameter yang menyimpan value dari isicategory.map, category_id adalah nama kolom tabel
        var category_name = Category.category_name;
        return <option key={index} value={categoryID}>{category_name}</option>
    })

    return (
      <div className="container">
      <Header/>

        <form className="form-horizontal" onSubmit={this.tambahData} encType="multipart/form-data">
            <fieldset>
                <legend>Tambah Data</legend>

                <input type="hidden" className="form-control" ref="idproduct" /> 
                
                <div className="form-group">
                    <label className="col-lg-2 control-label">Add Category</label>
                    <div className="col-lg-8">
                        <select ref={select=>this.category=select} name="category" className="form-control" >
                            {hasil}
                        </select>
                    </div>
                </div>

                <div className="form-group" >
                    <label className="col-lg-2 control-label">Add File</label>
                    <div className="col-lg-8">
                        <input name="productfilegambar" onChange={this.onchange} type="file" className="form-control" id="inputGambar" />
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-lg-2 control-label">Add Product Name</label>
                    <div className="col-lg-8">
                        <input ref="productnameupdate" type="text" className="form-control" id="inputNama" />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="description" className="col-sm-2 control-label">Add Product Description</label>
                    <div className="col-sm-8">
                        <textarea ref="productdescupdate" style={{height:250}} className="form-control" />
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-lg-2 control-label">Product Price</label>
                    <div className="col-lg-8">
                        <input ref="productpriceupdate" type="number" className="form-control" id="inputHarga" />
                    </div>
                </div>

                 
                <div className="form-group">
                    <div className="col-lg-10 col-lg-offset-2">
                        <button type="reset" className="btn btn-default">Cancel</button>&nbsp;
                        <button type="submit" onClick={() => this.value(this.refs)} className="btn btn-primary">Submit</button>
                    </div>
                </div>

            </fieldset>
        </form>
        <Footer/>
      </div>
    )
  }
}
export default Postproductstambah
