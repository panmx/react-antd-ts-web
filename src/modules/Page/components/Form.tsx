import React, {useEffect, useState} from 'react';
import {PageContext} from '../PageProvider';
import {
    Form,
    Modal,
    Input,
    InputNumber,
    Select,
    Checkbox,
    Button,
    Radio
} from 'antd';
import {PlusOutlined} from '@ant-design/icons';

/**
 * 新增/修改form表单
 * @param props
 * @returns {*}
 * @constructor
 */
const FormComponent = (props) => {
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

    const onSave = (context) => {
        context.page.formModalStatus = false
        context.setPage(context.page)
    }
    const handleCancel = (context) => {
        debugger
        context.page.formModalStatus = false
        context.setPage(context.page)
    }

    return (
        <PageContext.Consumer>
            {(context) => (
                <div>
                    {
                        context.page.formModalStatus ?
                            <Modal visible={true} width={context.page.formModalWidth || 600}
                                   title={'新增' + context.page.title}
                                   onCancel={() => handleCancel(context)}
                                   footer={null}>
                                <div className="base-page-form">
                                    <Form form={form} onFinish={onSave}>
                                        {
                                            context.page.formConfig ? Object.getOwnPropertyNames(context.page.formConfig).map((item, index) => (
                                                <span key={index}>
                                                <Form.Item
                                                    label={context.page.formConfig[item].label}
                                                    name={context.page.formConfig[item]}
                                                    rules={[{
                                                        required: context.page.formConfig[item].required || false,
                                                        message: context.page.formConfig[item].label + '必填*'
                                                    }]}>

                                                    {!context.page.formConfig[item].type || context.page.formConfig[item].type === 'input' ?
                                                        <Input allowClear className="select-width"
                                                               placeholder={context.page.formConfig[item].placeholder || '请输入' + context.page.formConfig[item].label}

                                                        />
                                                        : ''}

                                                    {!context.page.formConfig[item].type || context.page.formConfig[item].type === 'number' ?
                                                        <InputNumber className="select-width"
                                                               min={context.page.formConfig[item].min || -9999999}
                                                               max={context.page.formConfig[item].max || 9999999}

                                                        />
                                                        : ''}

                                                    {!context.page.formConfig[item].type || context.page.formConfig[item].type === 'radio' ?
                                                        <Radio.Group>
                                                            <Radio value="red">男</Radio>
                                                            <Radio value="green">女</Radio>
                                                        </Radio.Group>
                                                        : ''}


                                                    {!context.page.formConfig[item].type || context.page.formConfig[item].type === 'checkbox' ?
                                                        <Checkbox.Group>
                                                            <Checkbox value="red">男</Checkbox>
                                                            <Checkbox value="green">女</Checkbox>
                                                        </Checkbox.Group>
                                                        : ''}

                                                    {!context.page.formConfig[item].type || context.page.formConfig[item].type === 'select' ?
                                                        <Select className="select-width" allowClear
                                                                mode={context.page.formConfig[item].mode || ''}
                                                                placeholder={context.page.formConfig[item].placeholder || '请选择' + context.page.formConfig[item].label}>
                                                            <Select.Option value="red">Red</Select.Option>
                                                            <Select.Option value="green">Green</Select.Option>
                                                            <Select.Option value="blue">Blue</Select.Option>
                                                        </Select>
                                                        : ''}

                                                </Form.Item>
                                            </span>
                                            )) : ''
                                        }
                                        <Form.Item className="btn-save">
                                            <Button type="primary" htmlType="submit"
                                                    icon={<PlusOutlined/>}>保存</Button>
                                        </Form.Item>
                                    </Form>
                                </div>
                            </Modal>
                            : ''
                    }
                </div>
            )}
        </PageContext.Consumer>
    );
}
export default FormComponent;
