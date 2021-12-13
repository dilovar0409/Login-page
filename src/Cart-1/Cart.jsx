import React from 'react';
import CartImg from '../Assets/photo1.jpg';
import { Link } from 'react-router-dom';
import { Cart1div, Cart1Img, Cart1Wrapper, Cart1Text, Cart1Title, Cart1Button, Cart1Text1 } from './style'

const Cart1 = () => {
    return (
        <Cart1Wrapper>
            <Cart1div>
                <p>Silent</p>
                <div><i class="fas fa-mountain"></i></div>
                <p>Moon</p>
            </Cart1div>
            <Cart1Img>
                <img src={CartImg} alt="photo" />
            </Cart1Img>
            <div>
                <Cart1Title>We are what we do</Cart1Title>
                <Cart1Text>Thousand of people are usign silent moon for smalls moditation</Cart1Text>
            </div>
            <div>
                <Link to="/sign-in"><Cart1Button>SIGN UP</Cart1Button></Link>
                <Cart1Text1>ALREADY HAVE AN ACCOUNT? LOG IN</Cart1Text1>
            </div>
            <div className="line"></div>
        </Cart1Wrapper>
    )
}

export default Cart1
