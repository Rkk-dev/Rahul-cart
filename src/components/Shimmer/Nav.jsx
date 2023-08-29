import classes from './Nav.module.css';

const Nav = () => {
    return (
        <>
            {Array(8).fill("").map((e, index) => {
                return (<div key={index} className={classes.navShimmerParent}>
                    <div class={`${classes.shine} ${classes.box}`}></div>
                    <div className={classes.lines}>
                        <div class={`${classes.shine} ${classes.line}`}></div>
                        <div class={`${classes.shine} ${classes.line}`}></div>
                        <div class={`${classes.shine} ${classes.line}`}></div>
                    </div>
                </div>)
            })}
        </>
    );
}

export default Nav;