import React from 'react';
import { Typography } from '@material-ui/core';
import { AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import Videoplayer from './components/Videoplayer';
import Notifications from './components/Notifications';
import Options from './components/Options';


const useStyles = makeStyles((theme) => ({
    appBar: {
      borderRadius: 15,
      margin: '30px 100px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: '600px',
      border: '2px solid black',
  
      [theme.breakpoints.down('xs')]: {
        width: '90%',
      },
    },
    image: {
      marginLeft: '15px',
    },
    wrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
    },
}));


const App = () => {
  const classes = useStyles();

  function App(){
    return (
    <div className={classes.wrapper}>
        <AppBar className={classes.appBar} position='static' color='inherit'>
            <Typography variant='h2' align='center'>Video_Chat</Typography>
        </AppBar>
        <Videoplayer/>
        <Options>
            <Notifications/>
        </Options>

    </div>
    );
  }
};

export default App;
