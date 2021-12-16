import React from 'react';
import styled from 'styled-components';

function Header() {
    return (
        <Container>
            <a>
                <img src="/images/lightlive-svg-logo.svg" alt="Logo Lightlive" style={{width: "8%"}}/>
            </a>
            <Links>
                <a href="#">Animais</a>
                <a href="#">Saúde</a>
                <a href="#">Meio Ambiente</a>
                <a href="#">Economia</a>
            </Links>
        </Container>
    )
}

export default Header

const Container = styled.div`
    background-color: white;
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;

    a {
        text-decoration: none;
        color: black;
    }
`

const Links = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    a {
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: no-wrap;
    }

    @media(max-width: 768px) {
        display: none;
    }
`