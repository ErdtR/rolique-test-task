# rolique-test-task

## Prerequisites 

* Docker CE v17

## How to run

All docker containers are saved at Docker Hub. You can pull them and run locally. If you want to buid docker containers by yourself, go to the *How to build* section.

Run MongoDB instances for services:
```bash
sudo docker run --name users-mongo-db -d mongo
```

```bash
sudo docker run --name books-mongo-db -d mongo
```

All running containers have unic IP address in our system. To get it run:
```bash
sudo docker network inspect bridge
```

Also you can filter the result to get IP of service you need:
```bash
sudo docker network inspect bridge | grep users-mongo-db -B 1 -A 5
```

Result of previous command execution:
```json
"1a6da99187c271beab74d58ca1bdbda90f1b3000048ae418fc35bc3118b91df1": {
	"Name": "users-mongo-db",
	"EndpointID": "0c08212c93ee20e44770e6d023d4a101007013ae616b8ba23509e117bdc90016",
	"MacAddress": "02:42:ac:11:00:02",
	"IPv4Address": "172.17.0.2/16",
	"IPv6Address": ""
}
```


Run Users service (if needed change IP):
```bash
sudo docker run --name users-service -e MONGO_ADDRESS=172.17.0.2 -d erdtr/users-service
```

Run Books service:
```bash
sudo docker run --name books-service -e MONGO_ADDRESS=172.17.0.3 -d erdtr/books-service
```

Run Gateway service:
```bash
sudo docker run --name gateway-service -e USERS_API_ADDRESS=172.17.0.4 -e BOOKS_API_ADDRESS=172.17.0.5 -d erdtr/gateway-service
```

Run Proxy service:
```bash
sudo docker run --name proxy-service -e GATEWAY_API_ADDRESS=172.17.0.6 -p 80:8080 -d erdtr/proxy-service
```

Finnally, you can test it.

List of all users http://localhost/users

List of all books http://localhost/books


## How to build
In progress...

## API
In progress...
