import React from 'react';

import DummyDiscount from '../../assets/customize/dummydiscount.png';

const DiscountCard = () => {
  return (
    <section className="discount">
        <div className="discountContainer">
            <div className="discountInfo">

            </div>
            <div className="discountImage">
                <img src={DummyDiscount} alt="" />
            </div>
        </div>
    </section>
  )
}

export default DiscountCard
