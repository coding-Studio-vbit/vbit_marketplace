import React, { Component } from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import Profile from './Profile';
import Checkout from './Checkout';
=======
import Card from './Card'
import './App.css';
import { item } from './item';
>>>>>>> 9386ba1ad269af7f3e4944209b7edf5033b51526
=======
>>>>>>> b4cf228602ca7dc6b697b3f270ec60348a33e432

import './style.css';

class App extends Component {
  render() {
    return (
<<<<<<< HEAD
<<<<<<< HEAD
      <React.Fragment>
=======
>>>>>>> b4cf228602ca7dc6b697b3f270ec60348a33e432
      <div className="App">
      <nav>
        <h1 className="VBIT"><a href="#">VBI<span>T</span></a></h1>
          <div className='main'>
            <ul>
              <li><a href='#'>Home</a></li>
              <li><a href='#'>WishList</a></li>
              <li><a href='#'>About</a></li>
              <div className='search-box'>
              <input type="text" name=""placeholder="Type to search"/>
              <a className="search-btn" href="#"></a>
              <i className="fa-search"></i>
              </div>
              
            </ul>
          </div>
         
          
        
      </nav>
    </div>
<<<<<<< HEAD
     <Profile />
      
     </React.Fragment>
=======
      <div>
      <nav class="navbar navbar-expand-lg navbar-light ">
      <a class="navbar-brand" href="#"><span1>VBIT<span>MAR</span>KE<span>T</span>Place</span1></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span1 class="navbar-toggler-icon"></span1>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">MyCart</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Account ▼
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Wishlist</a>
          <a class="dropdown-item" href="#">Profile</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Settings</a>
        </div>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
<div>
<div class="container-fluid">
 <Card no={item[1].no} name={item[1].name} price={item[1].price} owner={item[1].owner}/>
 <Card no={item[2].no} name={item[2].name} price={item[2].price} owner={item[2].owner}/>
 <Card no={item[3].no} name={item[3].name} price={item[3].price} owner={item[3].owner}/>
 <Card no={item[4].no} name={item[4].name} price={item[4].price} owner={item[4].owner}/>
 <Card no={item[5].no} name={item[5].name} price={item[5].price} owner={item[5].owner}/>
 <Card no={item[6].no} name={item[6].name} price={item[6].price} owner={item[6].owner}/>
</div>
</div>
</div>

>>>>>>> 9386ba1ad269af7f3e4944209b7edf5033b51526
=======
>>>>>>> b4cf228602ca7dc6b697b3f270ec60348a33e432
    );
  }
}

export default App;
