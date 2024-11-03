import React, { useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import TextInput from '../ui/TextInput';
import Button from '../ui/Button';
import data from '../../data.json';
import Image from '../ui/Image';
import Label from '../ui/Label';

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

function HeroViewPage(props) {
    const navigate = useNavigate();
    const { heroId } = useParams();
    
    // heroId가 바뀌지 않는 한 data.find()는 한 번만 실행됩니다.
    const hero = useMemo(() => data.find((item) => item.id == heroId), []);

    // hero의 초기 데이터를 상태로 설정
    const [preview, setPreview] = useState(hero && hero.photo ? '/images/'+hero.photo : '/images/face-24px.svg');
    const [name, setName] = useState(hero ? hero.name : '');
    const [phoneNum, setPhoneNum] = useState(hero ? hero.phoneNum : '');

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageURL = URL.createObjectURL(file);
            setPreview(imageURL);
        }
    };

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
                    <div>
                        <div
                            style={{
                                width: '100px',
                                height: '100px',
                                border: '1px solid #ddd',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '10px',
                            }}
                        >
                            <img src={preview} alt="preview" style={{ width: '100%', height: '100%' }} />
                        </div>
                        <input type="file" accept="image/*" onChange={handleImageChange} />
                    </div>   
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

export default HeroViewPage;
