import classes from './Home.module.css';
import logo_icon from './logo_icon.svg'; 
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  
  return (

        <div className= {classes.container}>   
            
            <div className= {classes.header1}>   
                <img src = {logo_icon} className = {classes.logo_icon}></img>
            </div>
            
            <div className= {classes.nav_container}>    
                
                <div className = {classes.dummy1}></div>
    
                <Link className= {classes.nav_a1} to = "../Home">   
                    <p>HOME</p>
                </Link>

                <Link className= {classes.nav_a2} to = "../Student">    
                    <p>STUDENT</p>
                </Link>
    
                <Link className= {classes.nav_a3} to = "../Admin">    
                    <p>ADMIN</p>
                </Link>
    
                <div className = {classes.dummy2}></div>
                
            </div>
    
            <div className= {classes.main1}></div>       
            
            <div className= {classes.main2_container}>
                
                <div className = {classes.main2_part1_item}>
                    <p>
                        Create Your<br/>
                        Profile Now
                    </p>
                </div>
                <Link to = "../Student" className = {classes.main2_part2_item}>
                    <p>
                        REGISTER 
                    </p>
                </Link>
            </div>
            
    
            <div className= {classes.main2}></div>   
            
            
    
            
            <div className= {classes.footer1}>
                <p>&#169 THE PROFILE</p>
            </div>
        </div>
  );
};

export default Home;
