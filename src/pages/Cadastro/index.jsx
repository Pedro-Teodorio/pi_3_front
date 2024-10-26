import { Input } from '../../components/Input';

export const Cadastro = () => {
  return (
    <div className="box-border bg-neutral-800 space-y-4">
      <h1>Cadastro</h1>
      <Input  iconPosition={'right'}/>
      <Input variant={'dark'} iconPosition={'left'}/>
    </div>
  );
};
