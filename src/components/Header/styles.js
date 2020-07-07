import styled from 'styled-components';

export const Head  = styled.header`
    background-color: yellow;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-content: center;
    padding: 5px 10px;
`;

export const Logo = styled.div`
    margin-left: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px 10px;
    font-size: 2rem;
    font-family: sans-serif;
    font-weight: bold;
    color: darkblue;
`;

export const MenuOpt = styled.div`
    margin-right: 30px;
    padding: 5px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color:blue;
    font-size: 2rem;
    font-weight: bold;
    width: 250px;

    a {
        text-decoration: none;
        color: darkblue;
        cursor: pointer
    }
`;

export const About = styled.h1`
    font-size: 1.5rem;
`
export const Login = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    h1 {
        font-size: 1.5rem
    }
`

