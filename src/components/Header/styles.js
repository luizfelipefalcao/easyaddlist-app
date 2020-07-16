import styled from 'styled-components';

export const Head  = styled.header`
    background-color: #FECD00;
    height: 70px;
    width: 100%;
    display: flex;
    align-content: center;
    justify-content: center;
    padding: 5px 10px;
    font-family: 'Baloo 2', sans-serif;
    -webkit-box-shadow: 0px 11px 15px -17px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 11px 15px -17px rgba(0,0,0,0.75);
    box-shadow: 0px 11px 15px -17px rgba(0,0,0,0.75);

    div {
        width: 100%;
        max-width:1000px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    a {
        text-decoration: none;
        color: #006A88;
        cursor: pointer;
        /* display: flex;
        justify-content: center;
        align-content: center; */
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

export const About = styled.div`
    padding: 5px 10px;
    margin-right: 30px;
    display: flex;
    align-items: center;
    justify-content: center;

    h2 {
        color: #006A88;
        font-size: 1.8rem;
        font-weight: bolder;
    }
`;

