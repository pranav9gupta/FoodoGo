import React, { useEffect, useState } from "react";
import { RiseLoader } from "react-spinners";

function Success() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div>
        {loading ? (
          <RiseLoader color="#36d7b7" />
        ) : (
          <div>
            <h2 className="text-3xl font-semibold mb-4 text-center">
              Order Successfull!
            </h2>
            <p>Your order has been successfully placed</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Success;
