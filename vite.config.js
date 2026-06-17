import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react(), jsxOnlyEntryPlugin()],
  build: {
    rollupOptions: {
      input: "index.html"
    }
  }
});

function jsxOnlyEntryPlugin() {
  return {
    name: "jsx-only-entry",
    configureServer(server) {
      server.middlewares.use(async (request, response, next) => {
        const url = request.url?.split("?")[0];

        if (url !== "/" && url !== "/index.html") {
          next();
          return;
        }

        try {
          const appShell = [
            "<!doctype html>",
            '<html lang="en">',
            "<head>",
            '<meta charset="UTF-8" />',
            '<meta name="viewport" content="width=device-width, initial-scale=1.0" />',
            '<link rel="icon" href="./src/assets/logo.png" />',
            "<title>JAWA EDTECH | Learn to code in your native language</title>",
            "</head>",
            "<body>",
            '<div id="root"></div>',
            '<script type="module" src="/src/main.jsx"></script>',
            "</body>",
            "</html>"
          ].join("");
          const html = await server.transformIndexHtml(request.url ?? "/", appShell);

          response.statusCode = 200;
          response.setHeader("Content-Type", "text/html");
          response.end(html);
        } catch (error) {
          server.ssrFixStacktrace(error);
          next(error);
        }
      });
    }
  };
}
