import classes from './List.module.css';
import React, { useState, useEffect, useCallback }  from 'react';
import { Link, useHistory } from 'react-router-dom';
import main_logo from './MAIN_LOGO.svg';
import logout from './LOGOUT.svg';  
import twitter from './TWITTER.svg';  
import instagram from './INSTAGRAM.svg';  
import facebook from './FACEBOOK.svg';  
import tagline from './TAGLINE.svg';
import list_box from './LIST_BOX.svg';

const List = (props) => {

  const history = useHistory();
  const [orders, setorders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [last_index, setlast_index] = useState(1);
  const [fetched_id, setfetched_id] = useState(1);

  async function redirect() {

        props.setloggedin(false);
        console.log(props.loggedin);
        history.replace('/Login');
  }
  
  // // const [movies, setMovies] = useState([]);
  

  const fetch_orders = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      
      const response = await fetch('https://61b6012ac95dd70017d40dcd.mockapi.io/api/V1/Pizza');
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }



      const data = await response.json();

      data.map((order, index) => {
        setlast_index(index);
        // setlast_index(order.id);
      });

      // const transformedMovies = data.results.map((movieData) => {
      //   return {
      //     id: movieData.episode_id,
      //     title: movieData.title,
      //     openingText: movieData.opening_crawl,
      //     releaseDate: movieData.release_date,
      //   };
      // }
      // );
      setorders(data);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);


  }, []);

  console.log(last_index);

  useEffect(() => {
    fetch_orders();
  }, [fetch_orders]);

  // console.log(orders);

  // orders.map((order) => {
  //   console.log(order.Crust);
  // });

  
  ////to simply fetch the details

  // fetch('https://61b6012ac95dd70017d40dcd.mockapi.io/api/V1/Pizza')
  // .then(response => response.json())
  // .then(data => setorders(data));

  // console.log(orders);

  async function delete_request() {
    
    console.log(fetched_id);

    try {

      const response = await fetch('https://61b6012ac95dd70017d40dcd.mockapi.io/api/V1/Pizza/' + fetched_id,{
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const response_data = await response.json();
      console.log(response_data);

      alert("The id is deleted!");
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
          <div className={classes.list_heading}>
            <p>LIST OF ORDERS</p>
          </div>
          <table className = {classes.table}>
            <tr>
              <th>CRUST</th>
              <th>FLAVOR</th>
              <th>ORDER ID</th>
              <th>SIZE</th>
              <th>TABLE NO.</th>
              <th>TIMESTAMP</th>
              <th>ID</th>
            </tr>

            {
              orders.map((order, index) => { if (index < 7) 
                return(
                  <tr>
                      <td>{order.Crust}</td>
                      <td>{order.Flavor}</td>
                      <td>{order.Order_ID}</td>
                      <td>{order.Size}</td>
                      <td>{order.Table_No}</td>
                      <td>{order.Timestamp}</td>
                      <td>{order.id}</td>
                  </tr>
              );
              })
            }

            <tr>
              <td>.</td>
              <td>.</td>
              <td>.</td>
              <td>.</td>
              <td>.</td>
              <td>.</td>
              <td>.</td>
            </tr>
            <tr>
              <td>.</td>
              <td>.</td>
              <td>.</td>
              <td>.</td>
              <td>.</td>
              <td>.</td>
              <td>.</td>
            </tr>
           

            {
              orders.map((order, index) => { if (index > (last_index - 1)) 
                return(
                  <tr>
                      <td>{order.Crust}</td>
                      <td>{order.Flavor}</td>
                      <td>{order.Order_ID}</td>
                      <td>{order.Size}</td>
                      <td>{order.Table_No}</td>
                      <td>{order.Timestamp}</td>
                      <td>{order.id}</td>
                  </tr>
              );
              })
            }
            




          </table>
          <div className = {classes.part_3}>
            <div className = {classes.part_3_1}>
              <label for =  "order_id_label" className = {classes.order_id_label}>
                ORDER ID
              </label>
              <input type = "text" id = "order_id_input" name = "order_id_input" className = {classes.order_id_input} onChange={event => setfetched_id(event.target.value)}></input>
            </div>
            <div className = {classes.part_3_2}>
            
              <div className = {classes.part_3_2_1}>
                <label for =  "delete_label" className = {classes.delete_label} onClick = {delete_request}>
                  DELETE
                </label>
              </div>
              <div className = {classes.part_3_2_2}>
                <label for =  "refresh_label" className = {classes.refresh_label} onClick = {fetch_orders}>
                  REFRESH
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

export default List;
