import React from "react";
import {Switch, Route} from 'react-router-dom';
import Footer from './Components/Views/Footer/Footer';
import ProtectedRoute from "./Components/ProtectedRoute";
import HeaderContainer from "./Components/Containers/HeaderContainer";
import CatalogContainer from "./Components/Containers/CatalogContainer";
import MoviePageContainer from "./Components/Containers/MoviePageContainer";
import FaqContainer from "./Components/Containers/FaqContainer";
import LoginContainer from "./Components/Containers/LoginContainer";
import RegistrationContainer from "./Components/Containers/RegistrationContainer";
import ProfileContainer from "./Components/Containers/ProfileContainer";
import ErrorPage from './Components/Views/ErrorPage/ErrorPage';
import AdminRoute from "./Components/AdminRoute";
import AdminPageContainer from "./Components/Containers/AdminPageContainer";

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
                <ProtectedRoute
                    path={'/profile'}
                    component={ProfileContainer}
                />
                <AdminRoute
                    path={'/admin'}
                    component={AdminPageContainer}
                />
                <Route 
                    render={() =>
                        <ErrorPage/>
                    }
                />
          </Switch>
          <Footer/>
      </div>
  );
}

export default App;
