import React from 'react';
import classes from './Doubt.module.css';

import Button from '../UI/Button';

const Doubt = () => {
  return (
    <section className={classes.doubt}>
        <div className={classes.doubtContainer}>
            <div className={classes.doubtText}>
            Any questions on this product?
            </div>
            <div className="doubtSolution">
                <div className={classes.doubtSolutionContainer}>
                        <Button>
                            Call Us
                        </Button>
                        <Button>
                            Whatsapp us
                        </Button>
                        <Button>
                            Email us
                        </Button>
                </div>
            </div>
            <div className={classes.doubtSpecialText}>
            We’r happy to help you out!!
            </div>
        </div>
    </section>
  )
}

export default Doubt
