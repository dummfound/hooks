import React from "react";
import CardWrapper from "../../common/Card";
import PropTypes from "prop-types";

const ComponentList = ({ order }) => {
    return (
        <CardWrapper>
            <h1>{order}</h1>
        </CardWrapper>
    );
};

ComponentList.propTypes = {
    order: PropTypes.string
};

export default ComponentList;
