import React from 'react';
import styled from 'styled-components/native';

const WrapPost = styled.View`
  flex-direction: row;
  padding: 15px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-style: solid;
`;

const PostDetails = styled.View`
  justify-content: center;
`;

const PostImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 12px;
  margin-right: 12px;
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
    title: string,
    body: string,
}

function Post({title, body}: PostProps): JSX.Element {

  return (
      <WrapPost>
        <PostImage
          source={{
            uri: 'https://mtdata.ru/u10/photo0F9A/20725142025-0/original.jpg',
          }}
        />
        <PostDetails>
          <PostTitle>{title}</PostTitle>
          <PostDate>{body}</PostDate>
        </PostDetails>
      </WrapPost>
  );
}

export default Post;
