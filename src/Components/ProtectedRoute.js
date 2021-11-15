import React from "react";
import { Redirect, Route } from "react-router";
import { connect } from "react-redux";

const ProtectedRoute = ({component: Comp, ...rest}) => {
    return (
        <Route
            {...rest}
            render={props => {
                if (rest.authorized){
                    return <Comp {...props} />
                }
                return <Redirect to={{
                    pathname: '/',
                }} />
            }}
        />
    );
}

const mapStateToProps = state => {
    return {
        authorized: state.userState.authorized,
    }
} 

export default connect(mapStateToProps, null)(ProtectedRoute);