import React from 'react';
import styled from 'styled-components';

function InitialSection() {
    return (
        <Wrap>
        </Wrap>
    )
}

export default InitialSection

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url("/images/cow.jpg");
`