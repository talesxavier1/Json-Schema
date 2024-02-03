import { ComponentInstanceModel } from "./ComponentInstanceModel.js";
import { InstanceProps } from "./InstanceProps.js"
import { FunctionProps } from "./FunctionProps.js";
import { icons } from "./Consts.js";
import { BaseNodeModel } from "./BaseModels.js";

export class ConfigComponents {
    _componentInstanceModel = new ComponentInstanceModel();
    _node_id = "";
    onConfirmClick = ({ event, nodeId, nodeObject }) => { };
    onDeclineClick = ({ event, nodeId }) => { };

    setNodeObject = (nodeObject, node_id) => {
        this._componentInstanceModel.setBuiltObject(nodeObject);
        this._node_id = node_id;
        this._componentInstanceModel.getFunction("js_config_buttons_decline_confirm", "enabledComponents")(true);
        this._componentInstanceModel.getFunction("js_config_main_props", "enabledComponents")(true);
    }

    constructor() {

        this._componentInstanceModel.addInstance(new InstanceProps({ //button_confirm
            "componentName": "dxButton",
            "instance": $("#button_confirm").dxButton({
                disabled: true,
                type: 'success',
                template: `
                    <span><img src="${icons.confirmFile.type},${icons.confirmFile.value}" width="65%" /></span>
                    <span>CONFIRMAR</span>
                `,
                focusStateEnabled: false,
                onClick: (event) => {
                    let nodeId = this._node_id;
                    let builtObject = this._componentInstanceModel.getBuiltObject();

                    this._componentInstanceModel.getFunction("GLOBAL_CONFIG_FUNCTIONS", "cleanAll")();
                    this._componentInstanceModel.getFunction("GLOBAL_CONFIG_FUNCTIONS", "enabledComponents")(false);
                    this._componentInstanceModel.getFunction("js_config_buttons_decline_confirm", "enabledComponents")(false);
                    this._node_id = "";

                    this.onConfirmClick({ event, nodeId, nodeObject: builtObject });
                }
            }).dxButton("instance"),
            "tagName": "button_confirm"
        }));

        this._componentInstanceModel.addInstance(new InstanceProps({ //button_decline
            "componentName": "dxButton",
            "instance": $("#button_decline").dxButton({
                disabled: true,
                type: "danger",
                template: `
                <span><img src="${icons.declineFile.type},${icons.declineFile.value}" width="65%"  /></span>
                <span>CANCELAR</span>
                `,
                focusStateEnabled: false,
                onClick: (event) => {
                    let nodeId = this._node_id;

                    this._componentInstanceModel.getFunction("GLOBAL_CONFIG_FUNCTIONS", "cleanAll")();
                    this._componentInstanceModel.getFunction("GLOBAL_CONFIG_FUNCTIONS", "enabledComponents")(false);
                    this._componentInstanceModel.getFunction("js_config_buttons_decline_confirm", "enabledComponents")(false);

                    this.onDeclineClick({ event, nodeId });
                }
            }).dxButton("instance"),
            "tagName": "button_decline"
        }));

        this._componentInstanceModel.addInstance(new InstanceProps({ //text_name
            "componentName": "dxTextBox",
            "instance": $('#text_name').dxTextBox({
                label: "Nome",
                disabled: true,
                labelMode: "static",
                onValueChanged: (event) => {

                }
            }).dxTextBox("instance"),
            "tagName": "text_name"
        }));

        this._componentInstanceModel.addInstance(new InstanceProps({ //text_description
            "componentName": "dxTextBox",
            "instance": $('#text_description').dxTextBox({
                label: "Descrição",
                disabled: true,
                labelMode: "static"
            }).dxTextBox("instance"),
            "tagName": "text_description",
        }));

        this._componentInstanceModel.addInstance(new InstanceProps({ //select_type
            "componentName": "dxSelectBox",
            "instance": $("#select_type").dxSelectBox({
                dataSource: [{
                    "ID": "string",
                    "VALUE": "String"
                }, {
                    "ID": "number",
                    "VALUE": "Number"
                }, {
                    "ID": "integer",
                    "VALUE": "Integer"
                }, {
                    "ID": "object",
                    "VALUE": "Object"
                }, {
                    "ID": "array",
                    "VALUE": "Array"
                }, {
                    "ID": "boolean",
                    "VALUE": "Boolean"
                }, {
                    "ID": "enum",
                    "VALUE": "Enum"
                }],
                label: "Tipo",
                valueExpr: "ID",
                displayExpr: "VALUE",
                disabled: true,
                onValueChanged: (event) => {
                    let functions;

                    functions = this._componentInstanceModel.getFunction("js_dxBox_config_array_props");
                    functions.setVisible(event.value == "array");
                    functions.clearFields();

                    functions = this._componentInstanceModel.getFunction("js_dxBox_config_string_props");
                    functions.setVisible(event.value == "string");
                    functions.clearFields();

                    functions = this._componentInstanceModel.getFunction("js_dxBox_config_numeric_props");
                    functions.setVisible(["number", "integer"].includes(event.value));
                    functions.clearFields();

                    functions = this._componentInstanceModel.getFunction("js_dxBox_config_enum_props");
                    functions.setVisible(event.value == "enum");
                    functions.clearFields();
                }
            }).dxSelectBox("instance"),
            "tagName": "select_type"
        }));

        this._componentInstanceModel.addInstance(new InstanceProps({ //checkbox_required
            "componentName": "dxCheckBox",
            "instance": $("#checkbox_required").dxCheckBox({
                /* Default Value: false */
                text: 'Obrigatório',
                focusStateEnabled: false,
                disabled: true,
                iconSize: 20
            }).dxCheckBox("instance"),
            "tagName": "checkbox_required"
        }));

        this._componentInstanceModel.addInstance(new InstanceProps({ //checkbox_nullable
            "componentName": "dxCheckBox",
            "instance": $("#checkbox_nullable").dxCheckBox({
                text: 'Anulável',
                focusStateEnabled: false,
                iconSize: 20,
                disabled: true,
            }).dxCheckBox("instance"),
            "tagName": "checkbox_nullable"
        }));

        this._componentInstanceModel.addInstance(new InstanceProps({ //checkbox_additional_properties
            "componentName": "dxCheckBox",
            "instance": $("#checkbox_additional_properties").dxCheckBox({
                text: 'Propriedades adicionais',
                focusStateEnabled: false,
                iconSize: 20,
                disabled: true,
            }).dxCheckBox("instance"),
            "tagName": "checkbox_additional_properties"
        }));

        this._componentInstanceModel.addInstance(new InstanceProps({ //select_array_type
            "componentName": "dxSelectBox",
            "instance": $("#select_array_type").dxSelectBox({
                dataSource: [{
                    "ID": "string",
                    "VALUE": "String"
                }, {
                    "ID": "number",
                    "VALUE": "Number"
                }, {
                    "ID": "integer",
                    "VALUE": "Integer"
                }, {
                    "ID": "object",
                    "VALUE": "Object"
                }, {
                    "ID": "array",
                    "VALUE": "Array"
                }, {
                    "ID": "boolean",
                    "VALUE": "Boolean"
                }, {
                    "ID": "enum",
                    "VALUE": "Enum"
                }],
                label: "Tpo de array",
                valueExpr: "ID",
                displayExpr: "VALUE"
            }).dxSelectBox("instance"),
            "tagName": "select_array_type"
        }));

        this._componentInstanceModel.addInstance(new InstanceProps({ //checkbox_array_min_max
            "componentName": "dxCheckBox",
            "instance": $("#checkbox_array_min_max").dxCheckBox({
                text: 'Max/Min',
                focusStateEnabled: false,
                iconSize: 20,
                onValueChanged: (event) => {
                    this._componentInstanceModel.setInstanceValue("number_array_max", 0);
                    this._componentInstanceModel.setInstanceValue("number_array_min", 0);

                    this._componentInstanceModel.disableEnableInstance("number_array_min");
                    this._componentInstanceModel.disableEnableInstance("number_array_max");
                }
            }).dxCheckBox("instance"),
            "tagName": "checkbox_array_min_max"
        }));

        this._componentInstanceModel.addInstance(new InstanceProps({ //number_array_min
            "componentName": "dxNumberBox",
            "instance": $("#number_array_min").dxNumberBox({
                disabled: true,
                label: "Min",
                labelMode: "static"
            }).dxNumberBox("instance"),
            "tagName": "number_array_min"
        }));

        this._componentInstanceModel.addInstance(new InstanceProps({ //number_array_max
            "componentName": "dxNumberBox",
            "instance": $("#number_array_max").dxNumberBox({
                disabled: true,
                label: "Max",
                labelMode: "static"
            }).dxNumberBox("instance"),
            "tagName": "number_array_max"
        }));

        this._componentInstanceModel.addInstance(new InstanceProps({ //checkbox_array_unique_items
            "componentName": "dxCheckBox",
            "instance": $("#checkbox_array_unique_items").dxCheckBox({
                /* Default Value: false */
                text: 'Apenas Itens únicos',
                focusStateEnabled: false,
                iconSize: 20
            }).dxCheckBox("instance"),
            "tagName": "checkbox_array_unique_items"
        }));

        this._componentInstanceModel.addInstance(new InstanceProps({ //checkbox_string_regular_expression
            "componentName": "dxCheckBox",
            "instance": $("#checkbox_string_regular_expression").dxCheckBox({
                text: 'Expressão regular',
                focusStateEnabled: false,
                iconSize: 20,
                onValueChanged: () => {
                    this._componentInstanceModel.disableEnableInstance("text_string_regular_expression");
                    this._componentInstanceModel.clearInstanceValue("text_string_regular_expression");
                }
            }).dxCheckBox("instance"),
            "tagName": "checkbox_string_regular_expression"
        }));

        this._componentInstanceModel.addInstance(new InstanceProps({ //text_string_regular_expression
            "componentName": "dxTextBox",
            "instance": $('#text_string_regular_expression').dxTextBox({
                label: "Expressão",
                labelMode: "static",
                disabled: true
            }).dxTextBox("instance"),
            "tagName": "text_string_regular_expression"
        }));

        this._componentInstanceModel.addInstance(new InstanceProps({ //checkbox_numeric_range
            "componentName": "dxCheckBox",
            "instance": $("#checkbox_numeric_range").dxCheckBox({
                text: 'Range',
                focusStateEnabled: false,
                iconSize: 20,
                onValueChanged: (event) => {
                    this._componentInstanceModel.disableEnableInstance("select_numeric_greater", event.value);
                    this._componentInstanceModel.disableEnableInstance("select_numeric_less", event.value);

                    this._componentInstanceModel.clearInstanceValue("select_numeric_greater");
                    this._componentInstanceModel.clearInstanceValue("select_numeric_less");
                    this._componentInstanceModel.clearInstanceValue("number_numeric_greater");
                    this._componentInstanceModel.clearInstanceValue("number_numeric_less");
                }
            }).dxCheckBox("instance"),
            "tagName": "checkbox_numeric_range"
        }));

        this._componentInstanceModel.addInstance(new InstanceProps({ //select_numeric_greater
            "componentName": "dxSelectBox",
            "instance": $("#select_numeric_greater").dxSelectBox({
                dataSource: [
                    null,
                    {
                        "ID": "maior_que",
                        "VALUE": "Maior que"
                    }, {
                        "ID": "maior_ou_igual",
                        "VALUE": "Maior ou igual"
                    }
                ],
                label: "Maior",
                valueExpr: "ID",
                displayExpr: "VALUE",
                disabled: true,
                onValueChanged: (event) => {
                    this._componentInstanceModel.clearInstanceValue("number_numeric_greater");
                    this._componentInstanceModel.disableEnableInstance("number_numeric_greater", !!event.value)
                }
            }).dxSelectBox("instance"),
            "tagName": "select_numeric_greater"
        }));

        this._componentInstanceModel.addInstance(new InstanceProps({ //number_numeric_greater
            "componentName": "dxNumberBox",
            "instance": $("#number_numeric_greater").dxNumberBox({
                /* Default Value: 0 */
                label: "Valor",
                labelMode: "static",
                disabled: true
            }).dxNumberBox("instance"),
            "tagName": "number_numeric_greater"
        }));

        this._componentInstanceModel.addInstance(new InstanceProps({ //select_numeric_less
            "componentName": "dxSelectBox",
            "instance": $("#select_numeric_less").dxSelectBox({
                dataSource: [
                    null,
                    {
                        "ID": "menor_que",
                        "VALUE": "Menor que"
                    }, {
                        "ID": "menor_ou_igual",
                        "VALUE": "Menor ou igual"
                    }
                ],
                label: "Menor",
                valueExpr: "ID",
                displayExpr: "VALUE",
                disabled: true,
                onValueChanged: (event) => {
                    this._componentInstanceModel.clearInstanceValue("number_numeric_less");
                    this._componentInstanceModel.disableEnableInstance("number_numeric_less", !!event.value)
                }
            }).dxSelectBox("instance"),
            "tagName": "select_numeric_less"
        }));

        this._componentInstanceModel.addInstance(new InstanceProps({ //number_numeric_less
            "componentName": "dxNumberBox",
            "instance": $("#number_numeric_less").dxNumberBox({
                label: "Valor",
                labelMode: "static",
                disabled: true
            }).dxNumberBox("instance"),
            "tagName": "number_numeric_less"
        }));

        this._componentInstanceModel.addInstance(new InstanceProps({ //text_enum_add_value
            "componentName": "dxTextBox",
            "instance": $('#text_enum_add_value').dxTextBox({
                /* Default Value: '' */
                label: "Valor",
                labelMode: "static"
            }).dxTextBox("instance"),
            "tagName": "text_enum_add_value"
        }));

        this._componentInstanceModel.addInstance(new InstanceProps({ //button_enum_add_value
            "componentName": "dxButton",
            "instance": $("#button_enum_add_value").dxButton({
                icon: "fa fa-plus",
                onClick: (event) => {
                    let textEnum = this._componentInstanceModel.getInstanceValue("text_enum_add_value");
                    if (!textEnum) { DevExpress.ui.notify("Campo Valor sem conteúdo!", 'error'); return; }

                    let listValues = this._componentInstanceModel.getInstanceValue("list_enum_values");
                    if (listValues.indexOf(textEnum) != -1) { DevExpress.ui.notify("Enum já cadastrado!", 'error'); return; }

                    this._componentInstanceModel.setInstanceValue("list_enum_values", listValues.concat(textEnum))
                    this._componentInstanceModel.clearInstanceValue("text_enum_add_value");
                }
            }).dxButton("instance"),
            "tagName": "button_enum_add_value"
        }));

        this._componentInstanceModel.addInstance(new InstanceProps({ //list_enum_values
            "componentName": "dxList",
            "instance": $('#list_enum_values').dxList({
                selectByClick: false,
                allowItemDeleting: true,
                itemDeleteMode: 'static',
                onItemClick: function (e) {
                    DevExpress.ui.notify("The button was clicked");
                }
            }).dxList('instance'),
            "tagName": "list_enum_values"
        }));

        // ==================================================================================================================== //


        // ===================================================== Functions ==================================================== //

        this._componentInstanceModel.addFunction(new FunctionProps({ //js_config_main_props
            "functionDefinition": {
                setVisible: (value) => {
                    if (value == true) {
                        $("#js_config_main_props").show();
                    } else if (value == false) {
                        $("#js_config_main_props").hide();
                    }
                },
                clearFields: () => {
                    this._componentInstanceModel.clearInstanceValue("text_name");
                    this._componentInstanceModel.clearInstanceValue("text_description");
                    this._componentInstanceModel.clearInstanceValue("select_type");
                    this._componentInstanceModel.clearInstanceValue("checkbox_required");
                    this._componentInstanceModel.clearInstanceValue("checkbox_nullable");
                    this._componentInstanceModel.clearInstanceValue("checkbox_additional_properties");
                },
                enabledComponents: (booleanValue) => {
                    if (typeof booleanValue != "boolean") {
                        throw new Error(`[ERRO]-[ConfigComponents] Parâmetro inválido.`);
                    }
                    this._componentInstanceModel.disableEnableInstance("text_name", booleanValue);
                    this._componentInstanceModel.disableEnableInstance("text_description", booleanValue);
                    this._componentInstanceModel.disableEnableInstance("select_type", booleanValue);
                    this._componentInstanceModel.disableEnableInstance("checkbox_required", booleanValue);
                    this._componentInstanceModel.disableEnableInstance("checkbox_nullable", booleanValue);
                    this._componentInstanceModel.disableEnableInstance("checkbox_additional_properties", booleanValue);
                }
            },
            "tagName": "js_config_main_props"
        }));

        this._componentInstanceModel.addFunction(new FunctionProps({ //js_dxBox_config_array_props
            "functionDefinition": {
                setVisible: (value) => {
                    if (value == true) {
                        $("#js_dxBox_config_array_props").show();
                    } else if (value == false) {
                        $("#js_dxBox_config_array_props").hide();
                    }
                },
                clearFields: () => {
                    this._componentInstanceModel.clearInstanceValue("select_array_type");
                    this._componentInstanceModel.clearInstanceValue("checkbox_array_min_max");
                    this._componentInstanceModel.clearInstanceValue("number_array_min");
                    this._componentInstanceModel.clearInstanceValue("number_array_max");
                    this._componentInstanceModel.clearInstanceValue("checkbox_array_unique_items");
                },
                enabledComponents: (booleanValue) => {
                    if (typeof booleanValue != "boolean") {
                        throw new Error(`[ERRO]-[ConfigComponents] Parâmetro inválido.`);
                    }
                    this._componentInstanceModel.disableEnableInstance("select_array_type", booleanValue);
                    this._componentInstanceModel.disableEnableInstance("checkbox_array_min_max", booleanValue);
                    this._componentInstanceModel.disableEnableInstance("number_array_min", booleanValue);
                    this._componentInstanceModel.disableEnableInstance("number_array_max", booleanValue);
                    this._componentInstanceModel.disableEnableInstance("checkbox_array_unique_items", booleanValue);
                }
            },
            "tagName": "js_dxBox_config_array_props"
        }));

        this._componentInstanceModel.addFunction(new FunctionProps({ //js_dxBox_config_string_props
            "functionDefinition": {
                setVisible: (value) => {
                    if (value == true) {
                        $("#js_dxBox_config_string_props").show();
                    } else if (value == false) {
                        $("#js_dxBox_config_string_props").hide();
                    }
                },
                clearFields: () => {
                    this._componentInstanceModel.clearInstanceValue("text_string_regular_expression");
                    this._componentInstanceModel.clearInstanceValue("checkbox_string_regular_expression");
                },
                enabledComponents: (booleanValue) => {
                    if (typeof booleanValue != "boolean") {
                        throw new Error(`[ERRO]-[ConfigComponents] Parâmetro inválido.`);
                    }
                    this._componentInstanceModel.disableEnableInstance("checkbox_string_regular_expression", booleanValue);
                    this._componentInstanceModel.disableEnableInstance("text_string_regular_expression", booleanValue);
                }
            },
            "tagName": "js_dxBox_config_string_props"
        }));

        this._componentInstanceModel.addFunction(new FunctionProps({ //js_dxBox_config_numeric_props
            "functionDefinition": {
                setVisible: (value) => {
                    if (value == true) {
                        $("#js_dxBox_config_numeric_props").show();
                    } else if (value == false) {
                        $("#js_dxBox_config_numeric_props").hide();
                    }
                },
                clearFields: () => {
                    this._componentInstanceModel.clearInstanceValue("checkbox_numeric_range");
                    this._componentInstanceModel.clearInstanceValue("select_numeric_greater");
                    this._componentInstanceModel.clearInstanceValue("select_numeric_less");
                    this._componentInstanceModel.clearInstanceValue("number_numeric_greater");
                    this._componentInstanceModel.clearInstanceValue("number_numeric_less");
                },
                enabledComponents: (booleanValue) => {
                    if (typeof booleanValue != "boolean") {
                        throw new Error(`[ERRO]-[ConfigComponents] Parâmetro inválido.`);
                    }
                    this._componentInstanceModel.disableEnableInstance("select_numeric_greater", booleanValue);
                    this._componentInstanceModel.disableEnableInstance("select_numeric_less", booleanValue);
                    this._componentInstanceModel.disableEnableInstance("number_numeric_greater", booleanValue);
                    this._componentInstanceModel.disableEnableInstance("number_numeric_less", booleanValue);
                }
            },
            "tagName": "js_dxBox_config_numeric_props"
        }));

        this._componentInstanceModel.addFunction(new FunctionProps({ //js_dxBox_config_enum_props
            "functionDefinition": {
                setVisible: (value) => {
                    if (value == true) {
                        $("#js_dxBox_config_enum_props").show();
                    } else if (value == false) {
                        $("#js_dxBox_config_enum_props").hide();
                    }
                },
                clearFields: () => {
                    this._componentInstanceModel.clearInstanceValue("text_enum_add_value");
                    this._componentInstanceModel.clearInstanceValue("list_enum_values");
                },
                enabledComponents: (booleanValue) => {
                    if (typeof booleanValue != "boolean") {
                        throw new Error(`[ERRO]-[ConfigComponents] Parâmetro inválido.`);
                    }
                    this._componentInstanceModel.disableEnableInstance("text_enum_add_value", booleanValue);
                    this._componentInstanceModel.disableEnableInstance("list_enum_values", booleanValue);
                }
            },
            "tagName": "js_dxBox_config_enum_props"
        }));

        this._componentInstanceModel.addFunction(new FunctionProps({ //js_config_buttons_decline_confirm
            "functionDefinition": {
                setVisible: (booleanValue) => {
                    if (typeof booleanValue != "boolean") {
                        throw new Error(`[ERRO]-[ConfigComponents] Parâmetro inválido.`);
                    }
                    if (booleanValue) {
                        $("#js_config_buttons_decline_confirm").show();
                    } else {
                        $("#js_config_buttons_decline_confirm").hide();
                    }
                },
                enabledComponents: (booleanValue) => {
                    if (typeof booleanValue != "boolean") {
                        throw new Error(`[ERRO]-[ConfigComponents] Parâmetro inválido.`);
                    }
                    this._componentInstanceModel.disableEnableInstance("button_confirm", booleanValue);
                    this._componentInstanceModel.disableEnableInstance("button_decline", booleanValue);
                }
            },
            "tagName": "js_config_buttons_decline_confirm"
        }));

        this._componentInstanceModel.addFunction(new FunctionProps({ //GLOBAL_CONFIG_FUNCTIONS
            "functionDefinition": {
                configVisible: (booleanValue) => {
                    if (typeof booleanValue != "boolean") {
                        throw new Error(`[ERRO]-[ConfigComponents] Parâmetro inválido.`);
                    }
                    if (booleanValue) {
                        $("#js_Config").show();
                    } else {
                        $("#js_Config").hide();
                    }
                },
                cleanAll: () => {
                    this._componentInstanceModel.getFunction("js_dxBox_config_array_props", "clearFields")();
                    this._componentInstanceModel.getFunction("js_dxBox_config_string_props", "clearFields")();
                    this._componentInstanceModel.getFunction("js_dxBox_config_numeric_props", "clearFields")();
                    this._componentInstanceModel.getFunction("js_dxBox_config_enum_props", "clearFields")();
                    this._componentInstanceModel.getFunction("js_config_main_props", "clearFields")();
                },
                enabledComponents: (booleanValue) => {
                    if (typeof booleanValue != "boolean") {
                        throw new Error(`[ERRO]-[ConfigComponents] Parâmetro inválido.`);
                    }
                    this._componentInstanceModel.getFunction("js_config_main_props", "enabledComponents")(booleanValue);
                }
            },
            "tagName": "GLOBAL_CONFIG_FUNCTIONS"
        }));

        // ==================================================================================================================== //
    }

}

