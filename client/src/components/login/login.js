import React from 'react'
import {FormGroup, FormControl, Button, Grid, Row, Col, Label} from 'react-bootstrap'
import { connect } from 'react-redux';
import { login, callLogin } from '../../redux'

class Form extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
        this.onSubmit = this.onSubmit.bind(this);
    }

    getValidationState() {
        const length = this.state.name;
    }

    handleChange(e) {
        this.setState({value: e.target.value});
    }

    onSubmit(e) {
      e.preventDefault();
      let { email, password } = this.state;
      this.props.login(email, password);
      this.setState({
        email: '',
        password: ''
      });
    }

    render() {
      let {email, password} = this.state;
    let {isLoginPending, isLoginSuccess, loginError} = this.props;
        return (
            <Grid>
                <Row>
                <Col xsOffset={1} xs={10} smOffset={3} sm={6}>

                    <form className="loginForm" onSubmit={this.onSubmit}>
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
                                onChange={e => this.setState({email: e.target.value})}/>

                            <FormControl
                                className="loginInput"
                                type="text"
                                value={this.state.password}
                                placeholder="password"
                                onChange={e => this.setState({password: e.target.value})}/>

                            <FormControl.Feedback/>
                            <Button bsStyle="success" onClick={this.onSubmit}>Login</Button>
                        </FormGroup>
                        { isLoginPending && <div>Please wait...</div> }
                        { isLoginSuccess && <div>Success.</div> }
                        { loginError && <div>{loginError.message}</div> }
                    </form>

                    <Col xs={12} smOffset={1} sm={10}>
                    <Row>
                        <Col xs={12} sm={6} className='text-center'>
                            <Label bsStyle='warning'>Forgot Account?</Label>
                        </Col>
                        <Col xs={12} sm={6} className='text-center'>
                            <Label bsStyle='info'>New User</Label>
                        </Col>
                    </Row>
                    </Col>
                    
                </Col>
                </Row>
                
            </Grid>
        );
    }
}

const mapStateToProps = (state) => {
  return {
    isLoginPending: state.isLoginPending,
    isLoginSuccess: state.isLoginSuccess,
    loginError: state.loginError
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => dispatch(callLogin(email, password))
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Form);