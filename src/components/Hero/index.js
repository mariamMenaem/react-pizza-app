import { useState } from 'react';
import NavBar from '../NavBar/Nav';
import SideBar from '../SideBar';
import {HeroContainer , HeroContent , HeroItems} from './HeroElement';
const Hero = () => {
    const [isOpen , setIsOpen] = useState(false);
    const handleIsOpen = () => {
        setIsOpen(!isOpen);
    }
    return ( 
        <HeroContainer>
            <NavBar toggle={handleIsOpen}/>
            <SideBar isOpen ={isOpen} toggle={handleIsOpen}/>
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