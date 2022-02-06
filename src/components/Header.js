import React from "react";
import { Container } from "./styles/Container.styled";
import { HeaderStyled, Nav, Logo, Image } from "./styles/Header.styled";
import { Flex } from "./styles/Flex.styled";
import { Button } from "./styles/Button.styled";
const Header = () => {
  return (
    <HeaderStyled>
      <Container>
        <Nav>
          <Logo src='./images/dc_logo.png' />
          <Button>Explor Us!</Button>
        </Nav>
        <Flex>
          <div>
            <h1>Build the Community Your Fans Will Love</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit Deleniti
              maiores illo velit placeat unde dolore cumque atque, quidem
              voluptates recusandae porro numquam! Inventore? Lorem ipsum dolor
              sit.
            </p>
            <Button bg="#eededa" color="#860828">
              Make Your Desire With Us!
            </Button>
          </div>
          <Image src='./images/illustration-mockups.svg' alt="" />
        </Flex>
      </Container>
    </HeaderStyled>
  );
};

export default Header;
