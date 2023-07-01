import React, { useState } from "react";
import axios from "axios";
import { postSoapLogs } from "../service/api";
import { Box, Button, Input, Typography } from "@mui/material";

const CountryDetails = () => {
  const [country, setCountry] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [capital, setCapital] = useState("");

  const handleGetCountryCode = async () => {
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

    const res2 = await axios.post("/api1", xml2, {
      headers: {
        "Content-Type": "text/xml",
      },
    });

    const parser = new DOMParser();

    const xmlDoc = parser.parseFromString(res2.data, "text/xml");
    const cityIsoCode =
      xmlDoc.getElementsByTagName("m:sISOCode")[0].textContent;
    setCountryCode(cityIsoCode);
  };

  const handleGetCapitalCity = async () => {
    const xml = `
      <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:web="http://www.oorsprong.org/websamples.countryinfo">
        <soapenv:Header/>
        <soapenv:Body>
           <web:CapitalCity>
              <web:sCountryISOCode>${countryCode.toUpperCase()}</web:sCountryISOCode>
           </web:CapitalCity>
        </soapenv:Body>
      </soapenv:Envelope>
    `;

    try {
      const res = await axios.post("/api1", xml, {
        headers: {
          "Content-Type": "text/xml",
        },
      });

      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(res.data, "text/xml");
      const capitalCity = xmlDoc.getElementsByTagName("m:CapitalCityResult")[0]
        .textContent;

      setCapital(capitalCity);

      let service = [
        "POST",
        "http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso",
        axios.defaults.headers.common,
        xml,
      ];
      let response = [res.status + ":" + res.statusText, res.headers, res.data];
      let dataReturn = [service, response];
      console.log(dataReturn);
      postSoapLogs(dataReturn);
    } catch (error) {
      console.error("SOAP FAIL:", error);
    }
  };

  return (
    <>
      <Box
        sx={{
          color: "white",
        }}
      >
        <Input
          sx={{
            margin: "20px 0",
            textAlign: "center",
            alignItems: "center",

            input: {
              color: "white",
            },
            label: {
              color: "white",
            },
            "&:hover": {
              label: { color: "white" },
            },
          }}
          color="primary"
          placeholder="Enter a Country ISO Code"
          variant="soft"
          value={countryCode}
          onChange={(e) => setCountryCode(e.target.value)}
        />
        <Button
          sx={{
            margin: "10px",
          }}
          onClick={handleGetCapitalCity}
        >
          <Typography
            sx={{
              color: "white",
              padding: "8px",

              "&:hover": {
                backgroundColor: "white",
                color: "black",
                fontWeight: "bold",
              },
            }}
          >
            Get Capital City
          </Typography>
        </Button>
        {capital && <p>Capital City: {capital}</p>}
      </Box>

      <Box
        sx={{
          color: "white",
        }}
      >
        <Input
          sx={{
            margin: "20px 0",
            textAlign: "center",
            alignItems: "center",

            input: {
              color: "white",
            },
            label: {
              color: "white",
            },
            "&:hover": {
              label: { color: "white" },
            },
          }}
          color="primary"
          placeholder="Enter a Country"
          variant="soft"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <Button
          sx={{
            margin: "10px",
          }}
          onClick={handleGetCountryCode}
        >
          <Typography
            sx={{
              color: "white",
              padding: "8px",

              "&:hover": {
                backgroundColor: "white",
                color: "black",
                fontWeight: "bold",
              },
            }}
          >
            Get Country Code
          </Typography>
        </Button>
        {countryCode && <p>Country Code: {countryCode}</p>}
      </Box>
    </>
  );
};

export default CountryDetails;
