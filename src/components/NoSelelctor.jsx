import styled from "styled-components";

const NoSelector = ({ setError, error, setSelectNumber, selectNumber }) => {
    const boxNumber = [1, 2, 3, 4, 5, 6];
    const handleClick = (value) => {
        setSelectNumber(value)
        setError("")
    }
    return (
        <NoSelecterContainer>
            <p style={{ color: "red" }}>{error}</p>
            <div className="flex">
                {boxNumber.map((value, index) => (
                    <Box
                        isSelected={value === selectNumber}
                        onClick={() => handleClick(value)}
                        key={index}
                    >
                        {value}
                    </Box>
                ))}
            </div>
            <p>Select Number</p>
        </NoSelecterContainer>
    );
};

export default NoSelector;
const NoSelecterContainer = styled.div`
display: flex;
flex-direction: column;
align-items: end;
.flex{
    display: flex;
    gap: 24px;

}
p{
    font-size: 24px;
    font-weight: 700px;
}
`

const Box = styled.div`
    height: 72px;
    width: 72px;
    border: 1px solid black;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: 700;
    background-color: ${(props) => (props.isSelected ? "black" : "white")};
    color: ${(props) => (props.isSelected ? "white" : "black")};
`;
