import styled from 'styled-components';

export const Head  = styled.header`
  /* @import url('https://fonts.googleapis.com/css2?family=Baloo+2'); */

    background-color: #FECD00;
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-content: center;
    padding: 5px 10px;
    font-family: 'Baloo 2', sans-serif;
    -webkit-box-shadow: 0px 11px 15px -17px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 11px 15px -17px rgba(0,0,0,0.75);
    box-shadow: 0px 11px 15px -17px rgba(0,0,0,0.75);

    a {
        text-decoration: none;
        color: #006A88;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-content: center;
        padding: 5px 10px;
    }
`;

export const Logo = styled.div`
    margin-left: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px 10px;
    font-size: 2rem;
    font-weight: bolder;
    color: #006A88;
`;

export const MenuOpt = styled.div`
    margin-right: 30px;
    padding: 5px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
`;

export const About = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 100px;

    h1 {
        color: #006A88;
        font-weight: bold;
    }

    h2 {
        font-size: 1.5rem;
        font-weight: bold;
    }
`;

export const Login = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100px;
`;

export const SignUp = styled.h2`
    border: 2px solid #006A88;
    border-radius: 7px;
    padding: 5px;

    &:hover {
        background: #006A88;
        transition: 1s;
        color: #FECD00;
        font-weight: bold;
}
`;
