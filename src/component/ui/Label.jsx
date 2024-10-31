import React from 'react';
import styled from 'styled-components';

const StyledLabel = styled.label`
    font-size: 16px;
    margin-right: 16px;
    width: 100px; /* Label에 고정 너비 설정 */
    line-height: 1.5;
`;

function Label(props) {
    return <StyledLabel>{props.children}</StyledLabel>;
}

export default Label;