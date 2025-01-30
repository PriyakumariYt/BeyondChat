"use client"

import { useState, useEffect } from "react"

export default function WebsiteScraping({
  nextStep,
  prevStep,
  updateUserData,
}: { nextStep: () => void; prevStep: () => void; updateUserData: (data: any) => void }) {
  const [pages, setPages] = useState([
    { url: "/home", status: "scraped" },
    { url: "/about", status: "scraped" },
    { url: "/products", status: "pending" },
    { url: "/contact", status: "detected" },
  ])
  const [selectedPage, setSelectedPage] = useState<{ url: string; status: string } | null>(null)
  const [scrapedData, setScrapedData] = useState<string[]>([])

  useEffect(() => {
    const interval = setInterval(() => {
      setPages((prevPages) =>
        prevPages.map((page) => (page.status === "pending" ? { ...page, status: "scraped" } : page)),
      )
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  const handlePageClick = (page: { url: string; status: string }) => {
    setSelectedPage(page)
    setScrapedData([
      "This is a chunk of scraped data",
      "Another chunk of data from the page",
      "More information scraped from the website",
    ])
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Website Scraping</h2>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 pr-4">
          <h3 className="text-lg font-semibold mb-2">Detected Pages</h3>
          <ul className="space-y-2">
            {pages.map((page, index) => (
              <li
                key={index}
                className={`cursor-pointer p-2 rounded ${
                  page.status === "scraped"
                    ? "bg-green-100"
                    : page.status === "pending"
                      ? "bg-yellow-100"
                      : "bg-gray-100"
                }`}
                onClick={() => handlePageClick(page)}
              >
                {page.url} - {page.status}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-1/2 pl-4 mt-4 md:mt-0">
          <h3 className="text-lg font-semibold mb-2">Scraped Data</h3>
          {selectedPage ? (
            <div>
              <h4 className="font-medium">{selectedPage.url}</h4>
              <ul className="list-disc pl-5 mt-2">
                {scrapedData.map((chunk, index) => (
                  <li key={index}>{chunk}</li>
                ))}
              </ul>
            </div>
          ) : (
            <p>Select a page to view scraped data</p>
          )}
        </div>
      </div>
      <div className="mt-6 flex justify-between">
        <button onClick={prevStep} className="p-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400">
          Back
        </button>
        <button onClick={nextStep} className="p-2 bg-green-500 text-white rounded hover:bg-green-600">
          Next
        </button>
      </div>
    </div>
  )
}

