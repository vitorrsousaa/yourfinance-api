import { TB } from '../types';

export function ManipulateModalities(obj: TB) {
  const returnModalitiesForPeriod = obj;

  delete returnModalitiesForPeriod[0]?.added;
  delete returnModalitiesForPeriod[3]?.added;
  delete returnModalitiesForPeriod[6]?.added;
  delete returnModalitiesForPeriod[12]?.added;

  returnModalitiesForPeriod[3]?.modality.sort((a, b) =>
    a.amount > b.amount ? -1 : 1
  );
  returnModalitiesForPeriod[6]?.modality.sort((a, b) =>
    a.amount > b.amount ? -1 : 1
  );
  returnModalitiesForPeriod[12]?.modality.sort((a, b) =>
    a.amount > b.amount ? -1 : 1
  );

  returnModalitiesForPeriod[3]?.modality.slice(0, 5);
  returnModalitiesForPeriod[6]?.modality.slice(0, 5);
  returnModalitiesForPeriod[12]?.modality.slice(0, 5);

  return returnModalitiesForPeriod;
}
