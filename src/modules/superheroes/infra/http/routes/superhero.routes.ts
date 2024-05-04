import { Router } from 'express';

import { SuperheroController } from '../controller/SuperheroController';
import { isAuth } from '../../../../../shared/infra/http/middlewares/IsAuth';

const SuperheroRouter = Router();
const superheroController = new SuperheroController();

SuperheroRouter.post(
  '/',
  isAuth,
  superheroController.create,
  /*  
    #swagger.tags = ['Superhero']
    #swagger.summary = 'Adiciona um novo Superhero ao sistema'
    #swagger.security = [{ "bearerAuth": [] }]
    #swagger.parameters['body'] = {
      in: 'body',
      schema: {
        "superheroName": "NovoHeroName",
        "fullName": "NovoHeroFullName",
        "heightCm": 100,
        "weightKg": 50,
        "gender": 1,
        "eyeColour": 1,
        "hairColour": 2,
        "skinColour": 3,
        "race": 1,
        "publisher": 1,
        "alignment": 1,
        "superpowers": [
          {
            "powerId": 1
          },
          {
            "powerId": 2
          }
        ]
      }
    }
    #swagger.responses[201] = {
      schema: {
        "superheroName": "NovoHeroName",
        "fullName": "NovoHeroFullName",
        "heightCm": 100,
        "weightKg": 50,
        "gender": {
          "id": 1,
          "gender": "Male"
        },
        "eyeColour": {
          "id": 1,
          "colour": "No Colour"
        },
        "hairColour": {
          "id": 2,
          "colour": "Amber"
        },
        "skinColour": {
          "id": 3,
          "colour": "Auburn"
        },
        "race": {
          "id": 1,
          "race": "-"
        },
        "publisher": {
          "id": 1,
          "publisher": ""
        },
        "alignment": {
          "id": 1,
          "alignment": "Good"
        },
        "superpowers": [
          {
            "id": 1,
            "powerName": "Agility"
          },
          {
            "id": 2,
            "powerName": "Accelerated Healing"
          }
        ],
        "id": 10
      }
    }
  */
);

SuperheroRouter.get(
  '/:id',
  isAuth,
  superheroController.findById,
  /*  
    #swagger.tags = ['Superhero']
    #swagger.summary = 'Busca um Superhero pelo ID'
    #swagger.parameters['id'] = {
      in: 'path',
      type: 'number',
      description: 'ID do Superhero',
      required: true
    }
    #swagger.responses[200] = {
      schema: {
        "id": 10,
        "superheroName": "NovoHeroName",
        "fullName": "NovoHeroFullName",
        "heightCm": 100,
        "weightKg": 50,
        "gender": {
          "id": 1,
          "gender": "Male"
        },
        "eyeColour": {
          "id": 1,
          "colour": "No Colour"
        },
        "hairColour": {
          "id": 2,
          "colour": "Amber"
        },
        "skinColour": {
          "id": 3,
          "colour": "Auburn"
        },
        "race": {
          "id": 1,
          "race": "-"
        },
        "publisher": {
          "id": 1,
          "publisher": ""
        },
        "alignment": {
          "id": 1,
          "alignment": "Good"
        },
        "heroAttributes": [
          {
            "id": 3740,
            "attributeValue": 30
          },
          {
            "id": 3741,
            "attributeValue": 50
          }
        ],
        "superpowers": [
          {
            "id": 1,
            "powerName": "Agility"
          },
          {
            "id": 2,
            "powerName": "Accelerated Healing"
          }
        ]
      }
    }
  */
);

SuperheroRouter.get(
  '/',
  isAuth,
  superheroController.getAll,
  /*  
    #swagger.tags = ['Superhero']
    #swagger.summary = 'Busca todos os Superheros'
    #swagger.responses[200] = {
      schema: [
        {
          "id": 10,
          "superheroName": "NovoHeroName",
          "fullName": "NovoHeroFullName",
          "heightCm": 100,
          "weightKg": 50,
          "gender": {
            "id": 1,
            "gender": "Male"
          },
          "eyeColour": {
            "id": 1,
            "colour": "No Colour"
          },
          "hairColour": {
            "id": 2,
            "colour": "Amber"
          },
          "skinColour": {
            "id": 3,
            "colour": "Auburn"
          },
          "race": {
            "id": 1,
            "race": "-"
          },
          "publisher": {
            "id": 1,
            "publisher": ""
          },
          "alignment": {
            "id": 1,
            "alignment": "Good"
          },
          "heroAttributes": [
            {
              "id": 3740,
              "attributeValue": 30
            },
            {
              "id": 3741,
              "attributeValue": 50
            }
          ],
          "superpowers": [
            {
              "id": 1,
              "powerName": "Agility"
            },
            {
              "id": 2,
              "powerName": "Accelerated Healing"
            }
          ]
        }
      ]
    }
  */
);

SuperheroRouter.put(
  '/:id',
  isAuth,
  superheroController.update,
  /*  
    #swagger.tags = ['Superhero']
    #swagger.summary = 'Atualiza um Superhero existente'
    #swagger.parameters['id'] = {
      in: 'path',
      type: 'number',
      description: 'ID do Superhero',
      required: true
    }
    #swagger.parameters['body'] = {
      in: 'body',
      schema: {
        "superheroName": "NovoHeroNameAtualizado",
        "fullName": "NovoHeroFullNameAtualizado",
        "heightCm": 100,
        "weightKg": 50,
        "gender": 1,
        "eyeColour": 1,
        "hairColour": 2,
        "skinColour": 3,
        "race": 1,
        "publisher": 1,
        "alignment": 1,
        "superpowers": [
          {
            "powerId": 1
          },
          {
            "powerId": 2
          }
        ]
      }
    }
    #swagger.responses[200] = {
      schema: {
        message: "Superhero updated successfully"
      }
    }
  */
);

SuperheroRouter.delete(
  '/:id',
  isAuth,
  superheroController.delete,
  /*  
    #swagger.tags = ['Superhero']
    #swagger.summary = 'Deleta um Superhero pelo ID'
    #swagger.parameters['id'] = {
      in: 'path',
      type: 'number',
      description: 'ID do Superhero',
      required: true
    }
    #swagger.responses[200] = {
      schema: {
        message: "Superhero deleted successfully"
      }
    }
  */
);

export { SuperheroRouter };
