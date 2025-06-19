"use strict";
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["Pending"] = "pending";
    OrderStatus["Shipped"] = "shipped";
    OrderStatus["Delivered"] = "delivered";
    OrderStatus["Cancelled"] = "cancelled";
})(OrderStatus || (OrderStatus = {}));
const OrderStatusLabels = {
    [OrderStatus.Pending]: "Очікує обробки",
    [OrderStatus.Shipped]: "Відправлено",
    [OrderStatus.Delivered]: "Доставлено",
    [OrderStatus.Cancelled]: "Скасовано",
};
function getStatusLabel(status) {
    return OrderStatusLabels[status];
}
console.log(getStatusLabel(OrderStatus.Shipped));
