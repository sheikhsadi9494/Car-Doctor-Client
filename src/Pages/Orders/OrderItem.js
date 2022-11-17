import React, { useEffect, useState } from "react";

const OrderItem = ({ order, handleDelete, handleUpdate}) => {
  const [serviceData, setServiceData] = useState([]);
  const { email, message, name, phone, service, title, _id, status} = order;

  useEffect(() => {
    fetch(`http://localhost:5000/services/${service}`)
      .then((res) => res.json())
      .then((data) => setServiceData(data));
  }, []);

  return (
    <tr>
      <th>
        <button onClick={() => handleDelete(_id)} className="btn btn-active btn-ghost rounded-full">X</button>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className=" rounded-xl w-28 h-28">
              <img src={serviceData.img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold text-lg">{title}</div>
            <div className="text-md">Price: $ {serviceData.price}</div>
          </div>
        </div>
      </td>
      <td>
        <div className="text-lg">
          {email} <br />
          <span className="badge badge-ghost badge-sm">Phone: {phone}</span>
        </div>
      </td>
      <td>1 day</td>
      <th>
        <button onClick={() => handleUpdate(_id)} className="btn btn-ghost btn-xs">{status ? status : "Pending"}</button>
      </th>
    </tr>
  );
};

export default OrderItem;
