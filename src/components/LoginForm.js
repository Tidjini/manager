import React, { Component } from "react";
import { Card, CardSection, Input, Button } from "./common";

import actions from "../actions";

export default class LoginForm extends Component {
  //helper function
  onEmailChanged(text) {}
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="example@mail.com"
            onChangeText={this.onEmailChanged.bind(this)}
          />
        </CardSection>
        <CardSection>
          <Input secureTextEntry label="Password" placeholder="********" />
        </CardSection>
        <CardSection>
          <Button>Login</Button>
        </CardSection>
      </Card>
    );
  }
}
