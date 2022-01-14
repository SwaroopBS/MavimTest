import Login from '../components/Login/Login';



const Login_page = (props) => {
    return <Login setloggedin = {props.setloggedin} loggedin = {props.loggedin}/>;
};

export default Login_page;