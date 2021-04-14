# stack
- Nodejs Fastify
- MySQL/Postgres
- Sequelize
- Redis

# install
- update .env
	- DB_DRIVER: postgres/mysql

- check package.json, remove packages you don't need to use
    - bee-queue: queues management using bee queue
    - opentracing, jaeger-client: distributed log tracing using jaeger
    - aws-sdk: amazon s3 Nodejs SDK
- npm install
- sequelize db:create
- sequelize db:migrate

# run
node index.js