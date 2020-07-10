import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { getUserInfo } from "../store/actions";
import Layout from "../views/layout";
import Login from "../views/login";
// 定义 Props 类型
export interface Props {
    token: string;
    role: any;
    getUserInfo: any;
}
class Router extends React.Component<Props, {}> {
    constructor( props: Props ){
        super( props )
    }
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route exact path="/login" component={Login} />
                    <Route
                        path="/"
                        render={() => {
                            if (!this.props.token) {
                                return <Redirect to="/login" />;
                            } else {
                                if (this.props.role) {
                                    return <Layout />;
                                } else {
                                    this.props.getUserInfo(this.props.token).then(() => <Layout />);
                                }
                            }
                        }}
                    />
                </Switch>
            </HashRouter>
        );
    }
}
export default connect((state) => state.user, { getUserInfo })(Router);
