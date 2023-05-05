import React from 'react';
import {
  Alert,
  SafeAreaView,
  StatusBar,

  useColorScheme,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Post from './src/View/Post/Post';
import axios from "axios"


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

  React.useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(({data}) => {
      console.log(data);
      
      setPosts(data);
    }).catch(err => {
      console.log(err);
      Alert.alert("Ошибка получение статей");
    })
  },[])



  return (
    <SafeAreaView>
      {posts.map(post => (<Post key={post.id} title={post.title} body={post.body}/>))}
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
    </SafeAreaView>
  );
}

export default App;

