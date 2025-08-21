pipeline {
    agent any
    
    tools{
         nodejs "node"
    }

    stages {
        stage('Git Checkout & Show Tree') {
            steps {
                // Checkout Git repository
                git branch: 'main', url: 'https://github.com/KARTIKNAIK18/Demo-CICD.git'
                script {
                    sh ' ls -a ' 
                }
            }
        }
        stage('build'){
            steps{
                sh 'npm install'
            }
        }
        stage('test'){
            steps{
            sh 'npm test'
        }
        }
        stage('deploy'){
            steps{
                sh 'npm start '
            }
        }
    }
}
