# fenix
Repositório pra fazer o projeto Fênix
Criar um repositório:
git init
Clonar do git:
git clone https://github.com/ChaimCad/fenix.git
npm install
Inserir ao Index (área intermediária):
git add <arquivo> //arquivo específico
git add . //todos arquivos
Inserir ao Head:
git commit -m "Mensagem do commit"
Enviar alterações:
git push
Atualizar o repositório:
git pull
npm install
Sobrescrever alterações locais: // volta ao inicial antes das alterações
git checkout -- <arquivo>
git fetch origin //remover alterações e commits locais
git reset --hard origin/master // recuperando histórico mais recente
Ver quem fez as últimas alterações:
git log // mostra de um jeito básico
gitk //mostra de um jeito bonitinho
