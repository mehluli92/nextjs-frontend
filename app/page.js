import Head from 'next/head';
import Corousel from '@/components/navigation/Corousel';
import Card from '@/components/cards/card';
import AisleSection from '@/components/cards/aisle-section';
import TopDeals from '@/components/cards/top-deals';
import BottomSection from '@/components/cards/bottomSection';
import Link from 'next/link';



export default function Home() {
  
  return (
    <>
      <Head>
        <title>TM Pick n Pay Zimbabwe</title>
        <meta className='description' content='TM picknpay' />
      </Head>
      <div className='banner-slider-section'>
        <Corousel/>
      </div>
      <div className='shop-locator-section'>
        <Card/>
      </div>
      {/**Aisle section*/ }
      <AisleSection/>

      {/* Top Deals section */}
      <TopDeals/>
      
      <BottomSection/>

   </>
  );
}
