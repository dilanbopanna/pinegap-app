import React, { memo } from 'react';
import { useCustomerData } from '@/app/context/CustomerContext';
import CustomerPhotoGrid from '../molecules/CustomerPhotoGrid';

const CustomerDetails: React.FC = () => {
  const { selectedCustomer: customer } = useCustomerData();

  return (
    customer && (
      <div className="w-full flex flex-col py-20 items-center overflow-auto h-[95vh]">
        <h1 className="text-black/90 font-bold text-2xl mb-10">
          {customer.name}
        </h1>
        <p className="max-w-[800px] text-center text-md text-gray-700">
          {customer.description}
        </p>
        <CustomerPhotoGrid customer={customer} />
      </div>
    )
  );
};

export default memo(CustomerDetails);
