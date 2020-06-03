import styled from "styled-components/native";

export const Container = styled.View`
  margin-top: 25px;
  padding: 0 16px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

export const Options = styled.View`
  flex-direction: row;
`;

export const ScrollView = styled.ScrollView``;

const borderBottom = `
  border-bottom-width: 1px;
  border-bottom-color: #10c86e;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
`;

export const Label = styled.Text`
  color: ${(props) => (props.active ? "#10c86e" : "#fff")};
  font-size: 14px;
  margin-left: 12px;
  padding-bottom: 2px;

  ${(props) => props.active && borderBottom};
`;
