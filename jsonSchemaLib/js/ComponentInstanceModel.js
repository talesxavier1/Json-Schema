import { InstanceProps } from "./InstanceProps.js";
import { BaseNodeModel } from "./BaseNodeModel.js"
import { FunctionProps } from "./FunctionProps.js";

export class ComponentInstanceModel {
    _ARRAY_COMPONENTS_INSTANCES = [];
    _ARRAY_COMPONENTS_FUNCTIONS = [];

    addInstance = (instanceProps) => {
        if (!(instanceProps instanceof InstanceProps)) {
            throw new Error(`[ERRO]-[ComponentInstanceModel] Parametro inválido.`);
        }

        this._ARRAY_COMPONENTS_INSTANCES.push(instanceProps);
    }

    getInstance = (tagName) => {
        let value = this._ARRAY_COMPONENTS_INSTANCES.find(VALUE => VALUE.tagName == tagName);
        if (!value) {
            throw new Error(`[ERRO]-[ComponentInstanceModel] instancia com tagName '${tagName} não encontrada'.`);
        }
        return value;
    }

    getInstanceValue = (tagName) => {
        let instance = this.getInstance(tagName);
        return instance.getInstanceValue();
    }

    setInstanceValue = (tagName, value) => {
        let instance = this.getInstance(tagName);
        instance.setInstanceValue(value);
    }

    clearInstanceValue = (tagName) => {
        let instance = this.getInstance(tagName);
        instance.clearInstanceValue();
    }

    disableEnableInstance = (tagName, valueParam) => {
        let instance = this.getInstance(tagName);
        instance.disableEnableInstance(valueParam);
    }

    disableInstance = (tagName) => {
        let instance = this.getInstance(tagName);
        instance.disableInstance();
    }

    enableInstance = (tagName) => {
        let instance = this.getInstance(tagName);
        instance.enableInstance();
    }

    getBuiltObject = () => {
        var baseNodeModel = new BaseNodeModel()
        for (let INSTANCE of this._ARRAY_COMPONENTS_INSTANCES) {
            baseNodeModel[INSTANCE.tagName] = INSTANCE.getInstanceValue();
        }
        return baseNodeModel;
    }

    addFunction = (functionProps) => {
        if (!(functionProps instanceof FunctionProps)) {
            throw new Error(`[ERRO]-[ComponentInstanceModel] Parametro inválido.`);
        }
        this._ARRAY_COMPONENTS_FUNCTIONS.push(functionProps);
    }

    getFunction = (tagName) => {
        return this._ARRAY_COMPONENTS_FUNCTIONS.find(VALUE => VALUE.tagName == tagName);
    }

    constructor() { }
}

