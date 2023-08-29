import TermsCondition from "../UI/TermsCondition";
import { UserAuthTitle } from "../Styled/UserAuthUI";

const AuthTitle = (props) => {
  return (
    <UserAuthTitle>
      <h2>{props.title}</h2>
      <TermsCondition />
    </UserAuthTitle>
  );
};

export default AuthTitle;
