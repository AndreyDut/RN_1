import axios from 'axios';
import React from 'react';
import { ActivityIndicator, Alert, StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';
import BackButton from '../../Components/BackButton';

const WrapFullPost = styled.View`
    flex-direction: row;
    padding: 20px;
`;

const PostDetails = styled.View`
  flex: 1;
  justify-content: center;
`;

const PostImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 12px;
  margin-right: 12px;
  align-self: center;
`;

const PostTitle = styled.Text`
  font-size: 17px;
  font-weight: 700;
`;

const PostDate = styled.Text`
  font-size: 14px;
  opacity: 0.4;
`;

  interface PostIn {
  title: string;
  body: string;
}
  

function FullPost({id, goBack}: {id: number, goBack: () => void} ): JSX.Element {

    const [post, setPost] = React.useState<PostIn | null>(null);
    const [isLoad, setIsLoad] = React.useState<boolean>(false);

    const fetchPost = () => {
        setIsLoad(true)
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then(({data}) => {
          console.log(data);
          
          setPost(data);
        }).catch(err => {
          console.log(err);
          Alert.alert("Ошибка получение статей");
        }).finally(() => {
          setIsLoad(false);
        })
      }
    
      React.useEffect(() => {
        fetchPost()
      },[])


        if(isLoad) {
    return <View style={styles.wrapLoad}>
        <ActivityIndicator size={"large"}/>
        <Text style={styles.loadText}>Loading...</Text>
    </View>
  }
  

  return (
    <>
        <BackButton onPress={goBack} />

    <WrapFullPost>

      <PostImage
        source={{
          uri: 'https://mtdata.ru/u10/photo0F9A/20725142025-0/original.jpg',
        }}
      />
      <PostDetails>
        <PostTitle>{post?.title}</PostTitle>
        <PostDate>{post?.body}</PostDate>
      </PostDetails>
    </WrapFullPost>
    </>
  );
}

export default FullPost;

const styles = StyleSheet.create({
  wrapLoad: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadText: {
    marginTop: 10,
  },

});

