# menjalankan perintah sebagai admin(sementara) untuk mengelola directory
sudo chmod -R 777 /home/ec2-user/store

# pindah ke directory
cd /home/ec2-user/store

# add npm and node to path
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"

# install node modul
npm install

# start node app ind the background
node /src/index.js > app.out.log 2> app.err.log < /dev/null &