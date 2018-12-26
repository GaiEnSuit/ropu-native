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

// Handlers
import LogInModalHandler from './handlers/LogInModalHandler';

// Modals
import LogInModal from './modals/LogInModal';

// Pages
import LogInPage from './pages/LogInPage';
import HomePage from './pages/HomePage';
import CharacterSelectionPage from './pages/CharacterSelectionPage';

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
          {/* Handlers Here */}
          <LogInModalHandler />
          <Router>
            <Flex
              flex={1}
            >
              <Switch>
                <Route
                  path='/home'
                  component={HomePage}
                />
                <Route
                  path='/player/characterlist'
                  component={CharacterSelectionPage}
                />
                <Redirect
                  from='/'
                  to='/home'
                />
              </Switch>
              {/* Modals Here */}
              <LogInModal />
            </Flex>
          </Router>
        </SafeAreaView>
      </Provider>
    </ApolloProvider>
  )
}

export default App
