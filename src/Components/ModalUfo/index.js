import React, {useState} from 'react'
import {ModalUfoDiv} from '../styles/ModalUfoStyle'
import NeonBoy from '../../image/neonBoy.png'
import Snackbar from '@mui/material/Snackbar';
import Slide from '@mui/material/Slide';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';




export default function ModalUfo({active, setActive}){
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
           <Card sx={{ maxWidth: 345 }}>
           
      <CardActionArea>
     
        <CardMedia
          component="img"
          height="200"
          image={NeonBoy}
          alt="NeonBoy"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Neon
          </Typography>
          <Typography variant="body2" color="text.secondary">
           Arte desenvolvida com AI e Adobe Photoshop, criando o ambiente web perfeito, com licença comercial de imagem inclusa.
          </Typography>
          <Typography variant="body5" color="text.secondary">
           Clique novamente no Ufo para Fechar este Box
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
         <Button
          variant="contained"
           onClick={handleClick(TransitionDown)}>Like</Button>
           <Button
           color="error"
          variant="contained"
          onClick={()=> setActive(!active)}
           >X</Button>
          <Snackbar
        open={open}
        onClose={handleClose}
        TransitionComponent={transition}
        message="Observe o neon do Background refletindo na nave!"
        key={transition ? transition.name : ''}
      />
      </CardActions>
    </Card>
         

        </ModalUfoDiv>
    )

}