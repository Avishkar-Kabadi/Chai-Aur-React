import { useEffect, useState } from "react";

function useCurrencyInfo(baseCurrency) {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const res = await fetch(`https://zero6currencyconverter-backend.onrender.com/api/convert?base=${baseCurrency}`);
        const json = await res.json();
        if (json.rates) {
          setData(json.rates); //https://zero6currencyconverter-backend.onrender.com/api/convert?base=USD
        } else {
          console.error("No rates found in response", json);
          setData({});
        }
      } catch (error) {
        console.error("Error fetching currency rates:", error);
        setData({});
      }
    };

    fetchRates();
  }, [baseCurrency]);

  return data;
}

export default useCurrencyInfo;


// import { useState } from 'react';
// import { useEffect } from 'react'

// export default function useCurrencyInfo(currency) {
//     const [data, setData] = useState({})
//     useEffect(() => {
//         fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
//             .then((res) => res.json())
//             .then((res) => setData(res[currency]))
//         console.log(data);
//     }, [currency])
//     console.log(data);


//     return data
// }
