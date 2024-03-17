import { BaseNodeValueModel } from "./BaseModels.js";
import { ConfigComponents, HeaderComponents, ViewComponents } from "./JSComponents.js";
import { JSON_SCHEMA_DATA, LOCAL_DATA } from "./LocalData.js";

import "../../lib/DevExtreme/Lib/js/dx.all.js";
import "../../lib/DevExtreme/Lib/js/localization/dx.messages.pt.js";

const main = () => {
    const configComponents = new ConfigComponents();
    const headerComponents = new HeaderComponents();
    const viewComponents = new ViewComponents();

    viewComponents.treeView.setItems(LOCAL_DATA);

    viewComponents.onTabChanged = (itemData) => {
        if (itemData.id == "treeView") {
            viewComponents.treeView.setItems(LOCAL_DATA);
        } else if (itemData.id == "jsonRendererContainer") {
            viewComponents.jsonViewer.setJson(JSON_SCHEMA_DATA);
        }
    }

    headerComponents.btnSaveNewVersionClicked = (() => {
        let a = viewComponents.treeView._componentInstanceModel.getInstanceProps("treeView")._instance.getNodes();
        debugger;
    });

    viewComponents.treeView.onNodeClicked = ({ itemData }) => {
        configComponents.setNodeObject(Object.assign(new BaseNodeValueModel(), itemData.node_value), itemData.id);
    };

    configComponents.onConfirmClick = ({ event, nodeId, nodeObject }) => {
        viewComponents.treeView.updateItem({ nodeId, nodeObject });
    }


    $(".scroll").dxScrollView({
        direction: 'vertical'
    });
    DevExpress.localization.locale(navigator.language);
};

$(() => {
    main();
});
