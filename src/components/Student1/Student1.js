import classes from './Student1.module.css';
import logo_icon from './logo_icon.svg'; 
import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Student_Contract from "../ethereum/build/Student_Contract.json";
import web3 from '../ethereum/web3';

const Student1 = (props) => {

    console.log("present in student1");

    const [student_contract_address, set_student_contract_address] = useState('');
    const [admin_address, set_admin_address] = useState('');
    const [name, set_name] = useState('');
    const [dob, set_dob] = useState('');
    const [aadhar, set_aadhar] = useState('');
    const [phone, set_phone] = useState('');
    const [adress, set_adress] = useState('');
    const [blood_grp, set_blood_grp] = useState('');

    // console.log("name entered", name );

    async function fetch (event) {

        console.log("Fetch clicked");

        props.set_address1(student_contract_address);

        try{
            const student = new web3.eth.Contract(
            JSON.parse(Student_Contract.interface), student_contract_address
            //"0xbB2a69c8028150b413AC8D377E26ae6f2d0897FE"
            );


                   
            const retrieved_admin_address = await student.methods.view_admin_address().call({
            from: web3.currentProvider.selectedAddress
            });

            const retrieved_details = await student.methods.view_student_details().call({
            from: web3.currentProvider.selectedAddress
            });

            set_name(retrieved_details[0]);
            set_dob(retrieved_details[1]);
            set_aadhar(retrieved_details[5]);
            set_phone(retrieved_details[2]);


            console.log(retrieved_details);
            console.log("Student's contract address is" ,student_contract_address);
            console.log("Admin's address is" , retrieved_admin_address);
            set_admin_address(retrieved_admin_address);
    
        }
        catch(er){
            console.log("not valid");
            set_admin_address('');
            set_name('');
            set_dob('');
            set_aadhar('');
            set_phone('');
        }

        
    };

    async function update (event) {

        console.log("update clicked");

        event.preventDefault();

        try{

            const student = new web3.eth.Contract(
                JSON.parse(Student_Contract.interface), student_contract_address
                //"0xbB2a69c8028150b413AC8D377E26ae6f2d0897FE"
                );
                   
            await student.methods.set_student_details(name, dob, phone, adress, blood_grp, aadhar).send({
            from: web3.currentProvider.selectedAddress
            });

            

        }catch(er){
            console.log("not valid");
            set_name('');
            set_dob('');
            set_aadhar('');
            set_phone('');
        }

        
    };

    const function_next = () => {
        console.log("clicked next");
        props.set_switch(false);
    };

  
  return (
    
    <div>

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

                <div className = {classes.row1_column1}>
                    <label for =  "student_contract_address_label" className = {classes.row1_column1_item1}>
                        STUDENT CONTRACT ADDRESS
                    </label>
                    <input className = {classes.row1_column1_item2} value = {student_contract_address} type = "text" id = "student_contract_address_input" onChange={event => set_student_contract_address(event.target.value)}></input>
                </div>

                <div className = {classes.row1_column2}>
                    <label for =  "admin_address_label" className = {classes.row1_column2_item1}>
                        ADMIN ADDRESS
                    </label>
                    <label className = {classes.row1_column2_item2} type = "text" id = "admin_address_input" name = "admin_address_input">{admin_address}</label>
                </div>

                <div className = {classes.row2_column1}>
                    <label for =  "name_label" className = {classes.row2_column1_item1}>
                        NAME
                    </label>
                    <input className = {classes.row2_column1_item2} type = "text" id = "name_input" name = "name_input" onChange={event => set_name(event.target.value)} value = {name}></input>
                </div>

                <div className = {classes.row2_column2}>
                    <label for =  "dob_label" className = {classes.row2_column2_item1}>
                        DOB
                    </label>
                    <input className = {classes.row2_column2_item2} type = "text" id = "dob_input" name = "dob_input" onChange={event => set_dob(event.target.value)} value = {dob}></input>
                </div>

                <div className = {classes.row3_column1}>
                    <label for =  "aadhar_label" className = {classes.row3_column1_item1}>
                        AADHAR NO.
                    </label>
                    <input className = {classes.row3_column1_item2} type = "text" id = "aadhar_input" name = "aadhar_input" onChange={event => set_aadhar(event.target.value)} value = {aadhar}></input>
                </div>
                            
                <div className = {classes.row3_column2}>
                    <label for =  "phone_label" className = {classes.row3_column2_item1}>
                        PHONE NO.
                    </label>
                    <input className = {classes.row3_column2_item2} type = "text" id = "phone_input" name = "phone_input" onChange={event => set_phone(event.target.value)} value = {phone}></input>
                </div>

                <div className = {classes.row4_column} >
                    <div className = {classes.row4_column_item2} onClick = {fetch}>
                        <div>
                            <p className={classes.row4_column_item2_p}>FETCH</p>
                        </div>
                    </div>
                    <div className = {classes.row4_column_item5} onClick = {update}>
                        <a>
                            <p className={classes.row4_column_item5_p}>UPDATE</p>
                        </a>
                    </div> 
                    
                    <div onClick = {function_next} className = {classes.row4_column_item6}></div>

                    
                </div>     

            </div>

            <div className= {classes.footer1}>
                <p>&#169 THE PROFILE</p>
            </div>

        </div>

        </div>
  );
};

export default Student1;
