import { ComponentInstanceModel } from "./ComponentInstanceModel.js";
import { InstanceProps } from "./InstanceProps.js"
import { FunctionProps } from "./FunctionProps.js";
import { icons } from "./Consts.js";
import { BaseNodeModel } from "./BaseModels.js";
import { LOCAL_DATA } from "./LocalData.js";

export class ConfigComponents {
    /**
     * Instancia da classe ComponentInstanceModel que é usada para armazenar e gerenciar as instâncias.
     * @private
     * @type {ComponentInstanceModel}
     */
    _componentInstanceModel = new ComponentInstanceModel();
    /**
     * nodeId do item atual.
     * @type {string}
     */
    _node_id = "";

    /**
     * Evento chamado quando o botão de confirmar é clicado no painel de configurações.
     * @param {object} param
     * @param {object} param.event Evento do clique.
     * @param {string} param.nodeId Id do node do event.
     * @param {BaseNodeModel} param.nodeObject Valor final do node.
     * @returns {void}
     */
    onConfirmClick = ({ event, nodeId, nodeObject }) => { };

    /**
     * Evento de cancelamento de edição do node.
     * 
     * @param {object} param
     * @param {object} param.event evento de click.
     * @param {string} param.nodeId ID do node cancelado.
     */
    onDeclineClick = ({ event, nodeId }) => { };

    /**
     * Atualiza as informações do painel de configuração.
     * Recebe os dados de um node e popula os campos do formulário.
     * @param {BaseNodeValueModel} nodeObject 
     * @param {string} node_id
     * @returns {void}
     */
    setNodeObject = (nodeObject, node_id) => {
        this._componentInstanceModel.setBuiltObject(nodeObject);
        this._node_id = node_id;
        this._componentInstanceModel.getFunction("js_config_buttons_decline_confirm", "enabledComponents")(true);
        this._componentInstanceModel.getFunction("js_config_main_props", "enabledComponents")(true);

        if (nodeObject.select_type != 'object') {
            this._componentInstanceModel.disableInstance("checkbox_additional_properties");
        }
    }

    /**
     * @constructor
     * Construtor da classe.
     * @description Cria as instâncias dos componentes devExtreme.
     */
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

    /**
     * Evento de clique do botão Salvar em nova versão.
     * @param {object} event Evento de clique.
     * @returns {void}
     */
    btnSaveNewVersionClicked = (event) => { };

    /**
     * Evento de clique do botão Selecionar versão.
     * @param {object} event Evento de clique.
     * @returns {void}
     */
    btnSelectVersionClicked = (event) => { };

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
                    this.btnSaveNewVersionClicked(event);
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
                    this.btnSelectVersionClicked(event);
                }
            }).dxButton("instance"),
            "tagName": "button_header_select_version"
        }));

    }
}

export class ViewComponents {

    /**
     * @private
     */
    _componentInstanceModel = new ComponentInstanceModel();

    /**
     * instância da classe de construção do JsonView.
     * @type {JsonViewer}
    */
    jsonViewer = new JsonViewer({ collapsed: true, rootCollapsable: false, withLinks: true, withQuotes: true });

    /**
     * instância da classe de construção do TreeView.
     * @type {TreeView}
    */
    treeView = new TreeView();

    /**
     * @typedef {Object} DataSource
     * @property {string} id - O id da aba.
     * @property {string} text - O texto de descrição da aba.
     * @property {string} icon - O ícone da aba.
     */
    /**
     * Busca a aba atual.
     * @returns {DataSource} Informações da aba atual.
     */
    getCurrentTab = () => {
        return this._componentInstanceModel.getInstanceValue("tabTreeViewJsonSchema");
    }

    /**
     * Evento chamado quando a aba muda.
     * @param {DataSource} dataSource Informações da aba atual.
     */
    onTabChanged = (dataSource) => { }

    constructor() {
        this._componentInstanceModel.addInstance(new InstanceProps({ //tabTreeViewJsonSchema
            "componentName": "dxTabs",
            "instance": $('#tabTreeViewJsonSchema').dxTabs({
                rtlEnabled: false,
                selectedIndex: 0,
                showNavButtons: false,
                focusStateEnabled: false,
                dataSource: [
                    {
                        id: "treeView",
                        text: 'Tree View',
                        icon: 'hierarchy',
                    },
                    {
                        id: "jsonRendererContainer",
                        text: 'Json Schema View',
                        icon: "codeblock",
                    }
                ],
                orientation: "horizontal",
                stylingMode: "secondary",
                iconPosition: "start",
                onItemClick: ({ itemData }) => {
                    this.onTabChanged(itemData);
                    this._componentInstanceModel.getFunction("show_hide_jsonView_treeview")(itemData);
                }
            }).dxTabs('instance'),
            "tagName": "tabTreeViewJsonSchema"
        }));

        this._componentInstanceModel.addFunction(new FunctionProps({ //show_hide_jsonView_treeview
            "functionDefinition": (itemData) => {
                if (itemData.id == "treeView") {
                    $("#treeView").show();
                    $("#jsonRendererContainer").hide();
                } else {
                    $("#jsonRendererContainer").show();
                    $("#treeView").hide();
                }
            },
            "tagName": "show_hide_jsonView_treeview"
        }));
    }
}

