# CMC Smoke Tests

A suite of tests which we use to verify if a particular application deployment is healthy and ready to serve users.

## Getting started

### Prerequisites

* [Node.js](https://nodejs.org/) >= v8.9.0
* [Yarn](https://yarnpkg.com/)
* [Docker](https://www.docker.com)

#### Test data

Additionally, the tests expect a test user to be available and activated in the system. Default credentials can be found in [`test-data.js`](test-data.js) file, if you want to override them you can set appropriate environment variables:

```bash
$ export TEST_USERNAME="user name goes here"
$ export TEST_PASSWORD="password name goes here"
```

### Setup

Build smoke tests image:

```bash
$ ./bin/build-docker-image.sh
```

Start the Selenium server:

```bash
$ ./bin/start-test-environment.sh
```

### Running against a particular application instance

You can specify which application the tests should run against by providing an URL to it as a parameter to the run script, e.g.:

```bash
$ ./bin/run-smoke-tests.sh https://some.app.environment.cmc.reform.hmcts.net
```

### Running against a local development environment

When running against against a default, local deployment just run the script above with no parameters:

```bash
$ ./bin/run-smoke-tests.sh
```

If your deployment uses different ports and/or protocols then you will need to export the `APP_URL` environment variable and adjust the Selenium URL in [`bin/run-smoke-tests.sh`](bin/run-smoke-tests.sh). Extra URL for Selenium is needed because it connects to the host from within Docker.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) file for details.

