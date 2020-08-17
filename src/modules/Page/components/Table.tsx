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
    let [selectionConfig, setSelectionConfig] = useState<any>(null)
    let [myContext, setMyContext] = useState<any>({})

    useEffect(() => {
    }, [])

    useEffect(() => {
        if (myContext.page && myContext.page.tableSelect) {
            let configAll = {
                fixed: true,
                type: myContext.page.rowSelectType,
                selections: myContext.page.selections,
                selectedRowKeys: myContext.page.selectedRowKeys,
                onChange: (keys, object) => {
                    let config1 = selectionConfig || configAll
                    config1.selectedRowKeys = keys || [];
                    setSelectionConfig(config1)
                    myContext.page.selectedRowKeys = keys || [];
                    myContext.page.selectedRows = object || [];
                    myContext.setPage(myContext.page)
                }
            };
            setSelectionConfig(configAll)
        }
    }, [myContext])

    return (
        <PageContext.Consumer>
            {(context) => (
                <div>
                    {setMyContext(context)}
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
                                >

                                </Table>
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
