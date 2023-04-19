import React from 'react'
import Box from '@mui/material/Box';
import Arrowanimation from './Arrowanimation'
import Mockup from '../assets/mockup.png'
import Features from '../assets/features.png'
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@mui/material';

const useStyles = makeStyles({
    container: {
      width: '300px',
      height: '560px',
      overflow: 'hidden',
    },
    img: {
      width: '100%',
      height: '100%',   
      objectFit: 'cover',
    },
  });

export default function Hero() {
    const classes = useStyles();
  return (
    <div>
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontWeight: "bold",
            textAlign: 'center',
            fontSize: 82,
            mt:2,
            color: '#2d2d2d',
            // fontFamily: 'Inter',
        }}>
           Your safety is our priority. 
        </Box>
        <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        fontSize:20,
        fontWeight: 400,
        fontFamily: 'PT Serif',
        color: '#2d2d2d',
        }}>
            With Kompas, it will be your reliable walking companion. With our <br/>
            powerful and safe route mapping tools, live location tracking, and <br/>
            emergency assistance, we help you navigate with ease and confidence.
        </Box>
        <Box sx={{mt:-20}}>
            <Arrowanimation />
        </Box>
        <Box sx={{
            display: 'flex', 
            alignItems: 'center', 
            ml:30,
            mt: -20,
            }}>
            <img src={Mockup.src} alt="mockup" />
        </Box>
        <Box sx={{
            display: 'block', 
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: '#2d2d2d',
            color: '#EAEFF2',
            textAlign: 'center',
            borderRadius:2,
            width:280,
            margin: 'auto',
            textTransform: 'uppercase',
            fontSize:15,
            fontWeight: 600,
        }}>
            Arrive Safe at your Destination
        </Box>
        <Box sx={{
            display: 'flex', 
            alignItems: 'center',
            justifyContent: 'center',
            mt:2,
            fontSize:27,
            fontWeight: 500,
            color:'#2d2d2d',
            }}>
            How the app works
        </Box>
        <Box sx={{ml:20, display:'flex', flexDirection:'row'}}>
            <Box sx={{mt:12}}>
        <div className={classes.container}>
        <Box sx={{ width: '100%', height: '100%', position: 'relative',}}> 
            <img src={Features.src} alt="features" 
            style={{
          objectFit: 'cover',
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
        }}
            />
        </Box>
        </div>
        </Box>
        <Box sx={{ml:25, mb:10, mt:5, display:'flex', flexDirection:'column'}}>
            <Paper elevation={10} sx={{
             '&:hover': {
                transform: 'scale(1.05)',
                transition: 'transform 0.2s ease-in-out',
            }
            }}>
                <Box sx={{
                    display: 'flex', 
                    alignItems: 'center',
                    color: '#2d2d2d',
                    textAlign: 'justify',
                    borderRadius:2,
                    width:500,
                    margin: 'auto',
                    fontSize:20,
                    fontWeight: 200,
                    m:3,
                }}>
                    1. Live Location Tracking<br />
                    Our application tracks your location 
                    in real-time and sends it to your emergency contacts, allowing them 
                    to monitor your movements and respond promptly in case you encounter any issues.
                </Box>
            </Paper>
            <Paper elevation={13} sx={{mt:5,
            '&:hover': {
                transform: 'scale(1.05)',
                transition: 'transform 0.2s ease-in-out',
            },
            }}>
                <Box sx={{
                    display: 'flex', 
                    alignItems: 'center',
                    color: '#2d2d2d',
                    textAlign: 'justify',
                    borderRadius:2,
                    width:500,
                    margin: 'auto',
                    fontSize:20,
                    m:3,
                    fontWeight: 200,
                    
                }}>
                    2. Emergency Assistance<br />
                    Our application includes an emergency button that you can
                    press in case of an emergency. This sends an alert to your emergency contacts, along with 
                    press in case of an emergency. This sends an alert to your emergency contacts, along with
                </Box>
            </Paper>
            <Paper elevation={16} sx={{mt:5,
            '&:hover': {
                transform: 'scale(1.05)',
                transition: 'transform 0.2s ease-in-out',
            },
            }}>
                <Box sx={{
                    display: 'flex', 
                    alignItems: 'center',
                    color: '#2d2d2d',
                    textAlign: 'justify',
                    borderRadius:2,
                    width:500,
                    margin: 'auto',
                    fontSize:18,
                    fontWeight: 200,
                    m:3,
                }}>
                    3. Safe Route Mapping<br />
                    We use data from local crime statistics and other factual 
                    sources to suggest the safest route to your destination,
                    providing you with a hassle-free and secure journey.
                </Box>
            </Paper>
        </Box>
    </Box>
    </div>
  )
}
