import Header from './components/organisms/Header';
import { generateMockData } from '@/app/utils/generateMockData';
import HomePage from './components/pages/HomePage';

export default async function Home() {
  const initialCustomerData = generateMockData(1, 10);

  return (
    <div className=" w-screen h-screen overflow-hidden font-[family-name:var(--font-geist-sans)] flex-col">
      <Header />
      <HomePage initialData={initialCustomerData} />
    </div>
  );
}
