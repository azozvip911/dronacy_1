/*
 * JS for OrderStatus generated by Appery.io
 */

Apperyio.getProjectGUID = function() {
    return '770347d3-7fe8-4884-9371-b993aad1f7a6';
};

function navigateTo(outcome, useAjax) {
    Apperyio.navigateTo(outcome, useAjax);
}

function adjustContentHeight() {
    Apperyio.adjustContentHeightWithPadding();
}

function adjustContentHeightWithPadding(_page) {
    Apperyio.adjustContentHeightWithPadding(_page);
}

function setDetailContent(pageUrl) {
    Apperyio.setDetailContent(pageUrl);
}

Apperyio.AppPages = [{
    "name": "register",
    "location": "register.html"
}, {
    "name": "register_first_aid",
    "location": "register_first_aid.html"
}, {
    "name": "info",
    "location": "info.html"
}, {
    "name": "startScreen",
    "location": "startScreen.html"
}, {
    "name": "firstAidOrder",
    "location": "firstAidOrder.html"
}, {
    "name": "Medicine",
    "location": "Medicine.html"
}, {
    "name": "OrderStatus",
    "location": "OrderStatus.html"
}];

function OrderStatus_js() {

    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobilenavbar_2': 'OrderStatus_mobilenavbar_2',
        'orderstat_nav': 'OrderStatus_orderstat_nav',
        'help_nav': 'OrderStatus_help_nav',
        'googlemap_17': 'OrderStatus_googlemap_17',
        'marker_18': 'OrderStatus_marker_18',
        'mobileimage_16': 'OrderStatus_mobileimage_16',
        'mobilegrid_6': 'OrderStatus_mobilegrid_6',
        'mobilegridcell_7': 'OrderStatus_mobilegridcell_7',
        'mobilelabel_11': 'OrderStatus_mobilelabel_11',
        'mobilegridcell_8': 'OrderStatus_mobilegridcell_8',
        'order_no': 'OrderStatus_order_no',
        'mobilegridcell_9': 'OrderStatus_mobilegridcell_9',
        'mobilelabel_13': 'OrderStatus_mobilelabel_13',
        'mobilegridcell_10': 'OrderStatus_mobilegridcell_10',
        'mobilelabel_14': 'OrderStatus_mobilelabel_14'
    };

    if ("n2id" in window && window.n2id !== undefined) {
        $.extend(n2id, n2id_buf);
    } else {
        window.n2id = n2id_buf;
    }

    /*
     * Nonvisual components
     */

    Apperyio.mappings = Apperyio.mappings || {};

    Apperyio.datasources = Apperyio.datasources || {};

    Apperyio.CurrentScreen = 'OrderStatus';
    _.chain(Apperyio.mappings).filter(function(m) {
        return m.homeScreen === Apperyio.CurrentScreen;
    }).each(Apperyio.UIHandler.hideTemplateComponents);

    /*
     * Events and handlers
     */

    // On Load
    var OrderStatus_onLoad = function() {
            OrderStatus_elementsExtraJS();

            OrderStatus_deviceEvents();
            OrderStatus_windowEvents();
            OrderStatus_elementsEvents();
        };

    // screen window events


    function OrderStatus_windowEvents() {

        $('#OrderStatus').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });

    };

    // device events


    function OrderStatus_deviceEvents() {
        document.addEventListener("deviceready", function() {

        });
    };

    // screen elements extra js


    function OrderStatus_elementsExtraJS() {
        // screen (OrderStatus) extra code

        /* googlemap_17 */

        $("[name = 'googlemap_17']").wrap("<div/>");
        $("[name = 'googlemap_17']").parent().css("margin-left", $("[name = 'googlemap_17']").css("margin-left"));
        $("[name = 'googlemap_17']").parent().css("margin-right", $("[name = 'googlemap_17']").css("margin-right"));
        $("[name = 'googlemap_17']").css("margin-left", '0');
        $("[name = 'googlemap_17']").css("margin-right", '0');

        var googlemap_17_options = {
            markerSourceName: "googlemap_17_markers",
            latitude: "21.414582",
            longitude: "39.885446",
            address: "Mina mecca",
            zoom: 10,
            showLocationMarker: false
        }

        Apperyio.__registerComponent('googlemap_17', new Apperyio.ApperyMapComponent("googlemap_17", googlemap_17_options));
        $("[name='googlemap_17_markers'] [apperytype='marker']").attr("reRender", "googlemap_17");

        function __update_googlemap_17(event, ui) {
            if (($('#OrderStatus_googlemap_17', ui.toPage).length > 0) && (Apperyio('googlemap_17') != undefined) && (Apperyio('googlemap_17').isInitialized)) {
                Apperyio('googlemap_17').refresh();
            }
        }
        $(":mobile-pagecontainer").off("pagecontainershow.OrderStatus_mobilecontainer", __update_googlemap_17).on("pagecontainershow.OrderStatus_mobilecontainer", __update_googlemap_17);

    };

    // screen elements handler


    function OrderStatus_elementsEvents() {
        $(document).on("click", "a :input,a a,a fieldset label", function(event) {
            event.stopPropagation();
        });

    };

    $(document).off("pagebeforeshow", "#OrderStatus").on("pagebeforeshow", "#OrderStatus", function(event, ui) {
        Apperyio.CurrentScreen = "OrderStatus";
        _.chain(Apperyio.mappings).filter(function(m) {
            return m.homeScreen === Apperyio.CurrentScreen;
        }).each(Apperyio.UIHandler.hideTemplateComponents);
    });

    OrderStatus_onLoad();
};

$(document).off("pagecreate", "#OrderStatus").on("pagecreate", "#OrderStatus", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    OrderStatus_js();
});