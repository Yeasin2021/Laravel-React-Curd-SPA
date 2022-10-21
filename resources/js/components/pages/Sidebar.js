import React from 'react';
// import '../../../css/app.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div>
        <div className="menubar">
        <ul style={{listStyle: "none"}}>
            <li><Link to="/home" style={{textDecoration: "none"}}><i class="fa fa-home"></i>Home</Link></li>
            <li><Link to="/contact" style={{textDecoration: "none"}}><i class="fa fa-bell"></i>Form</Link></li>
            <li><i class="fa fa-paper-plane"></i>Message</li>
            <li><i class="fa fa-gear"></i>Setting</li>
            <li><i class="fa fa-solid fa-eye"></i>Role Permission</li>
            <li><i class="fa fa-person-digging"></i>Worker</li>
            <li><i class="fa fa-credit-card"></i>Payment</li>
            <li><i class="fa fa-store"></i>Storage</li>
            <li><i class="fa fa-star"></i>Rating</li>
            <li><i class="fa fa-car"></i>Car</li>
            <li><i class="fa-brands fa-hive"></i>Network</li>
        </ul>
    </div>
    </div>
  )
}

export default Sidebar
