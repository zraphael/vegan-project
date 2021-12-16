import React from 'react';
import styled from 'styled-components';

function AnimalsSection() {
    return (
        <Wrap>
            <LeftSection>
        
            </LeftSection>
            <RightSection>
                <p>Eles sentem tanto quanto nós, muitas vezes passando uma vida inteira de sofrimento e abusos.</p>
            </RightSection>
        </Wrap>
    )
}

export default AnimalsSection

const Wrap = styled.div`
    width: 100vw;
    height: 70vh;
    display: flex;
`

const LeftSection = styled.div`
    background-image: url("/images/cow2.jpg");
    width: 50vw;
    height: 70vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`

const RightSection = styled.div`
    width: 50vw;
    height: 70vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #F3D3B7;

    p {
        font-size: 36px;
    }
`