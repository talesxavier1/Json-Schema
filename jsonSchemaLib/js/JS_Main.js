import { BaseNodeValueModel } from "./BaseModels.js";
import { ConfigComponents, HeaderComponents, ViewComponents } from "./JSComponents.js";
import { LOCAL_DATA } from "./LocalData.js";




const main = () => {
    const configComponents = new ConfigComponents();
    const headerComponents = new HeaderComponents();
    const viewComponents = new ViewComponents();

    viewComponents.treeView.setItems(LOCAL_DATA);

    headerComponents.btnSaveNewVersionClicked = (() => {
        console.log(JSON.stringify(viewComponents.treeView._items));
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
