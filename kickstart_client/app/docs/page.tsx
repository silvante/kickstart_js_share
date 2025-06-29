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
      <Info>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime suscipit natus quidem? Animi culpa a est neque pariatur ipsa repellendus explicabo ex tempora illo nesciunt aliquid voluptatum omnis voluptate, deserunt esse fuga. Dicta reiciendis velit culpa recusandae similique impedit quis placeat quam veniam commodi ipsa officiis pariatur, eveniet laboriosam numquam iusto autem labore eius asperiores fuga. Labore, consectetur? Quis odio, adipisci similique accusantium fugit ad, dignissimos, necessitatibus blanditiis molestiae reiciendis doloribus quisquam possimus ea sapiente a repellendus inventore! Dicta rerum ullam ipsam velit a odit sapiente suscipit, harum ratione voluptate aut est nam voluptatibus illum, amet doloremque nostrum. Placeat omnis totam fugiat magni tenetur repudiandae at itaque nemo? Doloribus perspiciatis alias molestias dolores laboriosam in incidunt, sequi temporibus? Pariatur, architecto autem! Quidem beatae unde, optio placeat culpa incidunt in ullam at tenetur ut inventore reiciendis. Ipsam, praesentium inventore. Quos aperiam dignissimos, ab enim debitis minima, assumenda officia nihil laborum voluptates aspernatur labore similique, dolore accusantium quisquam nesciunt? Quaerat facilis in quis animi enim necessitatibus, id distinctio omnis obcaecati aspernatur veritatis quo, reprehenderit, laboriosam est fugit maiores veniam recusandae perferendis quia illum ipsum. Neque, vel atque. Optio rem maxime vel assumenda culpa eveniet blanditiis doloribus perspiciatis, necessitatibus eligendi accusamus excepturi libero.</Info>
      <NextPage title="Instalation" url="/docs/installation" />
    </div>
  );
}
