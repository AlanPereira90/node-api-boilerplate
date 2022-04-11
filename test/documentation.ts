import { OpenAPIDocument } from 'easy-api-doc';

import { version } from '../package.json';

export const doc = new OpenAPIDocument(
  './doc/api-reference.yml',
  {
    version,
    title: 'Change API',
    description: 'Change API definitions',
  },
  [{ url: 'http://localhost:7000', description: 'Change API Server' }],
);
