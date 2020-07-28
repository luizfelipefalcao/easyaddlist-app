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
    padding: 5px;
    margin-top: 5px;

    h2 {
    color: #055e77;
    font-size: 1.5rem;
    }
`;

export const FormList = styled.form`
    width: 90%;
    height: 40px;
    margin: 20px;
    display: flex;
    align-items: center;

    input {
        height: 2.3rem;
        width: 100%;
        font-size: 1rem;
        padding: 5px 10px;
        margin-left: 5px;
        border-radius: 15px;
        border: 2px solid #ddd;
        color: #ccc;
    }

    a {
        margin-left: 7px;
        font-size: 2.5rem;
        display: flex;
        justify-self: center;
        color:  #006A88;
    }

    a:hover {
        color: #04475a;
    }
`;

export const ListBody = styled.table`
    width: 90%;
    margin-top: 10px;
`;

export const TableBody = styled.tbody`

    tr {
        padding: 5px;
    }

    `;
export const TdDescription = styled.td`
    height: 2rem;
    width: 80%;
    padding-left: 10px;
    color: #000;
    font-size: 1.1rem;
    text-decoration: dotted;
  text-decoration-color: red;
    /* background: lightblue; */

`;

export const TdButton = styled.td`
    height: 2rem;
    display:flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.1rem;

`;
        