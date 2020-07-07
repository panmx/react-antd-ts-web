// 兼容IE
import "core-js/stable";
import "regenerator-runtime/runtime";

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import 'antd/dist/antd.css';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Redirect, Route, Switch} from "react-router";
import {Router} from "react-router-dom";
import {history,routes} from './router/index';

function getRouterByRoutes(routes: any){
    const renderedRoutesList: any = [];
    const renderRoutes = (routes: any, parentPath: string)=>{
        Array.isArray(routes)&&routes.forEach((route)=>{
            const {path,redirect,children,layout,component} = route;
            if(redirect){
                renderedRoutesList.push(<Redirect key={`${parentPath}${path}`} exact from={path} to={`${parentPath}${redirect}`}/>)
            }
            if(component){
                renderedRoutesList.push(
                    layout?<Route
                            key={`${parentPath}${path}`}
                            exact path={`${parentPath}${path}`}
                            render={(props)=>React.createElement(layout,props,React.createElement(component,props))} />:
                        <Route
                            key={`${parentPath}${path}`}
                            exact
                            path={`${parentPath}${path}`}
                            component={component}/>)
            }
            if(Array.isArray(children)&&children.length>0){
                renderRoutes(children,path)
            }
        });
    }
    renderRoutes(routes,'')
    return renderedRoutesList;
}

ReactDOM.render(
    <AppContainer>
        <Router history={history}>
            <Switch>
                {getRouterByRoutes(routes)}
            </Switch>
        </Router>
    </AppContainer>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
