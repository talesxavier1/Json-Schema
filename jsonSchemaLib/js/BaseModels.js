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
        this.id_ref = id_ref ? id_ref : null;
    }
}


export class BaseNodeValueModel {
    /**
    * ** A Ordem de declaração dos componentes do objeto inpacta nas regras de visualização dos componentes.
    * ** EXEMPLO: se um campo do tipo Text estiver declarado antes de um checkBox que ativa a sua edição, o devExtreme não altera do valor da instância e o campo Text fica vazio.
    */

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
     * @type {("string"|"number"|"integer"|"object"|"array"|"boolean"|"enum")}
     */
    select_type = null;

    /**
     * Indica se campo é obrigatório.
     * @type {boolean}
     */
    checkbox_required = false;

    /**
     * Indica se campo pode ser nulo.
     * @type {boolean}
     */
    checkbox_nullable = false;

    /**
     * Indica se campo pode ter elementos adicionais.
     * @type {boolean}
     */
    checkbox_additional_properties = false;

    /**
     * Tipo tipo dos itens do array.
     * @type {("string"|"number"|"integer"|"object"|"array"|"boolean"|"enum")}
     */
    select_array_type = null;

    /**
     * Indica se campo array tem quantidade minima ou máxima de itens.
     * @type {boolean}
     */
    checkbox_array_min_max = false;

    /**
     * Quantidade mínima de itens no array.
     * @type {number}
     */
    number_array_min = 0;

    /**
     * Quantidade máxima de itens no array.
     * @type {number}
     */
    number_array_max = 0;

    /**
     * Indica se array deve ter somente itens únicos.
     * @type {boolean}
     */
    checkbox_array_unique_items = false;

    /**
     * Indica se campo do tipo texto tem expressão regular para validação. 
     * @type {boolean}
     */
    checkbox_string_regular_expression = false;

    //TODO documentar
    checkbox_string_format = false;

    //TODO documentar
    select_string_format = null;

    //TODO documentar
    checkbox_string_length_greater = false;

    //TODO documentar
    number_string_length_greater = 0;

    //TODO documentar
    checkbox_string_length_less = false;

    //TODO documentar
    number_string_length_less = 0;

    /**
     * Expresão regular. 
     * @type {string}
     */
    text_string_regular_expression = '';

    /**
     * Condição do range maior que. 
     * @type {(null | "maior_que" | "maior_ou_igual")}
     */
    select_numeric_greater = null;

    /**
     * Valor para maior que.
     * @type {number}
     */
    number_numeric_greater = 0;

    /**
     * Condição do range meor que. 
     * @type {(null | "menor_que" | "menor_ou_igual")}
     */
    select_numeric_less = null;

    /**
     * Valor para menor que.
     * @type {number}
     */
    number_numeric_less = 0;

    //TODO Documentar
    checkbox_numeric_multiple = false;

    //TODO documentar
    number_numeric_multiple = 0;

    /**
     * Lista de valores para campo do tipo enum.
     * @type {Array<string>}
     */
    list_enum_values = [];

    //TODO documentar
    checkbox_object_pattern_keys = false;

    //TODO documentar
    text_object_pattern_keys = "";


    constructor() { }
}

