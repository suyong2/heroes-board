import React from 'react';
import styled from 'styled-components';

const StyledImage = styled.img`
    width: 100px;
    height: 100px;
    object-fit: cover; /* 이미지 비율 유지하면서 잘림 */
    margin-right: 16px;  /* 이미지와 텍스트 사이에 간격 추가 */
`;

function Image(props) {
    const {src, alt} = props;
    return <StyledImage src={src} alt={alt}/>;
}

export default Image;