import { InstanceProps } from "./InstanceProps.js";
import { BaseNodeValueModel } from "./BaseModels.js"
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
        var baseNodeValueModel = new BaseNodeValueModel();
        for (let KEY of Object.keys(baseNodeValueModel)) {
            baseNodeValueModel[KEY] = this.getInstanceValue(KEY);
        }
        return baseNodeValueModel;
    }

    setBuiltObject = (nodeObject) => {
        if (!(nodeObject instanceof BaseNodeValueModel)) { throw new Error(`[ERRO]-[ComponentInstanceModel] Parametro inválido.`); };
        for (let KEY of Object.keys(nodeObject)) {
            this.setInstanceValue(KEY, nodeObject[KEY]);
        }
    }

    addFunction = (functionProps) => {
        if (!(functionProps instanceof FunctionProps)) {
            throw new Error(`[ERRO]-[ComponentInstanceModel] Parametro inválido.`);
        }
        this._ARRAY_COMPONENTS_FUNCTIONS.push(functionProps);
    }

    _getFullFunctionIntances = (tagName) => {
        if (typeof tagName != "string") {
            throw new Error(`[ERRO]-[ComponentInstanceModel] Parâmetro inválido.`);
        }
        let result = this._ARRAY_COMPONENTS_FUNCTIONS.find(VALUE => VALUE.tagName == tagName);
        if (!result) {
            console.log(`[AVISO]-[ComponentInstanceModel] Não foi possível encontrar functionInstance com tag name '${tagName}'`)
            return;
        }
        return result.functionDefinition;
    }

    _getFunctionIntances = (tagName, functionName) => {
        if (typeof functionName != "string") {
            throw new Error(`[ERRO]-[ComponentInstanceModel] Parâmetro inválido.`);
        }
        let functionComponents = this._getFullFunctionIntances(tagName);
        if (!functionComponents) { return }

        if (!functionComponents.hasOwnProperty(functionName)) {
            console.warn(`[AVISO]-[ComponentInstanceModel] Não foi possível encontrar função com nome '${functionName}' em '${tagName}'`);
            return;
        }

        return functionComponents[functionName];
    }

    getFunction = (tagName, functionName) => {
        if (functionName) {
            return this._getFunctionIntances(tagName, functionName);
        } else {
            return this._getFullFunctionIntances(tagName);
        }

    }

    constructor() { }
}

