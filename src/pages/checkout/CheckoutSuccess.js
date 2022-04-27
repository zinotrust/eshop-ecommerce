import { addDoc, collection } from "firebase/firestore";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { db } from "../../firebase/config";

const CheckoutSuccess = () => {
  return (
    <section>
      <div className="container">
        <h2>Checkout Successful</h2>
        <p>Thank you for your purchase</p>
        <br />

        <button className="--btn --btn-primary">
          <Link to="/order-history">View Order Status</Link>
        </button>
      </div>
    </section>
  );
};

export default CheckoutSuccess;
