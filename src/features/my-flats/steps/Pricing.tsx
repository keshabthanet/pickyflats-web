import { useForm } from 'react-hook-form';

import { flatFees } from '@/datas/flatFees';

import ReactSelect from '@/features/HookForm/ReactSelect';
import TextField from '@/features/HookForm/TextField';

interface FormData {
  currency: string;
  purchaseCost: number;
  rentCost: number;
  monthlyCost: number;
  yearlyCost: number;
  mortgagePayments: number;
  utilityCost: number;
  insuranceCost: number;
  propertyTax: number;
  internetCost: number;
  parkingFee: number;
  petFee: number;
  communalFacilityFee: number;
  cleaningFee: number;
  homeImprovement: number;
  furnitureAppliances: number;
  legalFees: number;
  movingCosts: number;
  securitySystem: number;
  homeOfficeSetup: number;
  cleaningPestControl: number;
  renewalFees: number;
  maintenanceRepairs: number;
  otherCosts: number;
}

export const Pricing = () => {
  const {
    handleSubmit,
    control,

    formState: { errors, isDirty },
  } = useForm<FormData>({
    defaultValues: {},
  });

  return (
    <div className=' m-auto h-auto w-[80%]'>
      <h3 className=' text-[18px] font-semibold '> Costs</h3>
      <div className='grid w-full grid-cols-3 gap-5'>
        <div>
          <ReactSelect
            name='currency'
            options={[]}
            label=' Currency'
            placeholder='currency'
            control={control}
            required
            helperText={
              errors.currency?.type === 'required' ? 'Currency is Required' : ''
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
    </div>
  );
};
