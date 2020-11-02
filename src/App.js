import React from 'react';

import Home from './pages/User/Home';
import Category from './pages/User/Category';
import Login from './pages/User/Login';
import Order from './pages/User/Order';
import Payment from './pages/User/Payment';
import Product from './pages/User/Product';
import SignUp from './pages/User/SignUp';
import UserInfo from './pages/User/UserInfo';

import AdminHome from './pages/Admin/AdminHome';
import AdminLogin from './pages/Admin/AdminLogin';
import CategoryManagement from './pages/Admin/CategoryManagement';
import OrderManagement from './pages/Admin/OrderManagement';
import ProductManagement from './pages/Admin/ProductManagement';

import Example from './pages/Example/';

import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { FootBar } from './components/Display/FootBar';

function App() {
  return (
    <Router>
      <Switch>
        {/* User */}
        <Route path="/login" component={Login} /> {/* 登录页*/}
        <Route path="/signup" component={SignUp} /> {/* 注册页*/}
        <Route path="/category" component={Category} /> {/* 分类页*/}
        <Route path="/product" component={Product} />{' '}
        {/* 产品页（具体商品展示）*/}
        <Route path="/payment" component={Payment} /> {/* 购物车账单与付款页*/}
        <Route path="/userinfo" component={UserInfo} /> {/* 用户信息页*/}
        <Route path="/order" component={Order} /> {/* 历史订单页*/}
        {/* Admin */}
        <Route path="/adminhome" component={AdminHome} /> {/* 管理员面板*/}
        <Route path="/adminlogin" component={AdminLogin} /> {/* 管理员登录页*/}
        <Route path="/ordermanagement" component={OrderManagement} />{' '}
        {/* 订单管理页*/}
        <Route path="/productmanagement" component={ProductManagement} />{' '}
        {/* 产品管理页*/}
        <Route path="/categorymanagement" component={CategoryManagement} />{' '}
        {/* 订单更新页*/}
        {/* Example */}
        <Route path="/example" component={Example} /> {/* 订单更新页*/}
        {/* Home should be putted last or the Route always porint to Home*/}
        <Route path="/" component={Home} /> {/* Home*/}
      </Switch>
    </Router>
  );
}

export default App;
