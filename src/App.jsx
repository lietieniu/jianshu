import React, { PureComponent } from 'react'
import { Provider } from 'react-redux';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import store from './store/index';
import Header from './common/header/header';
import Home from './pages/home';
import Detail from './pages/detail/loadable.js';
import Login from './pages/login';
import Write from './pages/write';
// 测试
// 999
// 666
// 888
// 111
// 333
// ccccccccccc
// 8888888888

export default class App extends PureComponent {
  render() {
    let {logOut}=this.props
    return (
        <Provider store={store}>
         <BrowserRouter>
          <div>
             <Header logOut={logOut}/>
                <Routes>
                <Route path='/' exact element={<Home/>}></Route>
                <Route path='/detail/:id' exact element={<Detail/>}></Route>
                <Route path='/login' exact element={<Login/>}></Route>
                <Route path='/write' exact element={<Write/>}></Route>
                </Routes>
          </div>
          </BrowserRouter>
         
        </Provider>
      ) 
  }
}
