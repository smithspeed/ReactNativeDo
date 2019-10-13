//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,SafeAreaView,StatusBar,FlatList,ActivityIndicator } from 'react-native';

// create a component
class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       data : [],
       isLoading : false
    }
  }

  componentDidMount(){
    this.getItem();
  }
  
  renderRow = ({item}) =>{
    return (
      <View style={styles.item}>
        <Text>{item.id} ) {item.title}</Text>
      </View>
    )
  }

  getItem = () =>{
    let API_URl = "https://jsonplaceholder.typicode.com/posts";

    this.setState({isLoading:true})

    fetch(API_URl)
    .then((response)=>response.json())
    .then((responseJson)=>{
        this.setState({
          data:responseJson
        })
    })
    .finally(()=>this.setState({isLoading:false}))
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={this.state.data}
          keyExtractor={(item,index)=>index.toString()}
          renderItem={this.renderRow}
          refreshing={this.state.isLoading}
          onRefresh={this.getItem}

        />
      </SafeAreaView>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    marginTop:StatusBar.currentHeight,
    backgroundColor: '#fff',
  },
  item:{
    borderBottomWidth:1,
    borderBottomColor:'#ccc',
    padding:10
  }
});

//make this component available to the app
export default App;
