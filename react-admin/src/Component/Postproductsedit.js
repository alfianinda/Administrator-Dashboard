import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Header from './Header'; 
import Footer from './Footer'; 
import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies()
 
class Postproductsedit extends Component {
    state = { 
        productid:'',
        categoryupdate:'',
        productfilegambar:'',
        productnameupdate:'',
        productdescupdate:'', 
        productpriceupdate: '',
        isicategoryupdate:[]
    }
     
    //fungsi menampilkan data per id
    componentDidMount(){
        var id =this.props.location.state.productku_id;
        console.log(id)
        axios.get('http://localhost:5000/postproductsedit/'+id)
        // .then adalah untuk bersiap menerima respon dari server backend di atas
        .then((hasilAmbil)=>{
            console.log(hasilAmbil);
            this.setState({
                productid :hasilAmbil.data[0].product_id, //product_id adalah nama kolom tabel 
                categoryupdate :hasilAmbil.data[0].category_id,
                productfilegambar :hasilAmbil.data[0].filegambar,
                productnameupdate :hasilAmbil.data[0].product_name, 
                productdescupdate:hasilAmbil.data[0].product_desc,
                productpriceupdate :hasilAmbil.data[0].product_price,
            })
        });

        //fungsi menampilkan semua pilihan data kategori 
        axios.get('http://localhost:5000/category')
        .then((ambilData) => {
            this.setState({
                isicategoryupdate:ambilData.data
            })
        });
    }

    //fungsi perubahan bagian file
    onchange =(e)=>{
        switch(e.target.name){
            case'productfilegambar': 
            this.setState({
                productfilegambar:e.target.files[0],
            });
            break
        }
    }

    //fungsi perubahan bagian input data 
    value = (e) =>{
    this.setState({
        id: e.productidref.value,  //variable id yang mau disetstate/diubah valuenya, sedangkan e.id, id nya merupakan ref. 
        productnameupdate :e.productnameupdate.value,
        productdescupdate:e.productdescupdate.value,
        productpriceupdate:e.productpriceupdate.value,
        }) 
    }

    //supaya tidak terjadi pengulangan submit 2x (prevent default)
    updateData =(e) =>{
        e.preventDefault();
        let formData = new FormData();
        formData.append('id', this.state.id); //id setelah append merupakan id di backend (body.id), kalo state.id, id nya merupakan state/variabel yang udah ditentukan di atas
        formData.append('file', this.state.productfilegambar);       
        formData.append('productnameupdate', this.state.productnameupdate);
        formData.append('productdescupdate', this.state.productdescupdate);
        formData.append('productpriceupdate', this.state.productpriceupdate);
        axios.post('http://localhost:5000/updatelo', formData);
    }

    
  render() {
       //Cookies login
       if (cookies.get('adminID') === undefined)
       {
           return <Redirect to='/'/>
       }
       //akhir cookies login

    const hasil = this.state.isicategoryupdate.map((Category, index)=>{
        var urutan = index +1;
        var categoryID = Category.category_id; //categoryID adalah variabel biasa, Categori adalah parameter yang menyimpan value dari isicategory.map, category_id adalah nama kolom tabel
        var categoryName = Category.category_name;
        return <option key={index} value={categoryID}>{categoryName}</option>
    });
       
    return (
        <div className="container">
        <Header/>

        <form className="form-horizontal" onSubmit={this.updateData} encType="multipart/form-data">
            <fieldset>
                <legend>Edit Data</legend>

                <div className="form-group">
                    <label className="col-lg-2 control-label">Product ID</label>
                    <div className="col-md-1">
                        <input ref="productidref" type="text" className="form-control" value={this.state.productid} disabled/>
                    </div>
                </div> 

                <div className="form-group">
                    <label className="col-lg-2 control-label">Change The File</label>
                    <div className="col-lg-8">
                        <input name="productfilegambar" onChange={this.onchange} type="file" className="form-control" id="inputGambar" Value={this.state.productfilegambar} />
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-lg-2 control-label">Edit Product Name</label>
                    <div className="col-lg-8">
                        <input ref="productnameupdate" type="text" className="form-control" id="inputNama" Value={this.state.productnameupdate} />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="description" className="col-sm-2 control-label">Edit Product Description</label>
                    <div className="col-sm-8">
                        <input ref="productdescupdate" style={{height:250}} className="form-control" />
                    </div>
                </div>

                <div className="form-group">
                    <label  className="col-lg-2 control-label">Product Price</label>
                    <div className="col-lg-8">
                        <input ref="productpriceupdate" type="number" className="form-control" id="inputharga" Value={this.state.productpriceupdate} />
                    </div>
                </div>
 
                <div className="form-group">
                    <div className="col-lg-10 col-lg-offset-2">
                        <button type="reset" className="btn btn-default"><i className="fa fa-remove"></i> Cancel</button>
                        {/* <button type="submit" onClick={() => this.value(this.refs)} className="btn btn-primary"><i className="fa fa-paper-plane"></i> Submit</button>&nbsp; */}
                        <button type="submit" onClick={() => this.value(this.refs)} className="btn btn-success"><i className="fa fa-paper-plane"></i> Submit</button>&nbsp;
                    </div>
                </div>

            </fieldset>
        </form>
        
        <Footer/>
      </div>
    )
  }
}

export default Postproductsedit;

