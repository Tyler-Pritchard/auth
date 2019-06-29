import React, { Component }  from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = { loggedIn: false };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyAkDPnYxWqHYhbhofbeTDSE6WWCMdawoJA",
            authDomain: "auth-7e18c.firebaseapp.com",
            databaseURL: "https://auth-7e18c.firebaseio.com",
            projectId: "auth-7e18c",
            storageBucket: "auth-7e18c.appspot.com",
            messagingSenderId: "649394455084",
            appId: "1:649394455084:web:cb06790328fb218e"
          });

          firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
          });
    } 

    renderContent() {
        if (this.state.loggedIn) {
            return (
                <Button>
                    Log Out
                </Button>
            );
        }
        return <LoginForm />
    }

    renderContent() {
        if (this.state.loggedIn) {
            return (
                <Button>
                    Log Out
                </Button>
            )
        }

        return <LoginForm />
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>
        );
    }
}

export default App;
