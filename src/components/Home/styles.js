import styled from 'styled-components'

export const Main = styled.div`
    min-height: 300px;
    width: 60%;
    margin: 50% auto;
    margin-top: 50px;
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 6px 1px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media(max-width: 679px) {
        width: 90%;
        min-height: 230px;
    }

    h1 {
        display: flex;
        align-self: center;
        font-size: 2.2rem;
        margin: 25% auto;
        color: #ddd;

        @media(max-width: 679px) {
            font-size: 2rem;
        }
    }

    a {
        display: flex;
        align-self: flex-end;
        font-size: 3rem;
        color: #006A88;
        margin: 5px;

        &:hover {
            color: #023442;
        }

        @media(max-width: 679px) {
            font-size: 2.5rem;
        }
    }
`;
