import React, { useEffect } from "react";
import { connect } from "react-redux";
import { ClipLoader } from "react-spinners";
import { faqRequest } from "../../Actions";
import PropTypes from 'prop-types';
import Faq from "../Views/Faq/Faq";

const FaqContainer = props => {
    useEffect(() => {
        props.getFaq()
    }, [])
    
    return (
        <div>
            {
                props.faq.length > 0 &&
                props.faq.map(faq => <Faq key={faq.id} {...faq} />)
            }
            {
                props.faq.length === 0 &&
                <ClipLoader color="gray"/>
            }
        </div>
    );
}

const mapStateToProps = state => {
    return {
        faq: state.faqState,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getFaq: () => dispatch(faqRequest()),
    }
}

FaqContainer.propTypes = {
    faq: PropTypes.arrayOf(PropTypes.object),
    getFaq: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(FaqContainer);