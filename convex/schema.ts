import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  params: defineTable({
    param: v.string(),
    last_used: v.number(),
    used: v.number(),
  }).index("by_param", ["param"]),
});
