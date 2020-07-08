// 兼容IE
import "core-js/stable";
import "regenerator-runtime/runtime";

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { ConfigProvider } from "antd";
import zhCN from "antd/es/locale/zh_CN";
import store from "../src/store";
import Router from "./router";
import 'antd/dist/antd.css';
import './index.css';
import "./mock";
import '@/lib/monitor';

ReactDOM.render(
    <ConfigProvider locale={zhCN}>
        <Provider store={store}>
            <Router />
        </Provider>
    </ConfigProvider>,
    document.getElementById('root')
);
