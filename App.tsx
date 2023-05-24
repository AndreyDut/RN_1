import React from 'react';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,

  StyleSheet,

  Text,

  View,

  useColorScheme,
  RefreshControl,
  TouchableOpacity,
  Pressable 
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Post from './src/View/Post/Post';
import axios from "axios"
import styled from 'styled-components/native';
import FullPost from './src/View/FullPost/FullPost';


const WrapApp = styled.View`
    /* width: 100%; */
`;

interface PostIn {
  id: number;
  title: string;
  body: string;
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [posts, setPosts] = React.useState<PostIn[]>([]);
  const [isLoad, setIsLoad] = React.useState<boolean>(false);
  const [selectPost, setSelectPost] = React.useState<number | null>(null);

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

  const goBack = () => setSelectPost(null);


  if(isLoad) {
    return <View style={styles.wrapLoad}>
        <ActivityIndicator size={"large"}/>
        <Text style={styles.loadText}>Loading...</Text>
    </View>
  }



  return (
    // <ScrollView>a
    <SafeAreaView>
      <WrapApp>
        {selectPost ? <FullPost id={selectPost} goBack={goBack}/>
        :<FlatList
          refreshControl={<RefreshControl refreshing={isLoad} onRefresh={fetchPosts}/>}
          data={posts}
          renderItem={({item}) => <TouchableOpacity onPress={() => setSelectPost(item.id)}><Post  title={item.title} body={item.body}/></TouchableOpacity>}
        /> }
      {/* {posts.map(post => (<Post key={post.id} title={post.title} body={post.body}/>))} */}
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      </WrapApp>
    </SafeAreaView>
    // </ScrollView>
  );
}

export default App;



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


