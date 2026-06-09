import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react(), jsxOnlyEntryPlugin()],
  build: {
    rollupOptions: {
      input: "src/main.jsx"
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
            "<title>JAWA NEXIS</title>",
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
