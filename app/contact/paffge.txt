'use client'; // Add this line at the top

import Image from "next/image";
import { useState } from 'react';
import "@/api/pages/contact";

export default function ContactForm() {
    const [formData, setFormData] = useState({
      name: '',
      prenom:'',
      email: '',
      subject: '',
      message: '',
    });
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setSubmitting(true);
      setSuccess(false);
      setError(false);
  
      try {
        const response = await fetch('/api/pages/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        if (response.ok) {
          setSuccess(true);
          setFormData({ name: '',prenom:'', email: '', subject: '', message: '' });
        } else {
          setError(true);
        }
      } catch (error) {
        console.error('Error sending email:', error);
        setError(true);
      } finally {
        setSubmitting(false);
      }
    };

    return (  
        <div className="min-h-screen bg-black text-white relative">

        <div className="relative z-10 w-full mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="relative h-[250px] w-full mb-8">
          <Image
            src="/pages/contact_head.png"
            alt="Header Background"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            quality={100}
          />
            <div className="absolute inset-0  bg-opacity-50 flex justify-center items-center px-4">
              <h3 className="text-3xl font-bold">Nous Contacter</h3>
              
            </div>
          </div>
         
  
          <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h2 className="text-xl font-medium mb-2">Booking</h2>
              <p className="text-lg">Leo Irwin</p>
              <p className="text-lg">booking@braizerecords.fr</p>
              <p>tel: 01 23 456 7890</p>
            </div>
  
            <div>
              <h2 className="text-xl font-medium mb-2">Press</h2>
              <p className="text-lg">Paula Mason</p>
              <p className="text-lg">press@braizerecords.fr</p>
              <p className="text-lg">tel: 01 23 456 7890</p>
            </div>
  
            <div>
              <h2 className="text-xl font-medium mb-2">Management</h2>
              <p className="text-lg">Byron Madden</p>
              <p className="text-lg">management@braizerecords.fr</p>
              <p className="text-lg">tel: 01 23 456 7890</p>
            </div>
  
            <div>
              <h2 className="text-xl font-medium mb-2">Tour</h2>
              <p className="text-lg">Joan Greenspan</p>
              <p className="text-lg">tour@braizerecords.fr</p>
              <p className="text-lg">tel: 01 23 456 7890</p>
            </div>
          </div>
  
          <div className="mt-12">
          <h2 className="text-lg font-medium mb-4">Send us an e-mail</h2>
        {success && <p className="text-green-500 mb-4">Email sent successfully!</p>}
        {error && <p className="text-red-500 mb-4">Error sending email. Please try again.</p>}
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              className="bg-black border border-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="Name"
              name="name"
              value={FormData.name}
              onChange={handleChange}
              required
            />
            <input
              className="bg-black border border-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <select
            className="mb-4 bg-black border border-white rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-white"
            placeholder="Subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          >
            <option value="">Select Subject</option>
            <option value="Booking">Booking</option>
            <option value="Press">Press</option>
            <option value="Management">Management</option>
            <option value="Tour">Tour</option>
          </select>
          <textarea
            className="mb-4 bg-black border border-white rounded-md px-4 py-2 w-full h-32 focus:outline-none focus:ring-2 focus:ring-white"
            placeholder="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={submitting}
          >
            {submitting ? 'Sending...' : 'Send'}
          </button>
        </form>
      </div>
  
          <div className="mt-12">
            <iframe
              src={`https://maps.google.com/maps?q=5%20allee%20de%20la%20grande%20treille%2035000%20Rennes&t=&z=13&ie=UTF8&iwloc=&output=embed`}
              width="100%"
              height="450"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen={true}
              aria-hidden="false"
              tabIndex="0"
            />
          </div>
        </div>
      </div>
     ); // Add the closing parenthesis here
}