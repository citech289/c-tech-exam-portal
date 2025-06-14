import React from 'react'

const InstructionPage = () => {
 return (
    <div className="h-screen bg-white text-gray-900 p-4 md:p-8 overflow-hidden">
      <div className="flex h-full gap-10">
        {/* Sticky Left Column (40%) */}
        <div className="w-[40%] space-y-6 sticky top-0 self-start h-fit">
          <img
        //    src="/src/assets/logo.png"
        //     alt="company-logo"
        //     className="w-24 mb-4"
          />
          <p className="text-xl text-gray-700">Hey User Name,</p>
          <h1 className="text-5xl font-bold leading-snug">
            Welcome to <br /> Ci-STEM Information Technology Services Private Limited
          </h1>
          <div className="text-sm flex  text-gray-600 space-x-6">
            <span>
              <strong>Test duration</strong> <br /> 60 mins
            </span>
            
            <span>
              <strong>No. of questions</strong> <br /> 60 questions
            </span>
          </div>
        </div>

        {/* Scrollable Right Column (60%) */}
        <div className="w-[60%] overflow-y-auto pr-2 space-y-8 -mt-8">
          {/* Instructions */}
          <div className="bg-gray-100 p-6 rounded shadow-sm space-y-4 ">
            <h2 className="text-lg font-semibold mt-50">Instructions</h2>
            <div className="space-y-2 text-sm">
              <p className="font-semibold">How Test Timing Works</p>
              <p>
                Please make sure you can complete this test in one sitting as the timer cannot be stopped once you begin...
              </p>

              <p className="font-semibold">A Few Things to Consider:</p>
              <ul className="list-disc list-inside">
                <li>This is a programming test. Be prepared to encounter programming/coding challenges.</li>
                <li>You must submit a response to all questions to be considered complete.</li>
                <li>Ensure a stable internet connection and use a modern browser (Chrome 12+ or Firefox 10+).</li>
                <li>You will need to return to this page to begin the actual test.</li>
                <li>Go through this links.</li>
                <li>There will be an opportunity to share feedback after submitting the test.</li>
              </ul>

              <p className="font-semibold">Test Instructions</p>
              <p>
                If the code area contains the function signature, complete the function alone. For coding questions, print outputs using standard syntax.
              </p>
            </div>
            <div className="flex gap-3">
              <button className="border border-[#2e5c84] bg-orange-500 text-white px-4 py-2 rounded hover:bg-gradient-to-r from-[#2e5c84] to-orange-500 transition cursor-pointer">
                Continue
              </button>
              {/* <button className="border border-[#2e5c84] text-[#2e5c84] px-4 py-2 rounded hover:bg-orange-50 cursor-pointer">
                Try Sample Test
              </button> */}
            </div>
          </div>

          {/* Sections */}
          <div className="bg-gray-100 p-6 rounded shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Sections</h2>
            <p className="text-sm mb-4">There are 2 sections that are part of this test.</p>
            <div className="overflow-x-auto">
              <table className="w-full table-auto text-sm text-left border">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="p-2 border">Number</th>
                    <th className="p-2 border">Section</th>
                    <th className="p-2 border">Questions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2 border">1</td>
                    <td className="p-2 border">Coding (Standard 1)</td>
                    <td className="p-2 border">1</td>
                  </tr>
                  <tr>
                    <td className="p-2 border">2</td>
                    <td className="p-2 border">Coding (Standard 2)</td>
                    <td className="p-2 border">1</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex gap-3 mt-4">
              <button className="border border-[#2e5c84] bg-orange-500 text-white px-4 py-2 rounded hover:bg-gradient-to-r from-[#2e5c84] to-orange-500 transition cursor-pointer">
                Continue
              </button>
              <button className="border border-[#2e5c84] text-[#2e5c84] px-4 py-2 rounded hover:bg-orange-50 cursor-pointer">
                Try Sample Test
              </button>
            </div>
          </div>

          {/* Confirmation Form */}
          <div className="bg-gray-100 p-6 rounded shadow-sm mb-10">
            <h2 className="text-lg font-semibold mb-4">Confirmation</h2>
            <p className="text-sm mb-4">Please confirm to proceed further.</p>
            <div className="flex gap-3">
              <button className="border border-[#2e5c84] bg-orange-500 text-white px-4 py-2 rounded hover:bg-gradient-to-r from-[#2e5c84] to-orange-500 transition cursor-pointer">
                Confirm
              </button>
              <button className="border border-[#2e5c84] text-[#2e5c84] px-4 py-2 rounded hover:bg-orange-50 cursor-pointer">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InstructionPage