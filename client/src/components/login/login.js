import React from 'react'
import {FormGroup, FormControl, Button, Grid, Row, Col} from 'react-bootstrap'

class Form extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleChange = this
            .handleChange
            .bind(this);

        this.state = {
            name: '',
            password: ''
        };
    }

    getValidationState() {
        const length = this.state.name;
    }

    handleChange(e) {
        this.setState({value: e.target.value});
    }

    render() {
        return (
            <Grid>
                <Row>
                <Col xsOffset={1} xs={10} smOffset={3} sm={6}>

                <form className="loginForm">
                    <FormGroup
                        className="loginInput"
                        controlId="formBasicText"
                        validationState={this.getValidationState()}>
                        <h2>Login</h2>
                        
                        <FormControl
                            className="loginInput"
                            type="text"
                            value={this.state.name}
                            placeholder="name"
                            onChange={this.handleChange}/>

                        <FormControl
                            className="loginInput"
                            type="text"
                            value={this.state.password}
                            placeholder="password"
                            onChange={this.handleChange}/>

                        <FormControl.Feedback/>

                        <Button bsStyle="primary">Create Account</Button> <a href="">Forgot Password?</a>
                    </FormGroup>
                </form>
                </Col>
                </Row>
            </Grid>
        );
    }
}

export default Form;
// render(<FormExample/>); export default Login = (props) => {     return (
//    <div></div>     ); }