import Checkbox from "./Checkbox";
import Input from "./Input";
import Search from "./Search";
import Select from "./Select";
import { FormComponent } from "./styles";

const Form = ({ children }: any) => {
  return <FormComponent>{children}</FormComponent>;
};

Form.Checkbox = Checkbox;
Form.Input = Input;
Form.Search = Search;
Form.Select = Select;

export default Form;
