import Container from "../components/Container";
import { personal } from "../data/personal";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-electric/10 bg-abyss/50 py-12 mt-20">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="text-center md:text-left">
            <p className="text-2xl font-bold text-neon text-glow-neon-soft">
              TK<span className="text-electric">.</span>
            </p>
            <p className="text-sm text-gray-500 mt-1">
              © {year} Thato Kgole. All rights reserved.
            </p>
          </div>

          <ul className="flex items-center gap-5">
            {personal.socials.map((social) => (
              <li key={social.name}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.name}
                  className="
                    w-11 h-11 rounded-full
                    glass border-neon
                    flex items-center justify-center
                    text-xl
                    hover:glow-neon hover:scale-110
                    transition-all duration-300
                  "
                >
                  {social.icon}
                </a>
              </li>
            ))}
          </ul>

        </div>

        <p className="text-center text-xs text-gray-600 mt-8 font-mono-tech">
          Built with React + Tailwind · Deployed on Azure ⚡
        </p>
      </Container>
    </footer>
  );
}