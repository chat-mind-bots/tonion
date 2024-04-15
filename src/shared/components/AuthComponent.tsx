"use client"

import React from 'react';
import {TonConnectButton} from "@tonconnect/ui-react";
import Address from "@/shared/components/Adress";
import WalletInfo from "@/shared/components/WalletInfo";

const AuthComponent = () => {
  return (
    <div>
      <Address />
      <WalletInfo />
      <TonConnectButton />
    </div>
  );
};

export default AuthComponent;