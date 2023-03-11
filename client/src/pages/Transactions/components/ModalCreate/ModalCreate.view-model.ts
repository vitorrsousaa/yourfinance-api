import { BaseSyntheticEvent, useMemo, useState } from 'react';

import useErrors from '../../../../hooks/useErrors';

import { Modality } from '../../../../types/Modality';

type TypeProps = 'Fixo' | 'Variável';

type Category = 'Receitas' | 'Despesas';

export function ModalCreateViewModel() {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState('');
  const [category, setCategory] = useState<Category>('' as Category);
  const [type, setType] = useState<TypeProps>('Fixo');
  const [selectedModality, setSelectedModality] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const selectCategories = ['Despesas', 'Receitas'];
  const selectTypes = ['Fixo', 'Variável'];
  const [modalities, setModalities] = useState<Modality[]>([]);

  const {
    errors,
    getErrorMessageByFieldName,
    removeError,
    setError,
    handleRemoveAllErrors,
  } = useErrors();

  const isFormValid = Boolean(
    description &&
      amount &&
      category &&
      type &&
      date &&
      selectedModality &&
      errors.length === 0
  );

  function handleChangeDescription(event: BaseSyntheticEvent) {
    setDescription(event.target.value);

    if (!event.target.value) {
      setError({ field: 'description', message: 'Descrição é obrigatória' });
    } else {
      removeError('description');
    }
  }

  function handleDescriptionError() {
    const error = getErrorMessageByFieldName('description');

    return error;
  }

  function handleSelectedModality(event: BaseSyntheticEvent) {
    setSelectedModality(event.target.value);

    if (!event.target.value) {
      setError({ field: 'modality', message: 'Modalidade é obrigatória' });
    } else {
      removeError('modality');
    }
  }

  function handleModalityError() {
    const error = getErrorMessageByFieldName('modality');

    return error;
  }

  function handleChangeCategory(event: BaseSyntheticEvent) {
    setCategory(event.target.value);

    if (event.target.value === '') {
      setError({ field: 'category', message: 'Categoria é obrigatória' });
    } else {
      removeError('category');
    }
  }

  function handleCategoryError() {
    const error = getErrorMessageByFieldName('category');

    return error;
  }

  function handleChangeAmount(event: BaseSyntheticEvent) {
    setAmount(event.target.value === '' ? 0 : parseFloat(event.target.value));

    if (!event.target.value) {
      setError({
        field: 'amount',
        message: 'Valor da transação é obrigatório',
      });
    } else {
      removeError('amount');
    }
  }

  function handleAmountError() {
    const error = getErrorMessageByFieldName('amount');

    return error;
  }

  function handleChangeType(event: BaseSyntheticEvent) {
    setType(event.target.value);

    if (event.target.value === '') {
      setError({ field: 'type', message: 'Tipo é obrigatório' });
    } else {
      removeError('type');
    }
  }

  function handleTypeError() {
    const error = getErrorMessageByFieldName('type');

    return error;
  }

  function handleChangeDate(event: BaseSyntheticEvent) {
    setDate(event.target.value);

    if (!event.target.value) {
      setError({ field: 'date', message: 'Data é obrigatória' });
    } else if (new Date(event.target.value) > new Date()) {
      setError({
        field: 'date',
        message: 'Coloque uma data anterior ao dia atual',
      });
    } else {
      removeError('date');
    }
  }

  function handleDateError() {
    const error = getErrorMessageByFieldName('date');

    return error;
  }

  function handleClearState() {
    handleRemoveAllErrors();
    setDescription('');
    setAmount(0);
    setDate('');
    setSelectedModality('');
    setCategory('' as Category);
    setType('' as TypeProps);
  }

  const modalitiesOptions = useMemo(
    () =>
      modalities.map((modality) => {
        return { id: modality._id, label: modality.name };
      }),
    [modalities]
  );

  const categoriesOptions = useMemo(
    () =>
      selectCategories.map((category) => {
        return { id: category, label: category };
      }),
    []
  );

  const typesOptions = useMemo(
    () =>
      selectTypes.map((types) => {
        return { id: types, label: types };
      }),
    []
  );

  return {
    form: {
      description,
      amount,
      date,
      category,
      type,
      isValid: isFormValid,
    },
    handlers: {
      handleSelectedModality,
      handleModalityError,
      handleDescription: handleChangeDescription,
      handleDescriptionError,
      handleCategory: handleChangeCategory,
      handleCategoryError,
      handleAmount: handleChangeAmount,
      handleAmountError,
      handleType: handleChangeType,
      handleTypeError,
      handleDate: handleChangeDate,
      handleDateError,
    },
    modalitiesOptions,
    categoriesOptions,
    typesOptions,
    setModalities,
    isSubmitting,
    setIsSubmitting,
    selectedModality,
    handleClearState,
  };
}
