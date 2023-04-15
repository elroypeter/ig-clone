import {Image, StyleSheet, Dimensions} from 'react-native';
import React from 'react';

const Body = ({content: {uri}}: any) => {
  return <Image style={styles.container} source={{uri}} />;
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width,
    backgroundColor: '#F0E9E9',
  },
});

export default Body;
