import { BaseNodeValueModel } from "./BaseModels.js";
import { ConfigComponents, HeaderComponents, ViewComponents } from "./JSComponents.js";

import "../../lib/DevExtreme/Lib/js/dx.all.js";
import "../../lib/DevExtreme/Lib/js/localization/dx.messages.pt.js";

const main = async () => {
    const configComponents = new ConfigComponents();
    const headerComponents = new HeaderComponents();
    const viewComponents = new ViewComponents();

    viewComponents.treeView.setItems([]);

    headerComponents.btnSaveNewVersionClicked = (() => {
        console.log(viewComponents.treeView.getItems());
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
