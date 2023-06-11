import { Divider } from '@mui/material';
import { useForm } from 'react-hook-form';

import { Icosts } from '@/store/flatStore';
import { useFlatStore } from '@/store/flatStore';

import { AddPricing } from '@/features/my-flats/Modal/addPriceModal';

const Pricing = () => {
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

      <div className='m-auto mt-9 grid w-[80%] justify-center gap-9 text-lg font-semibold text-teal-800 md:grid-cols-3 '>
        {costs.currency && (
          <div>
            <div>Currency:{costs.currency ? costs.currency : ' -'}</div>
            <Divider />
          </div>
        )}

        {costs.negotiable && (
          <div>
            <div>
              Negiotiability:{costs.negotiable ? costs.negotiable : ' -'}
            </div>
            <Divider />
          </div>
        )}

        {isRent && (
          <div>
            <div>Monthly Rent:${costs.monthlyCost ?? ' -'}</div>
            <Divider />
          </div>
        )}
        {isRent && (
          <div>
            <div>Yearly Rent:${costs.yearlyCost ?? ' -'}</div>
            <Divider />
          </div>
        )}
        {isSell && (
          <div>
            <div>Purchase Cost:${costs.purchaseCost ?? ' -'}</div>
            <Divider />
          </div>
        )}

        <div>
          <div>Utility Cost: ${costs.utilityCost}</div>
          <Divider />
        </div>
        <div>
          <div>Mortgage Payments: ${costs.mortgagePayments}</div>
          <Divider />
        </div>
        <div>
          <div>Insurance Cost: ${costs.insuranceCost}</div>
          <Divider />
        </div>
        <div>
          <div>Property Tax: ${costs.propertyTax}</div>
          <Divider />
        </div>
        <div>
          <div>Internet Cost: ${costs.internetCost}</div>
          <Divider />
        </div>
        <div>
          <div>Parking Fee: ${costs.parkingFee}</div>
          <Divider />
        </div>
        <div>
          <div>Pet Fee: ${costs.petFee}</div>
          <Divider />
        </div>
        <div>
          <div>Communal Facility Fee: ${costs.communalFacilityFee}</div>
          <Divider />
        </div>
        <div>
          <div>Cleaning Fee: ${costs.cleaningFee}</div>
          <Divider />
        </div>
        <div>
          <div>Home Improvement Fee: ${costs.homeImprovement}</div>
          <Divider />
        </div>
        <div>
          <div>Legal Fees: ${costs.legalFees}</div>
          <Divider />
        </div>
        <div>
          <div>Furniture Costs: ${costs.furnitureAppliances}</div>
          <Divider />
        </div>
        <div>
          <div>Moving Cost: ${costs.movingCosts}</div>
          <Divider />
        </div>
        <div>
          <div>Security System Cost: ${costs.securitySystem}</div>
          <Divider />
        </div>
        <div>
          <div>Setup Cost: ${costs.homeOfficeSetup}</div>
          <Divider />
        </div>
        <div>
          <div>Maintenance Cost: ${costs.maintenanceRepairs}</div>
          <Divider />
        </div>
        <div>
          <div>Other Costs: ${costs.otherCosts}</div>
          <Divider />
        </div>
      </div>
    </>
  );
};

export default Pricing;
