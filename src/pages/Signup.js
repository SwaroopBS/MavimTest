import Signup from '../components/Signup/Signup';

const Signup_page = (props) => {
    return <Signup setUsername = {props.setUsername} setPassword = {props.setPassword}/>;
};

export default Signup_page;