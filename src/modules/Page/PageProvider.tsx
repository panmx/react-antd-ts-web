import React, {Component} from "react";
import defaultValue from "./data";

export const PageContext = React.createContext({
    page: JSON.parse(JSON.stringify(defaultValue)),
    // state: {page: JSON.parse(JSON.stringify(defaultValue))},
    setPage: function (a) {
    }
});

// 定义 Props 类型
export interface Props {
    page: object;
    setParentPage: any;
}

// 导出 context 对象
export default class PageProvider extends Component <Props, {}> {
    constructor(props: Props) {
        super(props)
        this.state = {
            page: props.page
        };
    }

    render() {
        return (
            <PageContext.Provider value={{
                page: this.props.page,
                setPage: (value) => {
                    this.setState(value)
                    this.props.setParentPage(value)
                }
            }}>
                {this.props.children} {/*这里显示所有的子组件都可以访问全局的store*/}
            </PageContext.Provider>
        )
    }
}
