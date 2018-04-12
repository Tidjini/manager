import React, { Component } from "react";
import { Text, View } from "react-native";
import { connect } from "react-redux";

import { Card, CardSection, Input, Button, Spinner } from "./common";
import { onNameChanged, onPhoneChanged, onSave } from "../actions";

class EmployeeCreate extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input label="Name" placeholder="Tidjini Messaoudi" />
        </CardSection>
        <CardSection>
          <Input label="Phone" placeholder="0541 72 64 72" />
        </CardSection>

        <CardSection>
          <Button>Save</Button>
        </CardSection>
      </Card>
    );
  }
}

export default connect(null, { onNameChanged, onPhoneChanged, onSave })(
  EmployeeCreate
);
