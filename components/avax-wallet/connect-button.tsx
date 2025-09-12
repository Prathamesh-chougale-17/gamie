"use client";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { Button } from "@/components/ui/button";

// Address display constants
const ADDRESS_PREFIX_LENGTH = 6;
const ADDRESS_SUFFIX_LENGTH = 4;

export function AvaxConnectButton() {
  const { address, isConnected } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();

  if (isConnected && address) {
    return (
      <Button
        className="font-mono"
        onClick={() => disconnect()}
        size="sm"
        variant="outline"
      >
        {`${address.slice(0, ADDRESS_PREFIX_LENGTH)}...${address.slice(-ADDRESS_SUFFIX_LENGTH)}`}
      </Button>
    );
  }

  return (
    <Button
      onClick={() => {
        const connector = connectors[0]; // Use the first available connector
        if (connector) {
          connect({ connector });
        }
      }}
      size="sm"
      variant="outline"
    >
      Connect Wallet
    </Button>
  );
}
