import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    return (
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <Image height="80" width="80" alt="contact" className="w-16 h-16 text-white object-cover object-center flex-shrink-0 rounded-full mr-4" src="/westrac-logo.png" />
                    <span className="ml-3 text-xl">Westract Ltd - Management Information Systems</span>
                </Link>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <Link href="/" className="mr-5 hover:text-gray-900">Home</Link>
                    <Link href="/about" className="mr-5 hover:text-gray-900">About Us</Link>
                    <Link href="/contact" className="mr-5 hover:text-gray-900">Contact Us</Link>
                </nav>
            </div>
        </header>
    )
}