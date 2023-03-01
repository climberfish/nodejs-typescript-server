const config = {
  enviromnent: process.env.NODE_ENV ?? 'development',
  port: process.env.HTTP_PORT ?? 3000,
};

export default config;
