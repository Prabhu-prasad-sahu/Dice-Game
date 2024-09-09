
import styled from "styled-components"
// import Buttons from "./Button";
import { Button } from '../styled/Button';

const RoleDice = ({ setScore, currentDice, hendleClick }) => {

    return (
        <DiceContainer>
            <div className="dice" onClick={hendleClick}>
                <img src={`/images/Dice/dice_${currentDice}.png`} alt="" />
            </div>
            <p>Click on Dice To Role</p>
        </DiceContainer>
    )
}

export default RoleDice

const DiceContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 48px;
    flex-direction: column;
    align-items: center;
    .dice{
        cursor: pointer;
    }
    p{
        font-size: 24px;
    }

`