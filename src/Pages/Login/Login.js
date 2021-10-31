import { Container, Row, Col} from 'react-bootstrap';
import { useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import LoginBanner from './LoginBanner';
import './Login.css';

const Login = () => {
    const {signInWithGoogle} = useAuth();


    const location = useLocation();
    const history = useHistory();
    const redirect_Uri = location.state?.from || '/destination';
    // console.log(email, name, password);


    const handleLogin =() =>{
        signInWithGoogle()
        .then(result => {
            history.push(redirect_Uri)
        })
    }

    return (
        <div>
            <LoginBanner></LoginBanner>
                <Container>
                    <Row className="mt-5">
                    <Col xs={12} md={4}></Col>
                    <Col xs={12} md={5}>
                        <div className="login-panel">
                            <h2>Login With Google</h2>
                            <button onClick={handleLogin} className="btn btn-warning fw-bold">Google Login</button>
                        </div>
                    </Col>
                    </Row>
                </Container>
        </div>
    );
};

export default Login;