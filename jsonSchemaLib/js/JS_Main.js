import { BaseNodeValueModel } from "./BaseModels.js";
import { ConfigComponents, HeaderComponents, ViewComponents } from "./JSComponents.js";

import "../../lib/DevExtreme/Lib/js/dx.all.js";
import "../../lib/DevExtreme/Lib/js/localization/dx.messages.pt.js";

const main = async () => {
    const configComponents = new ConfigComponents();
    const headerComponents = new HeaderComponents();
    const viewComponents = new ViewComponents();

    window.setItems = (items, numeroVersao, id) => {
        headerComponents.setHeaderinfo({
            "id": id,
            "numeroVersao": numeroVersao
        });
        viewComponents.treeView.setItems(items);
    }

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

    headerComponents.setPopUpVersoesGetContent((() => {
        let windowFunction = window.popUpVersoesGetContent;
        if (!windowFunction) {
            throw new Error("[Erro] - [main] - Função 'popUpVersoesGetContent' não definido. modelo 'async (page, take) =>{ }'")
        }
        return windowFunction;
    })());

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

    viewComponents.treeView.onNodeClicked = ({ itemData }) => {
        configComponents.setNodeObject(Object.assign(new BaseNodeValueModel(), itemData.node_value), itemData.id, itemData.id_ref);
    };

    configComponents.onConfirmClick = ({ event, nodeId, nodeObject }) => {
        viewComponents.treeView.updateItem({ nodeId, nodeObject });
    }

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

    $(".dxScroll").dxScrollView({
        direction: 'vertical'
    });
    DevExpress.localization.locale(navigator.language);
};

$(() => {
    main();
});