export class HeaderComponents {
    _componentInstanceModel = new ComponentInstanceModel();

    btnTesteClick;
    btntesteteste;

    constructor() {

        this._componentInstanceModel.addInstance(new InstanceProps({ //text_header_version
            "componentName": "dxTextBox",
            "instance": $('#text_header_version').dxTextBox({
                label: "Versão",
                labelMode: "static"
            }).dxTextBox("instance"),
            "tagName": "text_header_version"
        }));

        this._componentInstanceModel.addInstance(new InstanceProps({ //text_header_id
            "componentName": "dxTextBox",
            "instance": $('#text_header_id').dxTextBox({
                label: "ID",
                labelMode: "static"
            }).dxTextBox("instance"),
            "tagName": "text_header_id"
        }));

        this._componentInstanceModel.addInstance(new InstanceProps({ //button_header_save_new_version
            "componentName": "dxButton",
            "instance": $('#button_header_save_new_version').dxButton({
                stylingMode: 'contained',
                text: 'Salvar em nova versão',
                type: 'success',
                onClick: (event) => {

                }
            }).dxButton("instance"),
            "tagName": "button_header_save_new_version"
        }));

        this._componentInstanceModel.addInstance(new InstanceProps({ //button_header_select_version
            "componentName": "dxButton",
            "instance": $('#button_header_select_version').dxButton({
                stylingMode: 'contained',
                text: 'Selecionar versão',
                type: 'default',
                onClick: (event) => {

                }
            }).dxButton("instance"),
            "tagName": "button_header_select_version"
        }));

    }
}

