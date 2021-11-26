import React, { useEffect } from "react";
import { connect } from "react-redux";
import { ClipLoader } from "react-spinners";
import { faqRequest } from "../../Actions";
import PropTypes from 'prop-types';
import Faq from "../Views/Faq/Faq";

const FaqContainer = ({faq, getFaq}) => {
    useEffect(() => { getFaq() }, [])
    
    return (
        <div>
            {
                faq.length > 0 &&
                faq.map(faq => <Faq key={faq.id} {...faq} />)
            }
            {
                faq.length === 0 &&
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
    faq: PropTypes.arrayOf(PropTypes.object).isRequired,
    getFaq: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(FaqContainer);