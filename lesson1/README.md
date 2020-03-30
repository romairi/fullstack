# Docker

## Cheat Sheet

### remove containers

```sh
docker rm 
docker rm -f 
docker rm -f $(docker ps -aq)
```

### logs

```sh
docker logs 
docker logs -f 
```

### connect to running container
```sh
docker exec -it {container_id} bash
```

