import styled from "styled-components";

export const Cart1Wrapper = styled.div`
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

export const Cart1div = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    p{
        font-size: 20px;
        font-weight: bold;
        margin: 0 12px;
    }
    i{
        font-size: 30px;
        color: #8D96FD;
    }
`;

export const Cart1Img = styled.div`
    width: 80%;
    height: auto;
    margin: auto;
    img{
        width: 100%;
    }
`;

export const Cart1Title = styled.p`
    font-size: 26px;
    font-weight: bold;
    text-align: center;
    margin: 20px;
`;

export const Cart1Text = styled.p`
    font-size: 16px;
    font-weight: bold;
    color: lightgray;
    text-align: center;
`;

export const Cart1Button = styled.button`
    width: 40%;
    height: 50px;
    border-radius: 25px;
    border: #8D96FD;
    margin: auto;
    background-color: #8D96FD;
    color: white;
    font-weight: bold;
    cursor: pointer;
    margin: 50px 0 20px 0;
    &:hover{
        color: #8D96FD;
        background-color: white;
        transition-duration: .5s;
        border: 1px solid lightgray;
    }
    @media screen and (max-width:375px){
        width: 80%;
        height: 50px;
        border-radius: 25px;
        border: #8D96FD;
        margin: auto;
        background-color: #8D96FD;
        color: white;
        font-weight: bold;
        cursor: pointer;
        margin: 50px 0 20px 0;
        &:hover{
            color: #8D96FD;
            background-color: white;
            transition-duration: .5s;
            border: 1px solid lightgray;
        }
    }
    @media screen and (max-width: 482px){
        width: 80%;
        height: 50px;
        border-radius: 25px;
        border: #8D96FD;
        margin: auto;
        background-color: #8D96FD;
        color: white;
        font-weight: bold;
        cursor: pointer;
        margin: 50px 0 20px 0;
        &:hover{
            color: #8D96FD;
            background-color: white;
            transition-duration: .5s;
            border: 1px solid lightgray;
        }
    }
`;

export const Cart1Text1 = styled.p`
    font-weight: bold;
    color: lightgray;
    text-align: center;
    @media screen and (max-width: 375px){
        font-size: 14px;
        margin-top: 20px;

    }
    @media screen and (max-width: 482px){
        font-size: 14px;
        margin-top: 20px;

    }
`;

export const Click = styled.div`
    text-align: center;
    text-decoration: none;
    font-size: 30px;
    font-weight: bold;
    font-style: italic;
    color: red;
`;