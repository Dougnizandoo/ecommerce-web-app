import ItemList from "./ItemList"
import Summary from "./Summary"

function Cart(props) {
    return (
        <div>
            <hr/>
            <ItemList products={props.cart.products} />
            <hr/>
            <Summary products={props.cart.products} />
        </div>
    );
}

export default Cart;