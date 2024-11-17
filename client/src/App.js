import React, { useState, useEffect } from 'react';
import clsx from "clsx";
import './App.css';  // Add this import
import Meteors from "./Meteors";


function MyButton() {
  return (
    <button>react button</button>
  );
}



function App() {
  const [data, setData] = useState([{}]);

  useEffect(() => {
    fetch("/members")
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then(data => {
        if (!data) {
          throw new Error('No data received');
        }
        setData(data);
        console.log('Received data:', data);
      })
      .catch(error => {
        console.error('Fetch error:', error);
        setData([]);
      });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <Meteors />
      <div className="flex flex-col items-center gap-4">
        <p className="title text-white text-3xl">Ascipiter</p>
        
        <div className="flex items-center justify-center">
          <div className="relative w-full max-w-2xl p-4">
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
            <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-6 py-8 rounded-2xl flex flex-col gap-4">
              <div className="h-5 w-5 rounded-full border flex items-center justify-center border-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-2 w-2 text-gray-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                  />
                </svg>
              </div>

              <h1 className="font-bold text-xl text-white relative z-50">
                Meteor Demo
              </h1>

              <p className="font-normal text-base text-slate-500 relative z-50">
                I am in so so far over my head, what do I do?
                anyway lets display the caf menu:
                <pre>{JSON.stringify(data, null, 2)}</pre>
              </p>

              <button className="border px-4 py-1 rounded-lg !text-sm border-gray-500 text-gray-300">
                More &rarr;
              </button>
            </div>
          </div>
        </div>

        <div>
          <pre>{JSON.stringify(data, null, 2)}</pre>
          <MyButton />
        </div>
      </div>
    </div>
  );
}

export default App;