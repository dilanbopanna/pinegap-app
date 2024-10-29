import React, { createContext, useContext, ReactNode } from 'react';
import { useState } from 'react';
import { generateMockData } from '../utils/generateMockData';
import type { Customer } from '@/app/types/customer';

interface CustomerContextProps {
  data: Customer[];
  loadMore: () => void;
  selectedCustomer: Customer | null;
  setSelectedCustomer: (customer: Customer | null) => void;
}

const CustomerContext = createContext<CustomerContextProps | null>(null);

export const CustomerProvider = ({
  children,
  initialData = [],
}: {
  children: ReactNode;
  initialData: Customer[];
}) => {
  const [data, setData] = useState<Customer[]>(initialData);
  const [page, setPage] = useState<number>(1);
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(
    initialData.length > 0 ? initialData[0] : null
  );

  const loadMore = () => {
    const nextPage = page + 1;
    const newItems = generateMockData(nextPage, 10);

    setData((prevData) => [...prevData, ...newItems]);
    setPage(nextPage);
  };

  return (
    <CustomerContext.Provider
      value={{ data, loadMore, selectedCustomer, setSelectedCustomer }}
    >
      {children}
    </CustomerContext.Provider>
  );
};

// Custom hook to use the customer context
export const useCustomerData = () => {
  const context = useContext(CustomerContext);
  if (!context) {
    throw new Error('useCustomerData must be used within a CustomerProvider');
  }
  return context;
};
