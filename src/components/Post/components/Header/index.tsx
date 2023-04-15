import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import ProfileImage from '../../../ProfileImage';
import Icon from 'react-native-vector-icons/Entypo';

const Header = ({user}: any) => {
  return (
    <View style={[styles.container]}>
      <ProfileImage uri={user.imageUri} size={40} />
      <Text style={styles.name}>{user.name}</Text>
      <Icon style={styles.icon} name="dots-three-vertical" size={20} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  name: {
    fontWeight: 'bold',
  },
  icon: {
    marginLeft: 'auto',
    paddingHorizontal: 10,
  },
});

export default Header;
