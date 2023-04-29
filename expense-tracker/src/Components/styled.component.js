import styled from "@emotion/styled";
import { Box, ListItem, Typography } from "@mui/material";

export const Container = styled(Box)`
  display: flex;
  & > div {
    flex: 1;
    padding: 10px;
  }
`;
export const Component = styled(Box)`
  display: flex;
  background: #fff;
  width: 800px;
  padding: 10px;
  border-radius: 20px;
  margin: auto;
  & > div {
    height: 70vh;
    width: 50%;
    padding: 10px;
  }
`;
export const Header = styled(Typography)`
  margin: 10px 0;
  font-size: 36px;
  color: blue;
  text-transform: uppercase;
`;

export const BalanceText = styled(Typography)`
  font-size: 25px;
  margin-bottom: 20px;
`;

export const TranContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  & > h5,
  & > div,
  & > button {
    margin-top: 30px;
  }
`;

export const Detail = styled(ListItem)`
  margin-top: 10px;
`;
