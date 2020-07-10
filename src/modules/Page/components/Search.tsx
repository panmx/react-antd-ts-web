import React, {useEffect, useState} from 'react';
import {PageContext} from '../PageProvider';
import {
    Form,
    Input,
    Tooltip,
    Cascader,
    Select,
    Row,
    Col,
    Checkbox,
    Button,
    Radio,
    AutoComplete,
} from 'antd';

/**
 * 搜索
 * @param props
 * @returns {*}
 * @constructor
 */
export default function Search(props) {
    useEffect(() => {

    }, [])

    // const [form] = Form.useForm();
    const [formLayout, setFormLayout] = useState('horizontal');

    const onFormLayoutChange = ({ layout }) => {
        setFormLayout(layout);
    };

    const formItemLayout =
        formLayout === 'horizontal'
            ? {
                labelCol: { span: 4 },
                wrapperCol: { span: 14 },
            }
            : null;

    const buttonItemLayout =
        formLayout === 'horizontal'
            ? {
                wrapperCol: { span: 14, offset: 4 },
            }
            : null;

    return (
        <PageContext.Consumer>
            {(context) => (
                <div>
                    {
                        context.page.searchShowStatus ?
                            <div className="base-page-search">343
                                {/*<Form*/}
                                {/*    {...formItemLayout}*/}
                                {/*    layout={formLayout}*/}
                                {/*    form={form}*/}
                                {/*    initialValues={{ layout: formLayout }}*/}
                                {/*    onValuesChange={onFormLayoutChange}*/}
                                {/*>*/}
                                {/*    <Form.Item label="Form Layout" name="layout">*/}
                                {/*        <Radio.Group value={formLayout}>*/}
                                {/*            <Radio.Button value="horizontal">Horizontal</Radio.Button>*/}
                                {/*            <Radio.Button value="vertical">Vert+ical</Radio.Button>*/}
                                {/*            <Radio.Button value="inline">Inline1</Radio.Button>*/}
                                {/*        </Radio.Group>*/}
                                {/*    </Form.Item>*/}
                                {/*    <Form.Item label="Field A">*/}
                                {/*        <Input placeholder="input placeholder" />*/}
                                {/*    </Form.Item>*/}
                                {/*    <Form.Item label="Field B">*/}
                                {/*        <Input placeholder="input placeholder" />*/}
                                {/*    </Form.Item>*/}
                                {/*    <Form.Item {...buttonItemLayout}>*/}
                                {/*        <Button type="primary">Submit</Button>*/}
                                {/*    </Form.Item>*/}
                                {/*</Form>*/}
                            </div>
                        : ''
                    }
                </div>
            )}

        </PageContext.Consumer>
    );
}
