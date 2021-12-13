import styled from "styled-components";

export const Cart2Wrapper = styled.div `
    text-align: center;
    padding: 50px;
    .line{
        width: 100px;
        margin: auto;
        height: 5px;
        background-color: lightgray;
        border-radius: 10px;
        margin-top: 50px;
    }
    .forgot{
        font-weight: bold;
        margin-bottom: 100px;
    }
`;

export const Cart2Icon = styled.div `
    font-size: 30px;
    padding: 10px 12px;
    border: 1px solid lightgray;
    border-radius: 50%;
    position: fixed;
    top: 20px;
    left: 50px;
    cursor: pointer;
    color: black;
    &:hover{
        background-color: red;
        color: white;
        transition-duration: .5s;
    }
    @media screen and (width:375px){
        position: fixed;
        top: 10px;
        left: 10px;
        font-size: 20px;
    }
`;

export const Cart2IconText = styled.div `
    width: fit-content;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #7582C9;
    color: white;
    padding: 15px 70px 15px 50px;
    border-radius: 30px;
    margin-bottom: 20px;
    cursor: pointer;
    i{
        font-size: 20px;
        margin-right: 40px;
    }
    p{
        font-size: 15px;
        font-weight: bold;
    }
    @media screen and (width:375px){
        width: fit-content;
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #7582C9;
        color: white;
        padding: 15px 50px 15px 25px;
        border-radius: 30px;
        margin-bottom: 20px;
        cursor: pointer;
        i{
            font-size: 20px;
            margin-right: 20px;
        }
        p{
            font-size: 12px;
            font-weight: bold;
        }
    }
`;

export const Cart2IconText1 = styled.div `
    width: fit-content;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px 70px 15px 50px;
    border-radius: 30px;
    border: 1px solid lightgray;
    margin-bottom: 40px;
    cursor: pointer;
    i{
        font-size: 20px;
        margin-right: 40px;
        color: #D45049;
    }
    p{
        font-size: 15px;
        font-weight: bold;
    }
    @media screen and (width:375px){
        width: fit-content;
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 15px 50px 15px 25px;
        border-radius: 30px;
        margin-bottom: 20px;
        cursor: pointer;
        i{
            font-size: 20px;
            margin-right: 20px;
        }
        p{
            font-size: 12px;
            font-weight: bold;
        }
    }
`;

export const Cart2Input = styled.div `
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    input{
        width: 450px;
        margin: auto;
        padding: 20px;
        background-color: #F1F2F6;
        border-radius: 20px;
        border: #F1F2F6;
        margin-bottom: 25px;
        
    }
    @media screen and (width:375px){
        display: flex;
        flex-direction: column;
        margin-top: 40px;
        input{
            width: 280px;
            margin: auto;
            padding: 15px;
            background-color: #F1F2F6;
            border-radius: 20px;
            border: #F1F2F6;
            margin-bottom: 20px;
            
        }
    }
`;