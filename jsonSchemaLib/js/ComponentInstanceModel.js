import { InstanceProps } from "./InstanceProps.js";
import { BaseNodeModel } from "./BaseNodeModel.js"
// ===========
/*
Parei querendo atribuir o obj instanceProps para cada componente do ComponentInstanceModel.
Assim eu consigo controlar o get de cada componente mais fácil.

*/

export class ComponentInstanceModel {
    _ARRAY_COMPONENTS_INSTANCES = [];

    addInstance = (instanceProps) => {
        if (!(instanceProps instanceof InstanceProps)) {
            throw new UserException(`[ERRO]-[ComponentInstanceModel] Parametro inválido.`);
        }

        this._ARRAY_COMPONENTS_INSTANCES.push(instanceProps);
    }

    getInstance = (tagName) => {
        let value = this._ARRAY_COMPONENTS_INSTANCES.find(VALUE => VALUE.tagName == tagName);
        if (!value) {
            throw new UserException(`[ERRO]-[ComponentInstanceModel] instancia com tagName '${tagName} não encontrada'.`);
        }
        return value;
    }

    getInstanceValue = (tagName) => {
        let instance = this.getInstance(tagName);
        return instance.getInstanceValue();
    }

    getBuiltObject = () => {
        var baseNodeModel = new BaseNodeModel()
        for (let INSTANCE of this._ARRAY_COMPONENTS_INSTANCES) {
            baseNodeModel[INSTANCE.tagName] = INSTANCE.getInstanceValue();
        }
        return baseNodeModel;
    }


    // text_name = new instanceProps("");
    // text_description = null;
    // select_type = null;
    // checkbox_required = null;
    // checkbox_nullable = null;
    // checkbox_additional_properties = null;
    // select_array_type = null;
    // checkbox_array_min_max = null;
    // number_array_min = null;
    // number_array_max = null;
    // checkbox_array_unique_items = null;
    // checkbox_string_regular_expression = null;
    // text_string_regular_expression = null;
    // checkbox_numeric_range = null;
    // select_numeric_greater = null;
    // number_numeric_greater = null;
    // select_numeric_less = null;
    // number_numeric_less = null;
    // text_enum_add_value = null;
    // list_enum_values = null;
    // button_enum_add_value = null
    constructor() { }
}

