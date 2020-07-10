import React, {useEffect, useState} from 'react';
import BasePage from '../../modules/Page/index'
import PageProvider from '../../modules/Page/PageProvider'

/**
 * 测试页面
 * @param props
 * @returns {*}
 * @constructor
 */
export default function BaseTable(props) {
    const [pageConfig, setPageConfig] = useState<object>({
        onload: true,              // 页面加载状态
        loading: true,             // 数据加载状态
        title: '测试页面',              // 页面标题
        icon: 'ie',                 // 页面图标
        // 页面头部额外按钮组
        headerExtraButtons: [
            {
                label: '修改',
                type: 'primary',
                method: (record) => {

                }
            },
            {
                label: '修改1',
                type: 'primary',
                method: (record) => {

                }
            },
        ]
    })

    useEffect(() => {

    }, [])

    return (
        <div className="base-table">
            <PageProvider pageConfig={pageConfig}>
                <BasePage page={pageConfig}></BasePage>
            </PageProvider>
        </div>
    );
}
