import styled from "styled-components/native";

export const Container = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    alignItems: "flex-start",
    paddingLeft: 16,
    paddingTop: 16,
  },
}))`
  background: #1e222b;
  height: 130px;
`;

export const Option = styled.TouchableOpacity`
  width: 80px;
  height: 100px;
  margin-right: 16px;
  align-items: center;
`;

export const Image = styled.Image`
  width: 56px;
  height: 56px;
  border-width: 2px;
  border-color: #fff;
  border-radius: 100px;
`;

export const Label = styled.Text`
  color: #fff;
  font-weight: bold;
  margin-top: 8px;
  font-size: 12px;
  text-align: center;
`;