export class TreeViewComponents {
    _componentInstanceModel = new ComponentInstanceModel();
    _items = [];
    onNodeClicked = ({ component, element, event, itemData, itemElement, itemIndex, node }) => { };

    /**
     * Função remove o item com id igual a 'nodeIdParam' e todos os itens abaixo dele.
     * @param {String} nodeIdParam 
     * @param {Array<BaseNodeModel>} itemsParam 
     * @returns {Array<BaseNodeModel>}
     */
    _removeCascade = (nodeIdParam, itemsParam) => {
        let itensFilhos = itemsParam.filter(VALUE => (VALUE.id_ref == nodeIdParam));
        let remainingItems = itemsParam.filter(VALUE => (VALUE.id_ref != nodeIdParam && VALUE.id != nodeIdParam));
        for (let ITEM of itensFilhos) {
            remainingItems = this._removeCascade(ITEM.id, remainingItems);
        }
        return remainingItems;
    }

    /**
     * Função valida regras específicas com base no tipo do item.
     * @param {Array<BaseNodeModel>} itemsParam 
     * @returns {Array<BaseNodeModel>}
     */
    _reviewItemsProps = (itemsParam) => {
        /**
         * Função procura um 'ARRAY_ELEMENT' filho do item 'itemParam'
         * @param {Array<BaseNodeModel>} itensArrayParam 
         * @param {BaseNodeModel} itemParam 
         * @returns {BaseNodeModel | null}
         */
        const findArrayElement = (itensArrayParam, itemParam) => {
            return itensArrayParam.find(VALUE => VALUE.id_ref == itemParam.id && VALUE.node_value.text_name == "ARRAY_ELEMENT");
        }

        /**
         * Função que valida e aplica as regras dos itens do tipo array.
         * @param {Array<BaseNodeModel>} itemsArrayParam 
         * @returns {Array<BaseNodeModel>}
         */
        const reviewArrayItems = (itemsArrayParam) => {
            let finalItems = itemsArrayParam;

            /* Valida se os itens 'ARRAY_ELEMENT' são do tipo definido no item pai. */
            /* Quando um item 'ARRAY_ELEMENT' tem o campo 'Tipo' diferente do campo 'Tipo de Array' do elemento pai, ele é excluído */
            finalItems = ((param) => {
                let itemsArray = param;

                let arrayItems = itemsArray.filter(VALUE => VALUE.node_value.select_type == 'array');
                for (let ITEM of arrayItems) {
                    let arrayElement = findArrayElement(itemsArray, ITEM);
                    if (arrayElement && arrayElement.node_value.select_type != ITEM.node_value.select_array_type) {
                        itemsArray = this._removeCascade(arrayElement.id, itemsArray);
                    }
                }

                return itemsArray;
            })(finalItems)


            return finalItems;
        };

        /**
        * Função que valida e aplica as regras dos itens do tipo object.
        * @param {Array<BaseNodeModel>} itemsArrayParam 
        * @returns {Array<BaseNodeModel>}
        */
        const reviewObjectItems = (itemsArrayParam) => {
            let finalItems = itemsArrayParam;

            /* Remove os itens 'ARRAY_ELEMENT' filhos de um item 'object' */
            finalItems = ((param) => {
                let removeCascadeCalled;
                let itensArray = param;

                do {
                    let objectItens = itensArray.filter(VALUE => VALUE.node_value.select_type == "object");
                    for (let ITEM of objectItens) {
                        let arrayElement = findArrayElement(itensArray, ITEM);
                        if (arrayElement) {
                            itensArray = this._removeCascade(arrayElement.id, itensArray);
                        }
                    }

                } while (removeCascadeCalled);

                return itensArray;
            })(finalItems);


            return finalItems;
        }

        let copyItems = reviewArrayItems(JSON.parse(JSON.stringify(itemsParam)));
        copyItems = reviewObjectItems(JSON.parse(JSON.stringify(copyItems)));
        let finalItems = [];

        for (let ITEM of copyItems) {
            let copyValue = JSON.parse(JSON.stringify(ITEM));
            let nodeValue = copyValue.node_value;
            copyValue.text = nodeValue.text_description;

            switch (nodeValue.select_type) {
                case "object":
                    copyValue.contextAddBtn = true;
                    copyValue.contextRemoveBtn = true;
                    copyValue.expanded = true;
                    break;
                case "array":
                    copyValue.contextAddBtn = false;
                    copyValue.contextRemoveBtn = true;
                    copyValue.expanded = false;
                    let arrayElement = findArrayElement(copyItems, ITEM);
                    if (!arrayElement) {
                        finalItems.push((() => {
                            let instanceValue = new BaseNodeModel(ITEM.id);
                            instanceValue.text = "ARRAY ELEMENT";
                            instanceValue.node_value.text_name = "ARRAY_ELEMENT";
                            instanceValue.node_value.text_description = "ARRAY ELEMENT";
                            instanceValue.node_value.select_type = ITEM.node_value.select_array_type;
                            return instanceValue;
                        })());
                    }
                    break;
                case "string":
                case "integer":
                case "number":
                case "enum":
                case "boolean":
                    copyValue.contextAddBtn = false;
                    copyValue.contextRemoveBtn = true;
                    copyValue.expanded = false;
                    break;
                default:
                    copyValue.contextAddBtn = false;
                    copyValue.contextRemoveBtn = false;
                    copyValue.expanded = false;
            }

            if (copyValue.node_value.text_name == "ARRAY_ELEMENT") {
                copyValue.contextAddBtn = false;
                copyValue.contextRemoveBtn = false;
                copyValue.expanded = false;
            }

            finalItems.push(copyValue);
        }
        return finalItems;
    }

