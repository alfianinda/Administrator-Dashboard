import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
// import { connect } from 'react-redux';
import Cookies from 'universal-cookie';
import './../style/gayaku.css';
import Header from './Header';
import Footer from './Footer';

const cookies = new Cookies()

class Postproducts extends Component {
    state = {
        dataProduk: [], 
    }

    //fungsi menampilkan data
    componentDidMount =() => {
        axios.get('http://localhost:5000/postproducts')        
            .then((ambilData) =>{
                console.log(ambilData.data);
                this.setState({
                    dataProduk:ambilData.data
                });
            })
    }

    //fungsi untuk menghapus data dan diupdate kembali
    hapus =(e) =>{
        // console.log(e)
        axios.post('http://localhost:5000/delete',{
        id : e
        }).then((response)=>{
            var dataTerima=response.data
            if (dataTerima==1){
                alert("The data have been deleted..")
            }
        });
        axios.get('http://localhost:5000/postproducts')        
        .then((ambilData) =>{
            console.log(ambilData.data);
            this.setState({dataProduk:ambilData.data});
        })       
    }

    
    render() { 
        if (cookies.get('adminID') === undefined)
        {
            return <Redirect to='/' />
        }

        //berikut ini, tidak berkaitan dengan logic login/cookies di atas

        /**simpen ke variabel hasil state yang namanya dataproduk pecah/map */
        const hasilpostproducts = this.state.dataProduk.map(
            (isi,urutan) => { 
                var urut = urutan+1;
                var productku_id = isi.product_id; //artinya isi.product_id, product_id merupakan data kolom tabel
                var Category = isi.category_name;
                var fileGambar = isi.filegambar;
                var productName = isi.product_name;
                var productDesc = isi.product_desc;
                var productPrice = isi.product_price;
                var uploadTime = isi.upload; 

                return <tr key={urutan} className="text-center">
                <td>{urut}</td>
                <td>{Category}</td>
                <td>{fileGambar}</td>
                <td>{productName}</td>
                <td>{productDesc}</td>
                <td>{productPrice}</td>
                <td>{uploadTime}</td>
                <td>
                <p><Link to={{pathname: '/Postproductsedit/',state:{productku_id: productku_id}}} className="btn border" style={{backgroundColor: 'greenyellow'}}>Edit</Link></p>
                <p><button className="btn border" style={{backgroundColor: 'red', color: 'white'}} onClick={() => this.hapus(productku_id)}>Delete</button></p>
                </td>
                </tr>
            }
        )

        return ( 
        <div>
		<Header/>

            <section id="main">
            <div className="container">
            <div className="row">
                <div className="col-md-2">
                <div className="list-group">
                    {/* <a href="index.html" class="list-group-item active main-color-bg"><span class="glyphicon glyphicon-cog" aria-hidden="true"></span>
            Dashboard <span class="badge">12</span>
            </a> */}
                    <a href="./Admin" className="list-group-item"><span className="glyphicon glyphicon-eye-open" aria-hidden="true" /> Overview </a>
                    <a href="./History" className="list-group-item"><span className="glyphicon glyphicon-list-alt" aria-hidden="true" /> History Invoices{/*<span class="badge">25</span>*/}</a>
                    <a href="./Postproducts" className="list-group-item"><span className="glyphicon glyphicon-pencil" aria-hidden="true" /> Products</a>
                    <a href="./Customers" className="list-group-item"><span className="glyphicon glyphicon-user" aria-hidden="true" /> Customers</a>
                </div>
                </div>

                <div className="col-md-10">
                
                <div className="panel panel-default" style={{width: '30%'}}>
                    <div className="panel-heading" style={{backgroundColor: 'rgb(110, 7, 12)', color: 'white'}}>
                    <h3 className="panel-title">Add Product</h3>
                    </div>
                    <div className="panel-body">
                    <table className="table table-striped table-hover">
                        <tbody>
                            <tr>
                                <td>
                                <center>
                                    <Link to="/Postproductstambah"><button className="btn btn-info border" style={{width: '100%'}}><span className="glyphicon glyphicon-plus" /></button></Link>
                                </center>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
                {/* ======================================== */}
                <div className="panel panel-default">
                    <div className="panel-heading" style={{backgroundColor: 'rgb(110, 7, 12)', color: 'white'}}>
                    <h3 className="panel-title">Displayed Products</h3>
                    </div>
                    <div className="panel-body">
                    <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th className="text-center">Product ID</th>
                            <th className="text-center">Category</th>
                            <th className="text-center">File</th>
                            <th className="text-center">Product Name</th>
                            <th className="text-center">Product Description</th>
                            <th className="text-center">Product Price</th>
                            <th className="text-center">Date of Posting</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {hasilpostproducts}
                    </tbody>
                    
                    </table>
                    </div>
                </div>
                </div>
            </div>
            </div>


            </section>

		<Footer/>
        </div>
        );
    }
} 

export default Postproducts;