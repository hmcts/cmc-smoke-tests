#!groovy

properties(
  [
   [$class: 'GithubProjectProperty', displayName: 'Smoke tests', projectUrlStr: 'https://github.com/hmcts/cmc-smoke-tests'],
   pipelineTriggers([[$class: 'GitHubPushTrigger']])
  ]
)

stage('Checkout') {
  deleteDir()
  checkout scm
}

stage('Hello') {
  sh 'echo "Hello, world!"'
}

