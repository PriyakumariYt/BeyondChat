"use client"

export default function SuccessPage({ userData }: { userData: any },) {
  return (
    <div className="max-w-md mx-auto text-center">
      <h2 className="text-2xl font-bold mb-6">🎉 Integration Successful!</h2>
      <p className="mb-4">
        Congratulations, {userData.name}! Your chatbot for {userData.companyName} has been successfully integrated.
      </p>
      <button className="w-full p-2 mb-4 bg-blue-500 text-white rounded hover:bg-blue-600">Explore Admin Panel</button>
      <button className="w-full p-2 mb-4 bg-green-500 text-white rounded hover:bg-green-600">
        Start talking to your chatbot
      </button>
      <div className="flex justify-center space-x-4">
        <button className="p-2 bg-blue-600 text-white rounded hover:bg-blue-700">Facebook</button>
        <button className="p-2 bg-blue-400 text-white rounded hover:bg-blue-500">Twitter</button>
        <button className="p-2 bg-blue-700 text-white rounded hover:bg-blue-800">LinkedIn</button>
      </div>
          <p className="mt-4 text-sm text-gray-500">Share your success with your network!</p>
         
    </div>
  )
}

