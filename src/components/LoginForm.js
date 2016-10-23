import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, StyleSheet } from 'react-native';
import { Card, CardSection, Input, Button, Spinner } from './common';
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

        <Text style={styles.errorTextStyle}>
          {this.props.error}
        </Text>

        <CardSection>
          {this.renderButton()}
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
  renderButton() {
    if (!this.props.loading) {
      return (
        <Button onPress={this.onButtonPress}>
          Login
        </Button>
      );
    }
    return (
      <Spinner />
    );
  }
}

const styles = StyleSheet.create({
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: '#FF3B30'
  }
});

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;

  return { email, password, error, loading };
};

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser,
})(LoginForm);
