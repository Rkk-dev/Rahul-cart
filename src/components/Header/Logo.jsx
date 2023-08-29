import BrandLogo from '../../assets/Home/logo.png';
import { styled } from 'styled-components';

const Img = styled.img`
    width: 150px;
    @media (min-width:800px) {
        width: 200px;
    }
`

const Logo = () => {
    return <Img src={BrandLogo} alt="grandeur logo" />
}

export default Logo;