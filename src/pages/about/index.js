import Image from "next/image"
import Link from "next/link"
export default function About() {
    return (
        <main className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">OUR TEAM</h1>
                </div>

                <div className="flex flex-wrap -m-4">
                    <div className="p-4 lg:w-1/2">
                        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                            <Image width="204" height="204" alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="/dalix.jpg" />
                            <div className="flex-grow sm:pl-8">
                                <h2 className="title-font font-medium text-lg text-gray-900">Dalix Mendez</h2>
                                <h3 className="text-gray-500 mb-3">Group Leader</h3>
                                <p className="mb-4">My name is Dalix Mendez. I&apos;m 29 years old, from Valley of Peace Village, Cayo District. My favorite sport is football and my favorite food is pasta Alfredo.
                                    I&apos;m currently pursuing my Bachelor&apos;s Degree in Business Administration with concentration in Management. I am a full time employee working for more than four years at Westrac Ltd, Belmopan Branch. My position is Assistant to the Warehouse Supervisor and I carry about many duties specifically dealing with stock that is received and sent out to other branches.
                                    I also perform cashier duties when needed and often lend a helping hand to other departments that might need assistance.
                                    I consider myself a respectable, dedicated and hardworking individual who always look forward to performing at my best for any duties and responsibilities that I am assigned.
                                </p>
                                <span className="inline-flex">
                                    <Link target="_" href="/dalix.pdf">
                                        <button class="inline-flex text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg">View Resume</button>
                                    </Link>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 lg:w-1/2">
                        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                            <Image width="204" height="204" alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="/celine.jpeg" />
                            <div className="flex-grow sm:pl-8">
                                <h2 className="title-font font-medium text-lg text-gray-900">Celine McIntosh</h2>
                                <h3 className="text-gray-500 mb-3">Group Member</h3>
                                <p className="mb-4">Hi, I am Celine Deanne McIntosh. I recently completed my Associates Degree in Business Studies at Wesley Junior College, and also did  couple courses at The Young Women&apos;s Christian Association (YWCA) in Nail Technology. This is my first semester at University of Belize. I am currently enrolled in the Bachelor&apos;s Degree in Business Administration Major (Management) Program. I have two sons and I like to cook. I currently work in my family’s clothing business and in my spare time I do nails.</p>
                                <span className="inline-flex">
                                    <Link target="_" href="/celine.pdf">
                                        <button class="inline-flex text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg">View Resume</button>
                                    </Link>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 lg:w-1/2">
                        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                            <Image width="204" height="204" alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="/angelica.jpeg" />
                            <div className="flex-grow sm:pl-8">
                                <h2 className="title-font font-medium text-lg text-gray-900">Angelica Cifuentes</h2>
                                <h3 className="text-gray-500 mb-3">Group Member</h3>
                                <p className="mb-4">Hi my name is Angelica Cifuentes. I&apos;m enrolled as a part time student. I live in St. Matthew&apos;s village. I&apos;m employed by the Government of Belize  through the MIDH. I&apos;m currently pursuing my bachelors degree in business administration concentrating in management.</p>
                                <span className="inline-flex">
                                    <Link target="_" href="/angelica.pdf">
                                        <button class="inline-flex text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg">View Resume</button>
                                    </Link>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 lg:w-1/2">
                        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                            <Image width="204" height="204" alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="/adelita.jpeg" />
                            <div className="flex-grow sm:pl-8">
                                <h2 className="title-font font-medium text-lg text-gray-900">Adelita Carrillo</h2>
                                <h3 className="text-gray-500 mb-3">Group Member</h3>
                                <p className="mb-4">Hello, my name is Adelita Carrillo. I am enrolled in the Bachelor’s program at the University of Belize. My course of study entails Business Administration with a major in Management. Professionally, I am banker at the Atlantic Bank Ltd. I spend majority of my time at work assisting customer with solving problems they encounter and  providing the best service. I enjoying traveling and listening to music. I always look forward to spending time with my family and friends. I am looking forward to one day becoming a great manager.</p>
                                <span className="inline-flex">
                                    <Link target="_" href="/adelita.pdf">
                                        <button class="inline-flex text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg">View Resume</button>
                                    </Link>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 lg:w-1/2">
                        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                            <Image width="204" height="204" alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="/roselia.jpg" />
                            <div className="flex-grow sm:pl-8">
                                <h2 className="title-font font-medium text-lg text-gray-900">Roselia Rivera</h2>
                                <h3 className="text-gray-500 mb-3">Group Member</h3>
                                <p className="mb-4">My name is Roselia Rivera, I am 38 years old and have 1 child. I am working with Ministry of Human Development for 1 year now. I achieve my Associates Degree in Business at Wesley Junior College and is currently doing my Bachelors Degree with Major in Management at the University of Belize. Working in the public sector is so different for me because since u started working at the age of 18, I have always been working in private sector. Besides being a Hardworking and flexible individual with a strong drive to succeed I am willing and open to learn and push forward in order to achieve my goals.</p>
                                <span className="inline-flex">
                                    <Link target="_" href="/roselia.pdf">
                                        <button class="inline-flex text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg">View Resume</button>
                                    </Link>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}