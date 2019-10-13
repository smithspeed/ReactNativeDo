import React,{Component} from 'react';
import { StyleSheet, Text, View,FlatList,ActivityIndicator,TouchableOpacity } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isLoading : true,
       dataSource: []
    }
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response)=>response.json())
    .then((responseJson) => {
        this.setState({
            isLoading:false,
            dataSource:responseJson
        })
    })
  }

  _renderItem = ({item}) =>(
    <TouchableOpacity onPress={()=>alert(item.body)}>
      <View style={styles.item}>
        <Text>{item.title}</Text>
      </View>
    </TouchableOpacity>
  )
  

  render(){
      if (this.state.isLoading) {
        return (
          <View style={styles.container}>
            <ActivityIndicator size="large" animating/>
          </View>
        );
      }
      else
      {
        return (
          <View style={styles.container}>
            <FlatList
              data={this.state.dataSource}
              renderItem={this._renderItem}
              keyExtractor={(item,index)=>index.toString()}
            />
          </View>
        );
      }
      
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item:{
    padding:5,
    borderBottomWidth:1,
    borderBottomColor:'#eee',
  }
});

export default App;