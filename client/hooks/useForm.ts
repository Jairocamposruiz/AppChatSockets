import { ChangeEvent, useCallback, useState } from 'react';

export const useForm = <T extends { [key: string]: any }>(initialState: T) => {

  const [form, setForm] = useState(initialState);

  const onChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { value, name } = event.target;

    setForm((form) => ({
      ...form,
      [name]: value,
    }));
  };

  const onChangeWithParams = <K extends keyof T>(name: K, value: T[K]) => {
    setForm((form) => ({
      ...form,
      [name]: value,
    }));
  };

  const setFormValues = useCallback((newValues: T) => {
    setForm(newValues);
  }, []);

  return {
    ...form,
    form,
    onChange,
    setFormValues,
    onChangeWithParams,
  };
};
