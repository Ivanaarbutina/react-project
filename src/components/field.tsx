import Input from "./input";

type FieldType = {
  id: string;
  value: string;
  label: string;
  onChange: (value: string) => void;
};

const Field = ({ id, value, label, onChange }: FieldType) => {
  return (
    <div className="field">
      <label htmlFor={id}>{label ? label : id}</label>
      <Input name={id} value={value} onChange={onChange}/>
    </div>
  );
};

export default Field;
