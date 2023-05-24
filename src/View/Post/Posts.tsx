import axios from 'axios';
import React from 'react';
import { ActivityIndicator, Alert, FlatList, RefreshControl, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';
import Post from './Post';

const WrapPost = styled.View`
  flex-direction: row;
  padding: 15px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-style: solid;
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

interface PostProps {
  navigation: any;
}

interface PostIn {
    id: number;
    title: string;
    body: string;
  }




function Posts({navigation}: PostProps): JSX.Element {

    const [posts, setPosts] = React.useState<PostIn[]>([]);
    const [isLoad, setIsLoad] = React.useState<boolean>(false);

    
  const fetchPosts = () => {
    setIsLoad(true)
    axios.get("https://jsonplaceholder.typicode.com/posts").then(({data}) => {
      console.log(data);
      
      setPosts(data);
    }).catch(err => {
      console.log(err);
      Alert.alert("Ошибка получение статей");
    }).finally(() => {
      setIsLoad(false);
    })
  }

  React.useEffect(() => {
    fetchPosts()
  },[])

    if(isLoad) {
        return <View style={styles.wrapLoad}>
            <ActivityIndicator size={"large"}/>
            <Text style={styles.loadText}>Loading...</Text>
        </View>
      }

  return (
    <FlatList
          refreshControl={<RefreshControl refreshing={isLoad} onRefresh={fetchPosts}/>}
          data={posts}
          renderItem={({item}) => <TouchableOpacity onPress={() => navigation.navigate("FullPost", {id: item.id})}><Post  title={item.title} body={item.body}/></TouchableOpacity>}
        />
  );
}

export default Posts;


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
  
  
