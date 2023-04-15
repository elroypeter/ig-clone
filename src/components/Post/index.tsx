import {View} from 'react-native';
import React from 'react';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

const Post = ({post}: any) => {
  return (
    <View>
      <Header user={post.user} />
      <Body content={post.content} />
      <Footer content={post.content} />
    </View>
  );
};

export default Post;
