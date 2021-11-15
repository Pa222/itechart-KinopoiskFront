import React from "react";
import {Switch, Route} from 'react-router-dom';
import HeaderContainer from "./Components/Containers/HeaderContainer";
import CatalogContainer from "./Components/Containers/CatalogContainer";
import MoviePageContainer from "./Components/Containers/MoviePageContainer";
import FaqContainer from "./Components/Containers/FaqContainer";
import LoginContainer from "./Components/Containers/LoginContainer";
import RegistrationContainer from "./Components/Containers/RegistrationContainer";
import ErrorPage from './Components/Views/ErrorPage/ErrorPage';

const App = () => {
  return (
      <div>
          <HeaderContainer/>
          <Switch>
                <Route 
                    exact
                    path={['/', '/index']}
                    render={() =>
                        <CatalogContainer/>
                    }
                />
                <Route 
                    path={'/movie'}
                    render={() =>
                        <MoviePageContainer/>
                    }
                />
                <Route 
                    path={'/faq'}
                    render={() =>
                        <FaqContainer/>
                    }
                />
                <Route
                    path={'/login'}
                    render={() => 
                        <LoginContainer/>
                    }
                />
                <Route
                    path={'/register'}
                    render={() => 
                        <RegistrationContainer/>
                    }
                />
                <Route 
                    render={() =>
                        <ErrorPage/>
                    }
                />
              {/* 
              
              
              <ProtectedRoute
                  path={'/profile'}
                  component={ProfileContainer}
              />
               */}
          </Switch>
      </div>
  );
}

export default App;
