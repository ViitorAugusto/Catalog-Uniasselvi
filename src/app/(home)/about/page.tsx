import { AboutProfile } from "./about-profile";
import AboutEcommerce from "./about-ecommerce";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function AboutPage() {
  return (
    <section
      className="w-full py-12 md:py-10 lg:py-16 bg-gray-100 dark:bg-gray-800"
      id="about"
    >
      <AboutEcommerce />

      <AboutProfile
        description="Sou desenvolvedor front-end com mais de 3 anos de experiência em
            construção de aplicações web responsivas, Com um forte foco na
            criação de interfaces de usuário e experiências de usuário, trago
            uma compreensão abrangente de tecnologias Front-end e
            desenvolvimento Mobile."
        name="Vitor Augusto de Mattos"
        email="vitoraugustodemattos@gmail.com"
        icons={[
          { icon: FaGithub, href: "https://github.com/ViitorAugusto" },
          {
            icon: FaLinkedinIn,
            href: "https://www.linkedin.com/in/viitoraugusto/",
          },
        ]}
        image="/about/vitor.jpeg"
        skills="HTML, CSS, JavaScript, React.js, Angular, TypeScript, Git,
                  GitHub, GitLab, Bitbucket, REST API, Redux, Context API,
                  Three.js, Desenvolvimento 3D, Web Design, UI/UX Design, Styled
                  Components, Bootstrap, Material-UI, React Native, Node.js,
                  Nest.js , Next.js, Tailwind CSS, Flutter, Dart, PHP, Laravel,
                  MySQL, MongoDB, Firebase, Figma, Mobile-First Design, SEO,Web
                  Performance Optimization."
        experience="Mais de 3 anos de experiência em desenvolvimento front-end, e
                  1 anos em desenvolvimento mobile e desenvolvimento back-end,
                  trabalhando com vários clientes e agências."
        education=" Analise e Desenvolvimento de Sistemas pela Faculdade
                  Uniasselvi e com cursos, treinamentos e certificações em
                  diversas tecnologias."
      />

      <AboutProfile
        styles={true}
        description="Olá, sou Luiz e minha paixão por tecnologia começou desde pequeno. Estudo programação há bastante tempo, sempre buscando aprender e me aperfeiçoar. Meu grande sonho é me tornar um desenvolvedor full stack, capaz de criar soluções completas e inovadoras. Estou sempre em busca de novos desafios e oportunidades para crescer na área de TI."
        name="Luiz"
        email=""
        icons={[]}
        image="/about/luiz.jpeg"
        skills="Tenho facilidade de aprendizado e atualmente possuo nível intermediário em HTML, CSS, JavaScript, web design e GitHub. Embora esteja no início da minha jornada, estou constantemente buscando novos conhecimentos para aprimorar minhas habilidades. Meu objetivo é expandir meu domínio em diversas tecnologias e me tornar um desenvolvedor full stack altamente competente."
        experience="Apesar de não ter experiência profissional em programação, realizo projetos próprios como sites e pequenas aplicações funcionais, como calculadoras e testes de ferramentas. Estou sempre explorando novas ideias para enriquecer meu portfólio e desenvolver minhas habilidades práticas."
        education=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt molestiae optio ipsa consequatur "
      />

      <AboutProfile
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt molestiae optio ipsa consequatur repellat. Laborum porro commodi quae illum facere aliquam magnam distinctio, at, assumenda voluptatem reprehenderit ex facilis iusto!"
        name="Daniel"
        email=""
        icons={[]}
        image="/placeholder.svg"
        skills="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt molestiae optio ipsa consequatur repellat. Laborum porro commodi quae illum facere aliquam magnam distinctio, at, assumenda voluptatem reprehenderit ex facilis iusto!"
        experience="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt molestiae optio ipsa consequatur repellat. Laborum porro commodi quae illum facere "
        education=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt molestiae optio ipsa consequatur "
      />

      <AboutProfile
        styles={true}
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt molestiae optio ipsa consequatur repellat. Laborum porro commodi quae illum facere aliquam magnam distinctio, at, assumenda voluptatem reprehenderit ex facilis iusto!"
        name="Anilton"
        email=""
        icons={[]}
        image="/placeholder.svg"
        skills="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt molestiae optio ipsa consequatur repellat. Laborum porro commodi quae illum facere aliquam magnam distinctio, at, assumenda voluptatem reprehenderit ex facilis iusto!"
        experience="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt molestiae optio ipsa consequatur repellat. Laborum porro commodi quae illum facere "
        education=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt molestiae optio ipsa consequatur "
      />
    </section>
  );
}
