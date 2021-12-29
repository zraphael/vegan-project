import React from 'react';
import styled from 'styled-components';

function Header() {
    return (
        <Container>
            <img src="/images/lightlive-svg-logo.svg" alt="Logo Lightlive" style={{width: "8%"}}/>
            <a href="#">Animais</a>
            <a href="#">Saúde</a>
            <a href="#">Meio Ambiente</a>
            <a href="#">Economia</a>
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
    justify-content: flex-start;
    align-content: center;
    padding: 0 20px;
    z-index: 1;

    a {
        flex-grow: 1;
        text-decoration: none;
        color: black;
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
    }

    @media(max-width: 768px) {
        display: none;
    }
`
