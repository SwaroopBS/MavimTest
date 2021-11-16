import classes from './Admin.module.css';
import logo_icon from './logo_icon.svg'; 
import image_process_icon from './image_process_icon.svg';
import React from 'react';
import { Link } from 'react-router-dom';

import { useState } from 'react';

import Student_Contract from "../ethereum/build/Student_Contract.json";
import web3 from '../ethereum/web3';

const Admin = () => {
  
    const [student_contract_address, set_student_contract_address] = useState('');
    const [admin_address, set_admin_address] = useState('');
    
    async function fetch (event) {
        
    

        console.log("Fetch clicked");

        try{
            const student = new web3.eth.Contract(
            JSON.parse(Student_Contract.interface), student_contract_address
            );
                   
            const retrieved_admin_address = await student.methods.view_admin_address().call({
            from: web3.currentProvider.selectedAddress
            });

            set_admin_address(retrieved_admin_address);

            console.log(retrieved_admin_address);
            console.log("Student's contract address is" ,student_contract_address);
            console.log("Admin's address is" , retrieved_admin_address);
            set_admin_address(retrieved_admin_address);
    
        }
        catch(er){
            console.log("not valid");
            set_admin_address('');
            set_student_contract_address('');
        }

        
    };

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
        
        <div className= {classes.dummy}></div>

        <div className = {classes.main2_part1_item}>
            <label for =  "student_contract_address" className = {classes.main2_part1_item1}>
                STUDENT CONTRACT ADDRESS
            </label>
            <input className = {classes.main2_part1_item2} type = "text" id = "student_contract_address_input" name = "student_contract_address_input" onChange={event => set_student_contract_address(event.target.value)} value = {student_contract_address}></input>
        </div>

        <div className = {classes.main2_part2_item}>
        <a  href="https://www.google.co.in/">
            <img src = {image_process_icon} className = {classes.main2_part2_item1}></img>
        </a>
        </div>

        
        <div className = {classes.main2_part3_item}>
        <div className = {classes.main2_part3_item1} onClick = {fetch}>
            <div>
                <p className= {classes.main2_part3_item1_p}>VALIDATE</p>
            </div>
        </div>
        </div>
        
            


        <div className = {classes.main2_part4_item}>
            <label for =  "admin_address" className = {classes.main2_part4_item1}>
                ADMIN ADDRESS
            </label>
            <label className = {classes.main2_part4_item2} type = "text" id = "admin_address_input" name = "admin_address_input">{admin_address}</label>
        </div>
        


    </div>
    
    
    

    
    <div className= {classes.footer1}>
        <p>&#169 THE PROFILE</p>
    </div>
</div>
  );
};

export default Admin;
