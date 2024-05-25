import Image from "next/image";
import Link from "next/link";
import { IconType } from "react-icons/lib";

interface IconLink {
  icon: IconType;
  href: string;
}

interface AboutProfileProps {
  description: string;
  name: string;
  email?: string;
  icons?: IconLink[];
  image: string;
  skills?: string;
  experience?: string;
  education?: string;
  styles?: boolean;
}

export const AboutProfile = ({
  description,
  name,
  email,
  icons,
  skills,
  experience,
  education,
  image,
  styles = false,
}: AboutProfileProps) => {
  return (
    <div className="container grid items-center justify-center gap-4 px-4 md:px-6 my-10">
      <div className={`space-y-3 flex ${styles ? "justify-end" : ""} `}>
        <div>
          <h2
            className={`text-3xl font-bold tracking-tighter md:text-4xl/tight ${
              styles ? "text-end" : ""
            } `}
          >
            Sobre mim
          </h2>
          <p
            className={`${
              styles ? "text-end" : ""
            } max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400`}
          >
            {description}
          </p>
        </div>
      </div>
      <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12 ">
        <Image
          alt="About"
          className={` rounded-xl object-contain object-center sm:w-full w-[490px] h-[490px] ${
            styles ? "lg:order-last" : ""
          }`}
          height={1200}
          src={image}
          width={1500}
          quality={100}
        />
        <div className="flex flex-col justify-center space-y-4">
          <ul className="grid gap-6">
            <li className="text-xl font-bold ">
              <p className="flex justify-between items-center">
                {" "}
                {name}
                <span className="flex gap-4">
                  {icons?.map(({ icon: Icon, href }, index) => (
                    <Link href={href} key={index}>
                      <Icon />
                    </Link>
                  ))}
                </span>
              </p>
              <small className="block text-gray-500 dark:text-gray-400 font-normal text-xs">
                {email}
              </small>
            </li>
            <li>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">Skills</h3>
                <p className="text-gray-500 dark:text-gray-400 ">{skills}</p>
              </div>
            </li>
            <li>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">Experiência</h3>
                <p className="text-gray-500 dark:text-gray-400">{experience}</p>
              </div>
            </li>
            <li>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">Educação</h3>
                <p className="text-gray-500 dark:text-gray-400">{education}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
