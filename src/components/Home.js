import React from 'react';
import styled from 'styled-components';
import InitialSection from './InitialSection';
import AnimalsSection from './AnimalsSection';
import InfoSection from './InfoSection';

function Home() {
    return (
        <Container>
            <InitialSection />
            <InfoSection />
            <AnimalsSection />
        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;
`