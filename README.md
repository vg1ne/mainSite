### Setup

- npm install  
- gulp default  - runs development version (bundles are in memory)
- browser url for usage http://localhost:8080 and http://localhost:8080/webpack-dev-server/index.html for hot reload (refresh browser window on changes)
- gulp webpack - to bundle app script for production
- node.js must be of version 7.0.0 (with 7.1.0 does`nt work. Tried on different machines)

Tasks:
- "gulp webpack" - create bundles (real files)
- "gulp default" or "webpack:webpack-dev-server" - tasks for bundling in memory and running web-server