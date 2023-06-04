import { parseISO, format } from 'date-fns';
import { tr } from 'date-fns/locale'

export default function Date({ dateString }) {
  const date = parseISO(dateString);
  return <time className='text-gray-400' dateTime={dateString}>{format(date, 'd MMMM yyyy', {locale: tr})}</time>;
}