//import liraries
import React, { Component } from 'react';
import { View, StyleSheet,SafeAreaView,StatusBar,ActivityIndicator,FlatList } from 'react-native';
import Card from './component/Card/Card';

// create a component
class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       items : [],
    }
  }
  

  componentDidMount(){
    this._get("https://jsonplaceholder.typicode.com/posts").then(
      data =>{
        this.setState({
          items : data
        })
      }
    )
  }

  _get = async (endpoint) => {
    const res = await fetch(endpoint);
    const data = await res.json();
    return data;
  }

  render() {
    
    if (this.state.items.length===0) {

      return (
        <View style={styles.loader}>
            <ActivityIndicator size="large"  animating />
        </View>
        
      );
      
    }
    else
    {
      return (
        <SafeAreaView style={styles.container}>
          <View >
            <FlatList 
              data={this.state.items}
              keyExtractor={(item,index)=> index.toString()}
              renderItem={({item}) => <Card item={item}/>}
            
            />
          </View>
        </SafeAreaView>
        
      );
    }
    
  }
}



// define your styles
const styles = StyleSheet.create({
  container: {
    marginTop:20,
    backgroundColor: '#F5FCFF',
    marginTop:StatusBar.currentHeight
  },
  loader:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  }
  
});

//make this component available to the app
export default App;
