/*
* 主体界面的容器组件*/
/*
应用主界面路由组件
 */
import React, {Component} from 'react'
import {connect} from "react-redux"
import {Switch,Route} from 'react-router-dom'
import DashenInfo from '../dashen-info/dashen-info'
import LaobanInfo from '../laoban-info/laoban-info'

 class Main extends Component {
    render() {
        //读取cookie中的userid
        //若么有，自动重定向到登陆界面
        //若有，
        return (
          <Switch>
              <Route path={'/dahseninfo' component={DashenInfo}}/>
              <Route path={'/laobaninfo' component={LaobanInfo}}/>
          </Switch>
        )
    }
}

export default connect()(Main)

//实现自动登录
/*
* 1.如果cookie中有usrid，发请求获取对应的user，暂时不错任何处理
* 2.如果cookie中么有usrid，自动进入login页面
*
* 如果已经登录请求根路径：
* 根据user和type 和header来计算一个重定向的路径，并自动重定向

*
* */