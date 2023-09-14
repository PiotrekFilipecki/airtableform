import airDB from './airtableClient';
import Joi from 'joi';

const schema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  message: Joi.string().required(),
});

const create = async (payload) => {
  const validatedOffer = await schema.validateAsync(payload);
  const submission = await airDB('submissions').create([
    {
      fields: {
        ...validatedOffer,
      }
    }
  ]);

  return submission;
};

export default create;