class TreeView {
    /**
     * @private
     */
    _componentInstanceModel = new ComponentInstanceModel();
    /**
     * Itens atuais do treeView
     * @type {Array<BaseNodeModel>}
     * @private 
     */
    _items = [];

    /**
     * Evento chamado quando um node é clicado.
     * @param {object} param
     * @param {object} param.component componente DevExtreme clicado.
     * @param {object} param.element componente HTML clicado.
     * @param {object} param.event evento de clique.
     * @param {BaseNodeModel} param.itemData Informaçoes do node clicado.
     * @param {object} param.itemElement Informações do componente DeveExreme clicado.
     * @param {integer} param.itemIndex Index do item clicado.
     * @param {object} param.node Informações do node clicado na estrutura do DevExtreme.
     * @returns {void}
     */
    onNodeClicked = ({ component, element, event, itemData, itemElement, itemIndex, node }) => { };

    /**
     * Função remove o item com id igual a 'nodeIdParam' e todos os itens abaixo dele.
     * @param {String} nodeIdParam id do item que deve ser removido.
     * @param {Array<BaseNodeModel>} itemsParam Array dos itens atuais.
     * @returns {Array<BaseNodeModel>} Array de itens restantes.
     * @private
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
     * @private
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

            /* Valida se todos os itens do tipo 'array' possuem seu filho 'ARRAY_ELEMENT' */
            finalItems = ((param) => {
                let itemsArray = param;

                let arrayItems = itemsArray.filter(VALUE => VALUE.node_value.select_type == 'array');
                for (let ITEM of arrayItems) {
                    let arrayElement = findArrayElement(itemsArray, ITEM);
                    if (!arrayElement) {
                        itemsArray.push((() => {
                            let instanceValue = new BaseNodeModel(ITEM.id);
                            instanceValue.text = "ARRAY ELEMENT";
                            instanceValue.node_value.text_name = "ARRAY_ELEMENT";
                            instanceValue.node_value.text_description = "ARRAY ELEMENT";
                            instanceValue.node_value.select_type = ITEM.node_value.select_array_type;
                            return instanceValue;
                        })());
                    }
                }

                return itemsArray;
            })(finalItems)

            /* Valida se o componente do tipo 'array' tem apenas o item 'ARRAY_ELEMENT' como filho  */
            finalItems = ((param) => {
                let itemsArray = param;
                let arrayItems = itemsArray.filter(VALUE => VALUE.node_value.select_type == 'array');
                for (let ITEM of arrayItems) {
                    let itensFilhoNaoArrayItem = itemsArray.filter(VALUE => VALUE.id_ref == ITEM.id && VALUE.node_value.text_name != "ARRAY_ELEMENT");
                    itensFilhoNaoArrayItem.forEach(VALUE => {
                        itemsArray = this._removeCascade(VALUE.id, itemsArray);
                    });
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
                let itensArray = param;

                let objectItens = itensArray.filter(VALUE => VALUE.node_value.select_type == "object");
                for (let ITEM of objectItens) {
                    let arrayElement = findArrayElement(itensArray, ITEM);
                    if (arrayElement) {
                        itensArray = this._removeCascade(arrayElement.id, itensArray);
                    }
                }
                return itensArray;
            })(finalItems);


            return finalItems;
        }

        /**
         * Função que valida e aplica as regras dos outros itens. 
         * @param {Array<BaseNodeModel>} itemsArrayParam 
         */
        const reviewOthers = (itemsArrayParam) => {
            let finalItems = itemsArrayParam;

            /* Remove itens filhos de componentes básicos */
            finalItems = ((param) => {

                let itensArray = param;
                let objectItens = itensArray.filter(VALUE => ["string", "integer", "number", "enum", "boolean"].includes(VALUE.node_value.select_type));

                for (let ITEM of objectItens) {
                    let childItens = itensArray.filter(VALUE => VALUE.id_ref == ITEM.id);
                    for (let CHILD of childItens) {
                        itensArray = this._removeCascade(CHILD.id, itensArray);
                    }
                }
                return itensArray;
            })(finalItems);

            /* Cria um componente raiz se não tiver nodes. */
            finalItems = ((param) => {
                if (param.length == 0) {
                    let instanceValue = new BaseNodeModel(null);
                    instanceValue.text = "root";
                    instanceValue.node_value.text_name = "root";
                    instanceValue.node_value.text_description = "root";
                    instanceValue.node_value.select_type = "object";

                    return [instanceValue];
                }
                return param;
            })(finalItems)

            return finalItems;
        }

