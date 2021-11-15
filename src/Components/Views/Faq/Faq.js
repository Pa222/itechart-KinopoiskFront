import React from "react";
import PropTypes from 'prop-types';
import useStyles from "./styles";

const Faq = (props) => {

    const classes = useStyles();

    return (
        <div className={classes.faq__container}>
            <h1 className={classes.faq__question}>Q {props.question}</h1>
            <h2 className={classes.faq__answer}>A {props.answer}</h2>
        </div>
    );
}

Faq.propTypes = {
    question: PropTypes.string,
    answer: PropTypes.string,
}

export default Faq;