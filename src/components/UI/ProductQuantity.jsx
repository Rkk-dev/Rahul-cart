import classes from '../../style/ProductQuantity.module.css';

const ProductQuantity = ({currentQuantity, addOne, removeOne}) => {
    return (
        <section className={classes.productQuantityContainer}>
            <div>
                <span>Quantity : </span>
            </div>
            <div className={classes.productQuantityInfo}>
                <button onClick={addOne}> + </button>
                <span> {currentQuantity} </span>
                <button onClick={removeOne}> - </button>
            </div>
        </section>
    );
}

export default ProductQuantity;