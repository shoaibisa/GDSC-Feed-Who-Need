import React from 'react';
import Image from './Image'
function FeaturesBlocks() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">{"Social Worker > Social Media"}</h2>
            <p className="text-xl text-gray-400">Real Heroes are those who cares for their surroundings. Rather than wasting time on Social Media, join us to utilize time in a refreshing way</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none" data-aos-id-blocks>

            {/* 1st item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="/images/feature-tile-icon-01.svg">
                <rect className="fill-current text-purple-600" width="64" height="64" rx="32" />
                <path className="stroke-current text-purple-100" d="M30 39.313l-4.18 2.197L27 34.628l-5-4.874 6.91-1.004L32 22.49l3.09 6.26L42 29.754l-3 2.924" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd" />
                <path className="stroke-current text-purple-300" d="M43 42h-9M43 37h-9" strokeLinecap="square" strokeWidth="2" />
              </svg>
              <h4 className="h4 mb-2">Maintain Health</h4>
              <p className="text-lg text-gray-400 text-center">Voluenteer by delivering food from restaurants to nearest poor & needy people by walking. Walking improves healthiness of your body.</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
            <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="/images/feature-tile-icon-01.svg">
                <rect className="fill-current text-purple-600" width="64" height="64" rx="32" />
                {/* <path className="stroke-current text-purple-100" d="M30 39.313l-4.18 2.197L27 34.628l-5-4.874 6.91-1.004L32 22.49l3.09 6.26L42 29.754l-3 2.924" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd" />
                <path className="stroke-current text-purple-300" d="M43 42h-9M43 37h-9" strokeLinecap="square" strokeWidth="2" /> */}
                {/* <Image
                          src={'/images/feature-tile-icon-04.svg'}
                          alt="Features tile icon 04"
                          width={64}
                          height={64} /> */}
              </svg>
              <h4 className="h4 mb-2">Save Environment</h4>
              <p className="text-lg text-gray-400 text-center">Save environment by awaring everyone not to use plastic packaging. Give us restaurant's feedback for packaging.</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="/images/feature-tile-icon-05.svg">
                <rect className="fill-current text-purple-600" width="64" height="64" rx="32" />
                <g transform="translate(21 21)" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                  <ellipse className="stroke-current text-purple-300" cx="11" cy="11" rx="5.5" ry="11" />
                  <path className="stroke-current text-purple-100" d="M11 0v22M0 11h22" />
                  <circle className="stroke-current text-purple-100" cx="11" cy="11" r="11" />
                </g>
              </svg>
              <h4 className="h4 mb-2">Stay Blessed</h4>
              <p className="text-lg text-gray-400 text-center">All of your volunteer work is greatly appreciated.You don't have to have a college degree to serve. You serve by heart.</p>
            </div>

            
          </div>

        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;
