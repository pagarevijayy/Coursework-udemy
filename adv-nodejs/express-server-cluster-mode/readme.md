# Node - Cluster Mode

Nodejs server cluster mode implementation.

To benchmark server (apache benchmark):

-   Mac OS (root folder): `ab -c 50 -n 500 localhost:3000/fast`
-   [pm2 cluster mode implementation](https://pm2.keymetrics.io/docs/usage/cluster-mode/)

> _For actual cluster management in prod app, use `pm2` cli._
