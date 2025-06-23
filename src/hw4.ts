
enum OrderStatus {
  Pending = "pending",
  Shipped = "shipped",
  Delivered = "delivered",
  Cancelled = "cancelled",
}


const OrderStatusLabels: Record<keyof typeof OrderStatus, string> = {
  Pending: "Очікує обробки",
  Shipped: "Відправлено",
  Delivered: "Доставлено",
  Cancelled: "Скасовано",
};


function getLabelByKey(key: keyof typeof OrderStatus): string {
  return OrderStatusLabels[key];
}

console.log("🔑 Label for 'Shipped':", getLabelByKey("Shipped"));
