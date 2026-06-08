import React from 'react'

const Contact = () => {
  return (
   <div className="max-w-4xl mx-auto p-6 text-center">
      <h1 className="text-3xl font-bold text-green-600 mb-4">Contact Us</h1>
      <p className="text-gray-700 mb-6">
        Have questions, feedback, or need support? We’d love to hear from you!
        Our team is here to make your food ordering experience smooth and
        enjoyable.
      </p>

      <div className="grid md:grid-cols-2 gap-6 text-left">
        <div className="p-4 border rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-2">📞 Phone</h2>
          <p className="text-gray-600">Call us at: +91 98765 43210</p>
        </div>

        <div className="p-4 border rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-2">📧 Email</h2>
          <p className="text-gray-600">support@foodieexpress.com</p>
        </div>

        <div className="p-4 border rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-2">📍 Address</h2>
          <p className="text-gray-600">
            FoodieExpress HQ, MG Road, Bengaluru, India
          </p>
        </div>

        <div className="p-4 border rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-2">⏰ Working Hours</h2>
          <p className="text-gray-600">Mon – Sun: 9 AM – 11 PM</p>
        </div>
      </div>

      <p className="mt-8 text-gray-700">
        You can also reach out to us via our social media channels for quick
        updates and support.
      </p>
    </div>
  )
}

export default Contact
