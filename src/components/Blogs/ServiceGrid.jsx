import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import turkey from '../../assets/country/turkey.png'
import china from '../../assets/country/china.png'
import uk from '../../assets/country/uk.png'
import sweden from '../../assets/country/sweden.png'
import thai from '../../assets/country/thai.png'
import poland from '../../assets/country/poland.png'
import nether from '../../assets/country/nether.png'
import swizer from '../../assets/country/swizer.png'
import ice from '../../assets/country/ice.png'
import france from '../../assets/country/france.png'
import est from '../../assets/country/est.png'
import czec from '../../assets/country/czec.png'
import spain from '../../assets/country/spain.png'
import sch from '../../assets/country/sch.png'
import lux from '../../assets/country/lux.png'
import italy from '../../assets/country/italy.png'
import ger from '../../assets/country/ger.png'
import lie from '../../assets/country/lie.png'
import den from '../../assets/country/den.png'
import azer from '../../assets/country/azer.png'
import dub from '../../assets/country/dub.png'
import slo from '../../assets/country/slo.png'
import por from '../../assets/country/por.png'
import mal from '../../assets/country/mal.png'
import lit from '../../assets/country/lit.png'
import hun from '../../assets/country/hun.png'
import fin from '../../assets/country/fin.png'
import bel from '../../assets/country/bel.png'
import austria from '../../assets/country/austria.png'

