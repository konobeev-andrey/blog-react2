import React from 'react';
import './App.css';
import './style/main.css';
import PostPage from "./components/PostPage/PostPage";
import {BrowserRouter, Route, Switch, withRouter} from "react-router-dom";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import store from './redux/state'
import ListPosts from "./components/ListPosts/ListPosts";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Basic from './components/AddPostFormik'


function App(props) {
    return (<>

            <div className="wrapper layout">
                <header>
                    <p>Мой первый блог</p>
                </header>
                <Switch>
                    <Route path='/post/:id?'>
                        <PostPage/>
                    </Route>
                    <Route path='/form'>
                        <Basic/>
                    </Route>
                    <Route path='/'>
                        <ListPosts />
                    </Route>

                </Switch>
            </div>
            <ScrollToTop/>
        </>

    );
}

const mstp = (state) => ({})
const AppContainer = compose(
    withRouter,
    connect(mstp, {}),
)(App);

const AppBlog = () => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}
export default AppBlog;