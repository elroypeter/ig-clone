import {Image, StyleSheet, View} from 'react-native';
import React from 'react';

const ProfileImage = ({uri, size = 70}: any) => {
  return (
    <View style={[styles.container, {width: size + 10, height: size + 10}]}>
      <Image
        source={{
          uri,
        }}
        style={[styles.image, {width: size, height: size}]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 3,
    borderRadius: 40,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#FFB4B4',
    backgroundColor: '#FFFFFF',
  },
  image: {
    borderRadius: 35,
  },
});

export default ProfileImage;
