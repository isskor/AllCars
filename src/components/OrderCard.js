const OrderCard = () => {
  return (
    <div className="OrderCardContainer">
      <div className="order">
        <h2>Order: #1</h2>
        <p>Time: 10:00</p>
        <p>Price: *Total price here*</p>
        <p>Order ID: 123 456 789</p>
        <div className="listOfCarsBought">
          {/* Loop out reciept here */}
          <li>carName1</li>
          <li>carName2</li>
        </div>
      </div>
      <div className="order">
        <h2>Order: #1</h2>
        <p>Time: 10:00</p>
        <p>Price: *Total price here*</p>
        <p>Order ID: 123 456 789</p>
        <div className="listOfCarsBought">
          <li>carName1</li>
          <li>carName2</li>
        </div>
      </div>
    </div>
  );
}
 
export default OrderCard;