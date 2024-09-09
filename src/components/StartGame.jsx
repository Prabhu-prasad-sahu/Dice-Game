import React from 'react'
import styled from 'styled-components';
import { Button } from '../styled/Button';
const StartGame = ({ toggle }) => {
    return (
        <Container>
            <div>
                <img src="/images/Dice.png" alt="Dice image" />
            </div>
            <div className='content'>
                <h1>DICE GAME</h1>
                <Button onClick={toggle}>Play Now</Button>
            </div>
        </Container>
    )
};
const Container = styled.div`
max-width: 1182px;
margin: 0 auto;
display: flex;
align-items: center;
.content{
    h1{
        font-size: 96px;
        white-space: nowrap;
    }
}
`
export default StartGame