import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, View } from "react-native";

import { Card, CardSection, Input, Button, Spinner } from "./common";
import { emailChanged, passwordChanged, loginUser } from "../actions";

class LoginForm extends Component {
  //helper functions
  onEmailChanged(text) {
    //call the action creator (it put in to the component props because of connect method)
    this.props.emailChanged(text);
  }

  onPasswordChanged(text) {
    this.props.passwordChanged(text);
  }

  onLogin() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }

  renderError() {
    if (this.props.error) {
      return (
        <View style={{ backgroundColor: "white" }}>
          <Text
            style={{
              color: "red",
              fontSize: 20,
              alignSelf: "center",
              paddingVertical: 8
            }}
          >
            {this.props.error}
          </Text>
        </View>
      );
    }
  }
  renderButton() {
    if (this.props.loading) {
      return <Spinner />;
    }
    return <Button onPress={this.onLogin.bind(this)}>Login</Button>;
  }

  render() {
    return (
      <View>
        <Card>
          <CardSection>
            <Input
              label="Email"
              placeholder="example@mail.com"
              value={this.props.email}
              onChangeText={this.onEmailChanged.bind(this)}
            />
          </CardSection>
          <CardSection>
            <Input
              secureTextEntry
              label="Password"
              placeholder="********"
              value={this.props.password}
              onChangeText={this.onPasswordChanged.bind(this)}
            />
          </CardSection>
          {this.renderError()}

          <CardSection>{this.renderButton()}</CardSection>
        </Card>
      </View>
    );
  }
}

//state is the global object: containe reducers
const mapsStateToProps = state => {
  const { email, password, user, error, loading } = state.auth;
  return {
    email,
    password,
    user,
    error,
    loading
  };
};

export default connect(mapsStateToProps, {
  emailChanged,
  passwordChanged,
  loginUser
})(LoginForm);
