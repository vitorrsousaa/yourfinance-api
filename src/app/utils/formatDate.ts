export function addTimeZone(date: string) {
  const formatedDate = new Date(date);
  const timezoneOffset = formatedDate.getTimezoneOffset() * 60 * 1000;
  const localDate = new Date(formatedDate.getTime() + timezoneOffset);

  return localDate;
}
