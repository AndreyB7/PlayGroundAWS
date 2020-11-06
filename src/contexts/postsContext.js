import React from 'react';
import PostsDataService from '../services/api';

const initialState = {
    posts: []
}

export const PostsContext = React.createContext();

const PostsContextProvider = ({ children }) => {

    const [posts, setData] = React.useState(initialState.posts)

    React.useEffect(() => {
        retrievePosts();
        console.log('useEffect used')
      }, []);

    const retrievePosts = () => {
        PostsDataService.getAll()
          .then(response => {
            setData(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      };

    const addPost = payload => {
        console.log(payload);
        PostsDataService.create(payload)
          .then(response => {
            setData([...posts, response.data]);
          })
          .catch(e => {
            console.log(e);
          });
    }

    const deletePost = id => {
        console.log(id);
        PostsDataService.remove(id)
          .then(response => {
            console.log(response.data)
            setData([...posts.filter(item => item.id !== id)])
          })
          .catch(e => {
            console.log(e);
          });
    }

    return (
        <PostsContext.Provider value={{ posts, addPost, deletePost }}>
            {children}
        </PostsContext.Provider>
    )
}

export default PostsContextProvider;