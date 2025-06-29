import Heading from "./(components)/(plain_text)/Heading";
import Info from "./(components)/(plain_text)/Info";
import Title from "./(components)/(plain_text)/Title";
import NextPage from "./(components)/Nextpage";

export default function Introduction() {
  return (
    <div className="w-full space-y-4">
      <Title>Introduction</Title>
      <Info>
        Kickstart - Authentication template generator, with Nest/Next js
      </Info>
      <Heading>What is Kickstart JS</Heading>
      <Info>
        Kickstart is just NPM package that generates new template for your Nest
        and Next js project. Template incudes built in multi-provider
        authentication with magic-link verification, Github and Google based
        registration. Also template incudes a lot of configuration that takes
        minimum a day to build, for example Node mailer, BullMQ, Prisma, JWT
        module files or Redux, Axios, Tailwind for front end.
      </Info>
      <Heading>Why Kickstart exists</Heading>
      <Info>
        First of all, as an author of kickstart I have built it just because I
        did not want to write hundreds of cofigurations and authentication for
        every time when I start new project, instead I will use kickstart js to
        generate built in configured authentication, that ready to scale.
        Overall Kickstart allows you to focus on your project instead of
        configuration
      </Info>
      <NextPage title="Instalation" url="/docs/installation" />
    </div>
  );
}