        let finalItems = itemsParam;
        finalItems = reviewArrayItems(finalItems);
        finalItems = reviewObjectItems(finalItems);
        finalItems = reviewOthers(finalItems);

        /**
         * Percore todos os itens e define se pode ter as propriedades de adicionar, remover e expandir.
         * @returns {Array<BaseNodeModel>}
         */
        finalItems = finalItems.map(VALUE => {
            let item = VALUE;

            switch (item.node_value.select_type) {
                case "object":
                    item.contextAddBtn = true;
                    item.contextRemoveBtn = true;
                    item.expanded = true;
                    break;
                case "array":
                    item.contextAddBtn = false;
                    item.contextRemoveBtn = true;
                    item.expanded = false;
                    break;
                case "string":
                case "integer":
                case "number":
                case "enum":
                case "boolean":
                    item.contextAddBtn = false;
                    item.contextRemoveBtn = true;
                    item.expanded = false;
                    break;
                default:
                    item.contextAddBtn = false;
                    item.contextRemoveBtn = false;
                    item.expanded = false;
            }

            if (item.node_value.text_name == "ARRAY_ELEMENT") {
                item.contextAddBtn = false;
                item.contextRemoveBtn = false;
                item.expanded = false;
            }

            return item;
        });

        return finalItems;
    }

    /**
     * Função que seta os itens e atualiza o treeView.
     * @param {Array<BaseNodeModel>} items
     * @returns {void}
     * @private
     */
    setItems = (items) => {
        let value = this._reviewItemsProps(items);
        this._items = value;
        this._componentInstanceModel.setInstanceValue("treeView", value);
    }

    /**
     * Limpa a view.
     * @returns {void}
     */
    clearItems = () => {
        this._items = [];
        this._componentInstanceModel.setInstanceValue("treeView", []);
    }

    /**
     * Move o scroll para o item com o id passado.
     * @private
     * @param {string} nodeId id do node.
     * @returns {void}
     */
    _scrollFocusItem = (nodeId) => {
        let instanceProps = this._componentInstanceModel.getInstanceProps("treeView");
        let instance = instanceProps.getInstance();
        instance.scrollToItem(nodeId);
    }

    /**
     * Atualiza um node com base no nodeId
     * @param {string} param.nodeId - ID do node que deve ser atualizado.
     * @param {BaseNodeModel} param.nodeObject - Valor para atualizar.
     */
    updateItem = ({ nodeId, nodeObject }) => {

        let copyItems = JSON.parse(JSON.stringify(this._items));

        for (let INDEX in copyItems) {
            if (copyItems[INDEX].id == nodeId) {
                copyItems[INDEX].node_value = nodeObject;
                copyItems[INDEX].text = nodeObject.text_description;
                break;
            }
        }

        this.setItems(copyItems);
        this._scrollFocusItem(nodeId);
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
                onItemClick: (props) => { this.onNodeClicked(props); },
            }).dxTreeView('instance'),
            "tagName": "treeView"
        }));
    }
}

class JsonViewer {
    /**
     * json atual da view.
     * @private
     */
    _json;

    /**
     * opçoes atuais da view.
     * @private
     */
    _jsonViewOptions;

    /**
     * Define o json do jsonViewer.
     * @param {object} json
     * @throws {Error} Parâmetro json não é um objeto ou não foi passado.
     */
    setJson = (json) => {
        if (!json || typeof json != "object") { throw new Error(`[ERRO]-[JsonViewer] Parametro inválido.`); }
        this._json = json;
        this._updateJsonView();
    }

    /**
     * Limpa o json da view.
     * @returns {void}
     */
    clearJson = () => {
        this._json = "";
        this._updateJsonView();
    }

    /**
     * Atualiza o DOM com o json e as opçoes atuais.
     * @private
     */
    _updateJsonView = () => {
        let jsonViewrIframe = $("#JsonViewerIframe");
        if (jsonViewrIframe.length) {
            let setJson = jsonViewrIframe[0].contentWindow.setJson;
            setJson(JSON.stringify(this._json));
        }
    }

    /**
     * @param {object} options
     * @param {boolean} options.collapsed Define se o visualizador irá abrir com o json minimizado.
     * @param {boolean} options.rootCollapsable Define se o elemento root irá abrir minimizado.
     * @param {boolean} options.withQuotes Degine se as Keys vão ser envolvidas por aspas
     * @param {boolean} options.withLinks Define se os links devem ficar sublinhados
     */
    constructor(options = { collapsed, rootCollapsable, withQuotes, withLinks }) {
        this._jsonViewOptions = options;
    }
}

