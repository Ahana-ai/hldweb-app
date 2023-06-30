import React, { useState } from "react";
import axios from "axios";
// import { createProxyMiddleware } from 'http-proxy-middleware';

// // Proxy configuration
// const proxy = createProxyMiddleware({
//   target: 'http://webservices.oorsprong.org',
//   changeOrigin: true,
// });

// axios.defaults.baseURL = '/api'; // Set the base URL for Axios requests

const CountryDetails = () => {
  const [country, setCountry] = useState("");
  const [capital, setCapital] = useState("");

  const handleGetCapitalCity = async () => {
    const xml = `
      <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:web="http://www.oorsprong.org/websamples.countryinfo">
        <soapenv:Header/>
        <soapenv:Body>
           <web:CapitalCity>
              <web:sCountryISOCode>${country.toUpperCase()}</web:sCountryISOCode>
           </web:CapitalCity>
        </soapenv:Body>
      </soapenv:Envelope>
    `;

    const xml2 = `
    <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:web="http://www.oorsprong.org/websamples.countryinfo">
    <soapenv:Header/>
    <soapenv:Body>
       <web:FullCountryInfo>
          <web:sCountryISOCode>${country.toUpperCase()}</web:sCountryISOCode>
       </web:FullCountryInfo>
    </soapenv:Body>
 </soapenv:Envelope>
 `;

    try {
      const response = await axios.post("/api", xml, {
        headers: {
          "Content-Type": "text/xml",
        },
      });

      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(response.data, "text/xml");
      const capitalCity = xmlDoc.getElementsByTagName("m:CapitalCityResult")[0]
        .textContent;

      setCapital(capitalCity);
    } catch (error) {
      console.error("SOAP FAIL:", error);
    }
  };

  return (
    <div
      style={{
        color: "white",
      }}
    >
      <input
        type="text"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      />
      <button onClick={handleGetCapitalCity}>Get Capital City</button>
      {capital && <p>Capital City: {capital}</p>}
    </div>
  );
};

export default CountryDetails;
