import React, { useState } from "react";
import "antd/dist/antd.css";
import { Layout, Menu } from "antd";
import "./css/UserSettings.css";
import DashBoard from "./compoenents/DashBoard";
import {
    DesktopOutlined,
    PieChartOutlined,
    UserOutlined,
} from "@ant-design/icons";

import PlaceHolder from "./compoenents/PlaceHolder";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
// sidebar here should incorporate with router
const UserSettings = (props) => {
    const { Sider, Footer } = Layout;
    const { SubMenu } = Menu;
    const [collapsed, setCollapsed] = useState(false);
    const onCollapse = () => setCollapsed(!collapsed);
    let { path, url } = useRouteMatch();

    return (
        <Layout className="user-settings-container">
            <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
                    <Menu.Item key="1" icon={<PieChartOutlined />}>
                        <Link to={`${url}/dashboard`}>Dashboard</Link>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<DesktopOutlined />}>
                        <Link to={`${url}/bookmark`}>Bookmark</Link>
                    </Menu.Item>
                    <Menu.Item key="3" icon={<PieChartOutlined />}>
                        <Link to={`${url}/email`}>Email</Link>
                    </Menu.Item>
                    <SubMenu
                        key="sub1"
                        icon={<UserOutlined />}
                        title="Creation"
                    >
                        <Menu.Item key="4">
                            <Link to={`${url}/ingredient`}>Ingredient</Link>
                        </Menu.Item>
                        <Menu.Item key="5">
                            <Link to={`${url}/recipe`}>Recipe</Link>
                        </Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Switch>
                    <Route exact path={path}>
                        <DashBoard />
                    </Route>
                    <Route path={`${path}/:topicId`}>
                        <PlaceHolder />
                    </Route>
                </Switch>
                <Footer style={{ textAlign: "center" }}>
                    Ant Design ©2018 Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    );
};

export default UserSettings;
