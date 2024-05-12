export default function getFormattedDate(dateString: string): string {
  return new Intl.DateTimeFormat('id-ID', { dateStyle: 'long' }).format(
    new Date(dateString),
  );
}
