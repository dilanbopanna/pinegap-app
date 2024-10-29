import React, { memo } from 'react';
import useCustomerPhotos from '@/app/utils/hooks/useCustomerPhotos';
import Image from 'next/image';

const CustomerPhotoGrid: React.FC<{ customer: any }> = ({ customer }) => {
  const photos = useCustomerPhotos(customer);

  return (
    <div className="grid grid-cols-3 gap-12 w-full mt-10 relative px-40">
      {photos.map((photo, index) => (
        <div className="relative w-full h-52" key={index}>
          <Image
            src={photo}
            alt={`Customer photo ${index + 1}`}
            className="absolute inset-0 object-cover rounded-xl"
            layout="fill"
          />
        </div>
      ))}
    </div>
  );
};

export default memo(CustomerPhotoGrid);
