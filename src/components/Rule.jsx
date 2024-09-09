import React from 'react'
import styled from 'styled-components'

const Rule = () => {
    return (
        <RuleContainer>
            <h2>How to Play Dice Game</h2>
            <div className='text'>
                <p>Select any number</p>
                <p>Click on dice image</p>
                <p>after click on  dice  if selected number is equal to dice number you will get same point as dice {" "} </p>
                <p>if you get wrong guess then  2 point will be dedcuted </p>
            </div>
        </RuleContainer>
    )
}

export default Rule

const RuleContainer = styled.div`
background-color: #FBF1F1;
margin: 0 auto;
margin-top: 20px;
max-width: 794px;
padding: 20px;
p{
    size: 24px;
}
.text{
    margin-top: 24px;
}
`
