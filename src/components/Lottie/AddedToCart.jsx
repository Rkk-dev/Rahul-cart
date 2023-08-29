import Lottie from "react-lottie";
import AddedToCartAnimation from '../../assets/Lottie/addedToCart.json';

const AddedToCart = () => {
    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: AddedToCartAnimation,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      };
    
      return (
        <div>
          <Lottie options={defaultOptions} />
        </div>
      );
}

export default AddedToCart;