import React from "react";
import styled from "styled-components";
import Image from "../ui/Image";

const Wrapper = styled.div`
    width: calc(100% - 32px);
    padding: 16px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    border: 1px solid grey;
    border-radius: 8px;
    cursor: pointer;
    background: white;
    :hover {
        background: lightgrey;
    }
`;

const TitleText = styled.p`
    font-size: 20px;
    font-weight: 500;
`;

function HeroListItem(props) {
    const { hero, onClick } = props;

    return (
        <Wrapper onClick={onClick}>
            <Image src={hero.photo ? '/images/'+hero.photo : '/images/face-24px.svg'} alt={hero.name} />
            <TitleText>{hero.name}</TitleText>
        </Wrapper>
    );
}

export default HeroListItem;
