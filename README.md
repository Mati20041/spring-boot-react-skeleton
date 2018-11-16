# spring-boot-react-skeleton
Skeleton of multimodule gradle project that separates react and spring boot. Additionally it uses [prerender](https://github.com/prerender/prerender) for prerendering react without java Server Side Rendering


# Running

First build project

`./gradlew build`

Secondly run docker-compose

`docker-compose up`

This will create few resources:

1. java-app - spring-boot application that serve react page
2. nginx - as gateway
3. magnetme/prerender-docker - server that is able to prerender react before sending it to the client (for index bots). 

Ngnix is configured to return either Single Page Application or prerendered site. 

To test this behaviour you can run curl in docker:

#### For SPA:

`docker container run --rm --network reactnetwork appropriate/curl http://nginx`

#### For Prerendered site:

`docker container run --rm --network reactnetwork appropriate/curl http://nginx/?prerender=1`

#### Without curl in docker

You can also use normal curl if you add following line to your `/etc/hosts`

`127.0.0.1 nginx`

And call with:

```bash
curl http://nginx:8082
curl http://nginx:8082/?prerender=1
```