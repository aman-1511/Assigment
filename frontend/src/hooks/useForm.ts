import { useState, useCallback } from 'react';

type FormChangeEvent = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>;

function useForm<T>(initialValues: T) {
  const [formData, setFormData] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Record<string, string>>({});
  

  const handleChange = useCallback((e: FormChangeEvent) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
   
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  }, [errors]);
  
  // Handle array inputs (e.g., for fields that need to be split by new lines)
  const handleArrayChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>, fieldName: keyof T) => {
    const values = e.target.value.split('\n').filter(item => item.trim() !== '');
    setFormData(prev => ({
      ...prev,
      [fieldName]: values
    }));
  }, []);
  
 
  const resetForm = useCallback(() => {
    setFormData(initialValues);
    setErrors({});
  }, [initialValues]);
  
 
  const setFormValues = useCallback((values: Partial<T>) => {
    setFormData(prev => ({ ...prev, ...values }));
  }, []);
  
 
  const setError = useCallback((fieldName: string, message: string) => {
    setErrors(prev => ({
      ...prev,
      [fieldName]: message
    }));
  }, []);
  
 
  const clearErrors = useCallback(() => {
    setErrors({});
  }, []);
  
  return {
    formData,
    errors,
    handleChange,
    handleArrayChange,
    resetForm,
    setFormValues,
    setError,
    clearErrors
  };
}

export default useForm; 