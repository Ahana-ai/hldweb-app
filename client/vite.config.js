import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api1": {
        target:
          "http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api1/, ''),
      },
      "/api2": "http://localhost:3000",
      "/api3": "https://crudcrud.com/api/65c5f9dc151a4ca38d5fe4c52511dc95/ericssondemohlr/",
    },
  },
  plugins: [react()],
});
