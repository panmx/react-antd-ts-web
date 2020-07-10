import React, {useEffect, useState} from 'react';
import {Button} from "antd";
import {PageContext} from '../PageProvider';
import { ReloadOutlined, SearchOutlined, PlusOutlined } from '@ant-design/icons';

/**
 * 页面头部
 * @param props
 * @returns {*}
 * @constructor
 */
export default function Head(props) {
    useEffect(() => {

    }, [])


    const refreshData = (context) => {
        context.setPage(context.page)
    }

    const searchBtnClick = (context) => {
        context.page.searchShowStatus = !context.page.searchShowStatus
        context.setPage(context.page)
        // props.page.showOrHiddenSearch(props.page)
    }
    const addBtnClick = (context) => {
        context.page.formModalStatus = true
        context.setPage(context.page)
    }

    return (
        <PageContext.Consumer>
            {(context) => (
                <div className="base-page-header">
                    <div className="header-title">{context.page.title}</div>

                    <div className="buttons">
                        <Button type="primary" onClick={() => refreshData(context)} icon={<ReloadOutlined/>}>刷新</Button>
                        <Button type="primary" onClick={() => searchBtnClick(context)} icon={<SearchOutlined/>}>搜索</Button>
                        <Button type="primary" onClick={() => addBtnClick(context)} icon={<PlusOutlined/>}>新增</Button>
                        {
                            context.page.headerExtraButtons ? context.page.headerExtraButtons.map((item, index) => (
                                <Button  type={item.type || 'default'} key={index}>{item.label}</Button>
                            )) : ''
                        }
                    </div>
                </div>
            )}

        </PageContext.Consumer>
    );
}
