import { useDispatch } from "react-redux";
import { styled } from "styled-components";
import { modalActions } from "../../store/modal";

const BackDropWrapper = styled.section`
  position: fixed;
  overflow: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: var(--toppest);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Backdrop = (props) => {
  const dispatch = useDispatch();
  const modalCloseHandler = () => {
    dispatch(modalActions.hideModal());
  };
  return (
    <BackDropWrapper onClick={modalCloseHandler}>
      {props.children}
    </BackDropWrapper>
  );
};

export default Backdrop;
