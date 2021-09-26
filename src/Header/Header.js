import React from 'react';
import './Header.css'
const Header = () => {
    return (
       <div>
           <div className="navbar">
               <nav>
                   <a href="/link">Home</a>
                   <a href="/link">Projects</a>
                   <a href="/link">Register</a>
                   <a href="/link">Log in</a>
                   </nav>
           </div>

           <div className="heading">
            <h1>Hashcode Developer Club</h1>
            <h3>2021 best team to develope Multiple project</h3>
            <h4>Budget:2000000</h4>
        </div>
        <h2 className="member">Select team member</h2>
       </div>
    );
};

export default Header;