import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  StatusBar,
  Dimensions,
  Image ,Button,Alert,ScrollView} from 'react-native';



export default class Tiles extends React.Component {
  render() {
    
    return (
            <View style={styles.tileContainer}>
                <Text style={styles.name}>{this.props.name}</Text> 
              
            </View>

    );
  }
}
var width=Dimensions.get('window').width;
const styles = StyleSheet.create({
    tileContainer: {
      
        width:width/2-20,
        height:100,
        margin:5,
        backgroundColor:'#ffff',
        
        borderColor:'#ad1457',
        borderRadius:15,
        borderWidth:2,
        padding:10,
        justifyContent:'center',
        alignItems:'center',
    
  },
  name:{
      color:"#ad1457",
      fontWeight:'bold',
      fontSize:15,
      
  }
});
