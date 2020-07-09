import styled from 'styled-components'

export const Main = styled.div`
    /* display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; */
    min-height: 500px;
    width: 50%;
    margin: 50% auto;
    margin-top: 50px;
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 6px 1px rgba(0, 0, 0, 0.3);
`;

export const NewList = styled.div`
    background: blue;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
        font-size: 2rem;
        color: rgba(204, 204, 204, 0.6);
    }
`;

export const PlusBtn = styled.div`
        margin-right: 10px;
        margin-bottom: 0px;

        h2 {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            font-size: 3rem;
            color: blue;
            cursor: pointer; 
            background: lightcyan
        }
`;
