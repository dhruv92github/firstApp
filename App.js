import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  StatusBar,
  Image ,Button,Alert,ScrollView} from 'react-native';

import Tiles from './comonents/Tiles';

export default class App extends React.Component {
  constructor(){
    super();
    this.state={
      tileName:[
        'Seat Availability',
        'PNR Status',
        'Availability Reminder'
    ]
    }
  }
  render() {
    const {tileName}=this.state;
    const dashbard=tileName.map((tile,index)=> <Tiles name={tile} key={index} />)
    return (
            <View style={styles.container}>
              <StatusBar 
                backgroundColor="#78002e"
                barStyle="light-content"
              />
              <View style={styles.header}>
                <Text style={styles.title}>Grab your Train</Text>
              </View>
              <View style={styles.content}>
                
                {dashbard}
                
              </View>
              <View style={styles.footer}>
              
              </View>
              
              
            </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
        flex:1,
        backgroundColor:'#ffff',
        fontSize:18,       
        color:'#323232',
    
  },
  title:{
    color:'#ffffff',
    fontSize:25,
    textAlign:'center',
    marginTop:20,
    fontWeight:'bold'

},
header:{
  flex:1,
  backgroundColor:'#ad1457',
  

},
content:{
  flex:5,
  flexDirection:'row',
  flexWrap:'wrap',
  padding:5,
  backgroundColor:'#ffffff',
  
  
},
footer:{
  flex:1,
  backgroundColor:'#e35183'
}

});
