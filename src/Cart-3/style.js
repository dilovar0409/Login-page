import styled from "styled-components";

export const Cart3TextCub = styled.div`
    width: 440px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
    .text{
        font-size: 15px;
        color: lightgray;
        font-weight: bold;
        .policy{
            color: #8D96FD;
        }
    }
    .cub{
        width: 22px;
        height: 22px;
        border: 2px solid gray;
        border-radius: 5px;
    }
    @media screen and (max-width: 482px){
        width: 100%;
    }
`;
