import NavBar from '../NavBar/Nav';
import {HeroContainer , HeroContent , HeroItems} from './HeroElement';
const Hero = () => {
    return ( 
        <HeroContainer>
            <NavBar/>
            <HeroContent>
                <HeroItems>
                    <h1>Greatest Pizza Ever</h1>
                    <p>Ready in 60 seconds</p>
                    <button>Place Order</button>
                </HeroItems>
            </HeroContent>
        </HeroContainer>

     );
}
 
export default Hero;