import { calculateQuantity , calculateTotalAmount } from "../../util/local";
import Button from './Button';
import classes from '../../style/Total.module.css';
import { useNavigate } from "react-router-dom";

const Total = ({shoppingInfo}) => {
    
  const navigate = useNavigate();
  const totalNumberOfItems = calculateQuantity(shoppingInfo);
  const itemsString = totalNumberOfItems.length > 1 ? 'Items' : 'Item';
  const totalAmount = calculateTotalAmount(shoppingInfo) ;  
  return (
    <>
      <div>
        <h2>Total Amount</h2>
      </div>
      <section className={classes.totalContainer}>
      <div className={classes.totalItems}>
        <h2>
          Subtotal ({totalNumberOfItems} {itemsString}) :<span className={classes.totalPrice}> ₹{totalAmount} </span>
        </h2>
      </div>
      <div>
        <Button onClick={() => navigate('/checkout')}> Proceed to Buy</Button>
      </div>
    </section>
    </>
    
  );
};

export default Total;
