enum OrderStatus {
  Pending = "pending",
  Shipped = "shipped",
  Delivered = "delivered",
  Cancelled = "cancelled",
}

const OrderStatusLabels: Record<OrderStatus, string> = {
  [OrderStatus.Pending]: "Очікує обробки",
  [OrderStatus.Shipped]: "Відправлено",
  [OrderStatus.Delivered]: "Доставлено",
  [OrderStatus.Cancelled]: "Скасовано",
};

function getStatusLabel(status: OrderStatus): string {
  return OrderStatusLabels[status];
}

console.log(getStatusLabel(OrderStatus.Shipped));