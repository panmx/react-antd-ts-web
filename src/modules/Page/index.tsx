import React, {useEffect, useState} from 'react';
import methods from './methods'
import Head from './components/Head'
import Search from './components/Search'
import Table from './components/Table'
import './index.less'

/**
 * 页面头部
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

    return (
        <div className="base-page">
            <Head></Head>
            <Search></Search>
            <Table></Table>
        </div>
    );
}
