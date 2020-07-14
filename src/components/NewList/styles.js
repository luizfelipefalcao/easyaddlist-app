import styled from 'styled-components';

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    margin: 50% auto;
    margin-top: 50px;
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 6px 1px rgba(0, 0, 0, 0.3);
`;

export const ListName = styled.div`
    width: 90%;
    height: 40px;
    margin: 20px;
    display: flex;
    align-items: center;

    input {
        height: 40px;
        width: 100%;
        margin-left: 10px;
        padding: 5px;
        border-radius: 50px;
        border: 2px solid #eee;
        color: #ccc;
        font-size: 1rem;
        padding: 5px 15px;
    }

    a {
        margin-left: 7px;
        font-size: 2.8rem;
        display: flex;
        justify-self: center;
        color:  #006A88;
    }
`;