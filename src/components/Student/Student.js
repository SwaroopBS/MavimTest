import React from 'react';
import Student1 from '../Student1/Student1';
import Student2 from '../Student2/Student2';

import { useState } from 'react';

const Student = () => {

    const [student_contract_address, set_student_contract_address] = useState('');
    const [student_switch, set_student_switch] = useState(true);


    const set_address_main = (contract_address) => {
        set_student_contract_address(contract_address);
        console.log('Address set to ', student_contract_address);
    };

    const set_switch_main = (switch_ans) => {
        console.log("switch changed");
        // console.log(switch_ans);
        set_student_switch(switch_ans);
        // console.log(student_switch);
    };

    

      if (student_switch === true) {
          console.log(student_switch);
          return (<Student1 set_address1 = {set_address_main} set_switch = {set_switch_main}/>);
      }

      if (student_switch === false) {
        return (<Student2 student_contract_address = {student_contract_address} set_switch = {set_switch_main} />);
      }

      
  };

export default Student;
