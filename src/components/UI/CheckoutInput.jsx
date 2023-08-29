import React, {forwardRef} from 'react'
import classes from '../../style/CheckoutInput.module.css';

const CheckoutInput = forwardRef((props, ref) => {
  return (
    <div className={classes.checkoutInput}>
        {/* <input type={props.type} placeholder={props.placeholder}  value={props.value} onChange={props.onChange}  ref={ref} {...props} style={props.style} /> */}
        <input ref={ref} {...props} />
    </div>
  )
})

export default CheckoutInput
