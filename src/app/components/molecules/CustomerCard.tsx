import { Customer } from '@/app/types/customer';
import React, { useCallback, memo } from 'react';
import { useCustomerData } from '@/app/context/CustomerContext';

const CustomerCard: React.FC<{
  customer: Customer;
  isSelected: boolean;
}> = memo(({ customer, isSelected: isCustomerSelected }) => {
  const { setSelectedCustomer } = useCustomerData();

  const handleClick = useCallback(() => {
    setSelectedCustomer(customer);
  }, [customer, setSelectedCustomer]);

  const selectedClass = isCustomerSelected
    ? 'bg-gray-200 border-r-2 border-gray-500'
    : '';

  return (
    <div
      className={`flex flex-col gap-2 border-r py-4 px-4 cursor-pointer ${selectedClass}`}
      onClick={handleClick}
    >
      <h2 className="text-black/90 text-xl font-semibold">{customer.name}</h2>
      <p className="text-sm min-h-[40px] w-full text-gray-500 overflow-hidden line-clamp-4">
        {customer.description}
      </p>
    </div>
  );
});

CustomerCard.displayName = 'CustomerCard';
export default CustomerCard;
