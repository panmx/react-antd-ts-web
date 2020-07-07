import React, {useEffect, useState} from 'react';
import {Layout, Menu, Breadcrumb} from 'antd';
import {UserOutlined, LaptopOutlined, NotificationOutlined, MenuUnfoldOutlined, MenuFoldOutlined} from '@ant-design/icons';
import './BasicLayout.less'

const {SubMenu} = Menu;
const {Header, Content, Sider} = Layout;

export default function BasicLayout(props: any) {
    let [collapsed, setCollapsed] = useState(false) // 是否收起菜单, true为收起
    let [menuList, setMenuList] = useState([{"title":"系统管理","key":"96","children":[{"title":"组织管理","key":"97","children":[{"title":"用户管理","key":"98","children":[],"menuIcon":"user","menuPath":"/system/organization/empUser","menuTarget":"","component":"","isShow":"1"},{"title":"机构管理","key":"99","children":[],"menuIcon":"heart","menuPath":"/system/organization/office","menuTarget":"","component":"","isShow":"1"},{"title":"公司管理","key":"100","children":[],"menuIcon":"star","menuPath":"/system/organization/company","menuTarget":"","component":"","isShow":"1"},{"title":"岗位管理","key":"101","children":[],"menuIcon":"paper-clip","menuPath":"/system/organization/post","menuTarget":"","component":"","isShow":"1"}],"menuIcon":"team","menuPath":"/system/organization","menuTarget":"","component":"","isShow":"1"},{"title":"权限管理","key":"102","children":[{"title":"角色管理","key":"103","children":[],"menuIcon":"bulb","menuPath":"/system/permission/role","menuTarget":"","component":"","isShow":"1"},{"title":"二级管理员","key":"104","children":[],"menuIcon":"user-delete","menuPath":"/system/permission/secAdmin","menuTarget":"","component":"","isShow":"1"}],"menuIcon":"appstore","menuPath":"/system/permission","menuTarget":"","component":"","isShow":"1"},{"title":"系统设置","key":"106","children":[{"title":"参数设置","key":"109","children":[],"menuIcon":"heat-map","menuPath":"/system/config/parameter","menuTarget":"","component":"","isShow":"1"},{"title":"字典管理","key":"110","children":[],"menuIcon":"crown","menuPath":"/system/config/dictType","menuTarget":"","component":"","isShow":"1"},{"title":"行政区划","key":"111","children":[],"menuIcon":"environment","menuPath":"/system/config/area","menuTarget":"","component":"","isShow":"1"}],"menuIcon":"setting","menuPath":"/system/config","menuTarget":"","component":"","isShow":"1"}],"menuIcon":"setting","menuPath":"/system","menuTarget":"","component":"","isShow":"1"},{"title":"微信公众号管理","key":"254","children":[{"title":"消息模板","key":"264","children":[],"menuIcon":"block","menuPath":"/gzh/wxmpTemplate","menuTarget":"","component":"","isShow":"1"},{"title":"菜单管理","key":"255","children":[],"menuIcon":"hdd","menuPath":"/gzh/gzhMenuManage","menuTarget":"","component":"","isShow":"1"},{"title":"粉丝管理","key":"257","children":[],"menuIcon":"skin","menuPath":"/gzh/gzhUserManage","menuTarget":"","component":"","isShow":"1"},{"title":"账号管理","key":"256","children":[],"menuIcon":"strikethrough","menuPath":"/gzh/gzhAccountManage","menuTarget":"","component":"","isShow":"1"}],"menuIcon":"wechat","menuPath":"/gzh","menuTarget":"","component":"","isShow":"1"},{"title":"工作流管理","key":"273","children":[{"title":"我的申请","key":"274","children":[],"menuIcon":"retweet","menuPath":"/workflow/apply","menuTarget":"","component":"","isShow":"1"},{"title":"我的待办","key":"275","children":[],"menuIcon":"swap","menuPath":"/workflow/todo","menuTarget":"","component":"","isShow":"1"},{"title":"我的已办","key":"276","children":[],"menuIcon":"menu-fold","menuPath":"/workflow/done","menuTarget":"","component":"","isShow":"1"},{"title":"运行中的流程","key":"277","children":[],"menuIcon":"border-bottom","menuPath":"/workflow/processIns","menuTarget":"","component":"","isShow":"1"},{"title":"结束的流程","key":"278","children":[],"menuIcon":"border-top","menuPath":"/workflow/processFinish","menuTarget":"","component":"","isShow":"1"},{"title":"流程管理","key":"279","children":[],"menuIcon":"bold","menuPath":"/workflow/process","menuTarget":"","component":"","isShow":"1"},{"title":"模型管理","key":"280","children":[],"menuIcon":"layout","menuPath":"/workflow/model","menuTarget":"","component":"","isShow":"1"},{"title":"流程分类管理","key":"281","children":[],"menuIcon":"inbox","menuPath":"/workflow/workflowCategory","menuTarget":"","component":"","isShow":"1"}],"menuIcon":"car","menuPath":"/workflow","menuTarget":"","component":"","isShow":"1"}]) // 是否收起菜单, true为收起

    useEffect(() => {
        calcClientWidth()
        window.onresize = function () {
            calcClientWidth()
        }
    }, [])

    // 屏幕宽度小于指定的最小宽度，收起菜单；反之，展开菜单
    const calcClientWidth = () => {
        let clientWidth = document.documentElement && document.documentElement.clientWidth ? document.documentElement.clientWidth : document.body.clientHeight;
        if (clientWidth && clientWidth < 1200) {
            setCollapsed(true);
        } else {
            setCollapsed(false);
        }
    }


    const toggle = () => {
        setCollapsed(!collapsed);
    }

    return (
        <Layout>
            <Header className="header">
                <div className="tenant-top">
                    <img className="logo" src={process.env.PUBLIC_URL + '/images/logo.png'}/>
                    <div className="tenant-name">React管理后台</div>
                </div>
                {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                    className: 'trigger',
                    onClick: toggle,
                })}
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    <Menu.Item key="1">nav 1</Menu.Item>
                    <Menu.Item key="2">nav 2</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                </Menu>
            </Header>
            <Layout>
                <Sider width={200} className="site-layout-background" trigger={null} collapsible collapsed={collapsed}>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{height: '100%', borderRight: 0}}
                    >
                        <SubMenu key="sub1" icon={<UserOutlined/>} title="subnav 1">
                            <Menu.Item key="1">option1</Menu.Item>
                            <Menu.Item key="2">option2</Menu.Item>
                            <Menu.Item key="3">option3</Menu.Item>
                            <Menu.Item key="4">option4</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" icon={<LaptopOutlined/>} title="subnav 2">
                            <Menu.Item key="5">option5</Menu.Item>
                            <Menu.Item key="6">option6</Menu.Item>
                            <Menu.Item key="7">option7</Menu.Item>
                            <Menu.Item key="8">option8</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub3" icon={<NotificationOutlined/>} title="subnav 3">
                            <Menu.Item key="9">option9</Menu.Item>
                            <Menu.Item key="10">option10</Menu.Item>
                            <Menu.Item key="11">option11</Menu.Item>
                            <Menu.Item key="12">option12</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout style={{padding: '0 24px 24px'}}>
                    <Breadcrumb style={{margin: '16px 0'}}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                        }}
                    >
                        Content
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    )
}
