import { BaseNodeValueModel } from "./BaseModels.js";
import { ConfigComponents, HeaderComponents, ViewComponents } from "./JSComponents.js";
import { JSON_SCHEMA_DATA, LOCAL_DATA } from "./LocalData.js";

const main = () => {
    const configComponents = new ConfigComponents();
    const headerComponents = new HeaderComponents();
    const viewComponents = new ViewComponents();

    let viewCurrentTab = viewComponents.getCurrentTab();
    if (viewCurrentTab.id == "treeView") {
        viewComponents.treeView.setItems(LOCAL_DATA);
    } else if (viewCurrentTab.id == "jsonRendererContainer") {
        viewComponents.jsonViewer.setJson(JSON_SCHEMA_DATA);
    }

    viewComponents.onTabChanged = (itemData) => {
        if (itemData.id == "treeView") {
            viewComponents.jsonViewer.setJson({});
            viewComponents.treeView.setItems(LOCAL_DATA);
        } else if (itemData.id == "jsonRendererContainer") {
            viewComponents.jsonViewer.setJson(JSON_SCHEMA_DATA);
            viewComponents.treeView.setItems([]);
        }
    }

    headerComponents.btnSaveNewVersionClicked = (() => {

    });

    viewComponents.treeView.onNodeClicked = ({ itemData }) => {
        configComponents.setNodeObject(Object.assign(new BaseNodeValueModel(), itemData.node_value), itemData.id);
    };

    configComponents.onConfirmClick = ({ event, nodeId, nodeObject }) => {
        viewComponents.treeView.updateItem({ nodeId, nodeObject });
    }

};

$(() => {
    main();
});
