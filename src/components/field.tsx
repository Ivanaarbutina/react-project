type FieldType = {
  id: string;
  value: string;
  label: string;
  onChange: (value: string) => void;
};

const Field = ({ id, value, label, onChange }: FieldType) => {
  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        onChange={(e) => onChange(e.target.value)}
        value={value}
        type="text"
      />
    </div>
  );
};

export default Field;
