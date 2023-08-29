import Lottie from "react-lottie";
import LoggedInAnimation from '../../assets/Lottie/login.json';

const LoggedIn = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: LoggedInAnimation,
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

export default LoggedIn;