import React from "react";
import CardWrapper from "../../common/Card";

const withFunction = (Component) => (props) => {
    const onLogin = () => {
        localStorage.setItem("auth", "token");
    };
    const onLogOut = () => {
        localStorage.removeItem("auth");
    };
    const isAuth = localStorage.getItem("auth");
    console.log(props);
    return (
        <>
            {" "}
            <CardWrapper>
                <Component
                    {...props}
                    isAuth={isAuth}
                    onLogin={onLogin}
                    onLogOut={onLogOut}
                />
            </CardWrapper>
        </>
    );
};

export default withFunction;
