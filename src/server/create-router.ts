import * as trpc from "@trpc/server";
import { MyContextType } from "./src/server/context";

export const createRouter = () => {
  return trpc.router<MyContextType>();
};
