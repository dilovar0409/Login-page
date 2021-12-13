import React from 'react';
import { Cart1Button, Cart1Text1, Cart1Title } from '../Cart-1/style';
import { Cart2Icon, Cart2Wrapper, Cart2IconText, Cart2IconText1, Cart2Input } from './style'
import { Link } from 'react-router-dom';

const Cart2 = () => {
    return (
        <Cart2Wrapper>
            <Link to="/"><Cart2Icon><i class="fas fa-reply"></i></Cart2Icon></Link>
            <Cart1Title>Welcome Back!</Cart1Title>
            <Cart2IconText>
                <div><i class="fab fa-facebook-f"></i></div>
                <p>CONTINUE WITH FACEBOOK</p>
            </Cart2IconText>
            <Cart2IconText1>
                <div><i class="fab fa-google"></i></div>
                <p>CONTINUE WITH GOOGLE</p>
            </Cart2IconText1>
            <Cart1Text1>OR LOG IN WITH EMAIL</Cart1Text1>
            <Cart2Input>
                <input type="email" placeholder="Email address" />
                <input type="text" placeholder="Password" />
            </Cart2Input>
            <div>
                <Link to="/sign-up"><Cart1Button>LOG IN</Cart1Button></Link>
                <p className="forgot">Forgot Password?</p>
            </div>
            <Cart1Text1>ALREADY HAVE AN ACCOUNT? LOG IN</Cart1Text1>
            <div className="line"></div>
        </Cart2Wrapper>
    )
}

export default Cart2;
