// Importar con `import * as Sentry from "@sentry/node"` si estás usando ESM
const Sentry = require("@sentry/node");
const { nodeProfilingIntegration } = require("@sentry/profiling-node");

Sentry.init({
  dsn: "https://e96eb9de52c0118730fa182ada83fbac@o4508372952809472.ingest.us.sentry.io/4508372954513408",
  integrations: [
    nodeProfilingIntegration(),
  ],
  // Rastreo
  tracesSampleRate: 1.0, // Capturar el 100% de las transacciones
});
// Llama manualmente a startProfiler y stopProfiler
// para perfilar el código entre estas llamadas
Sentry.profiler.startProfiler();

// Inicia una transacción que también será perfilada
Sentry.startSpan({
  name: "Mi Primera Transacción",
}, () => {
  // el código ejecutado dentro de la transacción estará envuelto en un span y será perfilado
});

// Las llamadas a stopProfiling son opcionales; si no detienes el profiler, seguirá perfilando
// tu aplicación hasta que el proceso termine o se llame a stopProfiling.
Sentry.profiler.stopProfiler();