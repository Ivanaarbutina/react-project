import Container from "../../components/container";
import Select from "../../components/select";

export type OptionType = {
  label: string;
  value: string;
};

const selectOptions: OptionType[] = [
  {
    label: "Option 1",
    value: "option-1"
  },
  {
    label: "Option 2",
    value: "option-2"
  },
  {
    label: "Option 3",
    value: "option-3"
  },
];

const SelectPage = () => {
  return(
    <Container>
      <h2>Select</h2>
      <Select
        options={selectOptions}
        onChange={(option) => console.log(option)}
      />
    </Container>
  )
}

export default SelectPage;