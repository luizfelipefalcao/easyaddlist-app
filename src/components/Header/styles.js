import styled from 'styled-components';

export const Head  = styled.header`
    background-color: #FECD00;
    height: 70px;
    display: flex;
    align-content: center;
    justify-content: center;
    padding: 5px 10px;
    -webkit-box-shadow: 0px 11px 15px -17px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 11px 15px -17px rgba(0,0,0,0.75);
    box-shadow: 0px 11px 15px -17px rgba(0,0,0,0.75);

    div {
        width: 100%;
        max-width: 1280px;
        display: flex;
        justify-content: space-between;
        align-items: center;
 
        a {
            text-decoration: none;
            color: #006A88;
            cursor: pointer;
            padding: 5px 10px;
            font-size: 2rem;
            font-weight: 900;

            @media(max-width: 678px) {
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 10rem;
                font-weight: 900;

            }
        }
    }
`;

export const Logo = styled.div`
    margin-left: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px 10px;
    font-family: 'Indie Flower', saens-serif;
    font-size: 2.5rem;
    font-weight: bolder;
    color: #006A88;

    @media(max-width: 678px) {
        margin-left: 5px;
        font-size: 2rem;
    }
`;

export const About = styled.div`
    padding: 5px 10px;
    margin-right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media(max-width: 678px) {
        margin-left: 5px;
        font-size: 2rem;
    }
    
    h2 {
        color: #006A88;
        font-size: 1.8rem;
        font-weight: bolder;

        @media(max-width: 678px) {
            font-size: 0;
        }
    }

`;




