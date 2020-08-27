import React, {useState} from 'react';
import './App.css';
import './style/main.css';
import Popup from "./components/Popup/Popup";
import PostPage from "./components/PostPage/PostPage";
import {BrowserRouter, Route, Switch, withRouter} from "react-router-dom";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import store from './redux/state'
import ListPosts from "./components/ListPosts/ListPosts";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Message from "./components/common/Message";
import {toggleWindow} from "./redux/MessageWindowReducers";


function App(props) {
    const [popup, setPopup] = useState(false)

    const isOpenPopup = () => {
        setPopup(true)
    }
    const isClosePopup = () => {
        setPopup(false)
        props.toggleWindow()
    }
    const cancelScroll = popup ? {position: 'fixed',overflow: "hidden"} : {}


    return (<>

            <div className="wrapper layout" style={cancelScroll}>
                <header>
                    <p>Мой первый блог</p>
                </header>
                <Switch>
                    <Route path='/post/:id?'>
                        <PostPage/>
                    </Route>
                    <Route path='/'>
                        <ListPosts  isOpenPopup={isOpenPopup}/>
                    </Route>

                </Switch>
            </div>
            {popup && <Popup isClosePopup={isClosePopup}/>}
            {props.OpenWindow && <Message correct={true} text={"Пост сохранен"}/>}
            <ScrollToTop/>
        </>

    );
}
const mstp = (state) =>({
    OpenWindow:state.messageWindow.OpenWindow
})
const AppContainer = compose(
    withRouter,
    connect(mstp, {toggleWindow}),
    )(App);

const AppBlog = () => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}
export default AppBlog;