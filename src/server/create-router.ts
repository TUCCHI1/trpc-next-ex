import * as trpc from "@trpc/server";
import { MyContextType } from "./context";

export const createRouter = () => {
  return trpc.router<MyContextType>();
};
