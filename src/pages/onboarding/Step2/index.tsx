import { useFormContext } from 'react-hook-form';

import Checkbox from '@/components/Checkbox';

const Step2 = () => {
  const { control } = useFormContext();

  return (
    <div className='flex items-center justify-center'>
      <h1>Step2</h1>
      <Checkbox name='fuckHard' control={control} label='hello' />
    </div>
  );
};

export default Step2;
