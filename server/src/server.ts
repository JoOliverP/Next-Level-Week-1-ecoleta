import express from 'express'; /*Requer npm install @types/express -D */

const app = express();

//response --resposta 
app.get('/users',(request,response) => {
    console.log('Listagem de usuario');

    response.json([
        'Jo',
        'acçea',
        'asda',
        'asdasd'
    ]);
});

app.listen(3333);
 /*Para poder executar precisa do  npm install ts-node -D 
    npm install typescript -D
    npx tsc --init
    npx ts-node src/server.ts

    para ficar atualizando: npm install ts-node-dev -D
 */
