/* eslint-disable react-native/no-inline-styles */
import {FlatList} from 'react-native';
import React from 'react';
import Post from '../Post';
import Stories from '../Stories';

const posts = [
  {
    user: {
      id: 'u1',
      name: 'Vadim Savin',
      imageUri:
        'https://fastly.picsum.photos/id/33/5000/3333.jpg?hmac=h5NVRcUXmsWm612YQOroHSA5n9R7gxZgoP60LHBPHtw',
    },
    content: {
      uri: 'https://fastly.picsum.photos/id/56/2880/1920.jpg?hmac=BIplhYgNZ9bsjPXYhD0xx6M1yPgmg4HtthKkCeJp6Fk',
      likes: 123,
      caption: 'Beautiful landscape',
      postedAt: '6 minutes ago',
    },
  },
  {
    user: {
      id: 'u2',
      name: 'Vadim Savin',
      imageUri:
        'https://fastly.picsum.photos/id/33/5000/3333.jpg?hmac=h5NVRcUXmsWm612YQOroHSA5n9R7gxZgoP60LHBPHtw',
    },
    content: {
      uri: 'https://fastly.picsum.photos/id/57/2448/3264.jpg?hmac=ewraXYesC6HuSEAJsg3Q80bXd1GyJTxekI05Xt9YjfQ',
      likes: 123,
      caption: 'Beautiful landscape',
      postedAt: '6 minutes ago',
    },
  },
  {
    user: {
      id: 'u3',
      name: 'Vadim Savin',
      imageUri:
        'https://fastly.picsum.photos/id/33/5000/3333.jpg?hmac=h5NVRcUXmsWm612YQOroHSA5n9R7gxZgoP60LHBPHtw',
    },
    content: {
      uri: 'https://fastly.picsum.photos/id/62/2000/1333.jpg?hmac=PbFIn8k0AndjiUwpOJcfHz2h-wPCQi_vJRTJZPdr6kQ',
      likes: 123,
      caption: 'Beautiful landscape',
      postedAt: '6 minutes ago',
    },
  },
];

const Feed = () => {
  return (
    <FlatList
      ListHeaderComponent={Stories}
      data={posts}
      style={{backgroundColor: '#ffffff'}}
      keyExtractor={({user}) => user.id}
      renderItem={({item}) => <Post post={item} />}
    />
  );
};

export default Feed;
