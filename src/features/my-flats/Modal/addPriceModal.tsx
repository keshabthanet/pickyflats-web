import { Button } from '@mui/material';
import { Dialog } from '@mui/material';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { SiAddthis } from 'react-icons/si';

import { Icosts } from '@/store/flatStore';
import { useFlatStore } from '@/store/flatStore';

import ReactSelect from '@/features/HookForm/ReactSelect';
import TextField from '@/features/HookForm/TextField';

export const AddPricing = () => {
  const [open, setOpen] = useState(false);

  const { costs, setCosts } = useFlatStore();

  const {
    handleSubmit,
    control,

    formState: { errors, isDirty },
  } = useForm<Icosts>({
    defaultValues: {},
  });

  const onSubmit = (data: Icosts) => {
    setCosts(data);
  };

  return (
    <div>
      <div>
        <Button
          startIcon={<SiAddthis />}
          className=' capitalize'
          onClick={() => setOpen(true)}
        >
          Add Pricing
        </Button>
      </div>
      <Dialog
        open={open}
        fullWidth
        maxWidth='md'
        onClose={() => setOpen(false)}
      >
        <div>
          <div className=' m-auto my-5 h-auto w-[90%] overflow-y-scroll'>
            <h3 className=' text-[18px] font-semibold '> Costs</h3>
            <div className='grid w-full grid-cols-2 gap-5 '>
              <div>
                <ReactSelect
                  name='currency'
                  options={[]}
                  label=' Currency'
                  placeholder='currency'
                  control={control}
                  required
                  helperText={
                    errors.currency?.type === 'required'
                      ? 'Currency is Required'
                      : ''
                  }
                  error={!!errors.currency}
                />
              </div>
              <div>
                <TextField
                  name='rentCost'
                  type='number'
                  placeholder=' Rent Cost'
                  control={control}
                  label='Rent Cost'
                />
              </div>

              <div>
                <TextField
                  name='purchaseCost'
                  type='number'
                  placeholder=' Purchase Cost'
                  control={control}
                  label='Purchase Cost'
                />
              </div>
              <div>
                <TextField
                  name='monthlyCost'
                  type='number'
                  placeholder=' Monthly Cost'
                  control={control}
                  label='Monthly Cost'
                />
              </div>
              <div>
                <TextField
                  name='yearlyCost'
                  type='number'
                  placeholder=' Yearly Cost'
                  control={control}
                  label='Yearly Cost'
                />
              </div>
              <div>
                <TextField
                  name='utilityCost'
                  type='number'
                  placeholder=' Utility Cost'
                  control={control}
                  label='Utility Cost'
                />
              </div>
              <div>
                <TextField
                  name='insuranceCost'
                  type='number'
                  placeholder=' Insurance Cost'
                  control={control}
                  label='Insurance Cost'
                />
              </div>
              <div>
                <TextField
                  name='internetCost'
                  type='number'
                  placeholder=' Internet Cost'
                  control={control}
                  label='Internet Cost'
                />
              </div>
              <div>
                <TextField
                  name='propertyTax'
                  type='number'
                  placeholder=' Property Tax'
                  control={control}
                  label='Property Tax'
                />
              </div>
              <div>
                <TextField
                  name='parkingFee'
                  type='number'
                  placeholder=' Parking Fee'
                  control={control}
                  label='Parking Fee'
                />
              </div>

              <div>
                <TextField
                  name='petFee'
                  type='number'
                  placeholder=' Pet Fee'
                  control={control}
                  label='Pet Fee'
                />
              </div>

              <div>
                <TextField
                  name='cleaningFee'
                  type='number'
                  placeholder=' Cleaning Fee'
                  control={control}
                  label='Cleaning Fee'
                />
              </div>

              <div>
                <TextField
                  name='communalFacilityFee'
                  type='number'
                  placeholder=' Communal Facility Fee'
                  control={control}
                  label='Communal Facility Fee'
                />
              </div>

              <div>
                <TextField
                  name='otherCosts'
                  type='number'
                  placeholder=' Other Costs'
                  control={control}
                  label='Other Costs'
                />
              </div>

              {/* {flatFees.map((f) => (
          <div key={f.id}>
            <TextField
              name={f.formName }
              type='number'
              placeholder=' Other Costs'
              control={control}
              label='Other Costs'
            />
          </div>
        ))} */}
            </div>
            <div className='mt-5 flex flex-row-reverse'>
              <Button variant='contained' onClick={handleSubmit(onSubmit)}>
                Save Prices
              </Button>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
};
