

export class BaseNodeModel {
    text_name = '';
    text_description = '';
    select_type = null;
    checkbox_required = false;
    checkbox_nullable = false;
    checkbox_additional_properties = false;
    select_array_type = null;
    checkbox_array_min_max = false;
    number_array_min = 0;
    number_array_max = 0;
    checkbox_array_unique_items = false;
    checkbox_string_regular_expression = false;
    text_string_regular_expression = '';
    checkbox_numeric_range = false;
    select_numeric_greater = null;
    number_numeric_greater = false;
    select_numeric_less = null;
    number_numeric_less = 0;
    text_enum_add_value = '';
    list_enum_values = []

    constructor() { }
}

