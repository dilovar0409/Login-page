import React from 'react';
import { Link } from 'react-router-dom';
import { Cart4Button, Cart4div, Cart4Icon, Cart4Text, Cart4Text1, Cart4Text2, Cart4Wrapper } from './style';

const Cart4 = () => {
    return (
        <Cart4Wrapper>
            <Link to="/"><Cart4Icon><i class="fas fa-reply"></i></Cart4Icon></Link>
            <Cart4div>
                <p>Silent</p>
                <div><i class="fas fa-mountain"></i></div>
                <p>Moon</p>
            </Cart4div>
            <div>
                <Cart4Text>Hi Dilaver, Welcome</Cart4Text>
                <Cart4Text1>to Silent Moon</Cart4Text1>
                <Cart4Text2>Explore the app. Find some peace of mind to prepare for meditation.</Cart4Text2>
            </div>
            <Cart4Button>GET STARTED</Cart4Button>
            <div className="line"></div>
        </Cart4Wrapper>
    )
}

export default Cart4;
