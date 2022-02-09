import {Button, Form} from 'react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './login.css'
function Login() {
    return (
        <Form className="auth-inner" action="/user/login" method="post">
        <h3>Sign In</h3>
        <div className="form-group">
            <label>Email address</label>
            <input type="username" className="form-control" placeholder="Enter username" name="name" />
        </div>
        <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Enter password" name="password" />
        </div>
        <div className="form-group">
            <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
            </div>
        </div>
        <Button type="submit" className="btn btn-primary btn-block">Submit</Button>
        <p className="forgot-password text-right">
            Forgot <a href="#">password?</a>
        </p>
    </Form>
    )
}

export default Login;