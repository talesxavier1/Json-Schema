import { ConfigComponents, HeaderComponents, TreeViewComponents } from "./JSComponents.js";
import { LOCAL_DATA } from "./LocalData.js";




const main = () => {
    const configComponents = new ConfigComponents();
    const headerComponents = new HeaderComponents();
    const treeViewComponents = new TreeViewComponents();

    treeViewComponents.setItems(LOCAL_DATA);
    treeViewComponents.onNodeClicked = (event) => {
        debugger;
    }

};

$(() => {
    main();
});
