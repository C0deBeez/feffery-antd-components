// react核心
import React from 'react';
import PropTypes from 'prop-types';
// antd核心
import { Result } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
// 辅助库
import { isString } from 'lodash';
import { pickBy } from 'ramda';
// 自定义hooks
import useCss from '../../hooks/useCss';

/**
 * 结果组件AntdResult
 */
const AntdResult = (props) => {
    let {
        id,
        className,
        style,
        key,
        status,
        title,
        subTitle,
        icon,
        loading_state,
        setProps
    } = props;

    return (
        <Result
            // 提取具有data-*或aria-*通配格式的属性
            {...pickBy((_, k) => k.startsWith('data-') || k.startsWith('aria-'), props)}
            id={id}
            className={
                isString(className) ?
                    className :
                    (className ? useCss(className) : undefined)
            }
            style={style}
            key={key}
            icon={
                icon ||
                (
                    status === 'loading' ?
                        <LoadingOutlined style={{ color: '#1890ff' }} /> :
                        undefined)
            }
            status={status}
            title={title}
            subTitle={subTitle}
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }>
        </Result>
    );
}

AntdResult.propTypes = {
    /**
     * 组件唯一id
     */
    id: PropTypes.string,

    /**
     * 对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果
     */
    key: PropTypes.string,

    /**
     * 当前组件css样式
     */
    style: PropTypes.object,

    /**
     * 当前组件css类名，支持[动态css](/advanced-classname)
     */
    className: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),

    /**
     * 状态，可选项有`'success'`、`'error'`、`'info'`、`'warning'`、`'404'`、`'403'`、`'500'`
     * 默认值：`'info'`
     */
    status: PropTypes.oneOf(['success', 'error', 'info', 'warning', '404', '403', '500', 'loading']),

    /**
     * 组件型，标题内容
     */
    title: PropTypes.node,

    /**
     * 组件型，副标题内容
     */
    subTitle: PropTypes.node,

    /**
     * 组件型，图标内容
     */
    icon: PropTypes.node,

    /**
     * `data-*`格式属性通配
     */
    'data-*': PropTypes.string,

    /**
     * `aria-*`格式属性通配
     */
    'aria-*': PropTypes.string,

    loading_state: PropTypes.shape({
        /**
         * Determines if the component is loading or not
         */
        is_loading: PropTypes.bool,
        /**
         * Holds which property is loading
         */
        prop_name: PropTypes.string,
        /**
         * Holds the name of the component that is loading
         */
        component_name: PropTypes.string
    }),

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};

// 设置默认参数
AntdResult.defaultProps = {
    status: 'info'
}

export default AntdResult;