export function formatPrice(price: number) {
  var options = { style: "currency", currency: "RUB" };
  var formatter = new Intl.NumberFormat("ru-RU", options);
  return formatter.format(price);
}
