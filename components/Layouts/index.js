import React, { useState, useEffect } from 'react';
import { 
    View, 
    ScrollView,
    StatusBar 
} from 'react-native';

const index = (props) => {
    if(props.layout == 'view'){
        return (
            <View style={
                { 
                    backgroundColor:props.BackgroundColor 
                }
            }>
                <StatusBar backgroundColor={props.StatusBarColors} barStyle={props.StatusBarStyle}/>
               <>
                 {props.children}
               </>
            </View>
        )       
    }else{
        return (
            <ScrollView showsVerticalScrollIndicator={false} style={
                {
                    backgroundColor:props.BackgroundColor
                }
            }>
                <StatusBar backgroundColor={props.StatusBarColors} barStyle={props.StatusBarStyle}/>
                {props.children}
            </ScrollView>
        )
    }
}

export default index;