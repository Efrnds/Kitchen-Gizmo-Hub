import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
    return (
        <div className="py-4 bg-stone-300">
            <div className="flex justify-between items-center mx-8">
                <p className="">2024 &copy; Kitchen Gizmo Hub</p>
                <div className="flex items-center space-x-4">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="text-gray-500 hover:text-gray-700" />
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter className="text-gray-500 hover:text-gray-700" />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="text-gray-500 hover:text-gray-700" />
                    </a>
                </div>
                <div className="flex flex-col space-y-2">
                    <p>1234 Main Street</p>
                    <p>City, State, ZIP</p>
                    <p>Phone: 123-456-7890</p>
                    <p>Email: info@example.com</p>
                </div>
            </div>
        </div>
    );
}
