import styled from "styled-components";

export default function Footer({ contador }) {
  return (
    <ContainerFooter data-test="footer">
      {contador}/8 concluídos
    </ContainerFooter>
  );
}

const ContainerFooter = styled.div`
  width: 100%;
  height: 70px;
  background: #fff;
  box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
  left: 0;
  text-transform: uppercase;
  font-family: "Recursive", sans-serif;
  font-weight: 400;
  font-size: 18px;
`;
