import { onchainTable, relations } from "ponder";

export const account = onchainTable("account", (t) => ({
  address: t.hex().primaryKey(),
}));

export const token = onchainTable("token", (t) => ({
  id: t.bigint().primaryKey(),
  owner: t.hex().notNull(),
}));

export const transferEvent = onchainTable("transfer_event", (t) => ({
  id: t.text().primaryKey(),
  timestamp: t.integer().notNull(),
  from: t.hex().notNull(),
  to: t.hex().notNull(),
  token: t.bigint().notNull(),
}));

export const voucherRedeemedEvent = onchainTable("voucher_redeemed_event", (t) => ({
  id: t.text().primaryKey(),
  timestamp: t.integer().notNull(),
  redeemer: t.hex().notNull(),
}));

export const accountToken = relations(account, ({ many }) => ({
  tokens: many(token),
}));

export const tokenAccount = relations(token, ({ one }) => ({
  owner: one(account, { fields: [token.owner], references: [account.address] }),
}));

export const accountVoucherRedeemedEvent = relations(account, ({ many }) => ({
  voucherRedeemedEvents: many(voucherRedeemedEvent),
}));

export const voucherRedeemedEventAccount = relations(voucherRedeemedEvent, ({ one }) => ({
  redeemer: one(account, { fields: [voucherRedeemedEvent.redeemer], references: [account.address] }),
}));
