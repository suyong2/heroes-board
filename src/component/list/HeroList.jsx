import React from 'react';
import styled from 'styled-components';
import HeroListItem from './HeroListItem';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    :not(:last-child) {
        margin-bottom: 16px;
    }
`;

function HeroList(props) {
    const { heroes, onClickItem } = props;

    return (
        <Wrapper>
            {heroes.map((hero, index) => {
                return (
                    <HeroListItem
                        key={hero.id}
                        hero={hero}
                        onClick={() => {
                            onClickItem(hero);
                        }}
                    />
                );
            })}
        </Wrapper>
    );
}

export default HeroList;
