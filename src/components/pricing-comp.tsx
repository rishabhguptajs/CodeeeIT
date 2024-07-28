import Image from 'next/image'
import React from 'react'

const PricingComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 max-w-md w-full">
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-4">Pre-Launch Offer</h2>
        <p className="text-lg text-center text-gray-700 dark:text-gray-300 mb-6">
          Enjoy all features for free during our pre-launch phase!
        </p>
        <div className="text-center">
          <span className="text-4xl font-extrabold text-gray-900 dark:text-white">Its Free!</span>
        </div>
      </div>
    </div>
  )
}

export default PricingComponent
