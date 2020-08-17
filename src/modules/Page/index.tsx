import React, {useEffect, useState} from 'react';
import methods from './methods'
import Head from './components/Head'
import Search from './components/Search'
import Table from './components/Table'
import './index.less'
import PageProvider from "./PageProvider";

/**
 * 基础页面组件
 * @param props
 * @returns {*}
 * @constructor
 */
export default function BasePage(props) {

    useEffect(() => {
        // Object.keys(methods).map(func => {
        //     props.page[func] = methods[func].bind(props);
        // })
        // props.page.pageInit()
    }, [])

    const pageChange = (page) => {
        props.pageChange(page)
    }

    return (
        <PageProvider page={props.page} pageChange={pageChange}>
            <div className="base-page">
                <Head></Head>
                <Search></Search>
                <Table></Table>
            </div>
        </PageProvider>
    );
}
