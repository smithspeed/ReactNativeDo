//import liraries
import React, { Component } from 'react';
import {Text, StyleSheet,TouchableOpacity,Image } from 'react-native';

// create a component
class Card extends Component {
  render() {
    return (
          <TouchableOpacity style={styles.card}>
            <Image style={styles.cardImage} source={{uri:"https://cdn.cnn.com/cnn/.e/img/3.0/global/misc/cnn-logo.png"}}/>
            <Text style={styles.cardText}>{this.props.item.title}</Text>
          </TouchableOpacity>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  card:{
    backgroundColor:'#fff',
    marginTop:10,
    marginBottom:5,
    marginLeft:'2%',
    width:'96%',
    shadowColor:'#000',
    shadowOpacity:0.2,
    shadowRadius:1,
    elevation: 3,
    shadowOffset:{
      width:3,
      height:3
    }

  },
  cardImage:{
    width:'100%',
    height:200,
    resizeMode:"cover",
  },
  cardText:{
    padding:10,
    fontSize:16,
  }
  
});

//make this component available to the app
export default Card;
