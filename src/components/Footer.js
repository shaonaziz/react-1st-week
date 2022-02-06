import React from "react";
import SocialIcons from "./SocialIcons";
import { Container } from "./styles/Container.styled";
import { Flex } from "./styles/Flex.styled";
import { StyledFooter } from "./styles/Footer.styled";
const Footer =()=>{
    return(
        <StyledFooter>
        <Container>
            <h1>Dcastalia Limited</h1>
           
            <Flex>
                <ul>
                    <li>
                       House 91, Road 04,
                       Block B, Banani, Dhaka 1213
                       Bangladesh 
                    </li>
                    <li>
                    Phone: +880 1400 999666
                    </li>
                    <li>
                    Email: info@dcastalia.com
                    </li>
                </ul>
                <ul>
                    <li>About us</li>
                    <li>What We DO?</li>
                    <li>FAQ</li>
                </ul>
                <ul>
                    <li>Contact us</li>
                    <li>Blog</li>
                    <li>Career</li>
                </ul>
                <SocialIcons/>
            </Flex>
            <p> &copy; 2022 Dcastalia. All rights reserved</p>
        </Container>
        </StyledFooter>
    )
}

export default Footer;