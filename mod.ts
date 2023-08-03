import { router } from "https://deno.land/x/rutt@0.1.0/mod.ts";
import { dashboard } from "./app/reviews/dash.ts";
import "./lib/kv.ts";

Deno.serve(
  router({
    "/": () => {
      return Response.json({ ok: true });
    },
    "/dash": async () => {
      const data = await dashboard();
      return Response.json(data);
    },
  })
);
