// react核心
import React from 'react';
// antd核心
import { Avatar } from 'antd';
import AntdIcon from '../../components/general/AntdIcon.react';
// 辅助库
import { isString } from 'lodash';
import { pickBy } from 'ramda';
// 自定义hooks
import useCss from '../../hooks/useCss';
// 参数类型
import { propTypes, defaultProps } from '../../components/dataDisplay/AntdAvatar.react';

/**
 * 头像组件AntdAvatar
 */
const AntdAvatar = (props) => {
    let {
        id,
        className,
        style,
        key,
        mode,
        text,
        src,
        srcSet,
        draggable,
        crossOrigin,
        icon,
        iconRenderer,
        alt,
        gap,
        size,
        shape,
        loading_state,
        setProps
    } = props;

    // image图片模式
    if (mode === 'image') {
        return (
            <Avatar
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
                src={src}
                srcSet={srcSet}
                draggable={draggable}
                crossOrigin={crossOrigin}
                alt={alt}
                size={size}
                shape={shape}
                data-dash-is-loading={
                    (loading_state && loading_state.is_loading) || undefined
                }
            />
        );
    } else if (mode === 'text') {

        // text文字模式
        return (
            <Avatar
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
                gap={gap}
                size={size}
                shape={shape}
                data-dash-is-loading={
                    (loading_state && loading_state.is_loading) || undefined
                }
            >{text}</Avatar>
        );
    } else {
        // icon图标模式
        return (
            <Avatar
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
                    icon ?
                        (
                            iconRenderer === 'fontawesome' ?
                                (
                                    React.createElement(
                                        'i',
                                        {
                                            className: icon
                                        }
                                    )
                                ) :
                                (
                                    <AntdIcon icon={icon} />
                                )
                        ) :
                        <AntdIcon icon={'antd-user'} />
                }
                size={size}
                shape={shape}
                data-dash-is-loading={
                    (loading_state && loading_state.is_loading) || undefined
                }
            />
        );
    }
}

export default AntdAvatar;

AntdAvatar.defaultProps = defaultProps;
AntdAvatar.propTypes = propTypes;