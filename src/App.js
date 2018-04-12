import React, { Component } from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import firebase from "firebase";
// NOTE: we are wirring up a middle ware for redux
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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      // NOTE: we should give to the Provider an instance of stores (Redux) to connect with all tags => createStore()
      //applaying the Reduxthunk middleware to store
      //second arg for init state (if we want top pass it)
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}
