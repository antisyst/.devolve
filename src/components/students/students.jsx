import './students.scss';
import { SiShopify, SiUber, SiIbm, SiBrave, SiBinance, SiAliexpress, SiSamsung, SiFord } from 'react-icons/si';
import { BsMeta } from 'react-icons/bs';
import { TbBrandBootstrap } from 'react-icons/tb'
 
export default function Students() {
  return(
    <div className='home-inline-compelement-component'>
        <h1 className='text-center color-black first-section-component font-bold'>
        Our students are getting hired by top companies. We can help you too.
        </h1>
        <article className="wrapper">
  <div className="marquee">
    <div className="marquee__group">
      <SiShopify/>

      <SiUber/>

      <BsMeta/>

      <SiBrave/>

      <SiIbm/>

      <SiBinance/>

      <SiSamsung/>

      <SiFord/>
    </div>

    <div aria-hidden="true" className="marquee__group">
    <TbBrandBootstrap/>

    <SiAliexpress/>

    <SiShopify/>

    <SiUber/>

    <BsMeta/>

    <SiBrave/>

    <SiIbm/>

    <SiBinance/>

    </div>
  </div>

</article>
    </div>
  )
}
