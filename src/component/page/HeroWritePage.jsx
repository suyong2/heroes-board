import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../ui/Button';
import TextInput from '../ui/TextInput';
import Label from '../ui/Label';
import Image from '../ui/Image';

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
    display: flex;            /* flex 레이아웃 적용 */
    flex-direction: row;      /* 가로로 배치 */
    align-items: center;      /* 세로 방향 중앙 정렬 */
`;

const InputContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 16px;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end; /* Button을 우측 정렬 */
    width: 100%; /* Button이 오른쪽으로 붙도록 Container의 너비를 사용 */
    margin-top: 16px;
`;

const TitleText = styled.p`
    font-size: 24px;
    font-weight: bold;
    text-align: center;
`;

function HeroWritePage(props) {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [phoneNum, setPhoneNum] = useState('');
    const [photoFile, setPhotoFile] = useState(''); 

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
                    <Image src={photoFile ? '/images/'+photoFile : '/images/face-24px.svg'} alt={name} />
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
                </HeroContainer>
                <ButtonContainer>
                    <Button
                        title='수정하기'
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
