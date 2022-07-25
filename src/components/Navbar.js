import React, { Component } from 'react'
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
class Navbar extends Component {
  render() {
    return (
      <nav className='navbar navbar-dark fixed-top shadow p-1' style={{backgroundColor:'black', height:'50px'}}>
        <a className='navbar-brand col-sm-3 col-md-1 mr-0' href="/" 
        style={{color:'white'}}>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJPiy9azZPdfyML6JKEW7BdBXKeodkjdeqkQ&usqp=CAU' width={80} height={40} className='d-inline-block align-top' alt=''/>
            Decentralized Banking System
            </a>
        <ul className='navbar-nav px-3'>
            <li>
                <small style={{color:'white'}} >Account Number: {this.props.account}
                </small>
            </li>
        </ul>
      </nav>
      
      
    )
  }
}
export default Navbar