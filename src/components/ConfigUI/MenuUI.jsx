import classes from './MenuUI.module.css';

const MenuUI = ({ categoryText, onlyTitle}) => {

    const content = onlyTitle ? <h4>{categoryText}</h4> : categoryText;

    return (
        <div className={classes.container}>
            <div className={classes.text}>
                {content}
            </div>
        </div>
    );

}

export default MenuUI;