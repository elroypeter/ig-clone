import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import ProfileImage from '../ProfileImage';

const Story = ({imageUri, name}: any) => {
  return (
    <View style={[styles.container]}>
      <ProfileImage uri={imageUri} />
      <Text>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});

export default Story;
