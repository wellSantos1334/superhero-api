import swaggerAutogen from 'swagger-autogen';

const outputFile = './swagger/swagger_output.json';
const endpointsFiles = ['src/shared/infra/http/app.ts'];

const doc = {
  info: {
    version: '1.0.0',
    title: 'API',
    description: 'Documentação referente aos endpoints do sistema ...',
  },
  schemes: ['http', 'https'],
  host: 'localhost:5555',
  securityDefinitions: {
    bearerAuth: {
      type: 'apiKey',
      in: 'header',
      name: 'Authorization',
      description: 'Digite Bearer + o token que você possui',
    },
  },
  tags: [
    {
      name: 'Authentication',
      description: 'Relaciona os endpoints referentes a autenticação',
    },
    {
      name: 'Users',
      description: 'Relaciona os endpoints referentes ao usuário',
    },
  ],
};

swaggerAutogen(outputFile, endpointsFiles, doc);
