
const timestampsData = [...]; 
const ordersData = [...]; 


const ordersWithData = ordersData.map(order => {
  const correspondingTimestamp = timestampsData.find(timestamp => timestamp.id === order.id);
  return {
    ...order,
    orderSubmitted: correspondingTimestamp ? correspondingTimestamp.orderSubmitted : null
  };
});

<td>{order.orderSubmitted}</td>