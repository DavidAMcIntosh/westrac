export default function Contact() {
    return (
        <main className="text-gray-600 body-font relative">
            <div className="absolute inset-0 bg-gray-300">
                <iframe width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" title="map" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=university%20of%20belize%20belmopan&ie=UTF8&t=&z=14&iwloc=B&output=embed"></iframe>
            </div>
            <div className="container px-5 py-24 mx-auto flex">
                <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
                    <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Contact Us</h2>
                    <p className="leading-relaxed mb-5 text-gray-600">Send Us A Message</p>
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                        <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                    </div>
                    <button className="text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg">Send</button>
                </div>
            </div>
        </main>
    )
}