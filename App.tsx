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
import Navigation from './src/View/Navigation';


const WrapApp = styled.View`
    /* width: 100%; */
`;



function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };


  const [selectPost, setSelectPost] = React.useState<number | null>(null);


  return (
    // <ScrollView>a
    <SafeAreaView>
      <WrapApp>
        <Navigation selectPost={selectPost}/>
        {/* {selectPost ? <FullPost id={selectPost} goBack={goBack}/>
        :<Posts} */}
      {/* {posts.map(post => (<Post key={post.id} title={post.title} body={post.body}/>))} */}
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      </WrapApp>
    </SafeAreaView>
    // </ScrollView>
  );
}

export default App;




