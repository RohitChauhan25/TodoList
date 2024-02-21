import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const TodoContainer = styled.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding-bottom: 20px;
`;

export const ItemContainer = styled.div`
  width: calc((100% - 80px) / 4); /* Adjust width for 4 items with equal gaps */
  border: 1px solid;
  box-sizing: border-box;
  padding-left: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  @media (max-width: 768px) {
    width: calc(
      (100% - 40px) / 2
    ); /* Adjust width for 3 items with equal gaps on smaller screens */
  }

  @media (max-width: 480px) {
    width: calc(
      100% - 20px
    ); /* Adjust width for single item with equal gap on even smaller screens */
  }
`;

export const Title = styled.p`
  font-size: 16px;
  margin-bottom: 5px;
`;

export const Status = styled.p`
  font-size: 14px;
  span {
    color: ${(props) => (props.color ? "green" : "red")};
  }
`;

export const FilterWrapper = styled.div`
  .ant-select {
    min-width: 130px;
  }
  @media (max-width: 768px) {
    .ant-select {
      min-width: 100%;
    }
  }
`;

export const TimerButton = styled.div`
  width: 100px;
  padding: 5px;
  background-color: black;
  color: white;
  text-align: center;
  border-radius: 10px;
  border: 1px solid black;
  transition: all 0.5s ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: black;
  }
  @media (max-width: 768px) {
    padding: 5px;
    width: 100%; /* Adjust width for 3 items with equal gaps on smaller screens */
  }
`;

export const FilterSection = styled.div`
  width: 90%;
  display: flex;
  box-sizing: border-box;
  padding-right: 20px;
  justify-content: space-between;
  gap: 10px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Productivity = styled.div`
  width: 90%;
  display: flex;
  box-sizing: border-box;
  padding-right: 20px;
  justify-content: flex-end;
  gap: 10px;
`;

export const TimerSection = styled.div`
  display: flex;
  box-sizing: border-box;
  gap: 10px;
  align-items: center;
  @media (max-width: 768px) {
    padding: 10px 0;
    justify-content: space-between; /* Adjust width for 3 items with equal gaps on smaller screens */
  }
`;

export const Session = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

export const WorkSession = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
  }
`;
