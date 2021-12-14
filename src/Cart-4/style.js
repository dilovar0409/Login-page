import styled from "styled-components";

export const Cart4Wrapper = styled.div`
    width: 100%;
    background-color: #8D96FD;
    text-align: center;
    padding: 50px;
    .line{
        width: 150px;
        margin: auto;
        height: 5px;
        background-color: lightgray;
        border-radius: 10px;
        margin-top: 50px;
    }
`;

export const Cart4div = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    p{
        font-size: 20px;
        font-weight: bold;
        margin: 0 12px;
    }
    i{
        font-size: 30px;
        color: white;
    }
`;

export const Cart4Text = styled.div`
    font-size: 27px;
    font-weight: bold;
    color: yellow;
    margin: 50px 0 15px 0;
`;

export const Cart4Text1= styled.div`
    font-size: 27px;
    color: yellow;
    margin-bottom: 20px;
`;

export const Cart4Text2= styled.div`
    color: lightgrey;
    margin-bottom: 300px;
`;

export const Cart4Button = styled.button`
    width: 40%;
    height: 50px;
    border-radius: 25px;
    border: #8D96FD;
    margin: auto;
    color: #8D96FD;
    background-color: white;
    font-weight: bold;
    cursor: pointer;
    margin: 50px 0 20px 0;
    &:hover{
        background-color: #8D96FD;
        color: white;
        transition-duration: .5s;
        border: 1px solid lightgray;
    }
    @media screen and (max-width: 375px){
       width: 80%;
    }
    @media screen and (max-width: 482px){
       width: 80%;
    }
`;

export const Cart4Icon = styled.div`
    font-size: 30px;
    padding: 10px 12px;
    border: 1px solid lightgray;
    border-radius: 50%;
    position: fixed;
    top: 20px;
    left: 50px;
    cursor: pointer;
    background-color: red;
    color: white;
    &:hover{
        background-color: red;
        color: white;
        transition-duration: .5s;
    }
    @media screen and (max-width: 375px){
        position: fixed;
        top: 10px;
        left: 10px;
        font-size: 20px;
    }
    @media screen and (max-width: 482px){
        position: fixed;
        top: 10px;
        left: 10px;
        font-size: 20px;
    }
`;