import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import OrderItem from "./OrderItem";

const Order = () => {
  const [orders, setOrders] = useState([]);
  const { user, logout} = useContext(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then((res) => {
        if(res.status === 401 || res.status === 403){
          return logout();
        }
        return res.json();
      })
      .then((data) => setOrders(data));
  }, [user?.email]);

  const handleDelete = (id) => {
    const proseed = window.confirm(`are sure to delete this order ?`);

    if (proseed) {
      fetch(`http://localhost:5000/orders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Delete Successfully");
            const remaining = orders.filter((odr) => odr._id !== id);
            setOrders(remaining);
          }
        });
    }
  };

  const handleUpdate = (id) => {
    fetch(`http://localhost:5000/orders/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "Approved" }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.matchedCount > 0) {
          const remainign = orders.filter(odr => odr._id !== id);
          const approving = orders.find(odr => odr._id ===id);
          approving.status = 'Approved';

          const newOrders = [...remainign, approving];
          setOrders(newOrders)
        }
      });
  };

  return (
    <div className="w-4/5 mx-auto mt-24 mb-28">
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Order Detail</th>
              <th>Contact Info</th>
              <th>Delivery Time</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <OrderItem
                key={order._id}
                handleDelete={handleDelete}
                handleUpdate = {handleUpdate}
                order={order}
              ></OrderItem>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Order;
