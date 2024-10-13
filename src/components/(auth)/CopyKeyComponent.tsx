// "use client";
// import React, { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";

// const CopyKeyComponent = ({ serverAuth }: any) => {
//   const [activationKey, setActivationKey] = useState(
//     "YOUR-ACTIVATION-KEY-HERE"
//   );
//   const [copied, setCopied] = useState(false);
//   const [isAuthenticated, setIsAuthenticated] = useState(
//     serverAuth.isAuthenticated
//   );
//   const router = useRouter();

//   useEffect(() => {
//     const checkClientSideAuth = async () => {
//       // You can add additional client-side auth checks here if needed
//       console.log(
//         "serverAuth.isAuthenticated",
//         serverAuth.isAuthenticated,
//         "refreshToken",
//         serverAuth.refreshToken,
//         "accessToken",
//         serverAuth.accessToken
//       );
//       setIsAuthenticated(serverAuth.isAuthenticated);
//     };

//     checkClientSideAuth();
//   }, [serverAuth.isAuthenticated]);

//   useEffect(() => {
//     if (!isAuthenticated) {
//       const timer = setTimeout(() => {
//         router.push("/login");
//       }, 4000);

//       return () => clearTimeout(timer);
//     }
//   }, [isAuthenticated, router]);

//   const copyToClipboard = () => {
//     navigator.clipboard.writeText(activationKey);
//     setCopied(true);
//     setTimeout(() => setCopied(false), 3000);
//   };

//   if (!isAuthenticated) {
//     return (
//       <div className="bg-white rounded-lg shadow-md p-6 max-w-[610px] mx-auto">
//         <p className="text-red-600 text-center text-[18px]">
//           You have to login first to get the key.
//           <br /> Redirecting to login page...
//         </p>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-white rounded-lg shadow-md p-6 max-w-[610px] mx-auto">
//       <h2 className="text-2xl font-semibold text-gray-800 mb-4">
//         Extension Activation Key
//       </h2>

//       <div className="flex mb-4">
//         <input
//           type="text"
//           value={activationKey}
//           readOnly
//           className="flex-grow px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none "
//         />
//         <button
//           onClick={copyToClipboard}
//           className="bg-mainBlue hover:bg-mainBlue text-white px-4 py-2 rounded-r-md transition duration-300 ease-in-out"
//         >
//           Copy
//         </button>
//       </div>

//       {copied && (
//         <div className="mb-4 text-green-600 bg-green-100 p-2 rounded-md">
//           Key copied successfully!
//         </div>
//       )}

//       <div className="bg-lightBlue p-4 mt-4">
//         <p className="text-black">
//           <strong>Note:</strong> Do not share this activation key with anyone.
//           It is unique to your account and should be kept confidential.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default CopyKeyComponent;

// // "use client";
// // import React, { useEffect, useState } from "react";
// // import { useRouter } from "next/navigation";
// // import Cookies from "js-cookie";
// // import AuthCheck from "@/lib/AuthCheck";

// // const CopyKeyComponent = async ({ serverAuth }) => {
// //   const [activationKey, setActivationKey] = useState(
// //     "YOUR-ACTIVATION-KEY-HERE"
// //   );
// //   // const activationKey = "YOUR-ACTIVATION-KEY-HERE";
// //   const [copied, setCopied] = useState(false);
// //   const [isAuthenticated, setIsAuthenticated] = useState(false);
// //   const router = useRouter();
// //   // const cookieStore = cookies();

// //   useEffect(() => {
// //     const checkAuthentication = async () => {
// //       try {
// //         const { accessToken, refreshToken } = await AuthCheck();
// //         console.log(
// //           "Access token:",
// //           accessToken,
// //           "Refresh token:",
// //           refreshToken
// //         );
// //         setIsAuthenticated(!!accessToken && !!refreshToken);

// //         if (!accessToken || !refreshToken) {
// //           const timer = setTimeout(() => {
// //             router.push("/login"); // Adjust this path to your login page
// //           }, 4000);

