import styled from "styled-components";

export const ContainerCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  width: calc(50% + 100px);
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  p {
    font-size: 16px;
    font-family: "Recursive", sans-serif;
    color: ${({ icon, firstIcon, secondIcon, thirdIcon }) =>
      icon === firstIcon
        ? "#FF3030"
        : icon === secondIcon
        ? "#FF922E"
        : icon === thirdIcon
        ? "#2FBE34"
        : "#333"};
    text-decoration: ${({ icon }) => (!icon ? "none" : "line-through")};
    font-weight: 700;
  }
`;

export const OpenCard = styled(ContainerCard)`
  flex-direction: column;
  align-items: center;
  background-color: #ffffd4;
  align-items: flex-start;
  min-height: 131px;
  gap: 15px;
  p {
    text-align: left;
    font-size: 18px;
    font-weight: 400;
    color: #333;
  }
  div {
    gap: 10px;
    width: 100%;
    display: flex;
    justify-content: ${({ showButton }) =>
      !showButton ? `center` : "space-between"};
    flex-direction: ${({ showButton }) => (!showButton ? `column` : "row")};
    ${({ showButton }) => !showButton && `align-items: flex-end;`}
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 37px;
  border-radius: 5px;
  border: none;
  font-size: 12px;
  color: #fff;
  overflow: hidden;
  font-family: "Recursive", sans-serif;
`;

export const DontRemember = styled(Button)`
  background-color: #ff3030;
`;
export const AlmostRemember = styled(Button)`
  background-color: #ff922e;
`;

export const Zap = styled(Button)`
  background-color: #2fbe34;
`;
