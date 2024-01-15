import { BaseNodeModel, TreeItemPropsModel } from "./BaseModels.js";
import { ConfigComponents, HeaderComponents, TreeViewComponents } from "./JSComponents.js";
import { products } from "./LocalData.js";

const valueTeste = [
    new TreeItemPropsModel({
        tagName: "teste_01",
        name: "TESTE 01",
        icon: "",
        value: new BaseNodeModel({
            "text_name": "Teste",
            "text_description": "Teste desc",
            "select_type": "enum",
            "checkbox_required": true,
            "checkbox_nullable": true,
            "checkbox_additional_properties": true,
            "select_array_type": null,
            "checkbox_array_min_max": false,
            "number_array_min": 0,
            "number_array_max": 0,
            "checkbox_array_unique_items": false,
            "checkbox_string_regular_expression": false,
            "text_string_regular_expression": "",
            "checkbox_numeric_range": false,
            "select_numeric_greater": null,
            "number_numeric_greater": 0,
            "select_numeric_less": null,
            "number_numeric_less": 0,
            "text_enum_add_value": "",
            "list_enum_values": [
                "11",
                "22",
                "33",
                "44"
            ]
        }),
        expanded: true,
        childrens: [
            new TreeItemPropsModel({
                tagName: "teste_02",
                name: "TESTE 02",
                icon: "",
                value: new BaseNodeModel({
                    "text_name": "Teste",
                    "text_description": "Teste desc",
                    "select_type": "enum",
                    "checkbox_required": true,
                    "checkbox_nullable": true,
                    "checkbox_additional_properties": true,
                    "select_array_type": null,
                    "checkbox_array_min_max": false,
                    "number_array_min": 0,
                    "number_array_max": 0,
                    "checkbox_array_unique_items": false,
                    "checkbox_string_regular_expression": false,
                    "text_string_regular_expression": "",
                    "checkbox_numeric_range": false,
                    "select_numeric_greater": null,
                    "number_numeric_greater": 0,
                    "select_numeric_less": null,
                    "number_numeric_less": 0,
                    "text_enum_add_value": "",
                    "list_enum_values": [
                        "11",
                        "22",
                        "33",
                        "44"
                    ]
                }),
                expanded: true,
                childrens: []
            }),
            new TreeItemPropsModel({
                tagName: "teste_03",
                name: "TESTE 03",
                icon: "",
                value: new BaseNodeModel({
                    "text_name": "Teste",
                    "text_description": "Teste desc",
                    "select_type": "enum",
                    "checkbox_required": true,
                    "checkbox_nullable": true,
                    "checkbox_additional_properties": true,
                    "select_array_type": null,
                    "checkbox_array_min_max": false,
                    "number_array_min": 0,
                    "number_array_max": 0,
                    "checkbox_array_unique_items": false,
                    "checkbox_string_regular_expression": false,
                    "text_string_regular_expression": "",
                    "checkbox_numeric_range": false,
                    "select_numeric_greater": null,
                    "number_numeric_greater": 0,
                    "select_numeric_less": null,
                    "number_numeric_less": 0,
                    "text_enum_add_value": "",
                    "list_enum_values": [
                        "11",
                        "22",
                        "33",
                        "44"
                    ]
                }),
                expanded: true,
                childrens: []
            }),
            new TreeItemPropsModel({
                tagName: "teste_04",
                name: "TESTE 04",
                icon: "",
                value: new BaseNodeModel({
                    "text_name": "Teste",
                    "text_description": "Teste desc",
                    "select_type": "enum",
                    "checkbox_required": true,
                    "checkbox_nullable": true,
                    "checkbox_additional_properties": true,
                    "select_array_type": null,
                    "checkbox_array_min_max": false,
                    "number_array_min": 0,
                    "number_array_max": 0,
                    "checkbox_array_unique_items": false,
                    "checkbox_string_regular_expression": false,
                    "text_string_regular_expression": "",
                    "checkbox_numeric_range": false,
                    "select_numeric_greater": null,
                    "number_numeric_greater": 0,
                    "select_numeric_less": null,
                    "number_numeric_less": 0,
                    "text_enum_add_value": "",
                    "list_enum_values": [
                        "11",
                        "22",
                        "33",
                        "44"
                    ]
                }),
                expanded: true,
                childrens: []
            })
        ]
    }),
    new TreeItemPropsModel({
        tagName: "teste_05",
        name: "TESTE 05",
        icon: "",
        value: new BaseNodeModel({
            "text_name": "Teste",
            "text_description": "Teste desc",
            "select_type": "enum",
            "checkbox_required": true,
            "checkbox_nullable": true,
            "checkbox_additional_properties": true,
            "select_array_type": null,
            "checkbox_array_min_max": false,
            "number_array_min": 0,
            "number_array_max": 0,
            "checkbox_array_unique_items": false,
            "checkbox_string_regular_expression": false,
            "text_string_regular_expression": "",
            "checkbox_numeric_range": false,
            "select_numeric_greater": null,
            "number_numeric_greater": 0,
            "select_numeric_less": null,
            "number_numeric_less": 0,
            "text_enum_add_value": "",
            "list_enum_values": [
                "11",
                "22",
                "33",
                "44"
            ]
        }),
        expanded: true,
        childrens: [
            new TreeItemPropsModel({
                tagName: "teste_06",
                name: "TESTE 06",
                icon: "",
                value: new BaseNodeModel({
                    "text_name": "Teste",
                    "text_description": "Teste desc",
                    "select_type": "enum",
                    "checkbox_required": true,
                    "checkbox_nullable": true,
                    "checkbox_additional_properties": true,
                    "select_array_type": null,
                    "checkbox_array_min_max": false,
                    "number_array_min": 0,
                    "number_array_max": 0,
                    "checkbox_array_unique_items": false,
                    "checkbox_string_regular_expression": false,
                    "text_string_regular_expression": "",
                    "checkbox_numeric_range": false,
                    "select_numeric_greater": null,
                    "number_numeric_greater": 0,
                    "select_numeric_less": null,
                    "number_numeric_less": 0,
                    "text_enum_add_value": "",
                    "list_enum_values": [
                        "11",
                        "22",
                        "33",
                        "44"
                    ]
                }),
                expanded: true,
                childrens: []
            }),
            new TreeItemPropsModel({
                tagName: "teste_07",
                name: "TESTE 07",
                icon: "",
                value: new BaseNodeModel({
                    "text_name": "Teste",
                    "text_description": "Teste desc",
                    "select_type": "enum",
                    "checkbox_required": true,
                    "checkbox_nullable": true,
                    "checkbox_additional_properties": true,
                    "select_array_type": null,
                    "checkbox_array_min_max": false,
                    "number_array_min": 0,
                    "number_array_max": 0,
                    "checkbox_array_unique_items": false,
                    "checkbox_string_regular_expression": false,
                    "text_string_regular_expression": "",
                    "checkbox_numeric_range": false,
                    "select_numeric_greater": null,
                    "number_numeric_greater": 0,
                    "select_numeric_less": null,
                    "number_numeric_less": 0,
                    "text_enum_add_value": "",
                    "list_enum_values": [
                        "11",
                        "22",
                        "33",
                        "44"
                    ]
                }),
                expanded: true,
                childrens: []
            }),
            new TreeItemPropsModel({
                tagName: "teste_08",
                name: "TESTE 08",
                icon: "",
                value: new BaseNodeModel({
                    "text_name": "Teste",
                    "text_description": "Teste desc",
                    "select_type": "enum",
                    "checkbox_required": true,
                    "checkbox_nullable": true,
                    "checkbox_additional_properties": true,
                    "select_array_type": null,
                    "checkbox_array_min_max": false,
                    "number_array_min": 0,
                    "number_array_max": 0,
                    "checkbox_array_unique_items": false,
                    "checkbox_string_regular_expression": false,
                    "text_string_regular_expression": "",
                    "checkbox_numeric_range": false,
                    "select_numeric_greater": null,
                    "number_numeric_greater": 0,
                    "select_numeric_less": null,
                    "number_numeric_less": 0,
                    "text_enum_add_value": "",
                    "list_enum_values": [
                        "11",
                        "22",
                        "33",
                        "44"
                    ]
                }),
                expanded: true,
                childrens: []
            })
        ]
    })
];

const main = () => {
    const configComponents = new ConfigComponents();
    const headerComponents = new HeaderComponents();
    const treeViewComponents = new TreeViewComponents();

    treeViewComponents.setItems(valueTeste);
};

$(() => {
    main();
});
