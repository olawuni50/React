import React from "react"
import {HeroContainer, HeroWrapper, HeroText, HeroHead, HeroP, HeroPP, HeroContent, HeroImage, Image} from "./HeroStyles"
import {Button} from "@mui/material"
import {FaFacebook} from 'react-icons/fa'
import {AiFillTwitterCircle, AiFillInstagram} from 'react-icons/ai'
import TextTransition, { presets } from "react-text-transition";
import imgg from "../../Images/money-sack.png"


const TEXTS = [
    "TRACK",
    "CALCULATE",
    "SAVE",
    "COMPUTE"
  ];

const HeroSection = ()=>{
    const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

    return(
        <HeroContainer>
            <HeroWrapper>

            <Image src={imgg}  alt="gold"/>
                <HeroText>
                    <HeroHead>WELCOME TO STOCK TRACKER</HeroHead>
                    <HeroPP style={{display:"flex"}}> <span style={{marginRight:"10px", color:"#896eff"}}> <TextTransition text={ TEXTS[index % TEXTS.length] }
        springConfig={ presets.wobbly } /></span> YOUR STOCK WITH EASE</HeroPP>
                    <HeroP>MONEY CAN'T COME WITHOUT CARE.</HeroP>
                    <HeroContent>With over 15years of experience, we do the right thing for our clients, no matter
                        what. We're with you every step of the way.
                    </HeroContent>

                    <div style={{ fontSize:"1.5rem", flexDirection:"column", color:"#321A31",
                     cursor:"pointer", marginTop:"1.5rem"}}>
                    <FaFacebook style={{marginRight:"2rem"}} />
                    <AiFillTwitterCircle style={{marginRight:"2rem"}} />
                    <AiFillInstagram />              
                </div>

                    <Button variant="contained" style={{marginTop:"2rem"}}>Get Started</Button>

                </HeroText>              
                           
            </HeroWrapper>
            
        </HeroContainer>
        

    )
}

export default HeroSection