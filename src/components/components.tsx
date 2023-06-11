import Button from './button';
import Input from './input';
import Table from './table';

const Components = () => {
  return (
    <div className='components'>
    <div className='container'>
      <h2>Button</h2>
      <Button text='Click me'/>
    </div>
    <div className='container'>
      <h2>Input</h2>
      <Input label="First Name" validation="ok" />
      <Input label="Last Name" rounded={true} />
    </div>
    <div className='container'>
      <h2>Table</h2>
      <Table/>
    </div>
   
  </div>
  )
}

export default Components;