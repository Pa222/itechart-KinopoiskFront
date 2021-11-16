import React from "react";
import PropTypes from 'prop-types';
import { Redirect, Route } from "react-router";
import { connect } from "react-redux";

const AdminRoute = ({component: Comp, ...rest}) => {
    return (
        <Route
            {...rest}
            render={props => {
                if (rest.authorized && rest.role === "Admin"){
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
        role: state.userState.role,
    }
} 

AdminRoute.propTypes = {
    authorized: PropTypes.bool,
    role: PropTypes.string,
}

export default connect(mapStateToProps, null)(AdminRoute);