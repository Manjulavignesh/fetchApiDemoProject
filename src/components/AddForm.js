import { Fragment, useState } from "react";
import FormField from "./FormField"

const AddForm = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const formHandler = () => {
    setIsFormOpen((prev) => !prev);
  };
  return (
    <Fragment>
      {!isFormOpen && <button onClick={formHandler}>Add Movie</button>}
      {isFormOpen && (
        <div>
          <FormField/>
          <button onClick={formHandler}>Add Movie</button>
        </div>
      )}
    </Fragment>
  );
};
export default AddForm;
