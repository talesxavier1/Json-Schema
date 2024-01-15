

export class BaseNodeModel {
    text_name = '';
    text_description = '';
    select_type = null;
    checkbox_required = false;
    checkbox_nullable = false;
    checkbox_additional_properties = false;
    select_array_type = null;
    checkbox_array_min_max = false;
    number_array_min = 0;
    number_array_max = 0;
    checkbox_array_unique_items = false;
    checkbox_string_regular_expression = false;
    text_string_regular_expression = '';
    checkbox_numeric_range = false;
    select_numeric_greater = null;
    number_numeric_greater = false;
    select_numeric_less = null;
    number_numeric_less = 0;
    text_enum_add_value = '';
    list_enum_values = []

    constructor() { }
}


export class TreeItemPropsModel {
    _tagName = "";
    _name = "";
    _expanded = false;
    _childrens = [];
    _icon = "";
    _value = new BaseNodeModel();

    constructor({ tagName, name, expanded, icon, childrens, value }) {
        if (!tagName || !name || expanded == undefined, !Array.isArray(childrens) || !value) {
            throw new Error(`[ERRO]-[ComponentInstanceModel] Parametro inválido.`);
        }

        if (!(value instanceof BaseNodeModel)) {
            throw new Error(`[ERRO]-[ComponentInstanceModel] Parametro inválido.`);
        }

        for (let CHILD of childrens) {
            if (!CHILD instanceof TreeItemPropsModel) {
                throw new Error(`[ERRO]-[ComponentInstanceModel] Parametro inválido.`);
            }
        }

        this._tagName = tagName;
        this._name = name;
        this._expanded = expanded;
        this._icon = icon;
        this._value = value;
        this._childrens = childrens;
    }
}