const ServiceGrid = () => {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <>
      <div className='flex justify-center items-center '>
        <div className='pt-16 '>
          <div className='flex justify-center items-center'>
            <button
              onClick={toggleShowAll}
              className="bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-r hover:from-secondary hover:bg-primary transition-all duration-600 text-white px-5 py-2 rounded-full"
            >
              {showAll ? 'View Less' : 'View All'}
            </button>
          </div>
          <div className=' md:px-10  lg:px-0'>
            <div className={`grid grid-cols-3 gap-y-10 overflow-auto md:gap-x-32 lg:gap-x-48 pt-10 ${showAll ? '' : 'hidden'}`}>
              <div className='flex gap-3  items-center'>
                <div className='rounded-full overflow-hidden'>
                  <img src={turkey} alt="country" className='rounded-full w-8 h-8 '  />
                </div>
                <div><Link>Turkey</Link></div>
              </div>
              <div className='flex gap-3 items-center'>
                <div className='rounded-full overflow-hidden'>
                  <img src={uk} alt="country" className='rounded-full w-8 h-8 ' />
                </div>
                <div><Link>UK</Link></div>
              </div>
              <div className='flex gap-3 items-center'>
                <div className='rounded-full overflow-hidden'>
                  <img src={sweden} alt="country" className='rounded-full w-8 h-8 ' />
                </div>
                <div><Link>Sweden</Link></div>
              </div>
              <div className='flex gap-3 items-center'>
                <div className='rounded-full overflow-hidden'>
                  <img src={china} alt="country" className='rounded-full w-8 h-8 ' />
                </div>
                <div><Link>China</Link></div>
              </div>
              <div className='flex gap-3 items-center'>
                <div className='rounded-full overflow-hidden'>
                  <img src={thai} alt="country" className='rounded-full w-8 h-8 ' />
                </div>
                <div><Link>Thailand</Link></div>
              </div>
              <div className='flex gap-3 items-center'>
                <div className='rounded-full overflow-hidden'>
                  <img src={poland} alt="country" className='rounded-full w-8 h-8 ' />
                </div>
                <div><Link>Poland</Link></div>
              </div>
              <div className='flex gap-3 items-center'>
                <div className='rounded-full overflow-hidden'>
                  <img src={nether} alt="country" className='rounded-full w-8 h-8 ' />
                </div>
                <div><Link>Netherlands</Link></div>
              </div>
              <div className='flex gap-3 items-center'>
                <div className='rounded-full overflow-hidden'>
                  <img src={swizer} alt="country" className='rounded-full w-8 h-8 ' />
                </div>
                <div><Link>Switzerland</Link></div>
              </div>
              <div className='flex gap-3 items-center'>
                <div className='rounded-full overflow-hidden'>
                  <img src={ice} alt="country" className='rounded-full w-8 h-8 ' />
                </div>
                <div><Link>Iceland</Link></div>
              </div>
              <div className='flex gap-3 items-center'>
                <div className='rounded-full overflow-hidden'>
                  <img src={france} alt="country" className='rounded-full w-8 h-8 ' />
                </div>
                <div><Link>France</Link></div>
              </div>
              <div className='flex gap-3 items-center'>
                <div className='rounded-full overflow-hidden'>
                  <img src={est} alt="country" className='rounded-full w-8 h-8 ' />
                </div>
                <div><Link>Estonia</Link></div>
              </div>
              <div className='flex gap-3 items-center'>
                <div className='rounded-full overflow-hidden'>
                  <img src={czec} alt="country" className='rounded-full w-8 h-8 ' />
                </div>
                <div><Link>Czech Republic</Link></div>
              </div>
              <div className='flex gap-3 items-center'>
                <div className='rounded-full overflow-hidden'>
                  <img src={spain} alt="country" className='rounded-full w-8 h-8 ' />
                </div>
                <div><Link>Spain</Link></div>
              </div>
              <div className='flex gap-3 items-center'>
                <div className='rounded-full overflow-hidden'>
                  <img src={sch} alt="country" className='rounded-full w-8 h-8 ' />
                </div>
                <div><Link>Schengen</Link></div>
              </div>
              <div className='flex gap-3  items-center'>
                <div className='rounded-full overflow-hidden'>
                  <img src={lux} alt="country" className='rounded-full w-8 h-8 ' />
                </div>
                <div><Link>Luxembourg</Link></div>
              </div>
              <div className='flex gap-3  items-center'>
                <div className='rounded-full overflow-hidden'>
                  <img src={italy} alt="country" className='rounded-full w-8 h-8 ' />
                </div>
                <div><Link>Italy</Link></div>
              </div>
              <div className='flex gap-3  items-center'>
                <div className='rounded-full overflow-hidden'>
                  <img src={ger} alt="country" className='rounded-full w-8 h-8 ' />
                </div>
                <div><Link>Germany</Link></div>
              </div>
              <div className='flex gap-3  items-center'>
                <div className='rounded-full overflow-hidden'>
                  <img src={lie} alt="country" className='rounded-full w-8 h-8 ' />
                </div>
                <div><Link>Liechtenstein</Link></div>
              </div>
              <div className='flex gap-3  items-center'>
                <div className='rounded-full overflow-hidden'>
                  <img src={den} alt="country" className='rounded-full w-8 h-8 ' />
                </div>
                <div><Link>Denmark</Link></div>
              </div>
              <div className='flex gap-3  items-center'>
                <div className='rounded-full overflow-hidden'>
                  <img src={azer} alt="country" className='rounded-full w-8 h-8 ' />
                </div>
                <div><Link>Azerbaijan</Link></div>
              </div>
              <div className='flex gap-3 items-center'>
                <div className='rounded-full overflow-hidden'>
                  <img src={dub} alt="country" className='rounded-full w-8 h-8 ' />
                </div>
                <div><Link>Dubai</Link></div>
              </div>
              <div className='flex gap-3  items-center'>
                <div className='rounded-full overflow-hidden'>
                  <img src={slo} alt="country" className='rounded-full w-8 h-8 ' />
                </div>
                <div><Link>Slovakia</Link></div>
              </div>
              <div className='flex gap-3  items-center'>
                <div className='rounded-full overflow-hidden'>
                  <img src={por} alt="country" className='rounded-full w-8 h-8 ' />
                </div>
                <div><Link>Portugal</Link></div>
              </div>
              <div className='flex gap-3  items-center'>
                <div className='rounded-full overflow-hidden'>
                  <img src={mal} alt="country" className='rounded-full w-8 h-8 ' />
                </div>
                <div><Link>Malaysia</Link></div>
              </div>
              <div className='flex gap-3  items-center'>
                <div className='rounded-full overflow-hidden'>
                  <img src={lit} alt="country" className='rounded-full w-8 h-8 ' />
                </div>
                <div><Link>Lithuania</Link></div>
              </div>
              <div className='flex gap-3  items-center'>
                <div className='rounded-full overflow-hidden'>
                  <img src={hun} alt="country" className='rounded-full w-8 h-8 ' />
                </div>
                <div><Link>Hungary</Link></div>
              </div>
              <div className='flex gap-3  items-center'>
                <div className='rounded-full overflow-hidden'>
                  <img src={fin} alt="country" className='rounded-full w-8 h-8 ' />
                </div>
                <div><Link>Finland</Link></div>
              </div>
              <div className='flex gap-3  items-center'>
                <div className='rounded-full overflow-hidden'>
                  <img src={bel} alt="country" className='rounded-full w-8 h-8 ' />
                </div>
                <div><Link>Belgium</Link></div>
              </div>
              <div className='flex gap-3  items-center'>
                <div className='rounded-full overflow-hidden'>
                  <img src={austria} alt="country" className='rounded-full w-8 h-8 ' />
                </div>
                <div><Link>Austria</Link></div>
              </div>
              <div className='flex gap-3  items-center'>
                <div className='rounded-full overflow-hidden'>
                  <img src={austria} alt="country" className='rounded-full w-8 h-8 ' />
                </div>
                <div><Link>Australia</Link></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServiceGrid;
