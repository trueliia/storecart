import { useState } from "react";
import ChangeQuantity from "../Cart/ChangeQuantity";
import { addItemToCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";

const Product = ({product}) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    return(
        <div className="cartItem">
              <img src={`./${product.img}.png`} alt='food item'/>
            <h2>{ product.name }</h2>
            <p>$ { product.price }</p>
            <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
            <button onClick={()=> {dispatch(addItemToCart({product, quantity}));}}>Add to cart</button>
        </div>
    )
}

export default Product;