import CopyInput from "@/app/(global_components)/CopyInput";
import Heading from "../(components)/(plain_text)/Heading";
import Info from "../(components)/(plain_text)/Info";
import Title from "../(components)/(plain_text)/Title";
import NextPage from "../(components)/Nextpage";

export default function Installation() {
  return (
    <div className="w-full space-y-4">
      <Title>Installation</Title>
      <Info>You can install kickstart js from node package manager.</Info>
      <Heading>How to install</Heading>
      <Info>
        1. install pachage from npm, npm package of Kickstart is CLI so you
        should install it as global package
      </Info>
      <CopyInput command="npm install -g @xamidov_uz/kickstart" />
      <Info>
        If you are using Linux maybe you should use sudo to install package
        because it is CLI and you should freely use it without command npm
      </Info>
      <CopyInput command="sudo npm install -g @xamidov_uz/kickstart" />
      <Info>It may take a while according to your internet and hardware</Info>
      <Info>finally, verify kickstart installation</Info>
      <CopyInput command="kickstart version" />
      <Heading>Method 2 (unrecommended)</Heading>
      <Info>
        You can also clone repo from github and use it but with npm package it
        will be more better, because package installs node modules and kinda
        stuff for server and client
      </Info>
      <CopyInput command="git clone https://github.com/silvante/kickstart_js" />
      <Info>Use this command only if you are having problems with npm</Info>
      <NextPage title="Usage" url="/docs/usage" />
    </div>
  );
}
