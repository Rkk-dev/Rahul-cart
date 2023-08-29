import classes from './ProductShimmer.module.css';

const ProductShimmer = () => {
    return (
        <div className={classes.parent}>
            <div className={`${classes.child} ${classes.product}`}></div>
            <div className={classes.child}></div>
            <div className={classes.child}></div>
            <div className={classes.child}></div>
            <div className={`${classes.child} ${classes.info}`}></div>
        </div>
    );
}

export default ProductShimmer;