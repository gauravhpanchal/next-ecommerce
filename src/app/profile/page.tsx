"use client";

import UpdateButton from "@/components/UpdateButton/UpdateButton";
import Link from "next/link";
import { useEffect, useState } from "react";

const ProfilePage = () => {
  // State to hold orders from localStorage
  interface Order {
    _id?: string;
    url?: string;
    productName?: { original: string };
    price?: { amount: number };
    availability?: { status: string };
  }

  const [localOrders, setLocalOrders] = useState<Order[]>([]);

  // Function to generate a random 10-digit order ID
  const generateRandomOrderID = () => {
    return Math.floor(1000000000 + Math.random() * 9000000000).toString();
  };

  useEffect(() => {
    // Retrieve stored orders from localStorage or create sample orders if none exist
    const storedOrders =
      JSON.parse(localStorage.getItem("orders") || "[]") || [];
    if (storedOrders.length === 0) {
      // Sample data with random order IDs
      const sampleOrders: Order[] = [
        {
          _id: generateRandomOrderID(),
          url: "/order/1",
          productName: { original: "Product 1" },
          price: { amount: 500 },
          availability: { status: "Delivered" },
        },
        {
          _id: generateRandomOrderID(),
          url: "/order/2",
          productName: { original: "Product 2" },
          price: { amount: 1200 },
          availability: { status: "Pending" },
        },
      ];
      localStorage.setItem("orders", JSON.stringify(sampleOrders));
      setLocalOrders(sampleOrders);
    } else {
      setLocalOrders(storedOrders);
    }
  }, []);

  return (
    <div className="flex flex-col md:flex-row gap-24 md:h-[calc(100vh-80px)] items-center px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      <div className="w-full md:w-1/2">
        <h1 className="text-2xl">Profile</h1>
        <form className="mt-12 flex flex-col gap-4">
          <input type="text" hidden name="id" />
          <label className="text-sm text-gray-700">Username</label>
          <input
            type="text"
            name="username"
            placeholder={"grv44"}
            className="ring-1 ring-gray-300 rounded-md p-2 max-w-96"
          />
          <label className="text-sm text-gray-700">First Name</label>
          <input
            type="text"
            name="firstName"
            placeholder={"Gaurav"}
            className="ring-1 ring-gray-300 rounded-md p-2 max-w-96"
          />
          <label className="text-sm text-gray-700">Surname</label>
          <input
            type="text"
            name="lastName"
            placeholder={"Panchal"}
            className="ring-1 ring-gray-300 rounded-md p-2 max-w-96"
          />
          <label className="text-sm text-gray-700">Phone</label>
          <input
            type="text"
            name="phone"
            placeholder={"+1234567"}
            className="ring-1 ring-gray-300 rounded-md p-2 max-w-96"
          />
          <label className="text-sm text-gray-700">E-mail</label>
          <input
            type="email"
            name="email"
            placeholder={"john@gmail.com"}
            className="ring-1 ring-gray-300 rounded-md p-2 max-w-96"
          />
          <UpdateButton />
        </form>
      </div>
      <div className="w-full md:w-1/2">
        <h1 className="text-2xl">Orders</h1>
        <div className="mt-12 overflow-x-auto">
          {localOrders.length === 0 ? (
            <p>No orders found.</p>
          ) : (
            <table className="min-w-full table-auto border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="px-4 py-2 border border-gray-300">Order ID</th>
                  <th className="px-4 py-2 border border-gray-300">Product</th>
                  <th className="px-4 py-2 border border-gray-300">Price</th>
                  <th className="px-4 py-2 border border-gray-300">Status</th>
                </tr>
              </thead>
              <tbody>
                {localOrders.map((order, index) => (
                  <tr key={order._id || index} className="even:bg-gray-50">
                    <td className="px-4 py-2 border border-gray-300">
                      {generateRandomOrderID()}
                    </td>
                    <td className="px-4 py-2 border border-gray-300">
                      {order.productName?.original || "N/A"}
                    </td>
                    <td className="px-4 py-2 border border-gray-300">
                      ₹{order.price?.amount || "0.00"}
                    </td>
                    <td className="px-4 py-2 border border-gray-300">
                      Delivered
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
