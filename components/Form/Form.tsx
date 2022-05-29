import Checkbox from "./Checkbox";
import Input from "./Input";
import Search from "./Search";
import Select from "./Select";
import { FormComponent } from "./styles";

interface FormProps {
  children: any;
}

const Form = ({ children }: FormProps) => {
  return <FormComponent>{children}</FormComponent>;
};

Form.Checkbox = Checkbox;
Form.Input = Input;
Form.Search = Search;
Form.Select = Select;

export default Form;
