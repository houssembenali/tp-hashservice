pipeline {
  agent any
  // environment {
  //   PATH = "/usr/bin/ansible:/usr/bin/ansible-playbook:$PATH"
  // }
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

    stage('run') {
      steps {
        sh 'docker run -d --name hs -p 3000:3000 --rm chris/hashservice'
      }
    }

    stage('test and stop') {
      steps {
        sh 'sleep 4'
        sh 'curl http://192.168.33.20:3000/md5/hello'
        //sh "docker exec -i hs sh -c 'curl http://localhost:3000/md5/hello | grep 5d41402abc4b2a76b9719d911017c592'"
        sh 'echo $?'
        sh 'sleep 4'
        sh 'docker stop hs'
      }
    }

    stage('deploy') {
      steps {
        sh 'ansible-playbook -i hosts playbook.yml'
        //ansiblePlaybook installation: 'ansible2', inventory: 'hosts', playbook: 'playbook.yml'
      }
    }

  } 
}