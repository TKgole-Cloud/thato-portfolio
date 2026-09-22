import {
  SiTerraform,
  SiDocker,
  SiKubernetes,
  SiGithubactions,
  SiGithub,
  SiGit,
  SiLinux,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiSocketdotio,
} from "react-icons/si";

import {
  FaCloud,
  FaShieldAlt,
  FaNetworkWired,
  FaServer,
  FaCode,
  FaLock,
  FaTerminal,
  FaEye,
  FaUserShield,
  FaKey,
  FaClock,
  FaLayerGroup,
  FaBoxOpen,
  FaChartLine,
  FaCube,
  FaMicrosoft,
} from "react-icons/fa";

import {
  TbBrandAzure,
  TbCloudLock,
  TbStack2,
  TbShieldCheck,
  TbChartDots,
  TbRefresh,
  TbShip,
} from "react-icons/tb";

export const skillCategories = [
  { id: "all",       label: "All",         icon: TbStack2 },
  { id: "cloud",     label: "Cloud",       icon: FaCloud },
  { id: "iac",       label: "IaC",         icon: FaLayerGroup },
  { id: "devops",    label: "DevOps",      icon: FaCode },
  { id: "security",  label: "Security",    icon: FaShieldAlt },
  { id: "systems",   label: "Systems",     icon: FaServer },
  { id: "development", label: "Development", icon: FaCube },
];

export const skills = [
  // ☁️ CLOUD
  { name: "Microsoft Azure",      icon: TbBrandAzure,      category: "cloud",       accent: "electric" },
  { name: "Azure Networking",     icon: FaNetworkWired,    category: "cloud",       accent: "neon" },
  { name: "Azure CLI",            icon: FaTerminal,        category: "cloud",       accent: "steel" },
  { name: "Azure Monitor",        icon: FaChartLine,       category: "cloud",       accent: "electric" },
  { name: "Log Analytics",        icon: FaEye,             category: "cloud",       accent: "neon" },

  // 🏗️ IaC
  { name: "Terraform",            icon: SiTerraform,       category: "iac",         accent: "electric" },
  { name: "Bicep",                icon: FaMicrosoft,       category: "iac",         accent: "neon" },

  // 🔁 DEVOPS
  { name: "Docker",               icon: SiDocker,          category: "devops",      accent: "electric" },
  { name: "Kubernetes",           icon: SiKubernetes,      category: "devops",      accent: "neon" },
  { name: "AKS",                  icon: SiKubernetes,      category: "devops",      accent: "steel" },
  { name: "ACR",                  icon: FaBoxOpen,         category: "devops",      accent: "electric" },
  { name: "GitHub Actions",       icon: SiGithubactions,   category: "devops",      accent: "neon" },
  { name: "CI/CD",                icon: TbRefresh,         category: "devops",      accent: "steel" },
  { name: "Git",                  icon: SiGit,             category: "devops",      accent: "electric" },
  { name: "GitHub",               icon: SiGithub,          category: "devops",      accent: "neon" },

  // 🔒 SECURITY
  { name: "Entra ID",             icon: TbBrandAzure,      category: "security",    accent: "electric" },
  { name: "IAM",                  icon: FaUserShield,      category: "security",    accent: "neon" },
  { name: "RBAC",                 icon: FaLock,            category: "security",    accent: "steel" },
  { name: "PIM",                  icon: FaClock,           category: "security",    accent: "electric" },
  { name: "Least Privilege",      icon: FaKey,             category: "security",    accent: "neon" },
  { name: "NSGs",                 icon: FaNetworkWired,    category: "security",    accent: "steel" },
  { name: "Defender for Cloud",   icon: TbShieldCheck,     category: "security",    accent: "electric" },

  // 🖥️ SYSTEMS
  { name: "Linux",                icon: SiLinux,           category: "systems",     accent: "neon" },
  { name: "PowerShell",           icon: FaTerminal,        category: "systems",     accent: "electric" },

  // 💻 DEVELOPMENT (In Progress)
  { name: "React",                icon: SiReact,           category: "development", accent: "electric" },
  { name: "Node.js",              icon: SiNodedotjs,       category: "development", accent: "neon" },
  { name: "Express",              icon: SiExpress,         category: "development", accent: "steel" },
  { name: "PostgreSQL",           icon: SiPostgresql,      category: "development", accent: "electric" },
];

export const learningSkills = [
  { name: "PERN Stack",         icon: FaCube,          accent: "neon" },
  { name: "Socket.IO",          icon: SiSocketdotio,   accent: "electric" },
  { name: "Ansible",            icon: FaLayerGroup,    accent: "steel" },
  { name: "DevOps Monitoring",  icon: TbChartDots,     accent: "neon" },
  { name: "GitOps",             icon: TbShip,          accent: "electric" },
  { name: "Helm",               icon: FaCube,          accent: "steel" },
];