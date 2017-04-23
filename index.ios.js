
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

const wk8 = () => (
      <View style={{ flex: 1 }}>
        <Header headerText={'News'} />    
        <AlbumList />  
      </View>
    );

AppRegistry.registerComponent('wk8', () => wk8);
