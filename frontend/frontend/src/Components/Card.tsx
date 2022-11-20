import React from 'react'
import {
    Box,
    Card,
    CardContent,
    CardActions,
    Typography,
    Button,
    CardMedia
  } from '@mui/material'
import './Card.css'
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import { deepPurple } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
const customTheme = createTheme({
    palette: {
      primary: {
        main: deepPurple[500],
      },
    },
  });

const StyledAvatar = styled(Avatar)`
  ${({ theme }) => `
  cursor: pointer;
  background-color: ${theme.palette.primary.main};
  transition: ${theme.transitions.create(['background-color', 'transform'], {
    duration: theme.transitions.duration.standard,
  })};
  &:hover {
    background-color: ${theme.palette.secondary.main};
    transform: scale(1.3);
  }
  `}
`;
function EmpCard(props: any) {
    // params: name: Employee name
    //         imageUrl: string of path/url of employee picture
    //         description: short description of the employee sau echipa din care face parte
    
    return (
        
        <Box className="card-container"sx={{
            
            boxShadow: 3,
            width: 300,
            backgroundColor: 'lightblue',
          }}>
          <Card>
            <CardMedia
              component='img'
              height='140'
              image={(props.imageUrl)}
              alt='unsplash image'
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='div' style={{textAlign: "center"}}>
                {(props.name)}
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                {(props.description)}
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" size='small'>Vizualizare Analize</Button>
              <Button variant="contained" size='small'>Istoric Medical</Button>
            </CardActions>
          </Card>
        </Box>
      )
}

export default EmpCard