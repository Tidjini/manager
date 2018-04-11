import React, { Component } from "react";
import { Text, View } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import firebase from "firebase";

//Libraries created
import reducers from "./reducers";
import LoginForm from "./components/LoginForm";

export default class App extends Component {
  componentWillMount() {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyARaurDwAw7x4YPYrRPjZuJS-I2MA3iuGM",
      authDomain: "manager-5c5ad.firebaseapp.com",
      databaseURL: "https://manager-5c5ad.firebaseio.com",
      projectId: "manager-5c5ad",
      storageBucket: "manager-5c5ad.appspot.com",
      messagingSenderId: "570153394706"
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
      // NOTE: we should give to the Provider an instance of stores (Redux) to connect with all tags => createStore()
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}
