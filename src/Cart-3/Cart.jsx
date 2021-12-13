import React from 'react';
import { Cart1Button, Cart1Text1, Cart1Title } from '../Cart-1/style';
import { Cart2Icon, Cart2Wrapper, Cart2IconText, Cart2IconText1, Cart2Input } from '../Cart-2/style'
import { Cart3TextCub } from './style'
import { Link } from 'react-router-dom';

const Cart3 = () => {
    return (
        <Cart2Wrapper>
            <Link to="/sign-in"><Cart2Icon><i class="fas fa-reply"></i></Cart2Icon></Link>
            <Cart1Title>Create your account</Cart1Title>
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
                <input type="text" placeholder="Last Name" />
                <input type="email" placeholder="Email address" />
                <input type="text" placeholder="Password" />
            </Cart2Input>
            <Cart3TextCub>
                <p className="text">I have read the <span className="policy">Privace Policy</span></p>
                <div class="cub"></div>
            </Cart3TextCub>
            <div>
                <Link to="/welcome"><Cart1Button>GET STARTED</Cart1Button></Link>
            </div>
            <div className="line"></div>
        </Cart2Wrapper>
    )
}

export default Cart3;
