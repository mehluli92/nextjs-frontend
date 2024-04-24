import Head from 'next/head';
import Corousel from '@/components/navigation/Corousel';
import Card from '@/components/cards/card';
export default function Home() {
  return (
    <>
      <Head>
        <title>TM Pick n Pay Zimbabwe</title>
        <meta name='description' content='TM picknpay' />
      </Head>
      <div className='banner-slider-section'>
        <Corousel/>
      </div>
      <div className='shop-locator-section'>
        <Card/>
      </div>
   </>
  );
}
