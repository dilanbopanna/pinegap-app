import { useState, useEffect } from 'react';
import { createClient } from 'pexels';
import { Customer } from '@/app/types/customer';

const client = createClient(process.env.NEXT_PUBLIC_PEXELS_API_KEY || '');

const useCustomerPhotos = (customer: Customer | null, seconds: number = 10) => {
  const [photos, setPhotos] = useState<string[]>([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      const media = await client.photos.curated({ per_page: 50 });
      console.log(media);
      if ('photos' in media) {
        const randomPhotos = media.photos
          .map((photo: { src: { medium: string } }) => photo.src.medium)
          .sort(() => Math.random() - 0.5)
          .slice(0, 9);
        setPhotos(randomPhotos);
      } else {
        console.error('Error fetching photos:', media);
      }
    };

    if (customer) {
      fetchPhotos();
      const intervalId = setInterval(fetchPhotos, seconds * 1000); // Fetch new photos every '10(default) seconds'

      return () => clearInterval(intervalId);
    }
  }, [customer, seconds]);

  return photos;
};

export default useCustomerPhotos;
