
export class DxDefaultValues {
    _ARRAY_COMPONENTS = [
        { componentName: "dxTextBox", defaultValue: "", valueField: "value" },
        { componentName: "dxSelectBox", defaultValue: null, valueField: "value" },
        { componentName: "dxCheckBox", defaultValue: false, valueField: "value" },
        { componentName: "dxNumberBox", defaultValue: 0, valueField: "value" },
        { componentName: "dxButton", defaultValue: undefined, valueField: undefined },
        { componentName: "dxList", defaultValue: [], valueField: "items" },
        { componentName: "dxTreeView", defaultValue: [], valueField: "items" }
    ]

    _getComponent = (componentName) => {
        let componentFind = this._ARRAY_COMPONENTS.find(VALUE => VALUE.componentName == componentName);
        if (!componentFind) {
            throw new Error(`[ERRO]-[dxDefaultValues] Componente '${componentName}' não encontrado.`);
        }
        return componentFind;
    }

    getDefaultValue = (componentName) => {
        let result = this._getComponent(componentName)
        return result.defaultValue;
    }

    getValueField = (componentName) => {
        let result = this._getComponent(componentName);
        return result.valueField;
    }

    constructor() { }
}