import { useState } from "react";

export const useFilter = intialState => {
  const [value, setValue] = useState(intialState);
  return {
    value,
    setValue
  };
};
