const defaultValue = {
    onload: false,              // 页面加载状态
    loading: false,             // 数据加载状态
    title: '默认',              // 页面标题
    icon: 'ie',                 // 页面图标
    moduleName: '',             // 模块名称
    tenantName: '',             // 租户名称
    emptyPage: false,           // 是否空页面
    emptyContent: false,        // 是否空内容
    emptyButtons: false,        // 是否隐藏所有头部按钮
    extraForm: false,           // 自定义表单页面
    permission: [],             // 页面操作权限
    primaryKey: '',             // 页面数据主键
    sortKey: '',                // 修改记录排序字段名
    routeKey: [],               // 额外路由条件搜索条件
    findKey: '',                // 搜索记录主键
    deleteKey: '',              // 删除记录主键
    updateKey: '',              // 修改记录主键
    recordNeedOnload: true,     // 展示单条记录是否需要请求
    formData: {},               // 表单数据
    searchShowStatus: false,    // 搜索区域显示状态
    totalRecord: 0,             // 页面记录总数
    pageNo: 0,                  // 当夜页面页码
    pageSize: 10,               // 当前页面展示记录数量
    searchCondition: {},        // 搜索条件
    simpleSearch: false,        // 是否为简易搜索条件
    reload: true,               // 是否支持刷新
    hiddenDeleteData: true,     // 是否隐藏删除的数据
    pageAutoHeight: false,      // 页面是否自动高度
    rowSlotShowEdit: false,     // 记录行显示为修改而不是查看
    updateAll: false,           // 更新是否传递所有参数
    noPagination: false,        // 表单不分页
    stopReason: null,           // 停用理由
    viewButtonLabel: '',        // 查看按钮文本
    // 表单配置文件
    formConfig: {},
    recordStatus: true,         // 表单数据是否包含状态（status）
    tableScroll: {},            // 表格滚动参数
    dataList: [],               // 页面数据集合
    childrenDataList: [],       // 页面子数据集合
    defaultCondition: {},       // 默认搜索条件
    orderKey: 'createDate',     // 排序字段Key
    orderType: 'desc',          // 排序类型 desc 倒序 asc 正序
    needDict: [],               // 页面需要网络请求的字典数据类型集合
    dict: {},                   // 页面字典数据集合
    expandedRowRender: false,   // 表格是否可折叠
    tableSlots: [],             // 表格列插槽
    columnsConfig: [],          // 表格配置参数
    childrenColumnsConfig: [],  // 子表格行配置参数
    childrenTableHeader: true,  // 是否展示子表格表头
    tableExpandedRowKeys: [],   // 表格展开的Key集合
    formModalStatus: false,     // 表单窗口显示状态
    formStatus: 'save',         // 表单操作状态 save 保存 view 查看 update 修改
    formModalWidth: 600,        // 表单窗口宽度
    defaultSearchCondition: [], // 表单默认传参
    defaultFormData: [],        // 表单默认传参
    // 页面可选择状态
    rowSelection: {
        fixed: true,
        selections: true,

    },
    tableSelect: false,          // 页面是否可勾选
    rowSelectType: 'checkbox',   // 页面勾选样式
    selections: false,           // 页面勾选配置
    selectedRowKeys: [],         // 表格选中行keys列表
    selectedRows: [],            // 表格选中行对象列表

    // 表单操作列额外按钮
    rowExtraButton: [],
    // 页面头部额外按钮组
    headerExtraButtons: []
}
export default defaultValue
