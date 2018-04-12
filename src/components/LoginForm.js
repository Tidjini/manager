import React, { Component } from "react";
import { connect } from "react-redux";

import { Card, CardSection, Input, Button } from "./common";
import { emailChanged, passwordChanged } from "../actions";

class LoginForm extends Component {
  //helper functions
  onEmailChanged(text) {
    //call the action creator (it put in to the component props because of connect method)
    this.props.emailChanged(text);
  }

  onPasswordChanged(text) {
    this.props.passwordChanged(text);
  }
  render() {
    return (
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
        <CardSection>
          <Button>Login</Button>
        </CardSection>
      </Card>
    );
  }
}

//state is the global object: containe reducers
const mapsStateToProps = state => {
  const { email, password } = state.auth;
  return {
    email,
    password
  };
};

export default connect(mapsStateToProps, { emailChanged, passwordChanged })(
  LoginForm
);
