import React, { Component } from 'react';
// import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
// import '@trendmicro/react-sidenav/dist/react-sidenav.css';
// import "./styles.css";
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import { Card, Icon, Image } from 'semantic-ui-react'
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';




class SecondComponent extends Component {
    state = {  }
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }
  
    componentDidMount() {
      fetch("http://127.0.0.1:5000/hello?params=5")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result
            });
            console.log(result);
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            }); 
          }
        )
    }

  //   renderItems(){
  //     const { error, isLoaded, items } = this.state
  //     if (error) {
  //       return <Box id='box' color="text.primary" style={{ width: "20em" }} ><div>Error: {error.message}</div></Box>
        
  //     } else if (!isLoaded) {
  //       return <Box color="text.primary" style={{ width: "5em" }} ><div>Loading...</div></Box>
  //     } else {
  //     return items.top_ten_artists.map((item) =>(
  //       <Card.Group>
  //         <Card
  //           header='1'
  //           meta='Friend'
  //           description={item}
  //         />
  //       </Card.Group>
    
  //     ));
  //   }
  // }






  renderItems = () => {
    const { error, isLoaded, items } = this.state
    if (error) {
      return <Box id='box' color="text.primary" style={{ width: "20em" }} ><div>Error: {error.message}</div></Box>
      
    } else if (!isLoaded) {
      return <Box color="text.primary" style={{ width: "5em" }} ><div>Loading...</div></Box>
    } else {
    
    return (
      <>
<Card.Group> 
      
    <Card style={{maxWidth: 345}}>
      <CardActionArea>
        <CardMedia
          style={{height: 140}}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>

    </Card.Group>
    <Card.Group> 
    <Card style={{maxWidth: 345}}>
      <CardActionArea>
        <CardMedia
          style={{height: 140}}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          { items.top_ten_artists.map((card) => (
          
            <ul style={{alignItems: "left", textAlign: 'left'}}>{card}</ul>
          
        ))}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>

    </Card.Group>
      </>
    )
  }
  }
  render() {
    return (
      <Grid
  container
  direction="row"
  justify="flex-start"
  alignItems="flex-start">

        {console.log(this.renderItems())}
        {this.renderItems()}
      </Grid>
    );
}
    // render() {
    //   const { error, isLoaded, items } = this.state
    //   if (error) {
    //     return <Box id='box' color="text.primary" style={{ width: "20em" }} ><div>Error: {error.message}</div></Box>
        
    //   } else if (!isLoaded) {
    //     return <Box color="text.primary" style={{ width: "5em" }} ><div>Loading...</div></Box>
    //   } else {
    //     return (
    //       <Typography component="div" variant="body1">

    //   <div class="border border-primary">
    //       <Box id='box' style={{ alignItems: "left", width: "15em", textAlign: 'left', alignSelf: 'stretch', borderStyle: "dotted", padding: "0%"}}>
    //         <div style={{width: "15em", alignItems: "left", padding: "0%"}}>
    //         <ul style={{ alignItems: "left" }}>
    //         <ul> Trending </ul>

    //         <Divider style={{width: "15em"}}/>
                    
    //           {items.top_ten_artists.map(item => (
    //             <ul>{item}</ul>
    //             ))}
            
    //         </ul>
    //         </div>
    //       </Box>
    //     </div>
    //     </Typography>

    //     );
    //   }
    // }

}

 
export default SecondComponent;