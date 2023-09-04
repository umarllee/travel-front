import { Drawer } from '@mui/material';
import { styled } from '@mui/system';


export const NavigationDrawerStyled = styled(Drawer)(() => ({
  
    '& .MuiButton-root': {
            backgroundColor: 'red'
    },
   
    // [breakpoints.down('sm')]: {
    // '& .MuiDrawerPaper': {
    //         paddingTop: '18%',
    // }
    // },
    // [breakpoints.up('md')]: {
    // '& .MuiDrawer-paper': {
    //         paddingTop: 'clamp(11vw, 10%, 5vh)',
    //         display: 'flex',
    //         alignItems: 'center',
    // }
    // },
}));    
