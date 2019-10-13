//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,FlatList,SafeAreaView,StatusBar,Image,ActivityIndicator } from 'react-native';

// create a component
class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       data : [],
       page : 1,
       isLoading:false
    }
  }

  componentDidMount(){
    this.setState({isLoading:true},this.getData)
    
  }

  getData = async ()=>{
    console.log(this.state.page);
    const url = "https://jsonplaceholder.typicode.com/photos?_limit=10&_page="+this.state.page;
    fetch(url)
    .then((response)=> response.json())
    .then((responseJson)=>{
       this.setState({
         data:this.state.data.concat(responseJson),
         isLoading:false
       })
    })
  }

  renderRow = ({item}) => {
    return (
       <View style={styles.item}>
         <Image source={{uri:item.url}} style={styles.itemImage}/>
         <Text style={styles.itemText}>{item.title}</Text>
         <Text style={styles.itemText}>{item.id}</Text>
       </View>
    )
  }

  handleLoadMore = () => {
    //console.warn('dfdgfd');
    this.setState({
      page : this.state.page + 1,
      isLoading: true
    },this.getData)
  }

  renderFooter = () =>{
    return (
      this.state.isLoading ?
      <View style={styles.loader}>
        <ActivityIndicator size="large" animating/>
      </View> : null
    )
  }
  
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <FlatList
            data={this.state.data}
            keyExtractor={(item,index)=>index.toString()}
            renderItem={this.renderRow}
            onEndReached={this.handleLoadMore}
            onEndReachedThreshold={0.1}
            ListFooterComponent={this.renderFooter}
          />
        </View>
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
  loader:{
    marginTop:10,
    alignItems:'center'
  },
  item:{
      borderBottomColor:'#ccc',
      marginBottom:10,
      borderBottomWidth:1,
  },
  itemImage:{
    width:'100%',
    height:200,
    resizeMode:"cover"
  },
  itemText:{
    fontSize:16,
    padding:5
  }
});

//make this component available to the app
export default App;
