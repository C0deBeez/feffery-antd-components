# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdSkeletonButton(Component):
    """An AntdSkeletonButton component.


Keyword arguments:

- id (string; optional)

- active (boolean; default False)

- block (boolean; default False)

- className (string | dict; optional)

- key (string; optional)

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- shape (a value equal to: 'circle', 'round', 'default'; default 'default')

- size (a value equal to: 'large', 'small', 'default'; default 'default')

- style (dict; optional)"""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdSkeletonButton'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, style=Component.UNDEFINED, className=Component.UNDEFINED, key=Component.UNDEFINED, active=Component.UNDEFINED, block=Component.UNDEFINED, shape=Component.UNDEFINED, size=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'active', 'block', 'className', 'key', 'loading_state', 'shape', 'size', 'style']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'active', 'block', 'className', 'key', 'loading_state', 'shape', 'size', 'style']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(AntdSkeletonButton, self).__init__(**args)
