 
import React from 'react';
import Image from 'next/image';

// TypeScript enum
enum Role {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST"
}

// Static data
const staticData = {
  string: "Hello, TypeScript!",
  number: 2025,
  boolean: false,
  nullValue: null,
  undefinedValue: undefined,
  array: [1, "two", true],
  tuple: ["ID123", 100] as [string, number],
  object: {
    name: "Apsal Jamal",
    email: "jamalapsal@gmail.com",
    college: "SRI KRISHNA COLLEGE OF ENGINEERING AND TECHNOLOGY"
  },
  nestedObject: {
    user: {
      id: 1,
      username: "jamal123",
      roles: [Role.Admin, Role.User]
    }
  },
  date: new Date("2025-07-30"),
  functionExample: () => "Function called!",
  bigInt: BigInt("98765432109876543210"),
  symbol: Symbol("uniqueSymbol"),
  map: new Map([
    ["key1", "value1"],
    ["key2", "value2"]
  ]),
  set: new Set([1, 2, 3, 3]),
  roleEnum: Role.Guest,

  imageUrl: "https://www.powertrafic.fr/wp-content/uploads/2023/04/image-ia-exemple.png",
  pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
  videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
};

const AllDataTypesComponent: React.FC = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow space-y-4">
      <h2 className="text-2xl font-bold text-blue-600">All JavaScript/TypeScript Data Types</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-800">
        <div><strong>String:</strong> {staticData.string}</div>
        <div><strong>Number:</strong> {staticData.number}</div>
        <div><strong>Boolean:</strong> {staticData.boolean.toString()}</div>
        <div><strong>Null:</strong> {String(staticData.nullValue)}</div>
        <div><strong>Undefined:</strong> {String(staticData.undefinedValue)}</div>
        <div><strong>Array:</strong> {JSON.stringify(staticData.array)}</div>
        <div><strong>Tuple:</strong> {JSON.stringify(staticData.tuple)}</div>
        <div><strong>Object:</strong> {JSON.stringify(staticData.object)}</div>
        <div><strong>Nested Object:</strong> {JSON.stringify(staticData.nestedObject)}</div>
        <div><strong>Date:</strong> {staticData.date.toUTCString()}</div>
        <div><strong>Function:</strong> {staticData.functionExample()}</div>
        <div><strong>BigInt:</strong> {staticData.bigInt.toString()}</div>
        <div><strong>Symbol:</strong> {staticData.symbol.toString()}</div>
        <div>
          <strong>Map:</strong>{" "}
          {Array.from(staticData.map.entries()).map(([k, v]) => `${k}: ${v}`).join(", ")}
        </div>
        <div>
          <strong>Set:</strong> {[...staticData.set].join(", ")}
        </div>
        <div><strong>Enum (Role.Guest):</strong> {staticData.roleEnum}</div>

        <div>
          <strong>Dummy Image (Next.js Image):</strong><br />
          <Image
            src={staticData.imageUrl}
            alt="Dummy"
            width={150}
            height={100}
            className="rounded shadow"
          />
        </div>

        <div>
          <strong>Dummy PDF:</strong><br />
          <a
            href={staticData.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            View PDF
          </a>
        </div>

        <div className="md:col-span-2">
          <strong>Dummy Video:</strong><br />
          <video
            src={staticData.videoUrl}
            controls
            className="w-full max-w-md rounded shadow mt-2"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default AllDataTypesComponent;
