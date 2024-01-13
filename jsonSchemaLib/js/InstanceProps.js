import { DxDefaultValues } from "./dxDefaultValues.js";

export class InstanceProps {
    _instance;
    _componentValueField;
    _defaultValue;
    tagName;

    constructor({ componentName, instance, tagName }) {
        let xDefaultValues = new DxDefaultValues();
        this.instance = instance;
        this._defaultValue = xDefaultValues.getDefaultValue(componentName);
        this._componentValueField = xDefaultValues.getValueField(componentName);
        this.tagName = tagName;
    }

    getInstanceValue = () => {
        if (!this._instance) {
            return this._defaultValue;
        }
        return this._instance.option(this._componentValueField);
    }
}