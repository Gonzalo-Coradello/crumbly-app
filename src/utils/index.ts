export const transformUnit = (unit: string, quantity: number) => {
  return quantity > 1 ? (unit === 'unidad' ? unit + 'es' : unit + 's') : unit
}

export const transformQuantity = (quantity: number) => {
  return quantity === 0.5 ? '1/2' : quantity === 0.25 ? '1/4' : quantity === 0.3 ? '1/3' : quantity
}
