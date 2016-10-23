import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from './common';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginForm extends Component {
  constructor() {
    super();
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onButtonPress = this.onButtonPress.bind(this);
  }
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            value={this.props.email}
            onChangeText={this.onEmailChange}
            label="Email"
            placeholder="email@gmail.com"
          />
        </CardSection>
        <CardSection>
          <Input
            value={this.props.password}
            onChangeText={this.onPasswordChange}
            secureTextEntry
            label="Password"
            placeholder="password"
          />
        </CardSection>
        <CardSection>
          <Button onPress={this.onButtonPress}>
            Login
          </Button>
        </CardSection>
      </Card>
    );
  }
  onEmailChange(text) {
    this.props.emailChanged(text);
  }
  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }
  onButtonPress() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }
}

const mapStateToProps = ({ auth }) => {
  const { email, password, error } = auth;

  return { email, password, error };
};

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser,
})(LoginForm);
