import React, {useEffect, useState} from 'react';
import {PageContext} from '../PageProvider';
import {
    Form,
    Input,
    Select,
    Checkbox,
    Button,
    Radio
} from 'antd';
import {SearchOutlined} from '@ant-design/icons';

/**
 * 搜索
 * @param props
 * @returns {*}
 * @constructor
 */
const Search = (props) => {
    const [form] = Form.useForm();
    const [formLayout, setFormLayout] = useState('horizontal');

    useEffect(() => {

    }, [])

    const buttonItemLayout =
        formLayout === 'horizontal'
            ? {
                wrapperCol: {span: 14, offset: 4},
            }
            : null;

    const searchBtnClick = (context) => {

    }

    return (
        <PageContext.Consumer>
            {(context) => (
                <div>
                    {
                        context.page.searchShowStatus ?
                            <div className="base-page-search">
                                <Form form={form} layout="inline">
                                    {
                                        context.page.searchCondition ? Object.getOwnPropertyNames(context.page.searchCondition).map((item, index) => (
                                            <span key={index}>
                                                <Form.Item
                                                    label={context.page.searchCondition[item].label}
                                                    name={context.page.searchCondition[item]}
                                                    rules={[{
                                                        required: context.page.searchCondition[item].required || false,
                                                        message: context.page.searchCondition[item].label + '必填*'
                                                    }]}>
                                                    {!context.page.searchCondition[item].type || context.page.searchCondition[item].type === 'input' ?
                                                        <Input allowClear className="select-width"
                                                               placeholder={context.page.searchCondition[item].placeholder || '请输入' + context.page.searchCondition[item].label}

                                                        />
                                                        : ''}
                                                    {!context.page.searchCondition[item].type || context.page.searchCondition[item].type === 'select' ?
                                                        <Select className="select-width" allowClear
                                                                mode={context.page.searchCondition[item].mode || ''}
                                                                placeholder={context.page.searchCondition[item].placeholder || '请选择' + context.page.searchCondition[item].label}>
                                                            <Select.Option value="red">Red</Select.Option>
                                                            <Select.Option value="green">Green</Select.Option>
                                                            <Select.Option value="blue">Blue</Select.Option>
                                                        </Select>
                                                        : ''}

                                                </Form.Item>
                                            </span>
                                        )) : ''
                                    }
                                    <Form.Item>
                                        <Button type="primary" onClick={() => searchBtnClick(context)}
                                                icon={<SearchOutlined/>}>搜索</Button>
                                    </Form.Item>
                                </Form>
                            </div>
                            : ''
                    }
                </div>
            )}
        </PageContext.Consumer>
    );
}
export default Search;
