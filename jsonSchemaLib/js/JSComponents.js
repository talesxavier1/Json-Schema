import { ComponentInstanceModel } from "./ComponentInstanceModel.js";
import { InstanceProps } from "./InstanceProps.js"
import { FunctionProps } from "./FunctionProps.js";
import { icons } from "./Consts.js";
import { BaseNodeModel } from "./BaseModels.js";

export class ConfigComponents {
    _componentInstanceModel = new ComponentInstanceModel();
    _node_id = "";
    setNodeObject = (nodeObject, node_id) => {
        this._componentInstanceModel.setBuiltObject(nodeObject);
        this._node_id = node_id;
    }

    getNodeObject = () => {
        return this._componentInstanceModel.getBuiltObject();
    }
    // <div class="component" id="button_confirm"></div>
    // <div class="component" id="button_decline"></div>
    constructor() {
        //    width: 15rem;
        //height: 15rem;
        this._componentInstanceModel.addInstance(new InstanceProps({ //button_confirm
            "componentName": "dxButton",
            "instance": $("#button_confirm").dxButton({
                // text: 'Salvar em nova versão',
                type: 'success',
                template: `
                    <span><img src="${icons.confirmFile.type},${icons.confirmFile.value}" width="65%" /></span>
                    <span>CONFIRMAR</span>
                `,
                focusStateEnabled: false,
                onClick: (event) => {
                }
            }).dxButton("instance"),
            "tagName": "button_confirm"
        }));

        this._componentInstanceModel.addInstance(new InstanceProps({ //button_decline
            "componentName": "dxButton",
            "instance": $("#button_decline").dxButton({
                type: "danger",
                template: `
                <span><img src="${icons.declineFile.type},${icons.declineFile.value}" width="65%"  /></span>
                <span>CANCELAR</span>
                `,
                focusStateEnabled: false,
                onClick: (event) => {
                }
            }).dxButton("instance"),
            "tagName": "button_decline"
        }));

        this._componentInstanceModel.addInstance(new InstanceProps({ //text_name
            "componentName": "dxTextBox",
            "instance": $('#text_name').dxTextBox({
                label: "Nome",
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
                onValueChanged: (event) => {
                    let functions;

                    functions = this._componentInstanceModel.getFunction("js_dxBox_config_array_props");
                    functions.functionDefinition.setVisible(event.value == "array");
                    functions.functionDefinition.clearFields();

                    functions = this._componentInstanceModel.getFunction("js_dxBox_config_string_props");
                    functions.functionDefinition.setVisible(event.value == "string");
                    functions.functionDefinition.clearFields();

                    functions = this._componentInstanceModel.getFunction("js_dxBox_config_numeric_props");
                    functions.functionDefinition.setVisible(["number", "integer"].includes(event.value));
                    functions.functionDefinition.clearFields();

                    functions = this._componentInstanceModel.getFunction("js_dxBox_config_enum_props");
                    functions.functionDefinition.setVisible(event.value == "enum");
                    functions.functionDefinition.clearFields();
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
                iconSize: 20
            }).dxCheckBox("instance"),
            "tagName": "checkbox_required"
        }));

        this._componentInstanceModel.addInstance(new InstanceProps({ //checkbox_nullable
            "componentName": "dxCheckBox",
            "instance": $("#checkbox_nullable").dxCheckBox({
                text: 'Anulável',
                focusStateEnabled: false,
                iconSize: 20
            }).dxCheckBox("instance"),
            "tagName": "checkbox_nullable"
        }));

        this._componentInstanceModel.addInstance(new InstanceProps({ //checkbox_additional_properties
            "componentName": "dxCheckBox",
            "instance": $("#checkbox_additional_properties").dxCheckBox({
                text: 'Propriedades adicionais',
                focusStateEnabled: false,
                iconSize: 20
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

                    this._componentInstanceModel.disableInstance("select_numeric_greater");
                    this._componentInstanceModel.disableInstance("select_numeric_less");
                    this._componentInstanceModel.disableInstance("number_numeric_greater");
                    this._componentInstanceModel.disableInstance("number_numeric_less");
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
                }
            },
            "tagName": "js_dxBox_config_enum_props"
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
    onNodeClicked;

    constructor() {
        this._componentInstanceModel.addFunction(new FunctionProps({ //btnAddClicked
            "functionDefinition": (event) => {
            },
            "tagName": "btnAddClicked"
        }));

        this._componentInstanceModel.addFunction(new FunctionProps({ //nodeLessButtonClicked
            "functionDefinition": (event) => {
                let items = JSON.parse(JSON.stringify(this._items));
                let remainingItems = items.filter(VALUE => (
                    (VALUE.id != event.itemNodeId) &&
                    (VALUE => VALUE.id_ref == event.itemNodeId)
                ));
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

        this._componentInstanceModel.addFunction(new FunctionProps({ //nodeClicked
            "functionDefinition": (event) => {
                if (this.onNodeClicked) {
                    this.onNodeClicked(event);
                }
            },
            "tagName": "nodeClicked"
        }));

        this._componentInstanceModel.addFunction(new FunctionProps({ //itemRendered
            "functionDefinition": ({ itemData }) => {
                let self = this;

                self._componentInstanceModel.addInstance(new InstanceProps({
                    "componentName": "dxContextMenu",
                    "instance": $(`#nodeContext_${itemData.id}`).dxContextMenu({
                        dataSource: [
                            { "text": "", "id": "addBtn", "icon": "plussBtnIcon", "color": "#8BC34A", "visible": itemData.contextAddBtn, "itemNodeId": itemData.id },
                            { "text": "", "id": "removeBtn", "icon": "lessBtnIcon", "color": "#F44336", "visible": itemData.contextRemoveBtn, "itemNodeId": itemData.id }
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
                                self._componentInstanceModel.getFunction("nodeAddButtonClicked").functionDefinition(itemData);
                            } else if (itemData.id == "removeBtn") {
                                self._componentInstanceModel.getFunction("nodeLessButtonClicked").functionDefinition(itemData);
                            }
                        },
                    }).dxContextMenu("instance"),

                }));
            },
            "tagName": "itemRendered"
        }));

        this._componentInstanceModel.addInstance(new InstanceProps({
            "componentName": "dxTreeView",
            "instance": $('#treeView').dxTreeView({
                items: this._items,
                dataStructure: 'plain',
                parentIdExpr: 'id_ref',
                keyExpr: 'id',
                displayExpr: 'text',
                itemTemplate: this._componentInstanceModel.getFunction("builtItemTemplate").functionDefinition,
                onItemRendered: this._componentInstanceModel.getFunction("itemRendered").functionDefinition,
                onItemClick: this._componentInstanceModel.getFunction("nodeClicked").functionDefinition,
            }).dxTreeView('instance'),
            "tagName": "treeView"
        }));
    }

    setItems = (items) => {
        this._items = items;
        this._componentInstanceModel.setInstanceValue("treeView", items);
    }


}
