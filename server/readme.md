
# Getting Started

## Install Global Dependences

```
npm install pm2 -g
```

## Configure ~/.bashrc
```
export PATH=/usr/local/bin/mongodb/bin:~/bin:$PATH
export DB_PATH=<path to mongodb data>
export AWS_BUCKET_URL=<bucket path>
export LOCAL_DB=mongodb://localhost:27017/test
export PORT=3000
```