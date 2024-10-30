import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import TextInput from '../ui/TextInput';
import Button from '../ui/Button';
import data from '../../data.json';

const Wrapper = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    width: 100%;
    max-width: 720px;

    :not(:last-child) {
        margin-bottom: 16px;
    }
`;

const HeroContainer = styled.div`
    padding: 8px 16px;
    border: 1px solid grey;
    border-radius: 8px;
`;

const NameText = styled.p`
    font-size: 28px;
    font-weight: 500;
`;

const PhoneNumText = styled.p`
    font-size: 20px;
    line-height: 32px;
    white-space: pre-wrap;
`;

function HeroViewPage(props) {
    const navigate = useNavigate();
    const { heroId } = useParams();

    const hero = data.find((item) => {
        return item.id == heroId;
    });

    return (
        <Wrapper>
            <Container>
                <Button
                    title='뒤로 가기'
                    onClick={() => {
                        navigate('/');
                    }}
                />
                <HeroContainer>
                    <NameText>{hero.name}</NameText>
                    <PhoneNumText>{hero.phoneNum}</PhoneNumText>
                </HeroContainer>
            </Container>
        </Wrapper>
    );
}

export default HeroViewPage;
