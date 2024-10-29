'use client';
import React from 'react';
import { CustomerProvider } from '@/app/context/CustomerContext';
import { Customer } from '@/app/types/customer';
import CustomerList from '../organisms/CustomerList';
import CustomerDetails from '../organisms/CustomerDetails';

const HomePage: React.FC<{ initialData: Customer[] }> = ({ initialData }) => {
  return (
    <CustomerProvider initialData={initialData}>
      <div className="w-full flex flex-row">
        <CustomerList />
        <CustomerDetails />
      </div>
    </CustomerProvider>
  );
};

export default HomePage;
