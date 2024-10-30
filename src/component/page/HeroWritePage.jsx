import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../ui/Button';
import TextInput from '../ui/TextInput';

const Wrapper = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    width: 20%;
    max-width: 720px;

    :not(:last-child) {
        margin-bottom: 16px;
    }
`;

const Label = styled.label`
    font-size: 16px;
    margin-right: 16px;
    width: 100px; /* Label에 고정 너비 설정 */
    line-height: 1.5;
`;

const InputContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 16px;
`;

const TitleText = styled.p`
    font-size: 24px;
    font-weight: bold;
    text-align: center;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end; /* Button을 우측 정렬 */
    width: 100%; /* Button이 오른쪽으로 붙도록 Container의 너비를 사용 */
    margin-top: 16px;
`;

function HeroWritePage(props) {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [phoneNum, setPhoneNum] = useState('');

    return (
        <Wrapper>
            <TitleText>연락처 등록</TitleText>
            <Container>
                <InputContainer>
                    <Label>이름:</Label>
                    <TextInput
                        value={name}
                        onChange={(event) => {
                            setName(event.target.value);
                        }}
                    />
                </InputContainer>
                <InputContainer>
                    <Label>전화번호:</Label>
                    <TextInput
                        value={phoneNum}
                        onChange={(event) => {
                            setPhoneNum(event.target.value);
                        }}
                    />
                </InputContainer>
                <ButtonContainer>
                    <Button
                        title='등록하기'
                        onClick={() => {
                            navigate('/');
                        }}
                    />                    
                </ButtonContainer>
            </Container>
        </Wrapper>
    );
}

export default HeroWritePage;
