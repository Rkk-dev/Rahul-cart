import { styled } from "styled-components";

const Wrapper = styled.div`
  color: #adadad;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  margin: 0.5rem 0;

  & span {
    color: var(--brand-color);
    font-weight: 600;
  }
`;

const TermsCondition = () => {
  return (
    <Wrapper>
      By continuing you agree the <span> grandeur terms</span> & condition and
      privacy policy.
    </Wrapper>
  );
};

export default TermsCondition;
