import Lottie from "react-lottie";
import SuccessAnimation from '../../assets/Lottie/success.json';

const Success = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: SuccessAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <Lottie options={defaultOptions} />
    </div>
  );
};

export default Success;
