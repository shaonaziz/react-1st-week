import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=M+PLUS+Code+Latin:wght@200&family=Mochiy+Pop+P+One&family=Montserrat:ital@0;1&family=Oswald:wght@200&family=Passion+One:wght@700&family=Readex+Pro:wght@500&family=Roboto&family=Tangerine:wght@700&family=Zen+Antique&display=swap');

*{
    box-sizing: border-box;
}

body{
    background-color:${({ theme }) => theme.colors.body};
    color: hsl(192,100%,9%);
    font-family: 'M PLUS Code Latin', sans-serif;
    font-family: 'Mochiy Pop P One', sans-serif;
    font-size: 1.15em;
    margin: 0;
}

p{
    opacity: 0.6;
    line-height: 1.5;
}

img{
    max-width: 100%;
}

`;
export default GlobalStyles;
