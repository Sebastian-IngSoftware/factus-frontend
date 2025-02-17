import { defineDb, column, NOW, defineTable } from 'astro:db';

const Users = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
    email: column.text(),
    acces_token: column.text(),
    created_at: column.date({ default: NOW }),
  }
});

const RefreshTokens = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    refresh_token: column.text(),
    user_id: column.number({ references: () => Users.columns.id }),
    created_at: column.date({ default: NOW }),
  }
});

// https://astro.build/db/config
export default defineDb({
  tables: {
    Users,
    RefreshTokens,
  }
});

