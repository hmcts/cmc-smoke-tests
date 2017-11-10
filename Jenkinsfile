#!groovy

properties(
  [[$class: 'GithubProjectProperty', displayName: 'Smoke tests', projectUrlStr: 'https://github.com/hmcts/cmc-smoke-tests'],
   parameters(
     [
       string(name: 'applicationUrl', description: 'An URL to the environment on which the smoke tests should be executed', defaultValue: 'https://www-dev.moneyclaim.reform.hmcts.net')
     ]
   ),
   pipelineTriggers([[$class: 'GitHubPushTrigger']])]
)

@Library('Reform') _

@Library('CMC')
import uk.gov.hmcts.cmc.smoketests.SmokeTests

def smokeTests = new SmokeTests(this)

node('docker') {
  try {
    stage('Checkout') {
      deleteDir()
      checkout scm
    }

    stage('Setup') {
      sh 'yarn install'
    }

    stage('Lint') {
      sh 'yarn lint'
    }

    stage('Unit test') {
      sh 'yarn test'
    }

    stage('Build image') {
      dockerImage imageName: 'cmc/smoke-tests'
    }

    stage('Execute smoke tests') {
      onMaster {
        smokeTests.executeAgainst(params.applicationUrl)
      }
      onPR {
        def gitCommit = sh(returnStdout: true, script: 'git rev-parse HEAD').trim()
        smokeTests.executeAgainst(params.applicationUrl, gitCommit)
      }
    }
  } finally {
    sh "docker-compose down --remove-orphans"
  }
}
