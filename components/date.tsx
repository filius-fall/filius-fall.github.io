
import { parseISO, format } from 'date-fns';

export default function Date({ dateString }: { dateString: string }) {
  if (!dateString) {
    return null;
  }
  console.log('dateString', dateString);
  const date = new Date(dateString);
  console.log(typeof date, date);
  if (isNaN(date.getTime())) {
    return <time dateTime={dateString}>{dateString}</time>;
  }
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
}
