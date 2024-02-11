import { GUID } from "./guid.js";

const defaultObject = [
    {
        "text_name": "",
        "text_description": "",
        "select_type": null,
        "checkbox_required": false,
        "checkbox_nullable": false,
        "checkbox_additional_properties": false,
        "select_array_type": null,
        "checkbox_array_min_max": false,
        "number_array_min": 0,
        "number_array_max": 0,
        "checkbox_array_unique_items": false,
        "checkbox_string_regular_expression": false,
        "text_string_regular_expression": "",
        "checkbox_numeric_range": false,
        "select_numeric_greater": null,
        "number_numeric_greater": false,
        "select_numeric_less": null,
        "number_numeric_less": 0,
        "text_enum_add_value": "",
        "list_enum_values": [],
        "childItems": []
    }
]

export const LOCAL_DATA = [];

// ====================================  obj 1 ==================================== //
let guid_obj1 = GUID.getGUID();
LOCAL_DATA.push({
    id: guid_obj1,
    id_ref: null,
    text: "Endereço",
    expanded: true,
    contextAddBtn: true,
    contextRemoveBtn: true,
    node_value: {
        "text_name": "endereco",
        "text_description": "Endereço",
        "select_type": "object",
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
    }
});

LOCAL_DATA.push({
    id: GUID.getGUID(),
    id_ref: guid_obj1,
    text: "Rua",
    expanded: false,
    contextAddBtn: false,
    contextRemoveBtn: true,
    node_value: {
        "text_name": "rua",
        "text_description": "Rua",
        "select_type": "string",
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
    }

});

LOCAL_DATA.push({
    id: GUID.getGUID(),
    id_ref: guid_obj1,
    text: "Número",
    expanded: false,
    contextAddBtn: false,
    contextRemoveBtn: true,
    node_value: {
        "text_name": "numero",
        "text_description": "Número",
        "select_type": "integer",
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
    }
});

LOCAL_DATA.push({
    id: GUID.getGUID(),
    id_ref: guid_obj1,
    text: "Bairro",
    expanded: false,
    contextAddBtn: false,
    contextRemoveBtn: true,
    node_value: {
        "text_name": "bairro",
        "text_description": "Bairro",
        "select_type": "string",
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
    }
});

let idTelefones = GUID.getGUID()
LOCAL_DATA.push({
    id: idTelefones,
    id_ref: guid_obj1,
    text: "Telefones",
    expanded: true,
    contextAddBtn: true,
    contextRemoveBtn: true,
    node_value: {
        "text_name": "telefones",
        "text_description": "Telefones",
        "select_type": "array",
        "checkbox_required": true,
        "checkbox_nullable": true,
        "checkbox_additional_properties": true,
        "select_array_type": "object",
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
    }
});

let idObj2 = GUID.getGUID();
LOCAL_DATA.push({
    id: idObj2,
    id_ref: idTelefones,
    text: "ARRAY ELEMENT",
    expanded: true,
    contextAddBtn: true,
    contextRemoveBtn: true,
    node_value: {
        "text_name": "ARRAY_ELEMENT",
        "text_description": "ARRAY_ELEMENT",
        "select_type": "object",
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
    }
});

LOCAL_DATA.push({
    id: GUID.getGUID(),
    id_ref: idObj2,
    text: "Telefone 1",
    expanded: false,
    contextAddBtn: false,
    contextRemoveBtn: true,
    node_value: {
        "text_name": "telefone_1",
        "text_description": "Telefone 1",
        "select_type": "string",
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
    }
});

LOCAL_DATA.push({
    id: GUID.getGUID(),
    id_ref: idObj2,
    text: "Telefone 2",
    expanded: false,
    contextAddBtn: true,
    contextRemoveBtn: true,
    node_value: {
        "text_name": "telefone_2",
        "text_description": "Telefone 2",
        "select_type": "string",
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
    }
});

LOCAL_DATA.push({
    id: GUID.getGUID(),
    id_ref: idObj2,
    text: "Telefone 3",
    expanded: false,
    contextAddBtn: true,
    contextRemoveBtn: true,
    node_value: {
        "text_name": "telefone_3",
        "text_description": "Telefone 3",
        "select_type": "string",
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
    }
});






