import { useForm } from 'react-hook-form';

import { Icosts } from '@/store/flatStore';
import { useFlatStore } from '@/store/flatStore';

import { AddPricing } from '@/features/my-flats/Modal/addPriceModal';

export const Pricing = () => {
  const {
    handleSubmit,
    control,

    formState: { errors, isDirty },
  } = useForm<Icosts>({
    defaultValues: {},
  });

  const { costs, purpose } = useFlatStore();

  const isRent = purpose == 'rent';
  const isSell = purpose == 'sell';

  return (
    <>
      <div className='mt-9 flex justify-center'>
        <AddPricing />
      </div>

      <div className='m-auto mt-9 grid w-[80%] grid-cols-3 justify-center text-lg font-semibold text-teal-800'>
        {costs.currency && (
          <div>Currency:{costs.currency ? costs.currency : ' -'}</div>
        )}
        {isRent && <div>Monthly Rent:{costs.monthlyCost ?? ' -'}</div>}
        {isRent && <div>Yearly Rent:{costs.yearlyCost ?? ' -'}</div>}
        {isSell && <div>Purchase Cost:{costs.purchaseCost ?? ' -'}</div>}

        <div>Utility Cost:{costs.utilityCost ?? ' -'}</div>
        <div>Mortgage Paynents:{costs.mortgagePayments ?? ' -'}</div>
        <div>Insurance Cost:{costs.insuranceCost ?? ' -'}</div>
        <div>Property Tax:{costs.propertyTax ?? ' -'}</div>

        <div>Internet Cost:{costs.internetCost ?? ' -'}</div>
        <div>Parking Fee:{costs.parkingFee ?? ' -'}</div>
        <div>Pet Fee:{costs.petFee ?? ' -'}</div>
        <div>Communal Facility Fee Fee:{costs.communalFacilityFee ?? ' -'}</div>
        <div>Cleaning Fee:{costs.cleaningFee ?? ' -'}</div>

        <div>Home Improvement Fee:{costs.homeImprovement ?? ' -'}</div>
        <div>Legal Fees :{costs.legalFees ?? ' -'}</div>
        <div>Furnitures Costs :{costs.furnitureAppliances ?? ' -'}</div>
        <div>Moving Cost :{costs.movingCosts ?? ' -'}</div>
        <div>Security System Cost :{costs.securitySystem ?? ' -'}</div>
        <div>SetUp Cost :{costs.homeOfficeSetup ?? ' -'}</div>
        <div>Maintainance Cost :{costs.maintenanceRepairs ?? ' -'}</div>
        <div>Other Costs :{costs.otherCosts ?? ' -'}</div>
      </div>
    </>
  );
};
