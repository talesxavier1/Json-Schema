import { BaseNodeValueModel } from "./BaseModels.js";
import { ConfigComponents, HeaderComponents, ViewComponents } from "./JSComponents.js";

import "../../lib/DevExtreme/Lib/js/dx.all.js";
import "../../lib/DevExtreme/Lib/js/localization/dx.messages.pt.js";

const main = async () => {
    //TODO documentar
    const configComponents = new ConfigComponents();

    //TODO documentar
    const headerComponents = new HeaderComponents();

    //TODO documentar
    const viewComponents = new ViewComponents();

    //TODO documentar
    window.setItems = (items, numeroVersao, id) => {
        headerComponents.setHeaderinfo({
            "id": id,
            "numeroVersao": numeroVersao
        });
        viewComponents.treeView.setItems(items);
    }

    //TODO documentar
    headerComponents.btnSaveNewVersionClicked = (async () => {
        let functionParam = (() => {
            let func = window.onBtnSaveClick;
            if (!func) {
                console.warn("[AVISO] -  [MAIN] Função onBtnSaveClick não fornecida.");
            } else {
                return func;
            }
            return async () => { }
        })();
        //TODO validar antes de chamar a função.

        let builtJsonSchema = viewComponents.treeView.buildJsonSchema();
        let treeContent = viewComponents.treeView.getItems();
        await functionParam({
            "id": builtJsonSchema["$id"],
            "jsonSchema": builtJsonSchema,
            "treeContent": treeContent
        })
    });

    //TODO documentar
    headerComponents.setPopUpVersoesGetContent((() => {
        let windowFunction = window.popUpVersoesGetContent;
        if (!windowFunction) {
            throw new Error("[Erro] - [main] - Função 'popUpVersoesGetContent' não definido. modelo 'async (page, take) =>{ }'")
        }
        return windowFunction;
    })());

    //TODO documentar
    headerComponents.setOnPopUpVersionClick(async (id) => {
        let windowFunction = window.popUpGetJsonContent;
        if (!windowFunction) {
            throw new Error("[Erro] - [main] - Função 'popUpGetJsonContent' não definido. modelo 'async (id) =>{ }'")
        }
        let result = await windowFunction(id);
        headerComponents.setHeaderinfo({
            "id": result.id,
            "numeroVersao": result.numeroVersao
        });
        viewComponents.treeView.setItems(result.treeContent);
        viewComponents.jsonViewer.setJson(viewComponents.treeView.buildJsonSchema());
        configComponents.clearConfigs();
        configComponents.enabledConfigs(false);
    });

    //TODO documentar
    viewComponents.treeView.onNodeClicked = ({ itemData }) => {
        configComponents.setNodeObject(Object.assign(new BaseNodeValueModel(), itemData.node_value), itemData.id, itemData.id_ref);
    };

    //TODO documentar
    configComponents.onConfirmClick = ({ event, nodeId, nodeObject }) => {
        viewComponents.treeView.updateItem({ nodeId, nodeObject });
    }

    //TODO documentar
    viewComponents.onTabChanged = (dataSource) => {
        if (dataSource.id == "jsonRendererContainer") {
            configComponents.hideShowConfigs(false);
            configComponents.clearConfigs();
            configComponents.enabledConfigs(false);
            viewComponents.jsonViewer.setJson(viewComponents.treeView.buildJsonSchema());
            return;
        }

        if (dataSource.id == "treeView") {
            configComponents.hideShowConfigs(true);

            return;
        }
    }

    //TODO documentar
    $(".dxScroll").dxScrollView({
        direction: 'vertical'
    });

    //TODO documentar
    DevExpress.localization.locale(navigator.language);
};

$(() => {
    main();
});
