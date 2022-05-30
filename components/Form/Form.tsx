import Checkbox from "./Checkbox";
import Input from "./Input";
import Search from "./Search";
import Select from "./Select";
import { FormComponent } from "./styles";

interface FormProps {
  className?: string;
  children: any;
}

const Form = ({ children, className }: FormProps) => {
  return <FormComponent className={className}>{children}</FormComponent>;
};

Form.Checkbox = Checkbox;
Form.Input = Input;
Form.Search = Search;
Form.Select = Select;

export default Form;
