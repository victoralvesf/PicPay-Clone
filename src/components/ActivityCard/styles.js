import styled from "styled-components/native";

export const Card = styled.View`
  background: #1e222b;
  border-radius: 8px;
  padding: 18px;
  margin-bottom: 16px;
`;

export const CardHeader = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

export const Description = styled.Text`
  color: #ccc;
  font-size: 14px;
  margin-left: 15px;
`;

export const Bold = styled.Text`
  color: #fff;
`;

export const CardFooter = styled.View`
  margin-top: 25px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Details = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Divider = styled.View`
  margin: 0 10px;
  width: 1px;
  height: 13px;
  background: rgba(255, 255, 255, 0.4);
`;

export const Value = styled.Text`
  color: #ff5175;
  font-size: 13px;
`;

export const Period = styled.Text`
  font-size: 12px;
  color: #ccc;
  margin-left: 6px;
`;

export const Actions = styled.View`
  flex-direction: row;
  align-items: center;
  width: 96px;
  justify-content: space-between;
`;

export const Option = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const OptionLabel = styled.Text`
  color: #bababa;
  margin-left: 4px;
  font-size: 14px;
`;
