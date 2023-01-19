export function formatDate(createdAt: number) {
  const date = new Date(createdAt);

  return new Intl.DateTimeFormat('pt-br', {
    dateStyle: 'short',
  }).format(date);
}
