import { Router } from 'express';

/**
 * As importações de rotas não podem ter alias,
 * pois o swagger não consegue processar elas.
 */
import { AuthenticationRouter } from '../../../../modules/authentication/infra/http/routes/authentication.routes';
import { UsersRouter } from '../../../../modules/users/infra/http/routes/users.routes';
import { AttributeRouter } from '../../../../modules/superheroes/infra/http/routes/attribute.routes';
import { SuperpowerRouter } from '../../../../modules/superheroes/infra/http/routes/superpower.routes';
import { AlignmentRouter } from '../../../../modules/superheroes/infra/http/routes/alignment.routes';
import { GenderRouter } from '../../../../modules/superheroes/infra/http/routes/gender.routes';
import { ColourRouter } from '../../../../modules/superheroes/infra/http/routes/colour.routes';
import { RaceRouter } from '../../../../modules/superheroes/infra/http/routes/race.routes';
import { PublisherRouter } from '../../../../modules/superheroes/infra/http/routes/publisher.routes';
import { HeroAttributeRouter } from '../../../../modules/superheroes/infra/http/routes/hero-attributes.routes';
import { SuperheroRouter } from '../../../../modules/superheroes/infra/http/routes/superhero.routes';

const router = Router();

router.get(
  '/',
  (_req, res) => {
    const data = {
      uptime: process.uptime(),
      message: 'Ok',
      date: new Date(),
      serviceName: process.env.SERVICE_NAME,
    };

    res.status(200).send(data);
  },
  /*  
    #swagger.tags = ['Healtcheck']
    #swagger.summary = 'Healtcheck'
  */
);

router.use('/users', UsersRouter);
router.use('/login', AuthenticationRouter);
router.use('/attribute', AttributeRouter);
router.use('/superpower', SuperpowerRouter);
router.use('/alignment', AlignmentRouter);
router.use('/gender', GenderRouter);
router.use('/colour', ColourRouter);
router.use('/race', RaceRouter);
router.use('/publisher', PublisherRouter);
router.use('/hero-attribute', HeroAttributeRouter);
router.use('/superhero', SuperheroRouter);

export { router };
