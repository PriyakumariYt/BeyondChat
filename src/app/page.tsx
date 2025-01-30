"use client"
import { useState } from "react"
import Registration from "./components/Registration"
import OrganizationSetup from "./components/OrganizationSetup"
import WebsiteScraping from "./components/WebsiteScraping"
import ChatbotIntegration from "./components/ChatbotIntegration"
import SuccessPage from "./components/SuccessPage"

export default function Home() {
  const [step, setStep] = useState(1)
  const [userData, setUserData] = useState({})

  const nextStep = () => setStep(step + 1)
  const prevStep = () => setStep(step - 1)

  const updateUserData = (data: any) => {
    setUserData({ ...userData, ...data })
  }

  return (
    // <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
    <div className="min-h-screen bg-gradient-to-r from-pink-100 via-pink-200 to-pink-300 py-6 flex flex-col justify-center sm:py-12">

      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          {step === 1 && <Registration nextStep={nextStep} updateUserData={updateUserData} />}
          {step === 2 && <OrganizationSetup nextStep={nextStep} prevStep={prevStep} updateUserData={updateUserData} />}
          {step === 3 && <WebsiteScraping nextStep={nextStep} prevStep={prevStep} updateUserData={updateUserData} />}
          {step === 4 && <ChatbotIntegration nextStep={nextStep} prevStep={prevStep} updateUserData={updateUserData} />}
          {step === 5 && <SuccessPage userData={userData} />}
        </div>
      </div>
    </div>
  )
}

