import styled from "styled-components/native";

export const Container = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: 16,
  },
}))``;

export const Option = styled.TouchableOpacity`
  background: ${({ bgColor }) => bgColor};
  padding: 15px;
  width: 140px;
  height: 190px;
  border-radius: 8px;
  justify-content: space-between;
  margin-right: 10px;
`;

export const Title = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;

export const Img = styled.Image`
  align-self: center;
`;
