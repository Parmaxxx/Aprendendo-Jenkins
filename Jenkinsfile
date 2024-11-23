pipeline{
    agent any

    stages{
        stage('Instalar Dependências'){
            steps{
                scripts{
                    bat 'npm install'
                }
            }
        }
        stage('Executar testes'){
            steps{
                scripts{
                    bat 'npm test'
                }
            }
        }
    }
        post{
            always{
                echo 'Pipeline concluido'
            }
        }
    }
