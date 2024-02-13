import { GUID } from "./guid.js";

/**
 * Classe base dos nodes.
 * @class
 */
export class BaseNodeModel {
    /**
     * Id do node.
     * @type {string}
     */
    id;

    /**
     * Id de referência do node com o seu node pai.
     * @type {string}
     */
    id_ref = "";

    /**
     * Nome do node. Campo que é exibido no treeview.
     * @type {string}
     */
    text = "";

    /**
     * Define se o node pode ser expandido ou não.
     * @type {boolean}
     */
    expanded = false;

    /**
     * Define se o node irá possuir botão de adicionar node filho no seu contextMenu.
     * @type {boolean}
     */
    contextAddBtn = false;

    /**
     * Define se o node irá possuir botão de remover node filho no seu contextMenu.
     * @type {boolean}
     */
    contextRemoveBtn = true;

    /**
     * Definições do node.
     * @type {BaseNodeValueModel}
     */
    node_value;

    /**
     * @constructor
     * @param {string | null} id_ref Id de referência do node pai.
     * @description {id} Campo recebe um guid. 
     * @description {node_value} Campo recebe uma instancia de BaseNodeValueModel.
     *  
    */
    constructor(id_ref) {
        this.id = GUID.getGUID();
        this.node_value = new BaseNodeValueModel();
        this.id_ref = id_ref ? id_ref : "";
    }
}

export class BaseNodeValueModel {

    /**
     * Nome interno do campo. é usado como key na montagem do jsonSchema.
     * @requires
     * @type {string}
     */
    text_name = '';

    /**
     * Descrição do campo. Pode ser um nome ou uma frase. campo que é exibido no nodeTree.
     * @requires
     * @type {string}
     */
    text_description = '';

    /**
     * Tipo do campo.
     * @type {string}
     * 
     */
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