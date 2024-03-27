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

    headerComponents.btnSaveNewVersionClicked = (() => {

    });

    headerComponents.getVersions = async (page, take) => {
        const url = new URL('https://6155b9d4c06a340017b292ad.mockapi.io/api/v1/versions');
        url.searchParams.append('page', page);
        url.searchParams.append('limit', take);

        await new Promise((resolve) => {
            setTimeout(function () {
                resolve();
            }, 3000);
        })

        let result;
        await $.ajax({
            url: url,
            method: "GET",
            success: function (response) {
                result = response;
            },
            error: function (xhr, status, error) {
                debugger
            }
        });
        return result;
    }

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
