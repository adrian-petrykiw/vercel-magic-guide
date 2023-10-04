import { Magic } from "magic-sdk";
import { SolanaExtension } from "@magic-ext/solana";
import { OAuthExtension } from "@magic-ext/oauth";
import { AuthExtension } from "@magic-ext/auth";

const createMagic = (key) => {
  const rpcURL = process.env.NEXT_PUBLIC_RPC_URL
    ? process.env.NEXT_PUBLIC_RPC_URL
    : "https://solana-mainnet.g.alchemy.com/v2/9nCoa06gjvDwYyTdV5ruBp2Qe4_wZnaO";

  return (
    typeof window !== "undefined" &&
    new Magic(key, {
      extensions: [
        new AuthExtension(),
        new OAuthExtension(),
        new SolanaExtension({
          rpcUrl: rpcURL,
        }),
      ],
    })
  );
};

export const magic = createMagic(process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY);
