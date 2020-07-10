import React, {useEffect, useState} from 'react';
import {PageContext} from '../PageProvider';
import FormComponent from './Form'
import {
    Form,
    Input,
    Select,
    Checkbox,
    Button,
    Radio,
    Table
} from 'antd';
import {SearchOutlined} from '@ant-design/icons';

/**
 * 列表
 * @param props
 * @returns {*}
 * @constructor
 */
const TableComponent = (props) => {
    let selectionConfig = {}

    useEffect(() => {

    }, [])

    return (
        <PageContext.Consumer>
            {(context) => (
                <div>
                    {
                        context.page.columnsConfig ?
                            <div className="base-page-table">
                                <Table loading={context.page.loading}
                                       bordered
                                       rowKey={context.page.primaryKey}
                                       columns={context.page.columnsConfig}
                                       dataSource={context.page.dataList}
                                       pagination={false}
                                       rowSelection={selectionConfig}
                                       expandedRowKeys={context.page.tableExpandedRowKeys}
                                       onChange={context.page.tableChange}
                                       onExpand={context.page.expandChildrenTable}
                                />
                                <FormComponent/>
                            </div>
                            : ''
                    }
                </div>
            )}
        </PageContext.Consumer>
    );
}
export default TableComponent;
