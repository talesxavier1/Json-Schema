import { BaseNodeValueModel } from "./BaseModels.js";
import { ConfigComponents, HeaderComponents, ViewComponents } from "./JSComponents.js";
import { LOCAL_DATA } from "./LocalData.js";

import "../../lib/DevExtreme/Lib/js/dx.all.js";
import "../../lib/DevExtreme/Lib/js/localization/dx.messages.pt.js";

const main = () => {
    const configComponents = new ConfigComponents();
    const headerComponents = new HeaderComponents();
    const viewComponents = new ViewComponents();

    viewComponents.treeView.setItems(LOCAL_DATA);
    viewComponents.jsonViewer.setJson(viewComponents.treeView.buildJsonSchema());

    headerComponents.btnSaveNewVersionClicked = (() => {

    });

    viewComponents.treeView.onNodeClicked = ({ itemData }) => {
        configComponents.setNodeObject(Object.assign(new BaseNodeValueModel(), itemData.node_value), itemData.id, itemData.id_ref);
    };

    configComponents.onConfirmClick = ({ event, nodeId, nodeObject }) => {
        viewComponents.treeView.updateItem({ nodeId, nodeObject });
        viewComponents.jsonViewer.setJson(viewComponents.treeView.buildJsonSchema());
    }

    viewComponents.onTabChanged = (dataSource) => {
        if (dataSource.id == "jsonRendererContainer") {
            configComponents.hideShowConfigs(false);
            configComponents.clearConfigs();
            configComponents.enabledConfigs(false);
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
