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

  function handleChangeCategory() {
    setCategory((prevState) =>
      prevState === 'Receitas' ? 'Despesas' : 'Receitas'
    );
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

  function handleChangeType() {
    setType((prevState) => (prevState === 'Fixo' ? 'Variável' : 'Fixo'));
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
      handleAmount: handleChangeAmount,
      handleAmountError,
      handleType: handleChangeType,
      handleDate: handleChangeDate,
      handleDateError,
    },
    constants: { selectCategories },
    isLoading,
    setIsLoading,
    selectedModality,
    handleClearState,
  };
}
