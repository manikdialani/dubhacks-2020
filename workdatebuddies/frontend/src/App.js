import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Settings from './components/Settings';
import Chat from './components/Chat';
import NotFound from './components/NotFound';

class App extends Component {

  // The below code is an example to fetch from the Express server
  state = {
    data: null,
  }

  componentDidMount() {
    this.callBackendAPI()
      .then(res => this.setState({data : res.express}))
      .catch(err => console.log(err));
  }

  callBackendAPI = async() => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  }

  render() {
    return (
        <main>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/settings" component={Settings} />
            <Route path="/chat" component={Chat} />
            <Route component={NotFound} />
          </Switch>
        </main>
      );
  }
}

export default App;
