import React from 'react';

import { View, SafeAreaView } from 'react-native';

// Modules
import { Switch, Route, Router, Redirect } from './modules/Routing';
import { StatusBar }  from './modules/StatusBar';

// State
import { ApolloProvider } from 'react-apollo';
import { Provider } from 'react-redux';
import client from './state/client';
import store from './state/store';

// Layout
import Flex from './layout/Flex';

// Pages
import LogInPage from './pages/LogInPage';
import HomePage from './pages/HomePage';

const App = props => {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <SafeAreaView
          style={{
            flex: 1,
            marginTop: StatusBar.currentHeight,
            backgroundColor: 'white'
          }}
        >
          <Router>
            <Flex
              flex={1}
            >
              <Switch>
                <Route
                  path='/home'
                  component={HomePage}
                />
                <Redirect
                  from='/'
                  to='/home'
                />
              </Switch>
            </Flex>
          </Router>
        </SafeAreaView>
      </Provider>
    </ApolloProvider>
  )
}

export default App
