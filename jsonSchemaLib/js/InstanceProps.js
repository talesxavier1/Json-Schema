import { DxDefaultValues } from "./dxDefaultValues.js";

/**
 * Classe base que gerencia as instâncias dos componentes DevExtreme. 
 * @class
 */
export class InstanceProps {
    /**
     * Instância DevExtreme.
     * @private
     * @type {object}
     */
    _instance;
    /**
     * Armazena o nome do campo que o DevExtreme utiliza para guardar o valor da instância.
     * @private
     * @type {string}
     */
    _componentValueField;
    /**
     * Armazena o valor padrão da instância DevExtreme.
     * @private
     */
    _defaultValue;
    /**
     * Tag atribuida a instância. É utilizada para localizar a instância.
     * @type string
     */
    tagName;

    constructor({ componentName, instance, tagName }) {
        let xDefaultValues = new DxDefaultValues();
        this._instance = instance;
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

    setInstanceValue = (value) => {
        this._instance.option(this._componentValueField, value);
    }

    clearInstanceValue = () => {
        this._instance.option(this._componentValueField, this._defaultValue);
    }

    disableEnableInstance = (valueParam) => {
        if (valueParam != undefined) {
            this._instance.option("disabled", !!valueParam);
        }
        let value = this._instance.option("disabled");
        this._instance.option("disabled", !value);
    }

    disableInstance = () => {
        this._instance.option("disabled", true);
    }

    enableInstance = () => {
        this._instance.option("disabled", false);
    }

}