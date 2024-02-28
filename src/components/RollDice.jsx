
import styled from "styled-components"

const RollDice = ({currentDice, rollDice}) => {

   
    


  return (
    <> 
    <DiceContainer>
        <div className="dice" onClick={rollDice}>
            <img src={`./images/dice_${currentDice}.png`} alt="dice1" />
        </div>
        <p>Click on Dice to roll</p>
    </DiceContainer>
    </>
  )
}

export default RollDice
const DiceContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 48px;

.dice{
    cursor: pointer;
}
p{
    font-size: 24px;
}
`;