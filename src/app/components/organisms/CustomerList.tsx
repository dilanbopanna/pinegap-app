import React, { useEffect, useRef } from 'react';
import { useCustomerData } from '@/app/context/CustomerContext';
import CustomerCard from '../molecules/CustomerCard';

const CustomerList: React.FC = React.memo(() => {
  const { data: customers, selectedCustomer, loadMore } = useCustomerData();
  const observerRef = useRef<IntersectionObserver | null>(null);
  const lastChildRef = useRef<HTMLDivElement | null>(null);

  //Load more data when last child is in viewport (Infinite Scroll)
  useEffect(() => {
    if (lastChildRef.current) {
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          loadMore();
        }
      });

      observer.observe(lastChildRef.current);
      observerRef.current = observer;
    }

    return () => {
      if (observerRef.current && lastChildRef.current) {
        observerRef.current.unobserve(lastChildRef.current);
      }
    };
  }, [loadMore]);

  //Further Optimization: React window / Virtualization of the Customer list
  return (
    <div className="flex flex-col overflow-auto flex-grow h-[94vh] max-w-[300px] hide-scrollbar">
      {customers.map((customer, index) => (
        <div
          ref={index === customers.length - 1 ? lastChildRef : null}
          key={`${customer.id}-${index}`}
        >
          <CustomerCard
            customer={customer}
            isSelected={selectedCustomer?.id === customer.id}
          />
        </div>
      ))}
    </div>
  );
});

export default CustomerList;
