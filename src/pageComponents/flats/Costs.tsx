import { Divider } from '@mui/material';
import { useEffect, useState } from 'react';

import { Icosts, useFlatStore } from '@/store/flatStore';
export const Costs = () => {
  const { costs: flatCosts } = useFlatStore();

  const [costs, setCosts] = useState<Icosts>();

  useEffect(() => {
    setCosts(flatCosts);
  }, [flatCosts]);
  return (
    <div className=' h-auto w-full py-9'>
      <div>
        <h2 className=' text-primary-main text-2xl font-semibold'>
          Costs & Expences
        </h2>
        <Divider />
      </div>
      <div className=''>
        <div className='m-auto mt-9 grid w-[100%] grid-cols-1 justify-center gap-3 text-sm font-semibold text-teal-800 md:grid-cols-3 md:gap-9 '>
          {costs?.currency && (
            <div>
              <div>Currency:{costs.currency ? costs.currency : ' -'}</div>
              <Divider />
            </div>
          )}

          {costs?.negotiable && (
            <div>
              <div>
                Negiotiability:{costs.negotiable ? costs.negotiable : ' -'}
              </div>
              <Divider />
            </div>
          )}

          {true && (
            <div>
              <div>Monthly Rent:${costs?.monthlyCost ?? ' -'}</div>
              <Divider />
            </div>
          )}
          {true && (
            <div>
              <div>Yearly Rent:${costs?.yearlyCost ?? ' -'}</div>
              <Divider />
            </div>
          )}
          {true && (
            <div>
              <div>Purchase Cost:${costs?.purchaseCost ?? ' -'}</div>
              <Divider />
            </div>
          )}

          <div>
            <div>Utility Cost: ${costs?.utilityCost}</div>
            <Divider />
          </div>
          <div>
            <div>Mortgage Payments: ${costs?.mortgagePayments}</div>
            <Divider />
          </div>
          <div>
            <div>Insurance Cost: ${costs?.insuranceCost}</div>
            <Divider />
          </div>
          <div>
            <div>Property Tax: ${costs?.propertyTax}</div>
            <Divider />
          </div>
          <div>
            <div>Internet Cost: ${costs?.internetCost}</div>
            <Divider />
          </div>
          <div>
            <div>Parking Fee: ${costs?.parkingFee}</div>
            <Divider />
          </div>
          <div>
            <div>Pet Fee: ${costs?.petFee}</div>
            <Divider />
          </div>
          <div>
            <div>Communal Facility Fee: ${costs?.communalFacilityFee}</div>
            <Divider />
          </div>
          <div>
            <div>Cleaning Fee: ${costs?.cleaningFee}</div>
            <Divider />
          </div>
          <div>
            <div>Home Improvement Fee: ${costs?.homeImprovement}</div>
            <Divider />
          </div>
          <div>
            <div>Legal Fees: ${costs?.legalFees}</div>
            <Divider />
          </div>
          <div>
            <div>Furniture Costs: ${costs?.furnitureAppliances}</div>
            <Divider />
          </div>
          <div>
            <div>Moving Cost: ${costs?.movingCost}</div>
            <Divider />
          </div>
          <div>
            <div>Security System Cost: ${costs?.securitySystem}</div>
            <Divider />
          </div>
          <div>
            <div>Setup Cost: ${costs?.homeOfficeSetup}</div>
            <Divider />
          </div>
          <div>
            <div>Maintenance Cost: ${costs?.maintenanceRepairs}</div>
            <Divider />
          </div>
          <div>
            <div>Other Costs: ${costs?.otherCost}</div>
            <Divider />
          </div>
        </div>
      </div>
    </div>
  );
};
