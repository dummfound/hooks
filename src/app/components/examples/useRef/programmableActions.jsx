import React, { useRef } from "react";
import Divider from "../../common/divider";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
const ProgrammableActionsExample = () => {
    const inputRef = useRef();
    const handleClick = () => {
        inputRef.current.focus();
    };
    const handleClickWidth = () => {
        inputRef.current.style.width = "100px";
    };

    return (
        <CardWrapper>
            <SmallTitle className="card-title">
                Программируемые действия и свойства
            </SmallTitle>
            <Divider />
            <label htmlFor="email" className="form-laber">
                email:
            </label>
            <input
                ref={inputRef}
                id="email"
                type="email"
                className="form-control"
            />
            <button className="btn btn-primary" onClick={handleClick}>
                Фокус
            </button>
            <button className="btn btn-black" onClick={handleClickWidth}>
                Изменения размера
            </button>
        </CardWrapper>
    );
};

export default ProgrammableActionsExample;
