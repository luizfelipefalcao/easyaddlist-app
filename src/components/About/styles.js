import styled from 'styled-components';

export const Tutorial = styled.div`
    min-height: 300px;
    width: 50%;
    margin: 50% auto;
    margin-top: 50px;
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 6px 1px rgba(0, 0, 0, 0.3);

    @media(max-width: 678px) {
        width: 90%;
    }
`;

export const Header = styled.h1`
        color: #006A88;
        font-size: 2rem;
        margin: 20px;

        @media(max-width: 678px) {
            font-size: 1.7rem;
        } 
`;

export const Instructions = styled.div`
        margin: 30px;
        height: 150px;

        p {
            color: #000;
            font-size: 1.2rem;
        }
`;

export const Footer = styled.h2`
    display: flex;
    justify-content: flex-end;
    margin: 20px;
    color: #006A88;
    font-size: 1.5rem;

    @media(max-width: 678px) {
        font-size: 1.2rem;
    }
`;