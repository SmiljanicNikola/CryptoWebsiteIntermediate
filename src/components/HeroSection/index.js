import React,{useState} from 'react'
import Video from '../../videos/videoVeci.mp4'
import { HeroContainer, HeroBackground, VideoBackground,HeroBtnWrapper,HeroContent,HeroH1,HeroP,ArrowForward,ArrowRight } from './HeroElements'
import { Button } from '../ButtonElement'

const HeroSection = () => {
    const [hover,setHover] = useState(false)

    const onHover = () =>{
        setHover(!hover)
    }
    return (
        <HeroContainer id="home">
            <HeroBackground>
                <VideoBackground autoPlay loop muted src={Video} type='/videos/mp4'/>
            </HeroBackground>
            <HeroContent>
                <HeroH1>Virtual Banking Made Easy</HeroH1>
                <HeroP>
                    Sign up for a new account today and receive money, fast bro, hurry up.
                    See ya!
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="sign-up" 
                    nMouseEnter={onHover}
                    primary='true'
                    dark='true'
                    smooth={true} 
                            duration={500} 
                            spy={true}
                            exact='true'
                            offset={-80}
                    onMouseLeave={onHover}>
                        Get Started {hover? <ArrowForward/>:<ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
