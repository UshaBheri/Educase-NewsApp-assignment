import React from 'react';
import {TouchableOpacity,StyleSheet,View,Text} from 'react-native';

const AppButton = ({title,onPress,color='#fc565'}) =>{
    return(
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={onPress}
            style={Styles.cotainer}>
            <View style = {[style.button,{backgroundColor:color}]}>
                <Text style={styles.text}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default AppButton;