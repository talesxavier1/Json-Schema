import { BaseNodeValueModel } from "./BaseModels.js";
import { ConfigComponents, HeaderComponents, ViewComponents } from "./JSComponents.js";
import { JSON_SCHEMA_DATA, LOCAL_DATA } from "./LocalData.js";


const main = () => {
    const configComponents = new ConfigComponents();
    const headerComponents = new HeaderComponents();
    const viewComponents = new ViewComponents();

    viewComponents.treeView.setItems(LOCAL_DATA);
    viewComponents.jsonViewer.setJson(JSON_SCHEMA_DATA);

    viewComponents.onTabChanged = (itemData) => {

    }

    headerComponents.btnSaveNewVersionClicked = (() => {
        console.log(viewComponents.getCurrentTab());
        //console.log(JSON.stringify(viewComponents.treeView._items));
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
