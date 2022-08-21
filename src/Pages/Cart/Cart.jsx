import { useStateValue } from "../../Store";
import { CartCard } from "../../Components";
function Cart() {
  let [mutualFund, dispatch] = useStateValue();
  const { cartState } = mutualFund;
  return (
    <div className="Cart">
      {cartState && cartState.length === 0 && (
        <div className="cart__empty">
          <h2>Cart is empty</h2>
        </div>
      )}
      {cartState &&
        cartState.length !== 0 &&
        cartState.map((cartItem) => (
          <CartCard cartState={cartItem} dispatch={dispatch} />
        ))}
    </div>
  );
}

export default Cart;
