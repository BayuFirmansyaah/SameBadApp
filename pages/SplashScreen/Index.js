import React, { useState, useEffect } from 'react';
import {
    View, 
    Text, 
    StatusBar, 
    Image,
    TouchableOpacity,
    SafeAreaView
} from 'react-native';
import style from './style';
import { COLORS } from '../../constant/theme';
import {splash} from '../../constant/assets';

const Index = () => {
    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={COLORS.primary}/>
            <View style={style.containerImage}>
                <Image source={splash}/>
            </View>

            <View style={style.containerButton}>
                <TouchableOpacity style={style.button}>
                    <Text style={style.textButton}>Mulai Sambat</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default Index;