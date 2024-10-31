import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
    width: calc(80%);
    font-size: 16px;
    line-height: 20px;
    height: 24px; /* Label과 높이 일치 */
    margin-right: 50px;
`;

function TextInput(props) {
    const { value, onChange } = props;

    return <StyledInput value={value} onChange={onChange} />;
}

export default TextInput;
