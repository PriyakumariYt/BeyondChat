"use client"

import { useState } from "react"

export default function ChatbotIntegration({
  nextStep,
  prevStep,
  updateUserData,
}: { nextStep: () => void; prevStep: () => void; updateUserData: (data: any) => void }) {
  const [showPopup, setShowPopup] = useState(false)
  const [popupContent, setPopupContent] = useState("")

  const testChatbot = () => {
    window.open("https://example.com", "_blank")
  }

  const showIntegrationInstructions = () => {
    setPopupContent(`
      <h3 class="text-lg font-bold mb-2">Integration Instructions</h3>
      <p>Copy and paste the following code within the &lt;head&gt; tag of your website:</p>
      <pre class="bg-gray-100 p-2 mt-2 rounded"><code>&lt;script src="https://beyondchats.com/widget.js"&gt;&lt;/script&gt;</code></pre>
    `)
    setShowPopup(true)
  }
  



  const testIntegration = () => {
    setPopupContent(`
      <h3 class="text-lg font-bold mb-2">Testing Integration</h3>
      <p>Please wait while we test the integration...</p>
    `)
    setShowPopup(true)

    setTimeout(() => {
      setPopupContent(`
        <h3 class="text-lg font-bold mb-2">Integration Successful!</h3>
        <p>Your chatbot has been successfully integrated with your website.</p>
      `)
    }, 2000)
  }

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-6">Chatbot Integration & Testing</h2>
      <div className="space-y-4">
        <button onClick={testChatbot} className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Test Chatbot
        </button>
        <button
          onClick={showIntegrationInstructions}
          className="w-full p-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Integrate on your website
        </button>
     
              <button
                  onClick={nextStep}
                //   onClick={testIntegration}
                  className="w-full p-2 bg-purple-500 text-white rounded hover:bg-purple-600">
          Test Integration
        </button>
      </div>
      <div className="mt-6 flex justify-between">
        <button onClick={prevStep} className="p-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400">
          Back
        </button>
        {/* <button onClick={nextStep} className="p-2 bg-green-500 text-white rounded hover:bg-green-600">
          Next
        </button> */}
      </div>

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg max-w-md w-full">
            <div dangerouslySetInnerHTML={{ __html: popupContent }} />
            <button
              onClick={() => setShowPopup(false)}
              className="mt-4 p-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

