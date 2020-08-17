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
    let [pageConfig, setPageConfig] = useState<object>({
        onload: true,              // 页面加载状态
        loading: false,             // 数据加载状态
        title: '测试页面',              // 页面标题
        icon: 'ie',                 // 页面图标
        searchCondition: {
            smsType: {label: '短信类型', placeholder: '选择短信类型', type: 'select', value: '', options: 'sys_sms_type', sql: 'EQ'},
            templateName: {label: '短信模版名称', placeholder: '输入短信模版名称', type: 'input', value: '', sql: 'LIKE'},
            regionId: {label: '区域代码', required: true, placeholder: '输入区域代码', type: 'input', value: '', sql: 'LIKE'}
        },
        formConfig: {
            name: {
                label: '名字',
                type: 'input',
                width: 200,
                required: true,
                condition: (values, formConfig, form, formData) => {
                    return formData.moneyAcctId ? 2 : 1
                }
            },
            sex: {
                required: true,
                label: '性别',
                type: 'radio',
                options: 'sys_user_sex'
            },
            age: {
                required: true,
                label: '年龄',
                type: 'number',
                width: 200,
                condition: (values, formConfig, form, formData) => {
                    return formData.moneyAcctId ? 2 : 1
                }
            },
        },
        columnsConfig: [
            {
                title: '状态',
                fixed: 'left',
                width: 80,
                dataIndex: 'status',
                align: 'center',
                scopedSlots: {customRender: 'status'},
            },
            {
                title: '姓名',
                width: 80,
                dataIndex: 'name',
                align: 'center'
            },
            {
                title: '年龄',
                width: 80,
                dataIndex: 'agte',
                align: 'center'
            },
            {
                title: '地址',
                width: 150,
                dataIndex: 'address',
                align: 'center'
            },
            // {
            //     title: '短信类型',
            //     fixed: 'left',
            //     width: 100,
            //     dataIndex: 'smsType',
            //     align: 'center',
            //     customRender: (text, record) => {
            //         // return this.$string.getLabel(this.$refs['smsTemplate'].page.dict['sys_sms_type'], text);
            //         return ''
            //     }
            // },
            {
                title: '操作',
                width: 80,
                fixed: 'right',
                align: 'center',
                scopedSlots: {customRender: 'action'},
                render: ()=> <a>cess</a>
            }
        ],
        dataList: [
            {
                key: '1',
                name: '胡彦斌',
                age: 32,
                address: '西湖区湖底公园1号',
            },
            {
                key: '2',
                name: '胡彦祖',
                age: 42,
                address: '西湖区湖底公园1号',
            },
        ],
        rowExtraButton: [
            {
                label: '发送短信',
                type: 'primary',
                method: (record) => {

                }
            }
        ],
        tableSelect: false,
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

    const setParentPage = (page) => {
        console.log(page)
        setPageConfig(page)
    }

    return (
        <div className="base-table">
            <PageProvider page={pageConfig} setParentPage={setParentPage}>
                <BasePage page={pageConfig} refs='pageRefs'></BasePage>
            </PageProvider>
        </div>
    );
}
