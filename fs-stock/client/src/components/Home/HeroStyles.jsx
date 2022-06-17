import React from "react";
import styled from "styled-components"





export const HeroContainer = styled.section`
    height: 700px;
`

export const HeroWrapper = styled.div`
    max-width:1400px;
    display:flex;
    justify-content:space-evenly;
    align-content:center;

    @media screen and (max-width: 768px){
        flex-direction: column-reverse;
    }
`

export const HeroText = styled.div`
    margin-top:8rem;
    color:#321A31;
    margin-left:4.2rem;
    
    @media screen and (max-width: 768px){
        margin-top:5rem;
        text-align:center;
        margin-left:1px;
    }

`

export const HeroHead = styled.p`
    margin-bottom:1rem;
    font-weight:bold;
`

export const HeroP = styled.h1`
    font-size:2rem;

    @media screen and (max-width: 768px){
        font-size:1.4rem;
    }
`
export const HeroPP = styled.div`
    font-size:2rem;

    @media screen and (max-width: 768px){
        font-size:1.5rem;
    }
`

export const HeroContent = styled.p`
    font-size:18px;
    width: 70%; 
    margin-top:1rem;
    line-height:1.8;
    
    @media screen and (max-width: 768px){
        width:95%;
    }
`

export const HeroImage = styled.div`

`

export const Image = styled.img`
width:40%;
margin-top:3rem;

    
@media screen and (max-width: 768px){
    width:100%;
    margin-top: 0.5rem;
   
}
`