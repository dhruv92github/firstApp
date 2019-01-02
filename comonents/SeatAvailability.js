import React, { Component } from 'react'
import { Text, View,TextInput,TouchableOpacity,StyleSheet,Picker } from 'react-native'
import DatePicker from 'react-native-datepicker';
import moment from 'moment';

export default class SeatAvailability extends Component {
    constructor(){
        super();
        this.state={
            source:'',
            destination:'',
            date:moment().format(),
            class:'SL',
            quota:'GN'
        }
    }

    handleDateChange=(selectedDate)=>{
        this.setState({date:selectedDate});
    }

    handleDropdownChange=(value,index)=>{
        this.setState({class:value});
    }
    handleQuotaChange=(value,index)=>{
        this.setState({quota:value});
    }

  render() {
    return (
    
      <View style={styles.container}>
         <View style={styles.header}>
                <Text style={styles.title}>Seat Availability</Text>
              </View>
        <View style={styles.content}> 
        <TextInput 
          placeholder="Source"  
          style={styles.input}

        />
        <TextInput 
          placeholder="Destination"  
          style={styles.input}
          
        />
        <DatePicker
            style={{width:'100%'}}
            date={this.state.date} 
            mode="date"
            
            confirmBtnText="Select"
            cancelBtnText="Cancel"
            minDate={moment().format()}
            maxDate={moment().add('months',4)}
            customStyles={{
                dateIcon:{
                    
                },
                dateInput: {
                    alignItems : 'flex-start',
                    padding:5,
                    marginTop:10,
                    borderWidth:0,
                    borderBottomWidth:2,
                    borderBottomColor:'#ad1457'
                },
                dateText:{
                    color:'#ad1457'
                }
            }}
            onDateChange={this.handleDateChange}
        />
        <Picker
            selectedValue={this.state.class}
            style={{borderBottomWidth:2,
                borderBottomColor:'#ad1457'}}
            onValueChange={this.handleDropdownChange}
            >
            <Picker.Item label="First Class AC" value="1A" />
            <Picker.Item label="AC 2-Tier" value="2A" />
            <Picker.Item label="AC 3-Tier" value="3A" />
            <Picker.Item label="Sleeper" value="SL" />
        </Picker>
        <Picker
            selectedValue={this.state.quota}
            style={{borderBottomWidth:2,
                borderBottomColor:'#ad1457'}}
            onValueChange={this.handleQuotaChange}
            >
            <Picker.Item label="General Quota" value="GN" />
            <Picker.Item label="Tatkal" value="TQ" />
            <Picker.Item label="Premium Tatkal" value="PT" />
            <Picker.Item label="Ladies" value="LD" />
            <Picker.Item label="Lower Birth" value="SS" />
            <Picker.Item label="Defence Quota" value="DF" />
            <Picker.Item label="Physically Handicapped" value="HP" />
        </Picker>


        <TouchableOpacity style={styles.btn}>
            <Text style={{color:'#ffffff'}}>Search Trains</Text>
        </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles=StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#ffff',
        fontSize:18,
        
        color:'#323232',
    
  },
    input:{
        borderBottomColor:'#ad1457',
        borderBottomWidth:2
    },
    btn:{
        backgroundColor:'#ad1457',
        color:'#ffffff',
        height:40,
        marginTop:20,
        justifyContent:'center',
        alignItems:'center'

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
        flex:6,
        padding:5,
        backgroundColor:'#ffffff',
    }
});
