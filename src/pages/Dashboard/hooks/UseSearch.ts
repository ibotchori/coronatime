import { useState } from "react";

const UseSearch = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return { searchTerm, handleChange };
};

export default UseSearch;
