import { ComponentInstanceModel } from "./ComponentInstanceModel.js";
import { BaseNodeModel } from "./BaseNodeModel.js"
import { InstanceProps } from "./InstanceProps.js"

export class ConfigComponents {
    _componentInstanceModel = new ComponentInstanceModel();

    constructor() {

        this._componentInstanceModel.addInstance(new InstanceProps({ //text_name
            "componentName": "dxTextBox",
            "instance": $('#text_name').dxTextBox({
                label: "Nome",
                labelMode: "static",
                onValueChanged: (event) => {
                    if (this.componentsChangeEvent.text_name) {
                        this.componentsChangeEvent.text_name(event.value);
                    }
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
                    this._componentInstanceModel.functions.js_dxBox_config_array_props.setVisible(event.value == "array");
                    this._componentInstanceModel.functions.js_dxBox_config_array_props.clearFields();

                    this._componentInstanceModel.functions.js_dxBox_config_string_props.setVisible(event.value == "string");
                    this._componentInstanceModel.functions.js_dxBox_config_string_props.clearFields();

                    this._componentInstanceModel.functions.js_dxBox_config_numeric_props.setVisible(["number", "integer"].includes(event.value));
                    this._componentInstanceModel.functions.js_dxBox_config_numeric_props.clearFields();

                    this._componentInstanceModel.functions.js_dxBox_config_enum_props.setVisible(event.value == "enum");
                    this._componentInstanceModel.functions.js_dxBox_config_enum_props.clearFields();
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
                    this._componentInstanceModel.components.number_array_min.option("value", 0);
                    this._componentInstanceModel.components.number_array_max.option("value", 0);
                    if (event.value == true) {
                        this._componentInstanceModel.components.number_array_min.option("disabled", false);
                        this._componentInstanceModel.components.number_array_max.option("disabled", false);
                    } else {
                        this._componentInstanceModel.components.number_array_min.option("disabled", true);
                        this._componentInstanceModel.components.number_array_max.option("disabled", true);
                    }
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
                /* Default Value: false */
                text: 'Expressão regular',
                focusStateEnabled: false,
                iconSize: 20,
                onValueChanged: (event) => {
                    this._componentInstanceModel.components.text_string_regular_expression.option("disabled", !event.value);
                    if (!event.value) {
                        this._componentInstanceModel.components.text_string_regular_expression.option("value", null);
                    }
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
                    this._componentInstanceModel.components.select_numeric_greater.option("disabled", !event.value);
                    this._componentInstanceModel.components.select_numeric_greater.option("value", null);
                    this._componentInstanceModel.components.select_numeric_less.option("disabled", !event.value);
                    this._componentInstanceModel.components.select_numeric_less.option("value", null);

                    // this._componentInstanceModel.components.number_numeric_greater.option("disabled", !event.value);
                    this._componentInstanceModel.components.number_numeric_greater.option("value", 0);
                    // this._componentInstanceModel.components.number_numeric_less.option("disabled", !event.value);
                    this._componentInstanceModel.components.number_numeric_less.option("value", 0);
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
                    this._componentInstanceModel.components.number_numeric_greater.option("value", 0);
                    if (!event.value) {
                        this._componentInstanceModel.components.number_numeric_greater.option("disabled", true);
                    } else {
                        this._componentInstanceModel.components.number_numeric_greater.option("disabled", false);
                    }
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
                    this._componentInstanceModel.components.number_numeric_less.option("value", 0);
                    if (!event.value) {
                        this._componentInstanceModel.components.number_numeric_less.option("disabled", true);
                    } else {
                        this._componentInstanceModel.components.number_numeric_less.option("disabled", false);
                    }
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
                    let textEnum = this._componentInstanceModel.components.text_enum_add_value.option("value");
                    if (!textEnum) { DevExpress.ui.notify("Campo Valor sem conteúdo!", 'error'); return; }

                    let listValues = this._componentInstanceModel.components.list_enum_values.option("items");
                    if (listValues.indexOf(textEnum) != -1) { DevExpress.ui.notify("Enum já cadastrado!", 'error'); return; }

                    this._componentInstanceModel.components.list_enum_values.option("items", listValues.concat(textEnum));
                    this._componentInstanceModel.components.text_enum_add_value.option("value", "");
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

        // // ==================================================================================================================== //

        // // ===================================================== Functions ==================================================== //
        // this._componentInstanceModel.functions.js_dxBox_config_array_props = {
        //     setVisible: (value) => {
        //         if (value == true) {
        //             $("#js_dxBox_config_array_props").show();
        //         } else if (value == false) {
        //             $("#js_dxBox_config_array_props").hide();
        //         }
        //     },
        //     clearFields: () => {
        //         this._componentInstanceModel.components.select_array_type.option("value", null);
        //         this._componentInstanceModel.components.checkbox_array_min_max.option("value", false);
        //         this._componentInstanceModel.components.number_array_min.option("value", 0);
        //         this._componentInstanceModel.components.number_array_max.option("value", 0);
        //         this._componentInstanceModel.components.checkbox_array_unique_items.option("value", false);
        //     }
        // };

        // this._componentInstanceModel.functions.js_dxBox_config_string_props = {
        //     setVisible: (value) => {
        //         if (value == true) {
        //             $("#js_dxBox_config_string_props").show();
        //         } else if (value == false) {
        //             $("#js_dxBox_config_string_props").hide();
        //         }
        //     },
        //     clearFields: () => {
        //         this._componentInstanceModel.components.text_string_regular_expression.option("value", null);
        //         this._componentInstanceModel.components.checkbox_string_regular_expression.option("value", false);
        //     }
        // }

        // this._componentInstanceModel.functions.js_dxBox_config_numeric_props = {
        //     setVisible: (value) => {
        //         if (value == true) {
        //             $("#js_dxBox_config_numeric_props").show();
        //         } else if (value == false) {
        //             $("#js_dxBox_config_numeric_props").hide();
        //         }
        //     },
        //     clearFields: () => {
        //         this._componentInstanceModel.components.checkbox_numeric_range.option("value", false);

        //         this._componentInstanceModel.components.select_numeric_greater.option("disabled", true);
        //         this._componentInstanceModel.components.select_numeric_greater.option("value", null);
        //         this._componentInstanceModel.components.select_numeric_less.option("disabled", true);
        //         this._componentInstanceModel.components.select_numeric_less.option("value", null);

        //         this._componentInstanceModel.components.number_numeric_greater.option("disabled", true);
        //         this._componentInstanceModel.components.number_numeric_greater.option("value", 0);
        //         this._componentInstanceModel.components.number_numeric_less.option("disabled", true);
        //         this._componentInstanceModel.components.number_numeric_less.option("value", 0);
        //     }
        // }

        // this._componentInstanceModel.functions.js_dxBox_config_enum_props = {
        //     setVisible: (value) => {
        //         if (value == true) {
        //             $("#js_dxBox_config_enum_props").show();
        //         } else if (value == false) {
        //             $("#js_dxBox_config_enum_props").hide();
        //         }
        //     },
        //     clearFields: () => {
        //         this._componentInstanceModel.components.text_enum_add_value.option("value", false);
        //         this._componentInstanceModel.components.list_enum_values.option("items", []);
        //     }
        // }
        // // ==================================================================================================================== //
    }

}

export class HeaderComponents {
    "_componentInstanceModel" = {
        "components": {},
        "functions": {}
    }

    functionBtnSaveClicked;

    constructor() {
        this._componentInstanceModel.components.text_header_version = (
            $('#text_header_version').dxTextBox({
                /* Default Value: '' */
                label: "Versão",
                labelMode: "static"
            }).dxTextBox("instance")
        );

        this._componentInstanceModel.components.text_header_id = (
            $('#text_header_id').dxTextBox({
                /* Default Value: '' */
                label: "ID",
                labelMode: "static"
            }).dxTextBox("instance")
        );

        this._componentInstanceModel.components.button_header_save_new_version = (
            $('#button_header_save_new_version').dxButton({
                stylingMode: 'contained',
                text: 'Salvar em nova versão',
                type: 'success',
                onClick: (event) => {
                    this.functionBtnSaveClicked(event)
                }
                // onClick(event) {
                //     this.
                //     DevExpress.ui.notify('The Contained button was clicked', 'error');
                // },
            }).dxButton("instance")
        );

        this._componentInstanceModel.components.button_header_select_version = (
            $('#button_header_select_version').dxButton({
                stylingMode: 'contained',
                text: 'Selecionar versão',
                type: 'default',
                onClick() {
                    DevExpress.ui.notify('The Contained button was clicked');
                },
            }).dxButton("instance")
        );
    }


}


