import React, { useEffect, useState } from 'react'
import TotalScore from './TotalScore'
import NoSelelctor from './NoSelelctor'
import styled from 'styled-components'
import RoleDice from './RoleDice'
import { Button, OutLineBtn } from '../styled/Button'
import Rule from './Rule'


const GamePlay = () => {
    const [currentDice, setCurrentDice] = useState(1);
    const [selectNumber, setSelectNumber] = useState();
    const [score, setScore] = useState(0);
    const [error, setError] = useState("");
    const [showRule, setShowRule] = useState(false)


    function getRandomArbitrary(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    };
    const hendleClick = () => {
        if (!selectNumber) {
            setError("You have not selected any number");
            return;
        };
        const getNo = getRandomArbitrary(1, 7);
        setCurrentDice(getNo);
        if (selectNumber === getNo) {
            setScore((prev) => prev + getNo)
        } else {
            setScore((prev) => prev - 2)
        }
    };
    const handleResetClick = () => {
        setScore(0)
    }


    return (
        <NavBar>
            <div className='top_section'>
                <TotalScore score={score} />
                <NoSelelctor selectNumber={selectNumber} setSelectNumber={setSelectNumber} setError={setError} error={error} />
            </div>
            <div>
                <RoleDice currentDice={currentDice} hendleClick={hendleClick} setScore={setScore} />
            </div>
            <div className="Btn">
                <Button onClick={handleResetClick}>Reset Score</Button>
                <OutLineBtn onClick={() => setShowRule((prev) => !prev)}>{showRule ? "Hide" : "Show"} Rule</OutLineBtn>
            </div>
            <div className="rule_container" >
                {showRule && <Rule />}
            </div>
        </NavBar>
    )
}

export default GamePlay

const NavBar = styled.div`
padding-top: 20px;

.top_section{
    display: flex;
    justify-content: space-around;
    align-items: end;

}
.Btn{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: 24px;
    }
    .rule_container {
        max-height: 300px; /* Set a limit for the Rule container if needed */
        overflow-y: auto; /* Enable scrolling only for this section */
    }
`