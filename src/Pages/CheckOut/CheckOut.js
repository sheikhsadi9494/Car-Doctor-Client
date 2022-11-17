import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import bannerImg from "../../assets/images/checkout/checkout.png";
import { AuthContext } from "../../Context/AuthProvider";
import "./Checkout.css";

const CheckOut = () => {
  const { user } = useContext(AuthContext);
  const { title, price, _id} = useLoaderData();

  const handleOnSubmit = (event) => {

    event.preventDefault();
    const form = event.target;
    const name =`${form.first_name.value} ${form.last_name.value}`;
    const phone = form.phone_number.value;
    const email = form.email.value;
    const message = form.message.value;

    const order = {
        service: _id,
        title,
        name,
        phone,
        email,
        message
    }

    fetch('http://localhost:5000/orders', {
        method: 'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(order)
    })
    .then(res => res.json())
    .then(data => {
        if(data.acknowledged){
            alert('Checkout Successfully !!! Thank you')
            form.reset();
        }
    })
    
  }

  return (
    <div className="w-4/5 mx-auto">
      <div className="relative mt-5">
        <div className="bannerImg h-full">
          <img
            style={{ borderRadius: "22px" }}
            className="w-full"
            src={bannerImg}
            alt=""
          />
        </div>
        <div className="absolute flex justify-start md:left-20 left-5 right-5 bottom-2/4">
          <h1 className="md:text-6xl text-2xl text-white font-bold">
            Check Out
          </h1>
        </div>
      </div>

      <div className=" bg-gray-200 py-10 px-8 lg:py-16 lg:px-16 rounded-xl my-16">
        <p className="text-3xl font-bold pb-2">{title}</p>
        <p className="text-xl font-semibold pb-6">Price: $ {price}</p>
        <form onSubmit={handleOnSubmit}>
          <div className="grid grid-cols-1  justify-center md:grid-cols-2 gap-4">
            <input
              type="text"
              name="first_name"
              placeholder="First Name"
              className="input input-bordered w-full"
            />
            <input
              type="text"
              name="last_name"
              placeholder="Last Name"
              className="input input-bordered w-full"
            />
            <input
              type="text"
              name="phone_number"
              placeholder="Your Phone"
              className="input input-bordered w-full"
            />
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="input input-bordered w-full"
              defaultValue={user?.email}
              readOnly
            />
          </div>
          <div>
            <textarea
              name="message"
              className="textarea w-full mt-5 h-32"
              placeholder="Your Message"
            ></textarea>
          </div>
          <div>
            <input
              className="w-full bg-orange-600 btn border-0 hover:bg-orange-600 mt-5"
              type="submit"
              value="Submit"
              placeholder="Submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
