import classes from './Manager.module.css';
import logo_icon from './logo_icon.svg'; 
import React from 'react';
import { Link } from 'react-router-dom';

import { useState, useEffect } from 'react';

import Student_Contract from "../ethereum/build/Student_Contract.json";
import Manager_Contract from "../ethereum/build/Manager_Contract.json";
import web3 from '../ethereum/web3';

const Manager = () => {

    const [generated_address, set_generated_address] = useState('');
    async function generate() {
        
       

        console.log("Generate clicked");

        try{

            const accounts = await web3.eth.getAccounts();
            console.log('account address is', accounts[0]);

        
           
            const manager = new web3.eth.Contract(
                JSON.parse(Manager_Contract.interface), accounts[0]
                );

            console.log(manager);

            await manager.methods.Create_Student_Contract().send({
                from: web3.currentProvider.selectedAddress,
                gas: 1000000
                });

            const ret_generated_address = await manager.methods.view_recently_added_student_contract().call({
                from: web3.currentProvider.selectedAddress
                });

            set_generated_address(ret_generated_address);

            console.log("Student's contract address is" , ret_generated_address);
    
        }
        catch(er){
            console.log("not valid");
            // set_admin_address('');
            // set_student_contract_address('');
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
    
                <Link className= {classes.nav_a2} to = "../Manager" >
                    <p>MANAGER</p>
                </Link>
    
                <Link className= {classes.nav_a3} to = "../Student">    
                    <p>STUDENT</p>
                </Link>
    
                <Link className= {classes.nav_a4} to = "../Admin">    
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
                <label className = {classes.main2_part1_item2} type = "text" id = "student_contract_address" name = "student_contract_address"></label>
            </div>

            <div className = {classes.main2_part2_item}>
                <label for =  "admin_address" className = {classes.main2_part2_item1}>
                    ADMIN ADDRESS
                </label>
                <label className = {classes.main2_part2_item2} type = "text" id = "admin_address" name = "admin_address"></label>
            </div>
            
            <div className = {classes.main2_part3_item}>
                <div className = {classes.main2_part3_item1} onClick = {generate}>
                    <div>
                        <p className= {classes.main2_part3_item1_p}>GENERATE</p>
                    </div>
                </div>
            </div>         

        </div>
        
        
        

        
        <div className= {classes.footer1}>
            <p>&#169 THE PROFILE</p>
        </div>
</div>
  );
};

export default Manager;
