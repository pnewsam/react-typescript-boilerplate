import styled from "styled-components";
import { Navbar } from "../Navbar";

type Props = {
  children: React.ReactNode;
};

const Main = styled.main`
  padding: 40px;
`;

export const Layout = ({ children }: Props) => {
  return (
    <>
      <Navbar></Navbar>
      <Main>{children}</Main>
    </>
  );
};
