import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserOrders } from "../actions/orderActions";

function Ordersscreen() {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getUserOrders());
    },[])
  return (
    <div>
      <h2 style={{ fontSize: "35px" }}>My Orders</h2>
    </div>
  );
}

export default Ordersscreen;
