import styled from 'styled-components'

export const Main = styled.div`
    min-height: 300px;
    width: 50%;
    margin: 50% auto;
    margin-top: 50px;
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 6px 1px rgba(0, 0, 0, 0.3);
`;

export const NewList = styled.div`
    height: 280px;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
        font-size: 2rem;
        color: rgba(204, 204, 204, 0.5);
    }
`;

export const PlusBtn = styled.div`
        text-align: center;

        h2 {
            font-size: 3rem;
            margin-bottom: 10px;
            margin-right: 10px;
            display: flex;
            justify-content: flex-end;
            align-items: flex-end;
            color: #006A88;
        }

        h2:hover {
            color:#023442
        }
`;
