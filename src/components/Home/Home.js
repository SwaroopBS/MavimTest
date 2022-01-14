import classes from './Home.module.css';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import main_logo from './MAIN_LOGO.svg';
import logout from './LOGOUT.svg';  
import twitter from './TWITTER.svg';  
import instagram from './INSTAGRAM.svg';  
import facebook from './FACEBOOK.svg';  
import tagline from './TAGLINE.svg';

const Home = (props) => {

  const history = useHistory();

  async function redirect() {

        props.setloggedin(false);
        console.log(props.loggedin);
        history.replace('/Login');
  }
  
  return (
    <div className= {classes.container}> 
        <div className= {classes.nav_container}>
          <div className= {classes.main_logo}>   
            <img src = {main_logo} className = {classes.main_logo_svg}></img>
          </div>   
          <div className= {classes.nav_links}>   

            <Link className= {classes.nav_logout} to = "../Login">   
              {/* <img src = {logout} className = {classes.logout_svg}></img> */}
              <div className = {classes.part_logout}>
                <label for =  "delete_label" className = {classes.logout_label} onClick = {redirect}>
                  LOGOUT
                </label>
              </div>
            </Link>
            
            <Link className= {classes.nav_a1} to = "../Order">   
                <p>ORDER</p>
            </Link>

            <Link className= {classes.nav_a2} to = "../List">    
                <p>LIST</p>
            </Link>

            <Link className= {classes.nav_a3} to = "../Home">    
                <p>HOME</p>
            </Link>

          </div>   
        </div>
        <div className= {classes.main}>
          <img src = {tagline} className = {classes.tagline_svg}></img>
        </div>
        <div className= {classes.footer}>
          <div className= {classes.footer_1}>
            <img src = {twitter} className = {classes.social_media_1_svg}></img>
            <img src = {instagram} className = {classes.social_media_svg}></img>
            <img src = {facebook} className = {classes.social_media_svg}></img>
          </div>
          <div className= {classes.footer_2}>
            <img src = {main_logo} className = {classes.logo_svg}></img>
            <p className= {classes.copyright}>	&copy;</p>
          </div>
        </div>
    </div>
  );
};

export default Home;
