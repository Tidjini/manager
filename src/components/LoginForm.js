import React, { Component } from "react";
import { connect } from "react-redux";

import { Card, CardSection, Input, Button } from "./common";
import { emailChanged } from "../actions";

class LoginForm extends Component {
  //helper function
  onEmailChanged(text) {
    //call the action creator (it put in to the component props because of connect method)
    this.props.emailChanged(text);
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
          <Input secureTextEntry label="Password" placeholder="********" />
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
  return {
    email: state.auth.email
  };
};

export default connect(mapsStateToProps, { emailChanged })(LoginForm);
