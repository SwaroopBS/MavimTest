import classes from './Order.module.css';
import React, { useState, useEffect, useCallback }  from 'react';
import { Link, useHistory } from 'react-router-dom';
import main_logo from './MAIN_LOGO.svg';
import logout from './LOGOUT.svg';  
import twitter from './TWITTER.svg';  
import instagram from './INSTAGRAM.svg';  
import facebook from './FACEBOOK.svg';  
import tagline from './TAGLINE.svg';
import list_box from './LIST_BOX.svg';

const Order = (props) => {

  const history = useHistory();

  // // const [movies, setMovies] = useState([]);
  const [orders, setorders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [last_index, setlast_index] = useState(1);
  const [crust, setcrust] = useState();
  const [flavor, setflavor] = useState();
  const [size, setsize] = useState();
  const [table, settable] = useState();

  async function redirect() {

    props.setloggedin(false);
    console.log(props.loggedin);
    history.replace('/Login');
}

  


  // const las_index = 0;


  const fetch_orders = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('https://61b6012ac95dd70017d40dcd.mockapi.io/api/V1/Pizza');
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();

      setorders(data);

      data.map((order) => {
        // setlast_index(index);
        setlast_index(order.id);
      });

    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetch_orders();
  }, [fetch_orders]);

  const new_id = parseInt(last_index) + 1;


  console.log(last_index);
  console.log(new_id);

  const time_stamp = (Math.floor(Date.now()/1000));

  console.log(time_stamp);

  console.log(crust);
  console.log(flavor);
  console.log(size);
  console.log(table);

  // const details = {
  //   details_crust: toString(crust),
  //   details_flavor: toString(flavor),
  //   details_size: toString(size),
  //   details_table: toString(table),
  //   details_timestamp: toString(time_stamp),
  //   details_id: toString(new_id)
  // };


  // console.log(details);

  async function post_request() {
    
    try {

      const response = await fetch('https://61b6012ac95dd70017d40dcd.mockapi.io/api/V1/Pizza',{
        method: 'POST',
        body: JSON.stringify({"Crust": crust, "Flavor": flavor, "Order_ID": new_id, "Size": size, "Table_No": table, "Timestamp": time_stamp, "id": new_id}),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const response_data = await response.json();
      console.log(response_data);

      alert("Your details are uploaded!");
    }catch (error) {
      alert("Error found: ", error);
    }

    // console.log(JSON.stringify(details));
  }
    



  
  
  return (
    <div className= {classes.container}> 
        <div className= {classes.nav_container}>
          <div className= {classes.main_logo}>   
            <img src = {main_logo} className = {classes.main_logo_svg}></img>
          </div>   
          <div className= {classes.nav_links}>   

            <Link className= {classes.nav_logout} to = "../Login" onClick = {redirect}>   
              {/* <img src = {logout} className = {classes.logout_svg}></img> */}
              <div className = {classes.part_logout}>
                <label for =  "delete_label" className = {classes.logout_label}>
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
          {/* <img src = {list_box} className = {classes.list_box_svg}></img> */}
          
          
          <div className = {classes.inputs}>

            <div className = {classes.part_3_1}>

              <label for =  "crust_label" className = {classes.order_id_label}>
                CRUST
              </label>
              {/* <input type = "text" id = "crust_input" name = "crust_input" className = {classes.order_id_input}></input> */}
              <select id = "crust_input" name = "crust_input" className = {classes.order_id_input} onChange={event => setcrust(event.target.value)}>
                <option value="0">Select Crust</option>
                <option value="Classic">Classic</option>
                <option value="Veggie">Veggie</option>
              </select>
            
              <label for =  "flavor_label" className = {classes.order_id_label}>
                FLAVOR
              </label>
              {/* <input type = "text" id = "flavor_input" name = "flavor_input" className = {classes.order_id_input}></input> */}
              <select id = "flavor_input" name = "flavor_input" className = {classes.order_id_input} onChange={event => setflavor(event.target.value)}>
                <option value="0">Select Flavor</option>
                <option value="Cheese">Cheese</option>
                <option value="Veggie">Veggie</option>
                <option value="Pepperoni">Pepperoni</option>
                <option value="Meat">Meat</option>
                <option value="Margherita">Margherita</option>
              </select>
            
              <label for =  "size_label" className = {classes.order_id_label}>
                SIZE
              </label>
              {/* <input type = "text" id = "size_input" name = "size_input" className = {classes.order_id_input}></input> */}
              <select id = "size_input" name = "size_input" className = {classes.order_id_input} onChange={event => setsize(event.target.value)}>
                <option value="0">Select Size</option>
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
                <option value="Fiesta">Fiesta</option>
              </select>
            
              <label for =  "table_label" className = {classes.order_id_label}>
                TABLE NO.
              </label>
              {/* <input type = "text" id = "table_input" name = "table_input" className = {classes.order_id_input}></input> */}
              <select id = "table_input" name = "table_input" className = {classes.order_id_input} onChange={event => settable(event.target.value)}>
                <option value="0">Select Table No.</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
              </select>
            
            </div>

            <div className = {classes.part_3_2}>
            
              <div className = {classes.part_3_2_1} onClick = {post_request} >
                <label for =  "place_order_label" className = {classes.delete_label}>
                  PLACE ORDER
                </label>
              </div>
              

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

export default Order;
