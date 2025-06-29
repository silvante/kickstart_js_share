import CopyInput from "@/app/(global_components)/CopyInput";
import Heading from "../(components)/(plain_text)/Heading";
import Info from "../(components)/(plain_text)/Info";
import Title from "../(components)/(plain_text)/Title";
import CopyCode from "@/app/(global_components)/CopyCode";
import Link from "next/link";

const env_example = `
# General App Config

DATABASE_URL="postgresql://db_user:password@localhost:5432/kickstart_js"
FRONT_ORIGIN="http://localhost:3000" # frontend link
PORT=8080
JWT_SECRET="a-string-secret-at-least-256-bits-long"

# Magic Link Email Auth

MAILER_USER="no-reply@example.uz"
MAILER_PASS="Your email app password"

# Google OAuth

GITHUB_CLIENT_ID="Your github client id"
GITHUB_CLIENT_SECRET="Your github client secret"

# Google OAuth

GOOGLE_CLIENT_ID="Your google client id"
GOOGLE_CLIENT_SECRET="Your google client secret"
`;

export default function Usage() {
  return (
    <div className="w-full space-y-4">
      <Title>Usage</Title>
      <Info>
        After installing kickstart, start using it. It has a few usefull
        commands that helps you to generate template easily.
      </Info>
      <Heading>How to generate new template</Heading>
      <Info>
        To generate new template simply use new command with your project name.
      </Info>
      <CopyInput command="kickstart new project-name" />
      <Info>
        This command will clone github repository of kickstart_js and installs
        node modules for each client and server directories.
      </Info>
      <CopyInput command="cd project-name" />
      <Info>Then enter to your project directory.</Info>
      <Info>to run client side of your template.</Info>
      <CopyInput command="cd client" />
      <Info>and run it</Info>
      <CopyInput command="npm run dev" />
      <Info>before testing client don't forget to run server</Info>
      <Heading>Usage of Server</Heading>
      <Info>
        To use server site of your new template, you have to fullfill .env file,
        for github, google and email secret informations
      </Info>
      <CopyCode code={env_example} language="env" />
      <Info>
        If you want to change PORT of server you should change it from api
        config from client{" "}
        <span className="bg-white/15">/app/api/api.config.ts</span>
      </Info>
      <Heading>Final</Heading>
      <Info>
        That is it, now you have ton of pre-built configuration and modern
        styled authentication with Magic link, Google and Github providers
      </Info>
      <Info>Now you can focus on your project instead of cofigurations</Info>
      <Info>Also you can check information about pachage from command</Info>
      <CopyInput command="kickstart info" />
      <Info>
        Documantation of frameworks you can find from{" "}
        <Link href={"https://docs.nestjs.com/"} className="bg-violet-600/30">
          Nest Docs
        </Link>{" "}
        and{" "}
        <Link href={"https://nextjs.org/docs"} className="bg-violet-600/30">
          Next Docs
        </Link>.
      </Info>
      <Heading>✨ Happy Coding!</Heading>
      <p className="text-center">The end, <Link href={"/"} className="bg-violet-600/30">Home page</Link></p>
    </div>
  );
}
