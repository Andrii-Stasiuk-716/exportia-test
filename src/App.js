import AddPostPage from 'pages/AddPostPage'
import UpdatePostPage from 'pages/UpdatePostPage'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import { postsActions } from 'slices/posts'
import { settingsActions } from 'slices/settings'

import { Navbar } from './components/Navbar'
import DashboardPage from './pages/DashboardPage'
import PostsPage from './pages/PostsPage'
import SinglePostPage from './pages/SinglePostPage'

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postsActions.getPosts());
    dispatch(settingsActions.getSettings());
  }, []);

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={DashboardPage} />
        <Route exact path="/posts" component={PostsPage} />
        <Route exact path="/posts/:id" component={SinglePostPage} />
        <Route exact path="/addPost" component={AddPostPage} />
        <Route exact path="/updatePost" component={UpdatePostPage} />
        <Redirect to="/" />
      </Switch>
    </Router>
  )
}

export default App
