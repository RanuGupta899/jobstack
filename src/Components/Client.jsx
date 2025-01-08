// ThreeColumnLayout.js
import React from 'react';

const Client = () => {
  return (
    <div className="flex flex-wrap">
      {/* Column 1 */}
      <div
        className="w-full md:w-1/3 h-64 bg-cover bg-center"
        style={{
          backgroundImage: "url('/path/to/your/image1.jpg')",
        }}
      >
        <div className="h-full w-full bg-black bg-opacity-40 flex items-center justify-center text-white">
          <h2 className="text-2xl font-semibold">Column 1</h2>
        </div>
      </div>

      {/* Column 2 */}
      <div
        className="w-full md:w-1/3 h-64 bg-cover bg-center"
        style={{
          backgroundImage: "url('/path/to/your/image2.jpg')",
        }}
      >
        <div className="h-full w-full bg-black bg-opacity-40 flex items-center justify-center text-white">
          <h2 className="text-2xl font-semibold">Column 2</h2>
        </div>
      </div>

      {/* Column 3 */}
      <div
        className="w-full md:w-1/3 h-64 bg-cover bg-center"
        style={{
          backgroundImage: "url('/path/to/your/image3.jpg')",
        }}
      >
        <div className="h-full w-full bg-black bg-opacity-40 flex items-center justify-center text-white">
          <h2 className="text-2xl font-semibold">Column 3</h2>
        </div>
      </div>
    </div>
  );
};

export default Client;
