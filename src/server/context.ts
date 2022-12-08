import { CreateNextContextOptions } from "@trpc/server/adapters/next";
import { inferAsyncReturnType } from "@trpc/server";

export const createContext = (contextOptions?: CreateNextContextOptions) => {
  const req = contextOptions?.req;
  const res = contextOptions?.res;

  return {
    req,
    res,
  };
};

export type MyContextType = inferAsyncReturnType<typeof createContext>;
