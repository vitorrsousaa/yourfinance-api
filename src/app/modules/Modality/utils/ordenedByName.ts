import { TModality } from '../../../entities/modality/TModality';

export default function ordenedByName(
  modalities: TModality[] | null
): TModality[] | null {
  if (!modalities) {
    return null;
  }

  const modalitiesOrdened = modalities.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    }

    return -1;
  });

  return modalitiesOrdened;
}
