import * as React from 'react';
import {Button, View, Text, SafeAreaView} from 'react-native';

const FiestasSolemnidades = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 16}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            FIESTAS Y SOLEMNIDADES PAGE Page 
          </Text>
        </View>

      </View>
    </SafeAreaView>
  );
};

export default FiestasSolemnidades;