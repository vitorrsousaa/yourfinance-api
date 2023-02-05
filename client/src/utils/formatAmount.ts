export default function formatAmount(amount: number) {
  return new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
  }).format(amount);
}
