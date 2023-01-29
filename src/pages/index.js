import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Westrac LTD. - Management Information Systems</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
            <Image className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" width="720" height="600" alt="hero" src="/westrac-cover.jpg" />
            <div className="text-center lg:w-2/3 w-full">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Introduction</h1>
              <p className="mb-8 leading-relaxed">This website was created to introduce the Management Information System used by Westrac
                Limited to provide timely information and to give quality service to customers when purchasing
                parts and other supplies sold at Westrac.</p>
            </div>
          </div>
          <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Westrac&apos;s Mission</h1>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block w-8 h-8 text-gray-400 mb-8" viewBox="0 0 975.036 975.036">
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
            <p className="leading-relaxed text-lg">To be the preferred choice of every customer for the greatest selection of quality, affordable, and timely products and services that will enhance the life of every customer in their personal and corporate endeavors.</p>
            <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-8 mb-6"></span>
          </div>
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <Image width="720" height="600" className="object-cover object-center rounded" alt="hero" src="/westrac1.jpg" />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">The History of Westrac</h1>
              <p className="mb-8 leading-relaxed">Westrac Ltd started in 1968 by the original founder Mr. Daniel Plett. Mr. Plett decided to buy the parts section of a multiple-section operation owned by Mr. Martin C Penner, who also held another local business called Koop Sheet Metal. He sold filters, transmission bearings, fuel bars, pistons, sleeves and some more items. Mr. Plett named the business Western Tractor Supply, a small company that would become Westrac Ltd someday. A monumental change for Western Tractor Supply happened in March of 1985. Several young and ambitious investors made a deal to purchase 90% of the business. These investors were Mr. Elmer Kornelsen, Mr. Peter Thiessen, Mr. Eldon Plett and Mr. Henry Dueck. At this time Mr Plett kept 10% and the rest was handed over to these young men.
                By 1988, the company had eight investors – Mr. Daniel Plett, Mr. Henry Dueck, Mr. Peter Thiessen, Mr. Eldon Plett, Mr. Erwin Thiessen, Mr. Elmer Kornelsen, and Mr. Leo Barkman.
              </p>
            </div>
          </div>
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Westrac Today</h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base"><strong>Westrac Ltd</strong> is now a large company that focuses on providing quality parts and services for three major industries: Agricultural, Automotive, and Industrial. The goal of the business is to make their  customers’ benefit from the large selection of parts and services they offer. Westrac Ltd. Achieves it’s goal with the following:
              </p>
              <br />
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base"><strong>6 Convenient Locations</strong>&nbsp;
                Spanish Lookout Branch, Belmopan Branch, Belize City Branch, Orange Walk Branch, Dangriga Branch, Punta Gorda Branch & MIDWAY (SISTER COMPANY) </p>
              <br />
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base"><strong>4 Convenient Service Shops</strong>&nbsp;
                Spanish Lookout Truck and Auto Service Shop, Belmopan Auto Service Shop
                Belize City Truck and Auto Service Shop, Tractor Service Shop with John Deere certified technicians.</p>
              <br />
              <p><strong>Fast, Friendly Service!</strong>&nbsp;
                The company makes customer service its first priority. “Being customers ourselves, our goal is to give you the service you deserve; we call it the best service” . Westrac focuses in solving problems, asking the right questions, and sharing sound advices.
                .</p> <br />
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                <strong>Complimentary services at any of the locations:</strong>&nbsp;</p>
              <ul className="lg:w-2/3 mx-auto leading-relaxed text-base">
                <li>FREE Windshield Wiper Installation!</li>
                <li>FREE Electrical Testing!</li>
                <li>FREE Battery Installation!</li>
                <li>No-Hassle Returns!</li>
                <li>Low, Ready to Go Prices Every Day!</li>
              </ul>
            </div>
          </div>
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -mx-4 -mb-10 text-center">
              <div className="sm:w-1/2 mb-10 px-4">
                <div className="rounded-lg h-64 overflow-hidden">
                  <Image width="1201" height="501" alt="content" className="object-cover object-center h-full w-full" src="/westrac2.jpg" />
                </div>
              </div>
              <div className="sm:w-1/2 mb-10 px-4">
                <div className="rounded-lg h-64 overflow-hidden">
                  <Image width="1201" height="501" alt="content" className="object-cover object-center h-full w-full" src="/westrac3.jpg" />
                </div>
              </div>
            </div>
          </div>
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Westrac Ltd: Products  & Services offered</h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">They carry many brands of products, such as vehicle & truck  parts, lubricants, Car Care products,  batteries, hand tools, mechanic sets, kitchen appliances, electronic items, guitars, fishing equipment, Gymn equipment, John Deere Tractors, mowers & Tractor parts, etc.

                Westrac Ltd is well known for brands such as Pure guard, Lucas, Monbat, Deka, Wix Filters, Moog, Turtle Wax, PT Tools, Empi, FP Diesel, 4 Seasons, Wagner,
                Koyo, Monroe, etc.
              </p>
            </div>
            <div className="flex flex-wrap -m-4">
              <div className="lg:w-1/3 sm:w-1/2 p-4">
                <div className="flex relative">
                  <Image height="200" width="200" alt="gallery" className="w-full h-full" src="/westrac4.png" />
                </div>
              </div>
              <div className="lg:w-1/3 sm:w-1/2 p-4">
                <div className="flex relative">
                  <Image height="200" width="200" alt="gallery" className="w-full h-full" src="/westrac5.png" />
                </div>
              </div>
              <div className="lg:w-1/3 sm:w-1/2 p-4">
                <div className="flex relative">
                  <Image height="200" width="200" alt="gallery" className="w-full h-full" src="/westrac6.png" />
                </div>
              </div>
              <div className="lg:w-1/3 sm:w-1/2 p-4">
                <div className="flex relative">
                  <Image height="200" width="200" alt="gallery" className="w-full h-full" src="/westrac7.png" />
                </div>
              </div>
              <div className="lg:w-1/3 sm:w-1/2 p-4">
                <div className="flex relative">
                  <Image height="200" width="200" alt="gallery" className="w-full h-full" src="/westrac8.png" />
                </div>
              </div>
            </div>
          </div>
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap w-full mb-20">
              <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Westrac Online Customer Portal</h1>
                <div className="h-1 w-20 bg-pink-500 rounded"></div>
              </div>
              <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">The Westrac online customer Portal is an information system that was created to facilitate the access of information, invoices, returns, payments and other transactions that are carried out daily on customer’s accounts.
                <br />The online portal also allows customers to view the availability of parts at our different locations, request parts from one branch to another,  and additionally have the option to set the parts aside to be picked up at the most convenient store.
                <br />The requirements for customers to have access to the Portal are: <br />
                <br />- Customer’s Account with information such as, Company’s Name, Address, Telephone number
                <br />-Email Address
                <br /><br /><strong>Note:</strong> Customers’ Accounts can have multiple names of persons authorized to purchase under the account but not all of them can have access to the portal.
                The owner of the account decides if only him/her will have access or if they want to add someone else.
                <br /><br />
                The website has a Dashboard where customers are able to see a Purchasing history with a bar graph showing Invoices and Returns, the discount if the account has any, a profile picture, contact information, etc.
                <br />
                In order to protect the discount from the customer’s account specifically those of the employees, each one must provide information of the vehicle that each one owns, to keep track of the parts being bought for that specific vehicle. The information of the vehicles can be accesses by those with access to the client portal.
                <br />
                Approximately 300 customers access the Portal for information their accounts and to order parts through the system.
                <br />
                It can be accessed from a cell phone once the app is downloaded, and the Company’s Accounts Receivables Department approves access.
                <br />
                <br />
                <Link href="https://portal.westrac.bz/login" className="inline-flex text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg">Visit Portal</Link>
              </p>
            </div>
          </div>
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap w-full mb-20">
              <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Management Information System</h1>
                <div className="h-1 w-20 bg-pink-500 rounded"></div>
              </div>
              <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
                Management Information System is the study of people, organizations, technology and the relationship among them. Introducing information system will increase the value of the business.
                The Westrac portal will increase the business value through the following:
                Operational Excellence: the information system will increase flow of value to the customer and improve efficiency and productivity which will result in higher profits.
                New products, services and Business Models: The Westrac portal ensures that customers received the best customer service at their fingertips and provide real-time web services.
                Customer and supplier Intimacy: Customers will be satisfied that purchases can be done at any time and become satisfied customers. Satisfied will become repeated customers and purchase more.
                Improved Decision Making:  The portal will keep a track record of inventory therefore will improve misallocation of item and poor response item.
                Competitive Advantage: The portal will be an advantage over competitors since it is very convenient. This will improve performance and better response to customer.
                Survival: The Westrac portal will very modernised therefore the business will keep up with competitors.

              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
