import classes from './Signup.module.css';
import React, { useState, useEffect, useCallback }  from 'react';
import { Link } from 'react-router-dom';
import main_logo from './MAIN_LOGO.svg';
import logout from './LOGOUT.svg';  
import twitter from './TWITTER.svg';  
import instagram from './INSTAGRAM.svg';  
import facebook from './FACEBOOK.svg';  
import tagline from './TAGLINE.svg';
import list_box from './LIST_BOX.svg';

const Signup = (props) => {

  const [username1, setUsername] = useState('');
  const [password1, setPassword] = useState('');

  async function acc_create() {

    try {

      const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDcJTDEKX-L6vC-a2D5WbDPl2AoPzq_lrY', {
          method: 'POST',
          body: JSON.stringify({
            email: username1,
            password: password1,
            returnSecureToken: true,
          }),
          headers: {
            'Content-Type': 'application/json',
          }
      });

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const response_data = await response.json();
      console.log(response_data);

      props.setUsername(username1);
      props.setPassword(password1);

      alert("User Registed!");
    }catch (error) {
      alert(error);
    }

    // console.log(username1);
  }

  // const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDcJTDEKX-L6vC-a2D5WbDPl2AoPzq_lrY', {
  //         method: 'POST',
  //         body: JSON.stringify({
  //           email: username1,
  //           password: password1,
  //           returnSecureToken: true,
  //         }),
  //         headers: {
  //           'Content-Type': 'application/json',
  //         }
  //     });

  //     if (!response.ok) {
  //       throw new Error('Something is wrong!');
  //     }

  //     const response_data = await response.json();
  //     console.log(response_data);
  //     console.log(response_data.error.message);



      

  //     alert("User Registered!");
  //   }catch (error) {
  //     alert(error);
        // }



    




  
  
  return (
    <div className= {classes.container}> 
        <div className= {classes.nav_container}>
          
          <div className= {classes.main_logo}>   
            <img src = {main_logo} className = {classes.main_logo_svg}></img>
          </div>   
          
        </div>
        <div className= {classes.main}>
          {/* <img src = {list_box} className = {classes.list_box_svg}></img> */}
          
          
          <div className = {classes.login}>

            <div className = {classes.part_logo}>
              
              <div className= {classes.login_logo}>   
                <img src = {main_logo} className = {classes.sub_logo_svg}></img>
              </div> 
              

            </div>


            <div className = {classes.part_3_1}>

              <label for =  "username_label" className = {classes.order_id_label}>
                USERNAME
              </label>
              <input type = "text" id = "username_input" name = "username_input" className = {classes.order_id_input} onChange={event => setUsername(event.target.value)}></input>
            
              <label for =  "password_label" className = {classes.order_id_label}>
                PASSWORD
              </label>
              <input type = "text" id = "password_input" name = "password_input" className = {classes.order_id_input} onChange={event => setPassword(event.target.value)}></input>
            
            </div>

            <div className = {classes.part_3_2}>
            
            <Link className= {classes.signup_link} to = "../Login">
              <div className = {classes.part_3_2_1} onClick = {acc_create}>
                <label for =  "login_label" className = {classes.delete_label}>
                  CREATE ACCOUNT
                </label>
              </div>
            </Link>
              

            </div>
          </div>
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

export default Signup;
