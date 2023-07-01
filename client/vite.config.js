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
      "/api2": {
        target:
          "http://localhost:3000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api2/, ''),
      },
      "/api3": {
        target:
          "https://crudcrud.com/api/7f1f3f605bd04aec98c81abc53f35c64/ericssondemohlr/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api3/, ''),
      },
    },
  },
  plugins: [react()],
});
