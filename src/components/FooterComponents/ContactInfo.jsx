import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaMap } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <section className="grid md:grid-cols-3 gap-6 text-center text-sm text-gray-600">
      <div>
        <FaPhone className="text-purple-600 text-3xl mx-auto mb-2" />
        <h3 className="font-semibold">Phone</h3>
        <a href="tel:+15551234567" className="hover:underline block mt-1">
          (555) 123-4567
        </a>
      </div>
      <div>
        <FaEnvelope className="text-purple-600 text-3xl mx-auto mb-2" />
        <h3 className="font-semibold">Email</h3>
        <a href="mailto:info@dunamis.org" className="hover:underline block mt-1">
          info@dunamis.org
        </a>
      </div>
      <div>
        <FaMapMarkerAlt className="text-purple-600 text-3xl mx-auto mb-2" />
        <h3 className="font-semibold">Address</h3>
        <a
          href="https://maps.google.com?q=123+Faith+Avenue+Spiritual+City"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline block mt-1"
        >
          123 Faith Avenue, Spiritual City, SC 12345
        </a>
        <div className="mt-2">
          <a
            href="https://maps.google.com?q=123+Faith+Avenue+Spiritual+City"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-600 hover:underline text-xs flex justify-center items-center gap-1"
          >
            <FaMap /> View on Google Maps
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
