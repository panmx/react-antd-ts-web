import defaultValue from './data'

export default {
    /**
     * 页面启动
     * pageInit
     * @return { Null }
     */
    pageInit: function (methods) {
        // 初始化页面方法
        Object.keys(defaultValue).map(item => {
            if (typeof defaultValue[item] === 'function') {
                this.page[item] = defaultValue[item].bind(this);
            } else {
                this.page[item] = defaultValue[item];
            }
        });

        // 初始化页面页码、每页记录数量配置、搜索条件及排序条件
        // this.page.pageNo = Number(this.$route.query.pageNo) || 0;
        // this.page.pageSize = Number(this.$route.query.pageSize) || 10;
        // if (this.$route.query.searchCondition) {
        //     this.page.searchShowStatus = true;
        // }
        // if (this.$route.query.orderKey && this.$route.query.orderType) {
        //     this.page.orderKey = this.$route.query.orderKey;
        //     this.page.orderType = this.$route.query.orderType;
        // }
        //
        // if (!this.page.emptyPage && !this.page.emptyContent) {
        //     this.page.formatTableColumns();
        //     if (this.page.childrenColumnsConfig.length > 0) {
        //         this.page.formatChildrenTableColumns();
        //     }
        // }
        //
        // // 获取页面所需字典数据
        // if (this.page.needDict.length > 0) {
        //     this.$http('dictData#getData', { dictTypes: this.page.needDict }).then((data) => {
        //         if (Object.keys(data).length !== this.page.needDict.length) {
        //             let dictArr = Object.keys(data),
        //                 missDict = [];
        //             this.page.needDict.map(item => {
        //                 if (dictArr.indexOf(item) < 0) {
        //                     missDict.push(item);
        //                 }
        //             });
        //             window.$message(`未获取到字典${ missDict.join(',') }`, 'warning')
        //         }
        //         Object.keys(data).map(item => {
        //             this.page.dict[item] = data[item];
        //         })
        //         this.page.onload = true;
        //         this.$emit('onReady');
        //     })
        // } else {
        //     this.page.onload = true;
        //     this.$emit('onReady');
        // }
    },

    /**
     * 表格页码展示数量及排序变化事件
     * tableChange
     * @param { Number } pageNo 页码
     * @param { Number } pageSize 每页展示数量
     * @param { Object } sortChangeStatus 排序变化状态
     * @return { Null }
     */
    tableChange: function (pageNo, pageSize, sortChangeStatus) {
        // 判断是否页码展示数量变化
        if (typeof pageNo === 'number' && typeof pageSize === 'number') {
            this.page.pageNo = pageNo - 1;
            this.page.pageSize = pageSize;
        }

        // 判断是否有排序信息
        if (sortChangeStatus && sortChangeStatus.order && sortChangeStatus.field) {
            this.page.orderType = sortChangeStatus.order === 'ascend' ? 'asc' : 'desc';
            this.page.orderKey = sortChangeStatus.field;
        } else {
            if (typeof pageNo !== 'number' || typeof pageSize !== 'number') {
                this.page.orderType = null;
                this.page.orderKey = null;
            }
        }

        // 更新地址栏排序页码展示数量信息
        let query = JSON.parse(JSON.stringify(this.$route.query));
        query.pageNo = this.page.pageNo;
        query.pageSize = this.page.pageSize;
        if (this.page.orderType) {
            query.orderKey = this.page.orderKey;
            query.orderType = this.page.orderType;
        } else {
            delete query.orderKey;
            delete query.orderType;
        }
        this.$router.push({ query: query });
        this.page.getData();
    },

    /**
     * 获取页面列表数据
     * getData
     * @return { Null }
     */
    getData: function () {
        // 开始加载页面数据及初始化请求参数
        this.page.loading = true;
        let params = {
            pageNo: this.page.pageNo,
            pageSize: this.page.pageSize,
            orderByFields: {}
        };

        // 页面数据搜索条件整理
        // if (this.$route.query.searchCondition) {
        //     let condition = JSON.parse(this.$string.decode(this.$route.query.searchCondition)) || {};
        //     Object.keys(this.page.defaultCondition).map(item => {
        //         if (Object.keys(condition).indexOf(item) < 0) {
        //             condition[item] = this.page.defaultCondition[item];
        //         }
        //     })
        //     params[this.page.simpleSearch ? 'queryByFields' : 'queryTypeByFields'] = condition;
        // } else {
        //     params[this.page.simpleSearch ? 'queryByFields' : 'queryTypeByFields'] = this.page.defaultCondition;
        // }
        //
        // // 默认搜索条件
        // if (this.page.defaultSearchCondition.length > 0) {
        //     this.page.defaultSearchCondition.map(item => {
        //         params[this.page.simpleSearch ? 'queryByFields' : 'queryTypeByFields'][item.label] = item.value;
        //     })
        // }
        //
        // // 是否显示删除的数据
        // if (this.page.recordStatus && this.page.hiddenDeleteData && !this.page.simpleSearch && !params['queryTypeByFields'].status) {
        //     params['queryTypeByFields'].status = { LT: '2' }
        // }
        //
        // // 页面额外条件
        // if (this.page.routeKey) {
        //     this.page.routeKey.map(item => {
        //         params[this.page.simpleSearch ? 'queryByFields' : 'queryTypeByFields'][item] = this.page.simpleSearch ? String(this.$route.query[item]) : { EQ: String(this.$route.query[item]) };
        //     })
        // };
        //
        // // 页面数据排序条件整理
        // if (this.page.orderKey && this.page.orderType) {
        //     params.orderByFields = { [this.page.orderKey]: this.page.orderType }
        // }
        //
        // // 请求接口获取数据
        // this.$http(`${ (this.page.tenantName ? this.page.tenantName + '-' : '') + this.page.moduleName }#findAll`, params).then((data) => {
        //     if (this.page.noPagination) {
        //         this.page.dataList = data
        //         this.page.loading = false
        //         return null
        //     }
        //     this.page.loading = false;
        //     this.page.dataList = data.data
        //     this.page.pageNo = data.currentPage;
        //     this.page.totalRecord = data.totalRecord;
        //     // 当页码大于0且返回数据为空，跳转回第一页
        //     if (data.data.length <= 0 && this.page.pageNo > 0) {
        //         this.page.pageNo = 0;
        //         this.page.getData();
        //         return null;
        //     }
        // })
    },

    /**
     * 显示或隐藏搜索区域事件
     * showOrHiddenSearch
     * @param { Boolean } currentStatus 当前搜索区域显示状态
     * @returns { Null }
     */
    showOrHiddenSearch: function (currentStatus = this.page.searchShowStatus) {
        if (currentStatus) {
            // let query = JSON.parse(JSON.stringify(this.$route.query));
            // delete query.searchCondition;
            // this.$router.push({ query: query })
        }
        this.page.searchShowStatus = !currentStatus;
        if (!currentStatus) {
            return null;
        }
        this.page.getData();
    },

    /**
     * 格式化表格
     * formatTableColumns
     * @return { Null }
     */
    formatTableColumns: function () {
        let newArr = [];
        this.page.columnsConfig.map(config => {
            if (config.condition && !config.condition()) {
                return null;
            } else {
                newArr = newArr.concat(config);
            }
        })
        this.page.columnsConfig = [];
        this.page.columnsConfig = newArr;

        let tableWidth = 0,
            pageWidth = this.$store.state.windowWidth - (this.$store.state.menuFixed ? 180 : 0);
        this.page.columnsConfig.map(column => {
            tableWidth += column.width;
        });
        if (tableWidth > pageWidth) {
            this.page.tableScroll.x = tableWidth;
        } else {
            let remainder = (pageWidth - tableWidth) % this.page.columnsConfig.length,
                newColumns = [];
            this.page.columnsConfig.map(config => {
                let conf = JSON.parse(JSON.stringify(config));
                if (config.customRender) {
                    conf.customRender = config.customRender;
                }
                newColumns.push(conf);
            })
            newColumns.map((column, index) => {
                column.width += (pageWidth - tableWidth - remainder) / this.page.columnsConfig.length;
                if (index === this.page.columnsConfig.length - 1) {
                    column.width += remainder;
                }
            });
            this.page.columnsConfig = newColumns;
        }
        return null;
    },

    /**
     * 格式化子表格
     * formatChildrenTableColumns
     * @return { Null }
     */
    formatChildrenTableColumns: function () {
        let newArr = [];
        this.page.columnsConfig.map(config => {
            if (config.condition && !config.condition()) {
                return null;
            } else {
                delete config.condition;
                newArr = newArr.concat(config);
            }
        })
        this.page.columnsConfig = [];
        this.page.columnsConfig = newArr;

        let tableWidth = 0,
            pageWidth = this.$store.state.windowWidth - (this.$store.state.menuFixed ? 180 : 0);
        this.page.childrenColumnsConfig.map(column => {
            tableWidth += column.width;
        });
        if (tableWidth > pageWidth) {
            this.page.tableScroll.x = tableWidth;
        } else {
            let remainder = (pageWidth - tableWidth) % this.page.childrenColumnsConfig.length,
                newColumns = [];
            this.page.childrenColumnsConfig.map(config => {
                let conf = JSON.parse(JSON.stringify(config));
                if (config.customRender) {
                    conf.customRender = config.customRender;
                }
                newColumns.push(conf);
            })
            newColumns.map((column, index) => {
                column.width += (pageWidth - tableWidth - remainder) / this.page.childrenColumnsConfig.length;
                if (index === this.page.childrenColumnsConfig.length - 1) {
                    column.width += remainder;
                }
            });
            this.page.childrenColumnsConfig = newColumns;
        }
        return null;
    },

    /**
     * 切换数据状态
     * switchStatus
     * @param { Object } record 记录
     * @return { Null }
     */
    switchStatus: function (record, reason) {
        let params = {
            [this.page.primaryKey]: record[this.page.primaryKey],
            status: record.status === '0' ? '1' : '0',
        }
        // 判断是否有禁用条件
        if (this.page.stopReason && record.status === '0') {
            params[this.page.stopReason] = reason
        }

        this.$http(`${ (this.page.tenantName ? this.page.tenantName + '-' : '') + this.page.moduleName }#switchStatus`, params).then(() => {
            window.$message(`已${ record.status === '0' ? '禁' : '启' }用${ this.page.title }`)
            this.page.getData();
        })
    },

    /**
     * 表格数据排序实时修改
     * changeSortNumber
     * @param { Number } sort 排序值
     * @return { Null }
     */
    changeSortNumber: function (sort, record) {
        let params = {
            [this.page.sortKey]: sort,
            [this.page.updateKey || this.page.primaryKey]: record[this.page.primaryKey]
        }
        if (this.page.defaultFormData.length > 0) {
            this.page.defaultFormData.map(item => {
                if (item.type === 'route') {
                    params[item.label] = this.$route.query[item.label];
                }
                if (item.type === 'recordDefault') {
                    params[item.label] = record[item.label];
                }
            })
        }
        this.$http(`${ (this.page.tenantName ? this.page.tenantName + '-' : '') + this.page.moduleName }#update`, params).then(data => {
            window.$message('排序已修改')
            this.page.getData()
        })
    },

    /**
     * 打开新增弹窗
     * onSave
     * return { Null }
     */
    onSave: function () {
        this.page.formData = {};
        this.page.formStatus = 'save';
        this.page.formModalStatus = true;
    },

    /**
     * 删除记录
     * @param { Object } record 记录
     * return { Null }
     */
    deleteRecord: function (record) {
        this.$http(`${ (this.page.tenantName ? this.page.tenantName + '-' : '') + this.page.moduleName }#delete`, {
            [this.page.deleteKey || this.page.primaryKey]: this.page.deleteKey ? record[this.page.deleteKey] : record[this.page.primaryKey]
        }).then(data => {
            window.$message(`${ this.page.title }已删除`)
            this.page.getData();
        })
    },

    /**
     * 查看记录
     * viewRecord
     * return { Null }
     */
    viewRecord: function (record) {
        this.page.formStatus = 'view'
        if (this.page.recordNeedOnload) {
            this.$http(`${ (this.page.tenantName ? this.page.tenantName + '-' : '') + this.page.moduleName }#findOne`, {
                [this.page.findKey || this.page.primaryKey]: record[this.page.findKey || this.page.primaryKey]
            }).then(data => {
                this.page.formData = data;
                this.page.formModalStatus = true;
            })
        } else {
            this.page.formData = record;
            this.page.formModalStatus = true;
        }
    },

    /**
     * 验证修改或新增表单
     * submit
     * @param { Object } form 表单对象
     * return { Null }
     */
    submit: function (form) {
        form.getForm().validateFields((error, values) => {
            if (error) {
                return null;
            } else {
                Object.keys(values).map(item => {
                    if (!values[item]) {
                        delete values[item];
                    }
                });

                if (this.page.formStatus !== 'save' && this.page.demandUpdate) {
                    Object.keys(values).map(item => {
                        if (this.page.formConfig[item] && !this.page.formConfig[item].readonly && values[item] !== this.page.formData[item]) {
                            return null;
                        } else {
                            delete values[item];
                        }
                    })
                }

                Object.keys(this.page.formConfig).map(item => {
                    if (this.page.formConfig[item].needUpdate && !values[item]) {
                        values[item] = null;
                    }

                    if (this.page.formConfig[item].type === 'select' && this.page.formConfig[item].mode === 'tags') {
                        values[item] = values[item].join(',')
                    }
                })

                if (this.page.formStatus === 'view') {
                    if (Object.keys(values).length <= 0) {
                        window.$error('未修改任何数据', 'error');
                        return null;
                    }
                    values[this.page.updateKey || this.page.primaryKey] = this.page.formData[this.page.updateKey || this.page.primaryKey];
                }
                if (this.page.formStatus === 'save') {
                    if (Object.keys(values).length <= 0) {
                        window.$message('请填写有效数据', 'error');
                        return null;
                    }
                }
                this.page.submitData(values);
            }
        });
    },

    /**
     * 提交修改或新增
     * submitData
     * @param { Object } data 提交数据
     * return { Null }
     */
    submitData: function (data) {
        // 对时间范围字段进行拆分
        Object.keys(this.page.formConfig).map(item => {
            if (this.page.formConfig[item].type === 'datePickerRange') {
                this.page.formConfig[item].params.map((param, index) => {
                    data[param] = data[item] ? data[item][index]._d.getTime() : '';
                })
                delete data[item];
            }

            if (this.page.formConfig[item].type === 'date' && data[item]) {
                data[item] = data[item]._d.getTime();
            }
        });

        if (this.page.formStatus === 'save') {
            if (this.page.defaultFormData.length > 0) {
                this.page.defaultFormData.map(item => {
                    if (item.type === 'route' && !item.onlyUpdate) {
                        data[item.label] = this.$route.query[item.label];
                    }
                })
            }
            this.$http(`${ (this.page.tenantName ? this.page.tenantName + '-' : '') + this.page.moduleName }#save`, data).then(data => {
                window.$message(`${ this.page.title }新增成功`, 'success');
                this.page.formModalStatus = false;
                this.page.getData();
            })
        } else {
            // 过滤未修改的数据
            if (!this.page.updateAll) {
                Object.keys(data).map(item => {
                    if (item === this.page.primaryKey || item === this.page.updateKey) {
                        return null
                    }
                    if (this.page.formData[item] === data[item] || (this.page.formConfig[item] && this.page.formConfig[item].readonly)) {
                        delete data[item]
                        return null
                    }
                })
            }

            if (this.page.defaultFormData.length > 0) {
                this.page.defaultFormData.map(item => {
                    if (item.type === 'route' && !item.onlySave) {
                        data[item.label] = this.$route.query[item.label];
                    }
                    if (item.type === 'recordDefault' && !item.onlySave) {
                        data[item.label] = this.page.formData[item.label];
                    }
                })
            }
            this.$http(`${ (this.page.tenantName ? this.page.tenantName + '-' : '') + this.page.moduleName }#update`, data).then(data => {
                window.$message(`${ this.page.title }修改成功`, 'success');
                this.page.formModalStatus = false;
                this.page.getData();
            })
        }
    }
}
