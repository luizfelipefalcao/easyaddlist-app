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

    @media(max-width: 679px) {
    width: 90%;
  }
`;

export const AddName = styled.div`
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
        border-radius: 15px;
        border: 2px solid #ddd;
        color: #888;
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

    a:hover {
        color: #04475a;
    }
`;