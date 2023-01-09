const createApp = require('./app');

const port = process.env.PORT || 3000;
const app = createApp();
app.listen(port, () => {
  console.log(`App Node js + GraphQL running | Url: localhost:${port}/graphql`);
});
