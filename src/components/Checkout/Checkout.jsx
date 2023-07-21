import { useState, useContext } from "react";
import { CartContext } from '../../context/CartContext';
import { db } from "../../services/config";
import { collection, addDoc } from "firebase/firestore";

const Checkout = () => {
  const { cart, emptyCart, totalPrice, totalQuantity } = useContext(CartContext);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirmation, setEmailConfirmation] = useState("");
  const [error, setError] = useState("");
  const [orderId, setOrderId] = useState("");

  const formHandler = (e) => {
    e.preventDefault();

    if (!name || !lastName || !telephone || !email || !emailConfirmation) {
      setError("Please complete all fields");
      return;
    }

    if (email !== emailConfirmation) {
      setError("Email fields do not match, please try again");
      return;
    }

    const order = {
      items: cart.map((product) => ({
        id: product.item.id,
        name: product.item.name,
        price: product.item.price,
        quantity: product.quantity,
      })),
      total: totalQuantity,
      name,
      lastName,
      telephone,
      email,
      date: new Date()
    };

    addDoc(collection(db, "orders"), order)
      .then((docRef) => {
        setOrderId(docRef.id);
        emptyCart();
      })
      .catch((error) => {
        console.log("Error creating order", error);
        setError("An error occurred while creating the order, please check back soon");
      });
  };

  return (
    <div className="max-w-lg mx-auto pt-4 pb-8">
      <h2 className="text-2xl font-bold mb-6">Checkout</h2>
      <form onSubmit={formHandler}>
      {cart.map((product) => (
        <div key={product.id} className="mb-4 grid grid-cols-12 grid-rows-2 items-center">
          <img src={product.item.img} alt={name} className="row-span-2" />
          <p className="col-start-3 col-span-6">{product.item.name} x {product.quantity}</p>
          <p className="col-start-3 col-span-6">Price: U$D {(product.item.price * product.quantity).toFixed(2)} </p>
        </div>))}

        <hr className="my-2" />

        <div className="my-3">
          <p>Subtotal: U$D {(totalPrice).toFixed(2)}</p>
          <p>Estimated Tax: U$D {(totalPrice * 0.21).toFixed(2)}</p>
          <p className="text-xl font-bold">Total: U$D {(totalPrice * 1.21).toFixed(2)}</p>
        </div>

        <hr className="my-2"/>

        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 text-sm font-bold">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="lastName" className="block mb-2 text-sm font-bold">Last Name</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="telephone" className="block mb-2 text-sm font-bold">Telephone</label>
          <input
            type="text"
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 text-sm font-bold">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="emailConfirmation" className="block mb-2 text-sm font-bold">Email Confirmation</label>
          <input
            type="email"
            value={emailConfirmation}
            onChange={(e) => setEmailConfirmation(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        {error && <p className="mb-4">{error}</p>}

        <button
          type="submit"
          className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
        >
          Checkout
        </button>
      </form>

      {orderId && (
        <p className="text-lg mt-4">
          Thanks for your purchase! Your order number is: <span className="font-bold">{orderId}</span>
        </p>
      )}
    </div>
  );
};

export default Checkout;
