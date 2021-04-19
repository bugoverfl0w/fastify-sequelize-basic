# stack
- Nodejs Fastify
- MySQL/Postgres Sequelize
- Mongodb mongoose
- Redis
- Bee queue
- Jaeger tracer

# install
- MySQL/Postgres Sequelize
    - update .env
    	- DB_DRIVER: postgres/mysql
    - sequelize db:create
    - sequelize db:migrate

- Mongodb Mongoose
    - update .env
        - MONGO_URI

- check package.json, remove packages you don't need to use
    - bee-queue: queues management using bee queue
    - opentracing, jaeger-client: distributed log tracing using jaeger
    - aws-sdk: amazon s3 Nodejs SDK
- npm install

# run
node index.js