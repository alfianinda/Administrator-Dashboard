import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Admin from './Component/Admin';
import History from './Component/History';
import Postproducts from './Component/Postproducts';
import Customers from './Component/Customers';
import Invoice from './Component/Invoice';
import Invoice1 from './Component/Invoice1';
import Invoice2 from './Component/Invoice2';
import Invoice3 from './Component/Invoice3';
import Loginadmin from './Component/Loginadmin';
import Profile from './Component/Profile';
import Profile1 from './Component/Profile1';
import Profile2 from './Component/Profile2';
import Profile3 from './Component/Profile3';
import Historyinprofile from './Component/Historyinprofile';
import Historyinprofile1 from './Component/Historyinprofile1';
import Historyinprofile2 from './Component/Historyinprofile2';
import Historyinprofile3 from './Component/Historyinprofile3';

import Logout from './Component/Logout';
import Postproductstambah from './Component/Postproductstambah';
import Postproductsedit from './Component/Postproductsedit';
// import Postproductshapus from './Component/Postproductshapus';

class App extends Component 
{
  render() 
  {
    return (
      <div>
        <Route path="/Admin" component={Admin}/>
        <Route path="/History" component={History}/>
        <Route path="/Postproducts" component={Postproducts}/>
        <Route path="/Customers" component={Customers}/>
        <Route path="/Invoice" component={Invoice}/>
        <Route path="/Invoice1" component={Invoice1}/>
        <Route path="/Invoice2" component={Invoice2}/>
        <Route path="/Invoice3" component={Invoice3}/>
        <Route exact path="/" component={Loginadmin}/>
        <Route path="/Profile" component={Profile}/>
        <Route path="/Profile1" component={Profile1}/>
        <Route path="/Profile2" component={Profile2}/>
        <Route path="/Profile3" component={Profile3}/>
        <Route path="/Historyinprofile" component={Historyinprofile}/>
        <Route path="/Historyinprofile1" component={Historyinprofile1}/>
        <Route path="/Historyinprofile2" component={Historyinprofile2}/>
        <Route path="/Historyinprofile3" component={Historyinprofile3}/> 
        
        <Route path="/Logout" component={Logout}/>
        <Route path="/Postproductstambah" component={Postproductstambah}/>
        <Route path="/Postproductsedit" component={Postproductsedit}/>
        {/* <Route path="/hapusdata" component={Postproductshapus}/> */}


      </div> 
    ); 
  } 
}
 
export default App; 