import Image from "next/image";
import GithubIcon from "@/static/icons/github.svg";
import LinkedinIcon from "@/static/icons/linkedin.svg";

export default function Footer() {
  return (
    <ul className="flex gap-6 justify-end mt-8">
      <li>
        <a
          href="https://github.com/vandy-zhang"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={GithubIcon} alt="GitHub" width={30} height={30} />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/vandy-z-b196001a2/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={LinkedinIcon} alt="LinkedIn" width={30} height={30} />
        </a>
      </li>
    </ul>
  );
}
