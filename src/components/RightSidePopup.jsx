import { useState, useEffect, useRef } from "react";

export default function RightSidePopup() {
  const [isOpen, setIsOpen] = useState(false);
  const popupRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="fixed right-0 top-96 transform -translate-y-1/2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded shadow-lg hover:from-blue-600 hover:to-purple-700"
      >
        <h1>LATEST EVENTS</h1>
        <h1> नवीनतम कार्यक्रम</h1>
      </button>

      {isOpen && (
        <div
          ref={popupRef}
          className="fixed right-0 -top-32 transform -translate-y-1/2 bg-orange-300 p-2 shadow-lg w-auto"
        >
          <table className="border-collapse border ">
            <thead>
              <tr className="bg-orange-500 text-black">
                <th className="border border-gray-300 px-4 py-2 whitespace-nowrap">प्रारंभ तिथि</th>
                <th className="border border-gray-300 px-4 py-2 whitespace-nowrap">समाप्ति तिथि</th>
                <th className="border border-gray-300 px-4 py-2 whitespace-nowrap">वक्ता</th>
                <th className="border border-gray-300 px-4 py-2 whitespace-nowrap">स्थान</th>
              </tr>
            </thead>
            <tbody>
              {[ 
                { start: "2023-05-17", end: "2023-05-23", speaker: "स्वामी अभयानन्द सरस्वती जी महाराज", location: "गाजियाबाद" },
                { start: "2023-07-03", end: "2023-07-03", speaker: "अनंत श्री विभूषित महामंडलेश्वर सदगुरुदेव स्वामी अभयानंद सरस्वती जी", location: "लखनऊ" },
                { start: "2023-07-15", end: "2023-07-15", speaker: "स्वामी अभयानंद सरस्वती जी", location: "लखनऊ" }
              ].map((event, index) => (
                <tr key={index} className="bg-orange-500 text-black hover:bg-white">
                  <td className="border border-gray-300 px-4 py-2 whitespace-nowrap cursor-pointer">{event.start}</td>
                  <td className="border border-gray-300 px-4 py-2 whitespace-nowrap cursor-pointer">{event.end}</td>
                  <td className="border border-gray-300 px-4 py-2 whitespace-nowrap cursor-pointer">{event.speaker}</td>
                  <td className="border border-gray-300 px-4 py-2 whitespace-nowrap cursor-pointer">{event.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
