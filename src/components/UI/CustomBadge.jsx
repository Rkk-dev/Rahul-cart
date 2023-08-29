import { styled } from "styled-components";

const Wrapper = styled.figure`
  margin: 0;
  padding: 0;
`;

const Container = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
`;

const Badge = styled.div`
  position: relative;
  
  &:hover{
    transform: scale(1.1);
  }
`;

const BadgeIcon = styled.span`
  position: absolute;
  left: 15px;
  top: -8px;
  border-radius: 58.5px;
  background: var(--brand-color);
  width: 20px;
  height: 20px;
  padding: 2.6px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 13px;
  font-size: 12px;
  font-weight: bold;
`;

const BadgeText = styled.div`
  color: var(--white-color);
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const CustomBadge = ({ src, value, title }) => {
  return (
    <Wrapper>
      <Container>
        <Badge>
          <img src={src} alt="" />
          <BadgeIcon>{value}</BadgeIcon>
        </Badge>
        <BadgeText>
          <span>{title}</span>
        </BadgeText>
      </Container>
    </Wrapper>
  );
};

export default CustomBadge;
