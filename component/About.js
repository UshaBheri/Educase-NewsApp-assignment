import React from 'react';
import {View,Text,StyleSheet,StatusBar,Image} from 'react-native';
import Icon from './Icon';
import {Linking} from 'react-native';

const About = () => {
    return(
        <View style={StyleSheet.container}>
            <Image style={StyleSheet.image} source={require("../assets/photo.jpg")} />
            <Text style ={StyleSheet.text}>Bheri Usha</Text>
            <Text style ={StyleSheet.info}>
                Hello I am Usha, I have a Bachelor's Technology in Electronics and Communication Engineering.
            </Text>
            <View style={StyleSheet.icons}>
                <Icon 
                    onPress={() => Linking.openURL("email")}
                    name={"email"}
                    size={50}
                />
                <Icon 
                    onPress={() => Linking.openURL("github")}
                    name={"guthub"}
                    backgroundColor="#ff4d4d"
                    size={50}
                />
                <Icon 
                    onPress={() => Linking.openURL("linkedIn")}
                    name={"linkedIn"}
                    size={50}
                    backgroundColor="#ff4d4d"
                />

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        paddingTop:StatusBar.currentHeight,
        backgroundColor:'#ffcccc',
        flex:1,
        alignItems:'center',
    },
    text:{
        fontSize:20,
        marginVertical:5,
        fontWeight:'bold',
    },
    icons:{
        marginTop:50,
        width:'100%',
        margin:20,
        flexDirection:'row',
        justifyContent:'space-evenly',
    },
    info:{
        marginHorizontal:15,
        marginVertical:10,
        fontSize:20,
    },
    image:{
        height:200,
        width:200,
        borderRadius:100,
        resizeMode:'cover',
        borderColor:'#ff9999',
        borderWidth:5,
    },
});

export default About;