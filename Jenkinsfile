pipeline {
    agent { label: "linux" }
    stages {
        stage('build') {
            steps {
                sh 'docker build -t chris/hashservice .'
            }
        }
    }
}