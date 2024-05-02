'use client'
import Image from "next/image";
import messageSectionData from "./data/messageSectionData";
import Link from "next/link";
import teamIconData from "./data/teamIconData";
import teamData from "./data/teamData";
import tableData from "./data/tableData";
import companyLogoData from "./data/companyLogoData";
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
        <div className="container mx-auto pb-8 md:pb-16">
          <div className="flex flex-col text-center lg:pt-16 md:px-8 md:py-10 px-4 py-8">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Messaging for all</h1>
            <p className="leading-[40px] text-lg">User generated content in real-time will have multiple touchpoints for offshoring.</p>
          </div>
          <div className="flex flex-wrap overflow-hidden max-w-[1280px] lg:h-[182px] md:px-8 pb-10">
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
      <section className="text-[#5F6D7E] body-font">
        <div className="container mx-auto flex px-5 pb-8 md:pb-16 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-[32px] text-3xl mb-4 font-semibold text-gray-900">Demonstrate branding <br /> consequently think outside</h1>
            <p className="mb-6 leading-relaxed font-normal">Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna vulputate pellentesque a diam tincidunt. Aenean malesuada tellus tellus faucibus mauris quisque mauris in.</p>
            <ul>
              <li className="flex items-center gap-2 my-[10px]">
                <Image src='/images/check.svg' width={18} height={18} alt="check icon" />
                <p>Enterprise-grade security</p>
              </li>
              <li className="flex items-center gap-2 my-[10px]">
                <Image src='/images/check.svg' width={18} height={18} alt="check icon" />
                <p>99.9% guaranteed uptime SLA</p>
              </li>
              <li className="flex items-center gap-2 mb-10">
                <Image src='/images/check.svg' width={18} height={18} alt="check icon" />
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
            <Image className="object-cover object-center rounded" alt="hero" src="/images/left-right.svg" width={560} height={560} />
          </div>
        </div>
      </section>
      {/* left-right section end */}

      {/* team section start */}
      <section className="body-font">
        <div className="container px-5 pb-8 md:pb-16 mx-auto">
          <div className="flex flex-col text-center w-full mb-16">
            <h1 className="text-2xl md:text-[22px] lg:text-[32px] font-bold title-font mb-4 text-gray-900">The Core of Our Team</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-[#5F6D7E]">Organically grow the holistic world view of disruptive innovation via workplace diversity  and empowerment of people and great talent that truly rocks.</p>
          </div>
          <div className="flex flex-wrap -m-2">
            {teamData.map((teamDataItem, teamDataId) => {
              return (
                <div key={teamDataId} className="p-2 lg:w-1/3 md:w-1/2 w-full">
                  <div className="h-full flex flex-col border-gray-200 p-4">
                    <Image alt="team1" className="bg-gray-100 object-cover object-center flex-shrink-0 mr-4" src={teamDataItem.teamMemberImage} width={384} height={348} />
                    <div className="flex-grow mt-4">
                      <h2 className="text-gray-900 title-font text-[22px] font-semibold">{teamDataItem.teamMemberName}</h2>
                      <p className="text-gray-500">{teamDataItem.teamMemberRole}</p>
                      <ul className='flex flex-nowrap gap-4 text-xl mt-4'>
                        {teamIconData.map((teamiIconItem, teamIconId) => {
                          return (
                            <li key={teamIconId}><Link href='#'>{teamiIconItem.socialIcon}</Link></li>
                          )
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      {/* team section end */}

      {/* frequently asked questions section start */}

      <section className="body-font">
        <div className="container px-5 pb-8 md:pb-16 mx-auto">
          <div className="flex flex-col text-center w-full mb-16">
            <h1 className="text-2xl md:text-[22px] lg:text-[32px] font-bold title-font mb-4 text-gray-900">Frequently asked questions</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-[#5F6D7E]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, </p>
          </div>
          <div className="border-[#EAEBF0]">
            <div className="flex justify-between items-center border px-8 py-5">
              <div>
                <h2 className="text-gray-900 title-font text-lg font-medium">Authentification Issues</h2>
                <p className="text-gray-500"> Porttitor nec est nisi, id nunc.</p>
              </div>
              <button className="text-sm font-medium text-[#437EF7] bg-[#F5FAFF] border-0 px-3 py-1">New</button>
            </div>
            {tableData.map((issueItem, issueId) => {
              return (
                <div key={issueId} className="flex justify-between items-center border border-t-0 px-8 py-5">
                  <h2 className="text-gray-900 title-font text-base font-medium">{issueItem.issueTitle}</h2>
                  <p className="hidden lg:block text-gray-500 text-base font-medium"> {issueItem.issueTime}</p>
                </div>
              )
            })}

          </div>
        </div>
      </section>
      {/* frequently asked questions section end */}

      {/* call to action section start */}
      <section className="text-white bg-[#2B63D9] body-font ">
        <div className="container mx-auto w-[343px] md:w-[672px] lg:w-[673px] lg:pt-20 lg:px-[30px] md:px-8 md:py-10 px-4 py-8">
          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="text-sm tracking-widest font-semibold title-font mb-4">1% OF THE INDUSTRY</h2>
            <h1 className="md:leading-[42px] md:text-[32px] font-semibold title-font mb-4">Welcome to your new digital reality that which will rock your world truly at all.</h1>
          </div>
          <div className="flex md:flex-row md:gap-3 justify-center flex-col">
            <button className="bg-white text-[#437EF7] border-0 px-[18px] py-3 focus:outline-none rounded font-semibold text-[15px] items-center mt-4 md:mt-0">Sign up</button>
            <button className="text-white bg-[#437EF7] border-0 px-[18px] py-3 focus:outline-none rounded font-semibold text-[15px] items-center mt-4 md:mt-0">Log in</button>
          </div>
        </div>

          {/* logo section */}
        <div className="flex md:flex-row flex-col md:flex-wrap justify-center gap-4 md:gap-8 lg:gap-16 items-center lg:pt-20 lg:px-[30px] lg:pb-16 md:px-8 md:py-10 px-4 py-8">
          {companyLogoData.map((companyLogoItem, companyLogoId)=>{
            return (
              <Image key={companyLogoId} className="object-cover object-center rounded" alt={companyLogoItem.companyAlt} src={companyLogoItem.companyLogo} width={128} height={32} />
            )
          })}
        </div>
      </section>
      {/* call to action section end */}
    </>
  );
}
