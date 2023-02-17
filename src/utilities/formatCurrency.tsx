const CURRENCY_FORMATTER = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  currencySign: "accounting",
});

export function formatCurrency(number: number) {
  return CURRENCY_FORMATTER.format(number);
}
