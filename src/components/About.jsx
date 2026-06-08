import React from 'react'

const About = () => {
  return (
 <div className="max-w-4xl mx-auto p-6 text-center">
      <h1 className="text-3xl font-bold text-green-600 mb-4">About Us</h1>
      <p className="text-gray-700 mb-6">
        Welcome to <span className="font-semibold">FoodieExpress</span> – your
        one-stop destination for delicious meals delivered right to your door.
        We believe food should be fresh, fast, and affordable.
      </p>

      <div className="grid md:grid-cols-3 gap-6 text-left">
        <div className="p-4 border rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-2">🍲 Fresh Ingredients</h2>
          <p className="text-gray-600">
            We partner with local restaurants and chefs to bring you meals made
            with the freshest ingredients.
          </p>
        </div>

        <div className="p-4 border rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-2">⚡ Fast Delivery</h2>
          <p className="text-gray-600">
            Our delivery network ensures your food arrives hot and on time,
            every time.
          </p>
        </div>

        <div className="p-4 border rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-2">💚 Customer First</h2>
          <p className="text-gray-600">
            Your satisfaction is our priority. We’re here to make ordering food
            simple, enjoyable, and stress-free.
          </p>
        </div>
      </div>

      <p className="mt-8 text-gray-700">
        Whether you’re craving comfort food, a quick snack, or a gourmet meal,
        <span className="font-semibold"> FoodieExpress</span> has you covered.
      </p>
    </div>
  )
}

export default About
