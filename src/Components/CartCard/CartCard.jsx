import React, { useState } from "react";
import { updateAmount } from "../../Store";

function CartCard({ cartState, dispatch }) {
  const {
    name,
    errorMsg,
    classification,
    category,
    id,
    minimumPurchaseAmount,
  } = cartState;
  const [amount, setAmount] = useState("");
  return (
    <div className="cart__container">
      <div className="cart__card">
        <div className="card__data">
          <div className="data__section1">
            <h1>{name ?? ""}</h1>
            <ul>
              <li>{classification ?? ""}</li>
              <li>{category ?? ""}</li>
            </ul>
          </div>
          <h3>
            Min. Amount: ₹ {minimumPurchaseAmount.toLocaleString("en-US") ?? ""}
          </h3>
        </div>
        <div className="card__amount__input">
          {errorMsg && <p className="error__msg">{errorMsg}</p>}
          <h3>Amount</h3>
          <input
            type="text"
            placeholder="0"
            onChange={({ target: { value } }) => {
              if (!!+value) {
                setAmount(value);
              } else {
                setAmount("");
              }
            }}
            value={amount}
          />
        </div>
      </div>
      <button onClick={() => dispatch(updateAmount(amount, id))}>
        Invest Now
      </button>
    </div>
  );
}

export default CartCard;
