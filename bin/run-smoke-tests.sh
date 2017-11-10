#!/bin/sh

if [[ -n "$1" ]]; then
  # Run the smoke tests against a particular application whose URL was specified as script parameter
  export APP_URL="$1"
else
  # Run the smoke test against a local environment. Docker host address is needed for Selenium to connect to it from within the container
  DOCKER_HOST=$(ifconfig | grep -E "([0-9]{1,3}\.){3}[0-9]{1,3}" | grep -v 127.0.0.1 | awk '{ print $2 }' | cut -f2 -d: | head -n1)
  export APP_URL="https://${DOCKER_HOST}:3000"
fi

if [[ "$2" == "jenkins" ]]; then
  CMD_OPTS="--no-deps --no-color"
fi

if [ -n "$SMOKE_TESTS_VERSION" ]; then
  docker-compose pull smoke-tests
fi
docker-compose up --no-build ${CMD_OPTS} smoke-tests
