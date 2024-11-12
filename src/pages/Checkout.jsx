/* eslint-disable react/prop-types */
const Checkout = ({ cart, onCheckout, goBack }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Checkout</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.title} - {item.quantity} x ${item.price} = ${item.quantity * item.price}
          </li>
        ))}
      </ul>
      <p>Total: ${total.toFixed(2)}</p>
      <button onClick={goBack}>Cancel</button>
      <button onClick={onCheckout}>Pay</button>
    </div>
  );
};

export default Checkout;
