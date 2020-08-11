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

export const ListTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width:100%;
    padding: 0;
    margin-top: 5px;

    h2 {
        color: #555;
        font-size: 1.5rem;
    }
`;

export const FormList = styled.form`
    width: 95%;
    height: 40px;
    margin: 20px;
    margin-top: 10px;
    display: flex;
    align-items: center;

    input {
        height: 2.1rem;
        width: 100%;
        font-size: .9rem;
        padding: 5px 10px;
        margin-left: 5px;
        border-radius: 20px;
        border: 2px solid #04465866;
        color: #333;
        outline: none;
    }

    a {
        margin-left: 7px;
        font-size: 2.4rem;
        display: flex;
        justify-self: center;
        color:  #006A88;
    }

    a:hover {
        color: #04475a;
    }
`;



export const ListBody = styled.div`
    width: 90%;
    padding: 5px;
`;

export const ListItem = styled.ul`
    list-style: none;
    padding: 5px;

    li {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        font-size:1.2rem;
        line-height: 2.5rem;

        button {
            background: #006A88;
            outline: none;
            padding: 1px 5px;
            color: #eee;
            border-radius: 10px;
            font-size: 1rem;
            font-weight: bolder;
            font-family: 'Baloo 2', sans-serif;
        }
    }

`;
