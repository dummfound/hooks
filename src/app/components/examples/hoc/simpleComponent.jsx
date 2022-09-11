import React from "react";
import PropTypes from "prop-types";
const SimpleComponent = ({ isAuth, onLogOut, onLogin }) => {
    return (
        <>
            {isAuth ? (
                <button onClick={onLogOut} className="btn btn-primary">
                    Выйти
                </button>
            ) : (
                <button onClick={onLogin} className="btn btn-primary">
                    Войти
                </button>
            )}
        </>
    );
};
SimpleComponent.propTypes = {
    onLogin: PropTypes.func,
    onLogOut: PropTypes.func,
    isAuth: PropTypes.string
};
export default SimpleComponent;
