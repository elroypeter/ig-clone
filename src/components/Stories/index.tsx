import {FlatList} from 'react-native';
import React from 'react';
import Story from '../Story';

const stories = [
  {
    name: 'John Doe',
    imageUri:
      'https://fastly.picsum.photos/id/30/1280/901.jpg?hmac=A_hpFyEavMBB7Dsmmp53kPXKmatwM05MUDatlWSgATE',
  },
  {
    name: 'Megan Doe',
    imageUri:
      'https://fastly.picsum.photos/id/43/1280/831.jpg?hmac=glK-rQ0ppFClW-lvjk9FqEWKog07XkOxJf6Xg_cU9LI',
  },
  {
    name: 'Paparita Doe',
    imageUri:
      'https://fastly.picsum.photos/id/42/3456/2304.jpg?hmac=dhQvd1Qp19zg26MEwYMnfz34eLnGv8meGk_lFNAJR3g',
  },
  {
    name: 'Jame Doe',
    imageUri:
      'https://fastly.picsum.photos/id/33/5000/3333.jpg?hmac=h5NVRcUXmsWm612YQOroHSA5n9R7gxZgoP60LHBPHtw',
  },
];

const Stories = () => {
  return (
    <FlatList
      horizontal
      data={stories}
      keyExtractor={item => item.name}
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => (
        <Story imageUri={item.imageUri} name={item.name} />
      )}
    />
  );
};

export default Stories;
