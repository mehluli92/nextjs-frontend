import Head from 'next/head';
import Corousel from '@/components/navigation/Corousel';
import Card from '@/components/cards/card';
import AisleCard from '@/components/cards/aisle-card';
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
      <div className='section-title'>
        SHOP BY AISLE
      </div>
      <div className='aisle-section'>
        <AisleCard image="/img/grocery.png" title="Grocery"/>
        <div className="aisle-card-title">Groceries</div>
        <AisleCard image="/img/Group.png" title="Household Cleaning"/>
        <div className="aisle-card-title">Household Cleaning</div>
        <AisleCard image="/img/wine.png" title="Wine"/>
        <div className="aisle-card-title">Wine</div>

        <div className='xcenter'>
          <button className='call-to-action mx-auto'>
            Shop now
          </button>
        </div>
      </div>

      <div className='section-title'>
        Top Online deals
      </div>
      <div className='top-online-deal-section'> 
        
      </div>
   </>
  );
}
