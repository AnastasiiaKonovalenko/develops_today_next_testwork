import React from "react";
import styled from "styled-components";

const HeaderComponent = styled.header`
  height: 450px;
  background: url("https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60")
    bottom;
  background-size: cover;
  width: 100vw;
  border: 1px solid transparent;
  color: #fff;
  text-align: center;
`;

const Heading = styled.header`
  font-weight: 700;
  font-size: 60px;
  margin-right: 20px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
`;

const Header: React.FunctionComponent = () => (
  <HeaderComponent>
    <Container>
      <Heading>Simple blog</Heading>
      <span>Share your thoughts with the world...</span>
    </Container>
  </HeaderComponent>
);

export default Header;
