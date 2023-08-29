import { Link } from "react-router-dom";
import { clearData } from "../../util/local";
import { loginAction } from "../../store/login";
import { useSelector, useDispatch } from "react-redux";
import { addToCartActions } from "../../store/addToCartSlice";

import { styled } from "styled-components";

const ProfileWrapper = styled.nav`
  background-color: var(--white-color);
  border-radius: 9px;
  padding: 1rem;
  margin: 0 auto;
  width: 300px;
  color: #adadad;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  & a {
    display: block;
    padding: 0.5rem 0;
    border-bottom: 1px solid #f6f6f6;
    margin: 0.2rem 0;
  }
  & a:hover {
    color: var(--brand-color);
    font-weight: bold;
  }
`;

const UserName = styled.li`
  text-align: center;
  margin-bottom: 1rem;
  color: #000;
  padding: 0.5rem;
  border: 1px solid #d4bc09;
  border-radius: 0.5rem;
`;

const ProfileDailog = () => {
  const dispatch = useDispatch();

  const loginStatus = useSelector((state) => state.loginSystem.isUserLogin);
  const userName = useSelector((state) => state.userInfo.data.first_name);

  let content;
  if (loginStatus) {
    content = (
      <Link
        onClick={() => {
          clearData();
          dispatch(loginAction.logOut());
          dispatch(addToCartActions.clearCart());
        }}
        to="#"
      >
        Logout
      </Link>
    );
  } else {
    content = <Link to="/login">Login</Link>;
  }
  return (
    <ProfileWrapper>
      <div>
        <ul>
          {loginStatus && (
            <>
              <UserName>Hi 👋 , {userName}</UserName>
              <li>
                <Link to="cart">My Cart</Link>
              </li>
              <li>
                <Link to="wishlist">Wishlist</Link>
              </li>
            </>
          )}
          <li>{content}</li>
          <li>
            <Link to="">Change Password</Link>
          </li>
          <li>
            <Link to="">Help</Link>
          </li>
          <li>
            <Link to="">Feedback</Link>
          </li>
        </ul>
      </div>
    </ProfileWrapper>
  );
};

export default ProfileDailog;
