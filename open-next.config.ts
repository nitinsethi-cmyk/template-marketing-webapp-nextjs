import { defineCloudflareConfig } from '@opennextjs/cloudflare';

const config = defineCloudflareConfig();

// Emotion/MUI declare workerd/edge-light exports that OpenNext's esbuild resolves,
// but Next's file tracer does not always copy those files into the Worker bundle.
// Prefer the Node entrypoints (valid under nodejs_compat) to avoid missing edge-light files.
config.cloudflare = {
  ...config.cloudflare,
  useWorkerdCondition: false,
};

export default config;
