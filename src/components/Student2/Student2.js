import classes from './Student2.module.css';
import logo_icon from './logo_icon.svg'; 
import React from 'react';
import { Link } from 'react-router-dom';

import { useState, useEffect } from 'react';

import Student_Contract from "../ethereum/build/Student_Contract.json";
import web3 from '../ethereum/web3';

const Student2 = (props) => {

    console.log("present in student2");

    const [student_contract_address, set_student_contract_address] = useState(props.student_contract_address);
    const [admin_address, set_admin_address] = useState();
    const [marks_10th, set_marks_10th] = useState('');
    const [institution_10th, set_institution_10th] = useState('');
    const [marks_12th, set_marks_12th] = useState('');
    const [institution_12th, set_institution_12th] = useState('');
    const [marks_college, set_marks_college] = useState('');
    const [institution_college, set_institution_college] = useState('');

    const [college_1st, set_college_1st] = useState('');
    const [college_2nd, set_college_2nd] = useState('');
    const [college_3rd, set_college_3rd] = useState('');

    useEffect(() => {
        
        contract_det();

        async function contract_det () {
        
            try{
                const student = new web3.eth.Contract(
                JSON.parse(Student_Contract.interface), student_contract_address
                );
                       
                const retrieved_admin_address = await student.methods.view_admin_address().call({
                from: web3.currentProvider.selectedAddress
                });

                console.log("Student's contract address is" ,student_contract_address);
                console.log("Admin's address is" , retrieved_admin_address);
                set_admin_address(retrieved_admin_address);
        
            }catch(er){
                console.log("not valid");
                set_admin_address('');
            }
        }

      }, [student_contract_address]);

    const function_back = () => {
        props.set_switch(true);
    }

    async function fetch_10th (event) {

        console.log("Fetch_10th clicked");

        try{
            const student = new web3.eth.Contract(
            JSON.parse(Student_Contract.interface), student_contract_address
            );
     
            const retrieved_10th_details = await student.methods.view_10th_details().call({
            from: web3.currentProvider.selectedAddress
            });

            set_institution_10th(retrieved_10th_details[0]);
            set_marks_10th(retrieved_10th_details[1]);
            console.log(marks_10th);
            console.log(institution_10th);
    
        }
        catch(er){
            console.log("not valid");
            set_institution_10th('');
            set_marks_10th('');
        }
    };

    
    async function update_10th (event) {

        console.log("update clicked");

        event.preventDefault();

        try{

            const student = new web3.eth.Contract(
                JSON.parse(Student_Contract.interface), student_contract_address
                );
                   
            await student.methods.set_10th_details(institution_10th, marks_10th).send({
            from: web3.currentProvider.selectedAddress
            });

            

        }catch(er){
            console.log("not valid");
            set_institution_10th('');
            set_marks_10th('');

        }

        
    };

    
    async function fetch_12th (event) {

        console.log("Fetch_12th clicked");

        try{
            const student = new web3.eth.Contract(
            JSON.parse(Student_Contract.interface), student_contract_address
            );
     
            const retrieved_12th_details = await student.methods.view_12th_details().call({
            from: web3.currentProvider.selectedAddress
            });

            set_institution_12th(retrieved_12th_details[0]);
            set_marks_12th(retrieved_12th_details[1]);
            console.log(marks_12th);
            console.log(institution_12th);
    
        }
        catch(er){
            console.log("not valid");
            set_institution_12th('');
            set_marks_12th('');
        }
    };

    
    async function update_12th (event) {

        console.log("update_12th clicked");

        event.preventDefault();

        try{

            const student = new web3.eth.Contract(
                JSON.parse(Student_Contract.interface), student_contract_address
                );
                   
            await student.methods.set_12th_details(institution_12th, marks_12th).send({
            from: web3.currentProvider.selectedAddress
            });

            

        }catch(er){
            console.log("not valid");
            set_institution_12th('');
            set_marks_12th('');

        }

        
    };

    async function fetch_college (event) {

        console.log("Fetch_college clicked");

        try{
            const student = new web3.eth.Contract(
            JSON.parse(Student_Contract.interface), student_contract_address
            );
     
            const retrieved_college_details = await student.methods.view_college_details().call({
            from: web3.currentProvider.selectedAddress
            });

            set_institution_college(retrieved_college_details[0]);
            set_marks_college(retrieved_college_details[4]);
            console.log(marks_college);
            console.log(institution_college);
    
        }
        catch(er){
            console.log("not valid");
            set_institution_college('');
            set_marks_college('');
        }
    };

    
    async function update_college (event) {

        console.log("update_college clicked");

        event.preventDefault();

        try{

            const student = new web3.eth.Contract(
                JSON.parse(Student_Contract.interface), student_contract_address
                );
                   
            await student.methods.set_college_details(institution_college, college_1st, college_2nd, college_3rd, marks_college).send({
            from: web3.currentProvider.selectedAddress
            });

            

        }catch(er){
            console.log("not valid");
            set_institution_college('');
            set_marks_college('');

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
    
            <div class= {classes.main2_container}>
            
            <div class= {classes.dummy}></div>

            <div class = {classes.row1_column1}>
                <label for =  "10th_marks_label" class = {classes.row1_column1_item1}>
                    10th MARKS
                </label>
                <input class = {classes.row1_column1_item2} type = "text" id = "10th_marks_input" name = "10th_marks_input" onChange={event => set_marks_10th(event.target.value)} value = {marks_10th}></input>
            </div>

            <div class = {classes.row1_column2}>
                <label for =  "10th_institution_label" class = {classes.row1_column2_item1}>
                    INSTITUTION
                </label>
                <input class = {classes.row1_column2_item2} type = "text" id = "10th_institution_input" name = "10th_institution_input" onChange={event => set_institution_10th(event.target.value)} value = {institution_10th}></input>
            </div>

            <div class = {classes.row2_column1}>
                <label for =  "12th_marks_label" class = {classes.row2_column1_item1}>
                    12th MARKS
                </label>
                <input class = {classes.row2_column1_item2} type = "text" id = "12th_marks_input" name = "12th_marks_input" onChange={event => set_marks_12th(event.target.value)} value = {marks_12th}></input>
            </div>

            <div class = {classes.row2_column2}>
                <label for =  "12th_institution_label" class = {classes.row2_column2_item1}>
                    INSTITUTION
                </label>
                <input class = {classes.row2_column2_item2} type = "text" id = "12th_institution_input" name = "12th_institution_input" onChange={event => set_institution_12th(event.target.value)} value = {institution_12th}></input>
            </div>

            <div class = {classes.row3_column1}>
                <label for =  "ug_cgpa_label" class = {classes.row3_column1_item1}>
                    UG CGPA
                </label>
                <input class = {classes.row3_column1_item2} type = "text" id = "ug_cgpa_input" name = "ug_cgpa_input" onChange={event => set_marks_college(event.target.value)} value = {marks_college}></input>
            </div>
                        
            <div class = {classes.row3_column2}>
                <label for =  "ug_institution_label" class = {classes.row3_column2_item1}>
                    INSTITUTION
                </label>
                <input class = {classes.row3_column2_item2} type = "text" id = "ug_institution_input" name = "ug_institution_input" onChange={event => set_institution_college(event.target.value)} value = {institution_college}></input>
            </div>

            <div class = {classes.row1_column3}>
                <div class = {classes.row1_column3_item1} onClick = {fetch_10th}>
                    <div>
                        <p class= {classes.row1_column3_item1_p}>FETCH</p>
                    </div>
                </div>
                <div class = {classes.row1_column3_item2} onClick = {update_10th}>
                    <div>
                        <p class= {classes.row1_column3_item2_p}>UPDATE</p>
                    </div>
                </div> 
            </div>

            <div class = {classes.row2_column3}>
                <div class = {classes.row2_column3_item1} onClick = {fetch_12th}>
                    <div>
                        <p class= {classes.row2_column3_item1_p}>FETCH</p>
                    </div>
                </div>
                <div class = {classes.row2_column3_item2} onClick = {update_12th}>
                    <div>
                        <p class= {classes.row2_column3_item2_p}>UPDATE</p>
                    </div>
                </div>                  
            </div>

            <div class = {classes.row3_column3}>
                <div class = {classes.row3_column3_item1} onClick = {fetch_college}>
                    <div>
                        <p class= {classes.row3_column3_item1_p}>FETCH</p>
                    </div>
                </div>
                <div class = {classes.row3_column3_item2} onClick = {update_college}>
                    <div>
                        <p class= {classes.row3_column3_item2_p}>UPDATE</p>
                    </div>
                </div>                  
            </div>

            <div class = {classes.row4_column}>
                <div class = {classes.row4_column_item2}>
                    <div>
                        <p class= {classes.row4_column_item2_p}>UPLOAD FILE</p>
                    </div>
                </div>                  
            
                <div onClick = {function_back} class = {classes.row4_column_item1}></div>

            </div>


        </div>

            <div className= {classes.footer1}>
                <p>&#169 THE PROFILE</p>
            </div>

        </div>
  );
};

export default Student2;
