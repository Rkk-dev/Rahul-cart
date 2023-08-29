import { styled } from "styled-components";

const Container = styled.div`
    padding: 1rem 0.5rem;
`;
const Wrapper = ({children}) => {
    return <Container> {children} </Container>;
}

export default Wrapper;