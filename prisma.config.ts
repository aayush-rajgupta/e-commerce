import { PrismaConfig } from '@prisma/config';

export default {
  earlyAccess: true,
  schema: 'prisma/schema.prisma',
  migrate: {
    database: {
      url: 'file:./dev.db',
    },
  },
};
