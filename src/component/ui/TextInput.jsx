import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
    width: calc(100% - 32px);
    font-size: 16px;
    line-height: 20px;
    height: 24px; /* Label과 높이 일치 */
`;

function TextInput(props) {
    const { value, onChange } = props;

    return <StyledInput value={value} onChange={onChange} />;
}

export default TextInput;
