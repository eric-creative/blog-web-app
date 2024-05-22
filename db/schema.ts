import {pgTable, serial, text, timestamp} from "drizzle-orm/pg-core";

export const users = pgTable('user', {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    email: text('email').notNull(),
    created_at: timestamp('created_at').notNull().defaultNow(),
    updated_at: timestamp('updated_at').notNull().defaultNow(),
})