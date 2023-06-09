import periods from '../constants/periods';
import { TB } from '../types';

export function ManipulateModalities(obj: TB) {
  const returnModalitiesForPeriod = obj;

  periods.forEach((month) => delete returnModalitiesForPeriod[month]?.added);

  periods.forEach((month) =>
    returnModalitiesForPeriod[month]?.modality.sort((a, b) =>
      a.amount > b.amount ? -1 : 1
    )
  );

  periods.forEach((month) => {
    const modalities = returnModalitiesForPeriod[month]?.modality;
    if (modalities && modalities.length > 0) {
      returnModalitiesForPeriod[month].modality = modalities.slice(0, 5);
    }
  });

  periods.forEach((month) => {
    const modalities = returnModalitiesForPeriod[month]?.modality;
    const removedCategoryId = modalities?.map((modality) => {
      const { amount, id, name } = modality;

      return { amount, id, name };
    });

    returnModalitiesForPeriod[month].modality = removedCategoryId;
  });

  return returnModalitiesForPeriod;
}
