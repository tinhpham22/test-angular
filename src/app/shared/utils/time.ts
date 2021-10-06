import { formatDistance } from 'date-fns';
import { enUS } from 'date-fns/locale';

export const timeFromNowToString = (time: string) => {
  return formatDistance(new Date(time), new Date(), {
    locale: enUS,
    addSuffix: true,
  });
};