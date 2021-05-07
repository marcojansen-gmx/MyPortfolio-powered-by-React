#! C:\Program Files\Git\bin\bash.exe

# abort on errors
set -e

cd my-app

# build react app
npm run build


cd build


git init
git add -A
git commit -m "deploy"

git push -f git@github.com:marcojansen-gmx/MyPortfolio-powered-by-React.git master:gh-pages


