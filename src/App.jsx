import { use, useEffect, useState } from "react";
import "./App.css";
import Calculator from "./components/Calculator";
import Results from "./components/Results";

function App() {
  const [values, setValues] = useState(null);

  useEffect(() => {}, [values]);

  const handleValues = (values) => {
    setValues(values);
  };
  return (
    <div className="font-jakarta xl:flex xl:items-center xl:justify-center xl:min-h-screen xl:bg-slate-100">
      <div className="xl:flex xl:items-center xl:justify-center xl:h-[500px] xl:w-[500px] ">
        <Calculator handleValues={handleValues} />
      </div>
      <div className="xl:flex xl:items-center xl:h-[500px] xl:w-[500px] -ml-16">
        <Results values={values} />
      </div>
    </div>
  );
}

export default App;
