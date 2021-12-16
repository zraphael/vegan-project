import React from 'react';
import styled from 'styled-components';

function InfoSection() {
    return (
        <Wrap>
            <p>A vida deles não têm sido fácil, mas temos certeza que você pode ajudar nisso.</p>
        </Wrap>
    )
}

export default InfoSection

const Wrap = styled.div`
    width: 100vw;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
        font-size: 48px;
    }
`