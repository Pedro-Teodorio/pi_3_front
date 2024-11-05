import { Input } from '../../components/Input';

export const Cadastro = () => {
  return (
    <div className="box-border space-y-4 bg-neutral-800">
      <h1>Cadastro</h1>
      <Input iconPosition={'right'} />
      <Input variant={'dark'} iconPosition={'left'} />
    </div>
  );
};
