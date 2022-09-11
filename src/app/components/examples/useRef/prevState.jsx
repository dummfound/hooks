import React, { useEffect, useRef, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
const PrevStateExample = () => {
    const prevState = useRef("");
    const [otherState, setOtherState] = useState("false");
    const toggleOtherState = () => {
        setOtherState((prevState) =>
            prevState === "false" ? "true" : "false"
        );
    };
    useEffect(() => {
        prevState.current = otherState;
    }, [otherState]);
    return (
        <CardWrapper>
            <SmallTitle>Предыдущие состоение</SmallTitle>
            <p>prevState: {prevState.current}</p>
            <p>currentState : {otherState}</p>
            <button onClick={toggleOtherState} className="btn btn-primary">
                click
            </button>
        </CardWrapper>
    );
};

export default PrevStateExample;
