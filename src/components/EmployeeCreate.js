import React, { Component } from "react";
import { Text, View } from "react-native";
import { connect } from "react-redux";

import { Card, CardSection, Input, Button, Spinner } from "./common";
import { changeName, changePhone, save } from "../actions";

class EmployeeCreate extends Component {
  onNameChanged(text) {
    this.props.changeName(text);
  }

  onPhoneChanged(text) {
    this.props.changePhone(text);
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeholder="Tidjini Messaoudi"
            value={this.props.name}
            onChangeText={this.onNameChanged.bind(this)}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Phone"
            placeholder="0541 72 64 72"
            value={this.props.phone}
            onChangeText={this.onPhoneChanged.bind(this)}
          />
        </CardSection>

        <CardSection>
          <Button>Save</Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const { name, phone } = state.createEmployee;
  return { name, phone };
};

export default connect(mapStateToProps, {
  changeName,
  changePhone,
  save
})(EmployeeCreate);
