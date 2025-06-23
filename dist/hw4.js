"use strict";
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["Pending"] = "pending";
    OrderStatus["Shipped"] = "shipped";
    OrderStatus["Delivered"] = "delivered";
    OrderStatus["Cancelled"] = "cancelled";
})(OrderStatus || (OrderStatus = {}));
const OrderStatusLabels = {
    Pending: "Очікує обробки",
    Shipped: "Відправлено",
    Delivered: "Доставлено",
    Cancelled: "Скасовано",
};
function getLabelByKey(key) {
    return OrderStatusLabels[key];
}
console.log("🔑 Label for 'Shipped':", getLabelByKey("Shipped"));
