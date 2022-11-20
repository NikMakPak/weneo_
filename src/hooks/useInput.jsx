import {useEffect, useState} from "react";

const useValidation = (value, validations) => {
  const [isEmpty, setEmpty] = useState(true);
  const [minLengthError, setMinLengthError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [inputValid, setInputValid] = useState(false);

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case 'minLength':
          value.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false)
          break;
        case 'isEmpty':
          value ? setEmpty(false) : setEmpty(true)
          break;
        case 'isEmail':
          const regEmail =
            /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
          regEmail.test(value.trim()) ? setEmailError(false) : setEmailError(true);
          break;
        case 'isPhone':
          const regPhone =
            /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/gm;
          regPhone.test(value.trim()) ? setPhoneError(false) : setPhoneError(true);
          break;
      }
    }
  }, [value])

  useEffect(() => {
    if (isEmpty || minLengthError || emailError || phoneError) setInputValid(false)
    else setInputValid(true)
  }, [isEmpty, minLengthError, emailError])

  return {isEmpty, minLengthError, emailError, phoneError, inputValid}
}

export const useInput = (initialValue, validations) => {

  const [value, setValue] = useState(initialValue);
  const [isDirty, setDirty] = useState(false);
  const valid = useValidation(value, validations)
  const onChange = (e) => {
    setValue(e?.target.value)
  }
  const onBlur = (e) => {
    setDirty(true)
  }
  return {value, onChange, onBlur, isDirty, ...valid}
}