import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getAllData } from "../service/api";

const ListView = ({ text }) => {
  const [displayData, setDisplayData] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await getAllData();
        console.log(res);
        if (text.toString().toLowerCase() === "all") {
          setDisplayData(res);
        } else {
          let filteredData = res.filter((data) => {
            return (
              // data.GetResponseSubscriber.imsi
              //   .toLowerCase()
              //   .includes(text.toString().toLowerCase())
              data.GetResponseSubscriber.imsi.includes("514025000145829")
            )
          }          
          );
          setDisplayData(filteredData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [text]);
  return (
    <>
      <div
      >
        {displayData.map((data, index) => {
          return (
            <Box
              key={index}
            >
              <h1 >ID: {data._id}</h1>
              <Typography>
                IMSI: {data.GetResponseSubscriber.imsi}
              </Typography>
              <p>
                MSISDN: {data.GetResponseSubscriber.msisdn}
              </p>
              <p>
                HLRSN: {data.GetResponseSubscriber.hlrsn}
              </p>
              <p>
                Card Type: {data.GetResponseSubscriber.cardType}
              </p>
              <p>
                Name: {data.GetResponseSubscriber.nam}
              </p>
              <h4>Services</h4>
              <p>
                Clip-prov: {data.GetResponseSubscriber.services.clip.prov}
              </p>
              <p>
                Smsmt: {data.GetResponseSubscriber.services.smsmt}
              </p>
                <h4>Optgprss</h4>
                  
                {/* for (let i = 0; i < optgprs.length; i++) { */}
              <p>
                {/* Optgprs: {data.GetResponseSubscriber.services.optgprss.optgprs[0]} */}
              </p>
                 {/* } */}
            </Box>
          );
        })}
        
      </div>
    </>
  );
};

export default ListView;
