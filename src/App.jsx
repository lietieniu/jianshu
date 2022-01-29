import React, { PureComponent } from 'react'
import { Provider } from 'react-redux';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import store from './store/index';
import Header from './common/header/header';
import Home from './pages/home';
import Detail from './pages/detail';

export default class App extends PureComponent {
  render() {
    return (
        <Provider store={store}>
         <BrowserRouter>
        
             <div>
             <Header/>
                <Routes>
                <Route path='/' exact element={<Home/>}></Route>
                <Route path='/detail' exact element={<Detail/>}></Route>
                </Routes>
             </div>
            
            </BrowserRouter>
         
        </Provider>
      ) 
  }
}
