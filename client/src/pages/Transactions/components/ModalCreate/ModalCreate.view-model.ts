import { BaseSyntheticEvent, useState } from 'react';

import useErrors from '../../../../hooks/useErrors';

type TypeProps = 'Fixo' | 'Variável';

type Category = 'Receitas' | 'Despesas';

export function ModalCreateViewModel() {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState('');
  const [category, setCategory] = useState<Category>('' as Category);
  const [type, setType] = useState<TypeProps>('Fixo');
  const [selectedModality, setSelectedModality] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const selectCategories = ['Despesas', 'Receitas'];
  const selectTypes = ['Fixo', 'Variável'];

  const { errors, getErrorMessageByFieldName, removeError, setError } =
    useErrors();

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
    setDescription('');
    setAmount(0);
    setDate('');
    setSelectedModality('');
  }

  return {
    form: {
      description,
      amount,
      date,
      category,
      type,
      isValid: isFormValid,
      onSelectedModality: setSelectedModality,
    },
    handlers: {
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
    constants: { selectCategories, selectTypes },
    isLoading,
    setIsLoading,
    selectedModality,
    handleClearState,
  };
}
