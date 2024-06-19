import React, { useState, useEffect } from 'react';

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [selectedPeriod, setSelectedPeriod] = useState('last3Months'); // Default to last 3 months

  useEffect(() => {
    fetchOrders(); // Fetch orders on component mount
  }, []);

  const fetchOrders = async () => {
    try {
      // Replace with your actual API call to fetch orders
      const response = await fetch('your-api-endpoint');
      const data = await response.json();
      setOrders(data.orders); // Assuming data is in { orders: [] } format
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  const filterOrdersByPeriod = (period) => {
    const today = new Date();
    let startDate = new Date();
    if (period === 'last3Months') {
      startDate.setMonth(today.getMonth() - 3);
    } else if (period === 'last6Months') {
      startDate.setMonth(today.getMonth() - 6);
    }
    return orders.filter(order => new Date(order.date) >= startDate);
  };

  const handleChangePeriod = (event) => {
    setSelectedPeriod(event.target.value);
  };

  const filteredOrders = filterOrdersByPeriod(selectedPeriod);

  return (
    <div>
      <h2>Order List</h2>
      <label htmlFor="periodSelect">Select Time Period:</label>
      <select id="periodSelect" value={selectedPeriod} onChange={handleChangePeriod}>
        <option value="last3Months">Last 3 Months</option>
        <option value="last6Months">Last 6 Months</option>
      </select>
      <ul>
        {filteredOrders.map(order => (
          <li key={order.id}>
            {/* Render order details here */}
            {order.orderNumber} - {order.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderList;
