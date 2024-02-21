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

export const Notfication = styled.div`
  position: fixed;
  top: 20px;
  right: 100px;
  background-color: green;
  color: white;
  @media (max-width: 768px) {
    right: 10px; /* Adjust width for 3 items with equal gaps on smaller screens */
  }
`;
export const Remove = styled.div`
  position: absolute;
  top: 10px;
  right: 5px;
  @media (max-width: 768px) {
    bottom: 50px;
    right: 20px; /* Adjust width for 3 items with equal gaps on smaller screens */
  }
`;

export const ItemContainer = styled.div`
  width: calc((100% - 80px) / 4); /* Adjust width for 4 items with equal gaps */
  border: 1px solid;
  position: relative;
  box-sizing: border-box;
  padding-left: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  padding-bottom: 50px;
  .custome {
    background-color: none !important;
  }
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

  .ant-select-selector {
    background-color: transparent !important;
    border: none !important;
  }
`;

export const Title = styled.p`
  font-size: 16px;
  margin-bottom: 5px;
  max-width: 90%;
`;

export const Status = styled.p`
  font-size: 14px;
`;

export const FilterWrapper = styled.div`
  .ant-select {
    min-width: 130px;
    border: none !important;
    outline: none;
  }
  .ant-select-selector {
    border: none !important;
  }
  @media (max-width: 768px) {
    .ant-select {
      min-width: 100%;
    }
  }
`;

export const TimerButton = styled.div`
  width: 100px;
  padding: 2px;
  background-color: black;
  color: white;
  font-size: 14px;
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

export const TimerContainer = styled.div`
  position: absolute;
  bottom: 10px;
  width: 90%;
  @media (max-width: 768px) {
    bottom: 0px; /* Adjust width for 3 items with equal gaps on smaller screens */
  }
`;

export const TimerSection = styled.div`
  display: flex;
  box-sizing: border-box;
  border-bottom: 2;
  gap: 10px;
  align-items: center;
  @media (max-width: 768px) {
    padding: 10px 0;
    justify-content: space-between; /* Adjust width for 3 items with equal gaps on smaller screens */
  }
`;

export const Time = styled.div`
  min-height: 22px;
  padding-bottom: 5px;
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