    setItems = (items) => {
        let value = this._reviewItemsProps(items);
        this._items = value;
        this._componentInstanceModel.setInstanceValue("treeView", value);
    }

    updateItem = ({ nodeId, nodeObject }) => {
        let copyItems = JSON.parse(JSON.stringify(this._items));

        for (let INDEX in copyItems) {
            if (copyItems[INDEX].id == nodeId) {
                copyItems[INDEX].node_value = nodeObject;
                break;
            }
        }

        this.setItems(copyItems);
    }

    constructor() {
        this._componentInstanceModel.addFunction(new FunctionProps({ //btnAddClicked
            "functionDefinition": (event) => {
            },
            "tagName": "btnAddClicked"
        }));

        this._componentInstanceModel.addFunction(new FunctionProps({ //nodeLessButtonClicked
            "functionDefinition": (event) => {
                let remainingItems = this._removeCascade(event.itemNodeId, this._items);
                this.setItems(remainingItems);
            },
            "tagName": "nodeLessButtonClicked"
        }));

        this._componentInstanceModel.addFunction(new FunctionProps({ //nodeAddButtonClicked
            "functionDefinition": (event) => {
                let items = JSON.parse(JSON.stringify(this._items));
                items.push(new BaseNodeModel(event.itemNodeId));
                this.setItems(items);
            },
            "tagName": "nodeAddButtonClicked"
        }));

        this._componentInstanceModel.addFunction(new FunctionProps({ //builtItemTemplate
            "functionDefinition": (data, index, element) => {
                let iconProp = (() => {
                    if (data.node_value.select_type) {
                        return icons[data.node_value.select_type];
                    }
                    return icons["blankFile"];
                })();

                return `
                    <div id="node_${data.id}">
                        <img src="${iconProp.type},${iconProp.value}" width="35" height="35" />
                        <span>${data.text}</span>
                    </div>
                    <div id="nodeContext_${data.id}" ></div>
                `;
            },
            "tagName": "builtItemTemplate"
        }));

        this._componentInstanceModel.addFunction(new FunctionProps({ //itemRendered
            "functionDefinition": ({ itemData }) => {
                let self = this;

                self._componentInstanceModel.addInstance(new InstanceProps({
                    "componentName": "dxContextMenu",
                    "instance": $(`#nodeContext_${itemData.id}`).dxContextMenu({
                        dataSource: [
                            { "text": "", "id": "addBtn", "icon": "plussBtnIcon", "color": "#8BC34A", "disabled": !itemData.contextAddBtn, "itemNodeId": itemData.id },
                            { "text": "", "id": "removeBtn", "icon": "lessBtnIcon", "color": "#F44336", "disabled": !itemData.contextRemoveBtn, "itemNodeId": itemData.id }
                        ],
                        width: 30,
                        target: `#node_${itemData.id}`,
                        itemTemplate: (itemData) => {
                            let iconProp = icons[itemData.icon];
                            return `
                                    <img src="${iconProp.type},${iconProp.value}" width="25" height="25" style="background-color: ${itemData.color}; border-radius: 50%;"/>
                            `;
                        },
                        onItemClick({ itemData }) {
                            if (itemData.id == "addBtn") {
                                self._componentInstanceModel.getFunction("nodeAddButtonClicked")(itemData);
                            } else if (itemData.id == "removeBtn") {
                                self._componentInstanceModel.getFunction("nodeLessButtonClicked")(itemData);
                            }
                        },
                    }).dxContextMenu("instance"),

                }));
            },
            "tagName": "itemRendered"
        }));

        this._componentInstanceModel.addInstance(new InstanceProps({ //treeView
            "componentName": "dxTreeView",
            "instance": $('#treeView').dxTreeView({
                items: this._items,
                dataStructure: 'plain',
                parentIdExpr: 'id_ref',
                keyExpr: 'id',
                displayExpr: 'text',
                itemTemplate: this._componentInstanceModel.getFunction("builtItemTemplate"),
                onItemRendered: this._componentInstanceModel.getFunction("itemRendered"),
                onItemClick: (props) => { this.onNodeClicked(props) },
            }).dxTreeView('instance'),
            "tagName": "treeView"
        }));
    }




}
