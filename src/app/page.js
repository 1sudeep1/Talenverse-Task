import Image from "next/image";
import messageSectionData from "./(data)/messageSectionData";
import { FaArrowRight } from "react-icons/fa";
export default function Home() {
  return (
    <>
      {/* hero section start */}
      <section className="text-gray-600 bg-[#F8F9FB] body-font ">
        <div className="container mx-auto w-[343px] md:w-[672px] lg:w-[640px] lg:pt-20 lg:px-[30px] lg:pb-[92px] md:p-12 md:pb-[88px] px-4 pt-8 pb-10">
          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="text-sm text-[#437EF7] tracking-widest font-semibold title-font mb-1">1% OF THE INDUSTRY</h2>
            <h1 className="leading-[44px] md:leading-[60px] text-4xl md:text-[52px] font-semibold md:font-bold title-font mb-4 text-gray-900">Hype got you here. Stay for the support.</h1>
            <p className="leading-[26px] text-lg">We’ve been told it is possible to revolutionize the payment industry. We have not reinvented the wheel, we decided to build upon it - successfully.</p>
          </div>
        </div>
      </section>
      {/* hero section end */}

      {/* messaging section start */}
      <section className="text-gray-600 body-font">
        <div className="container mx-auto pb-8 md:pb-14">
          <div className="flex flex-col text-center lg:pt-16 md:px-8 md:py-10 px-4 py-8">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Messaging for all</h1>
            <p className="leading-[40px] text-lg">User generated content in real-time will have multiple touchpoints for offshoring.</p>
          </div>
          <div className="flex flex-wrap overflow-hidden lg:w-[1216px] lg:h-[182px] md:px-8 pb-10">
            {messageSectionData.map((messageItem, messageId) => {
              return (
                <div key={messageId} className="lg:w-1/3 md:w-1/2">
                  <div className="flex rounded-lg h-full p-8 flex-col">
                    <div className="mb-3">
                      <div className="mb-5 w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                        <Image src={messageItem.messageIcon} width={48} height={48} alt={messageItem.messageAlt} />
                      </div>
                      <h2 className="text-gray-900 text-[22px] title-font font-semibold">{messageItem.messageTitle}</h2>
                    </div>
                    <div className="flex-grow">
                      <p className="leading-relaxed text-base">{messageItem.messageDescription}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      {/* messaging section end */}

      {/* left-right section start */}
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 pb-8 md:py-16 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-[32px] text-3xl mb-4 font-semibold text-gray-900">Demonstrate branding <br /> consequently think outside</h1>
            <p className="mb-6 leading-relaxed font-normal">Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna vulputate pellentesque a diam tincidunt. Aenean malesuada tellus tellus faucibus mauris quisque mauris in.</p>
            <ul>
              <li className="flex items-center gap-2 my-[10px]">
                <Image src='/check.svg' width={18} height={18} alt="check icon" />
                <p>Enterprise-grade security</p>
              </li>
              <li className="flex items-center gap-2 my-[10px]">
                <Image src='/check.svg' width={18} height={18} alt="check icon" />
                <p>99.9% guaranteed uptime SLA</p>
              </li>
              <li className="flex items-center gap-2 mb-10">
                <Image src='/check.svg' width={18} height={18} alt="check icon" />
                <p>Designated customer success team</p>
              </li>
            </ul>

            <button className="inline-flex text-white bg-[#437EF7] border-0 px-[18px] py-3 focus:outline-none rounded font-semibold text-[15px] items-center mt-4 md:mt-0">Start now
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>

          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image className="object-cover object-center rounded" alt="hero" src="/left-right.svg" width={560} height={560} />
          </div>
        </div>
      </section>
      {/* left-right section end */}

    </>
  );
}
