import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const logParam = mutation({
  args: { param: v.string() },
  handler: async (ctx, args) => {
    const existing = await ctx.db
      .query("params")
      .withIndex("by_param", (q) => q.eq("param", args.param))
      .first();

    if (existing) {
      await ctx.db.patch(existing._id, {
        used: existing.used + 1,
        last_used: new Date().getTime(),
      });
    }

    if (!existing) {
      const newParam = await ctx.db.insert("params", {
        param: args.param,
        last_used: new Date().getTime(),
        used: 1,
      });
      return newParam;
    }
  },
});
