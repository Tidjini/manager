import React, { Component } from "react";
import { Card, CardSection, Input, Button } from "./common";

export default class LoginForm extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input label="Email" placeholder="example@mail.com" />
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
