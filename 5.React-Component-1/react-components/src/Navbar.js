import {Component} from "react"
import styled from "styled-components"

const NavbarStyle = styled.div`
    background: rgb(0,212,255);
    background: linear-gradient(90deg, rgba(0,212,255,1) 0%, rgba(4,131,201,0.8715861344537815) 30%, rgba(9,9,121,1) 75%, rgba(0,0,91,1) 100%);
    width: 98%;
    height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-inline: 1rem;
`;

const NavbarTitle = styled.div`
    color: #333;
    font-size: 1.5rem;
    font-weight: 600;
    &:hover {
        color: #9f9f9f;
        cursor: pointer;
    }
`;

const CartNumber = styled.div`
    display: ${(props) => props.isZero ? "none" : "block"};
    position: absolute;
    background-color: ${(props) => props.color};
    color: #333;
    font-weight: 600;
    padding: 5px 10px;
    border-radius: 50%;
    z-index: 10;
    top: -20px;
    right: -20px;
`   

class Navbar extends Component {

    
    render() {
        const {cartCount} = this.props;

        console.log(cartCount, 'cartCountt...');

        return(
            <NavbarStyle>
                <div>
                    <NavbarTitle>Navbar</NavbarTitle>
                </div>
                <div style={{position: "relative"}}>
                    <img src="https://cdn-icons-png.flaticon.com/128/428/428173.png" alt="cart-icon" height="27" /> 
                    <CartNumber color="#58df11" isZero={false}>{cartCount}</CartNumber>
                </div>
            </NavbarStyle>
        )
    }
}

export default Navbar;

