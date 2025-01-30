"use client"

import { useState } from "react"

export default function OrganizationSetup({
  nextStep,
  prevStep,
  updateUserData,
}: { nextStep: () => void; prevStep: () => void; updateUserData: (data: any) => void }) {
  const [companyName, setCompanyName] = useState("")
  const [websiteUrl, setWebsiteUrl] = useState("")
  const [companyDescription, setCompanyDescription] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    updateUserData({ companyName, websiteUrl, companyDescription })
    nextStep()
  }

  const fetchMetaDescription = () => {
    setCompanyDescription("This is an auto-fetched meta description for " + companyName)
  }

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-6">Setup Organization</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Company Name"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="url"
          placeholder="Company Website URL"
          value={websiteUrl}
          onChange={(e) => setWebsiteUrl(e.target.value)}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
        <textarea
          placeholder="Company Description"
          value={companyDescription}
          onChange={(e) => setCompanyDescription(e.target.value)}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button
          onClick={fetchMetaDescription}
          type="button"
          className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Auto-fetch Description
        </button>
        <button type="submit" className="w-full p-2 bg-green-500 text-white rounded hover:bg-green-600">
          Next
        </button>
      </form>
      <button onClick={prevStep} className="w-full mt-4 p-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400">
        Back
      </button>
    </div>
  )
}

