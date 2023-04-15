import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import FontIcon from 'react-native-vector-icons/FontAwesome';
import AntDIcon from 'react-native-vector-icons/AntDesign';

const Footer = ({content}: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconsContainer}>
        <View style={styles.leftIcons}>
          <AntDIcon name="hearto" size={20} />
          <FontIcon name="comment-o" size={20} />
          <FontIcon name="paper-plane-o" size={20} />
        </View>
        <View>
          <FontIcon name="bookmark-o" size={20} />
        </View>
      </View>

      <Text style={styles.likes}>{content.likes} likes</Text>
      <Text style={styles.caption}>{content.caption}</Text>
      <Text style={styles.postedAt}>{content.postedAt}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 2,
    paddingHorizontal: 10,
  },
  likes: {
    fontWeight: 'bold',
  },
  caption: {
    marginVertical: 5,
  },
  postedAt: {
    color: '#8c8c8c',
    fontSize: 10,
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  leftIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 100,
  },
});

export default Footer;
