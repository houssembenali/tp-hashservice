pipeline {
  agent any
  stages {

    stage('git') {
      steps {
        git url: 'https://github.com/cdufour/tp-hashservice.git'
      }
    }

    stage('build') {
      steps {
        sh 'docker build -t chris/hashservice .'
      }
    }
  
  } 
}