import { useEffect, useState } from "react";

const useLocalStorage = (key = "", initialValue = "") => {
  const getValue = () => {
    const value = localStorage.getItem(key);

    if (value) {
      return JSON.parse(value);
    }

    return initialValue;
  };

  const [value, setValue] = useState(getValue);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
};

export default useLocalStorage;
