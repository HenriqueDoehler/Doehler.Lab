import React, {useState} from 'react'
import {ModalUfoDiv} from '../styles/ModalUfoStyle'
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Slide from '@mui/material/Slide';




export default function ModalUfo(active, setActive){
function TransitionDown(props) {
    return <Slide {...props} direction="down" />;
  }

    const [open, setOpen] = useState(false);
  const [transition, setTransition] = useState(undefined);

  const handleClick = (Transition) => () => {
    setTransition(() => Transition);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


    return(
        <ModalUfoDiv>
            <p>
                Obrigado por visitar meu Web Site, me siga no instagram @calabasas3d para ver um pouco mais sobre meus trabalhos
            </p>
          <Button
          variant="contained"
           onClick={handleClick(TransitionDown)}>Like</Button>
          <Snackbar
        open={open}
        onClose={handleClose}
        TransitionComponent={transition}
        message="Obrigado Pelo Like, Me contate pelo Whats App"
        key={transition ? transition.name : ''}
      />

        </ModalUfoDiv>
    )

}