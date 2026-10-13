const formatter = new Intl.DateTimeFormat("en", {
  dateStyle: "long",
  timeZone: "UTC",
});

export function formatDate(value: string) {
  return formatter.format(new Date(`${value}T00:00:00Z`));
}
