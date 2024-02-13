import { useDispatch } from "react-redux";
import dataProducts from "../../data/dataProducts";
import { removeItemFromCart } from '../../redux/cartSlice';

const CartItem = ({cartItem}) =>{
    const products = dataProducts.find(item => item.id === cartItem.productId);
    const dispatch = useDispatch();
    return(
        <div>
            <p>{products.name}</p>
            <p>{cartItem.quantity} pc(s)</p>
            <p>Price: ${products.price * cartItem.quantity}</p>
            <span onClick={() => dispatch(removeItemFromCart({cartItemId: cartItem.id}))}>
            <img className="icon" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png" alt='delete'/>
            </span>
        </div>
    )
}

export default CartItem;