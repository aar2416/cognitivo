import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ResponsiveDrawer from './components/sideNav'
import  SecondComponent from './components/popularArtists'
import { makeStyles, useTheme } from '@material-ui/core/styles';



class App extends Component{
  useWindowWidth() {
    const theme = useTheme();
    const classes = useStyles();
    return classes;
  }

  render() {
    const useStyles = makeStyles((theme) => ({
      // necessary for content to be below app bar
      toolbar: theme.mixins.toolbar,
      content: {
        flexGrow: 1,
        padding: theme.spacing(3),
      },
    }));
    classes = this.useWindowWidth()
    return (
      <div className="App">
        <ResponsiveDrawer/>
        <SecondComponent className={classes.content}/>
      </div>
    );

  }

}

export default App;
