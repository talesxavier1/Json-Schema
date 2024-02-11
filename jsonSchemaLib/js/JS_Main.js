import { BaseNodeValueModel } from "./BaseModels.js";
import { ConfigComponents, HeaderComponents, TreeViewComponents } from "./JSComponents.js";
import { LOCAL_DATA } from "./LocalData.js";




const main = () => {
    const configComponents = new ConfigComponents();
    const headerComponents = new HeaderComponents();
    const treeViewComponents = new TreeViewComponents();

    treeViewComponents.setItems(LOCAL_DATA);

    treeViewComponents.onNodeClicked = ({ itemData }) => {
        configComponents.setNodeObject(Object.assign(new BaseNodeValueModel(), itemData.node_value), itemData.id);
    };

    configComponents.onConfirmClick = ({ event, nodeId, nodeObject }) => {
        treeViewComponents.updateItem({ nodeId, nodeObject });
    }

};

$(() => {
    main();
});