// //           return () => clearTimeout(timer);
// //         }
// //       } catch (error) {
// //         console.error("Error checking authentication:", error);
// //         setIsAuthenticated(false);
// //       }
// //     };

// //     checkAuthentication();
// //   }, [router]);

// //   const copyToClipboard = () => {
// //     navigator.clipboard.writeText(activationKey);
// //     setCopied(true);
// //     setTimeout(() => setCopied(false), 3000);
// //   };

// //   if (!isAuthenticated) {
// //     return (
// //       <div className="bg-white rounded-lg shadow-md p-6 max-w-[610px] mx-auto">
// //         <p className="text-red-600 text-center text-[18px]">
// //           You have to login first to get the key.
// //           <br /> Redirecting to login page...
// //         </p>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="bg-white rounded-lg shadow-md p-6 max-w-[610px] mx-auto">
// //       <h2 className="text-2xl font-semibold text-gray-800 mb-4">
// //         Extension Activation Key
// //       </h2>

// //       <div className="flex mb-4">
// //         <input
// //           type="text"
// //           value={activationKey}
// //           readOnly
// //           className="flex-grow px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
// //         />
// //         <button
// //           onClick={copyToClipboard}
// //           className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-md transition duration-300 ease-in-out"
// //         >
// //           Copy
// //         </button>
// //       </div>

// //       {copied && (
// //         <div className="mb-4 text-green-600 bg-green-100 p-2 rounded-md">
// //           Key copied successfully!
// //         </div>
// //       )}

// //       <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
// //         <p className="text-yellow-700">
// //           <strong>Note:</strong> Do not share this activation key with anyone.
// //           It is unique to your account and should be kept confidential.
// //         </p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default CopyKeyComponent;

"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import api from "@/lib/api";

const CopyKeyComponent = ({ serverAuth }: { serverAuth: any }) => {
  const [activationKey, setActivationKey] = useState("Loading...");
  const [copied, setCopied] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkAuthAndFetchKey = async () => {
      // Add a delay of 1 second
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setIsAuthenticated(serverAuth.isAuthenticated);

      if (serverAuth.isAuthenticated && serverAuth.accessToken) {
        try {
          const response = await api.post(
            "auth/get-verify-key",
            {
              access_token: serverAuth.accessToken,
            },
            { withCredentials: true }
          );

          if (response.data && response.data.success) {
            setActivationKey(response.data.data.extension_key);
          } else {
            console.error("Failed to fetch extension key");
            setActivationKey("Error fetching key");
          }
        } catch (error) {
          console.error("Error fetching extension key:", error);
          setActivationKey("Error fetching key");
        }
      }

      setIsLoading(false);
    };

    checkAuthAndFetchKey();
  }, [serverAuth]);

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      const timer = setTimeout(() => {
        router.push("/login");
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [isLoading, isAuthenticated, router]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(activationKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  if (isLoading) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 max-w-[610px] mx-auto">
        <p className="text-center text-[26px] font-bold font-OpenSans">
          Loading...
        </p>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 max-w-[610px] mx-auto">
        <p className="text-red-600 text-center text-[18px]">
          You have to login first to get the key.
          <br /> Redirecting to login page...
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-[610px] mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Extension Activation Key
      </h2>

      <div className="flex mb-4">
        <input
          type="text"
          value={activationKey}
          readOnly
          className="flex-grow px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none"
        />
        <button
          onClick={copyToClipboard}
          className="bg-mainBlue hover:bg-mainBlue text-white px-4 py-2 rounded-r-md transition duration-300 ease-in-out"
        >
          Copy
        </button>
      </div>

      {copied && (
        <div className="mb-4 text-green-600 bg-green-100 p-2 rounded-md">
          Key copied successfully!
        </div>
      )}

      <div className="bg-lightBlue p-4 mt-4">
        <p className="text-black">
          <strong>Note:</strong> Do not share this activation key with anyone.
          It is unique to your account and should be kept confidential.
        </p>
      </div>
    </div>
  );
};

export default CopyKeyComponent;
