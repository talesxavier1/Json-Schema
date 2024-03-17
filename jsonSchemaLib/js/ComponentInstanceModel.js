import { InstanceProps } from "./InstanceProps.js";
import { BaseNodeValueModel } from "./BaseModels.js"
import { FunctionProps } from "./FunctionProps.js";

export class ComponentInstanceModel {
    _ARRAY_COMPONENTS_INSTANCES = [];
    _ARRAY_COMPONENTS_FUNCTIONS = [];

    //TODO documentar
    addInstance = (instanceProps) => {
        if (!(instanceProps instanceof InstanceProps)) {
            throw new Error(`[ERRO]-[ComponentInstanceModel] Parametro inválido.`);
        }

        this._ARRAY_COMPONENTS_INSTANCES.push(instanceProps);
    }

    //TODO documentar
    getInstanceProps = (tagName) => {
        let value = this._ARRAY_COMPONENTS_INSTANCES.find(VALUE => VALUE.tagName == tagName);
        if (!value) {
            throw new Error(`[ERRO]-[ComponentInstanceModel] instancia com tagName '${tagName} não encontrada'.`);
        }
        return value;
    }

    //TODO documentar
    getInstanceValue = (tagName) => {
        let instance = this.getInstanceProps(tagName);
        return instance.getInstanceValue();
    }

    //TODO documentar
    setInstanceValue = (tagName, value) => {
        let instance = this.getInstanceProps(tagName);
        instance.setInstanceValue(value);
    }

    //TODO documentar
    clearInstanceValue = (tagName) => {
        let instance = this.getInstanceProps(tagName);
        instance.clearInstanceValue();
    }

    //TODO documentar
    disableEnableInstance = (tagName, valueParam) => {
        let instance = this.getInstanceProps(tagName);
        instance.disableEnableInstance(valueParam);
    }

    //TODO documentar
    disableInstance = (tagName) => {
        let instance = this.getInstanceProps(tagName);
        instance.disableInstance();
    }

    //TODO documentar
    enableInstance = (tagName) => {
        let instance = this.getInstanceProps(tagName);
        instance.enableInstance();
    }

    //TODO documentar
    setVisibleInvisibleInstance = (tagName, valueParam) => {
        let instance = this.getInstanceProps(tagName);
        instance.setVisibleInvisibleInstance(valueParam);
    }

    //TODO documentar
    setInvisibleInstance = (tagName) => {
        let instance = this.getInstanceProps(tagName);
        instance.setInvisibleInstance();
    }

    //TODO documentar
    setVisibleInstance = (tagName) => {
        let instance = this.getInstanceProps(tagName);
        instance.setVisibleInstance();
    }

    //TODO documentar
    getBuiltObject = () => {
        var baseNodeValueModel = new BaseNodeValueModel();
        for (let KEY of Object.keys(baseNodeValueModel)) {
            baseNodeValueModel[KEY] = this.getInstanceValue(KEY);
        }
        return baseNodeValueModel;
    }

    //TODO documentar
    setBuiltObject = (nodeObject) => {
        if (!(nodeObject instanceof BaseNodeValueModel)) { throw new Error(`[ERRO]-[ComponentInstanceModel] Parametro inválido.`); };
        for (let KEY of Object.keys(nodeObject)) {
            this.setInstanceValue(KEY, nodeObject[KEY]);
        }
    }

    //TODO documentar
    addFunction = (functionProps) => {
        if (!(functionProps instanceof FunctionProps)) {
            throw new Error(`[ERRO]-[ComponentInstanceModel] Parametro inválido.`);
        }
        this._ARRAY_COMPONENTS_FUNCTIONS.push(functionProps);
    }

    //TODO documentar
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

    //TODO documentar
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

    //TODO documentar
    getFunction = (tagName, functionName) => {
        if (functionName) {
            return this._getFunctionIntances(tagName, functionName);
        } else {
            return this._getFullFunctionIntances(tagName);
        }

    }

    constructor() { }
}

