import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {TopButton} from  '../styles/stylesTopButton'

const ScrollToTop = () => {
   
    const [showScrolltoTopButton, setShowScrolltoTopButton] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 300){
            setShowScrolltoTopButton(true)
        } else {
            setShowScrolltoTopButton(false)
        }
        })
    }, []);

const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })};

    return (
      <TopButton onClick={scrollTop} >
     {showScrolltoTopButton && 
        <Box sx={{ '& button': { m: 1 } }}>
        <Button variant="contained" size="large">Inicio</Button>
        </Box>
        }
        </TopButton>
    ) 
}

export default ScrollToTop;