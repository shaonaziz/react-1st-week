import styled from "styled-components";

export const StyledFooter = styled.footer`
@import url('https://fonts.googleapis.com/css2?family=M+PLUS+Code+Latin:wght@200&family=Mochiy+Pop+P+One&family=Montserrat:ital@0;1&family=Noto+Sans&family=Oswald:wght@200&family=Passion+One:wght@700&family=Poppins:wght@300&family=Readex+Pro:wght@500&family=Roboto&family=Tangerine:wght@700&family=Zen+Antique&display=swap');
  background-color: ${({ theme }) => theme.colors.footer};
  color: #fff;
  padding: 100px 0 60px;

  h1 {
    font-family: 'Noto Sans', sans-serif;
    margin-left:20px;
  }

  ul {
    list-style-type: none;
    padding: 20px;
  }

  ul li {
    margin-bottom: 20px;
  }

  p {
    text-align: center;
    margin-top: 12px;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    text-align: center;
    ul {
      padding: 0;
    }
    p {
      text-align: center;
    }
  }
`;
