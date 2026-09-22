import {
  SiTerraform,
  SiDocker,
  SiKubernetes,
  SiGithubactions,
  SiGithub,
  SiGit,
  SiLinux,
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
  FaStream,
  FaLayerGroup,
  FaBoxOpen,
  FaChartLine,
  FaCube,
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
  { id: "all",      label: "All",      icon: TbStack2 },
  { id: "cloud",    label: "Cloud",    icon: FaCloud },
  { id: "devops",   label: "DevOps",   icon: FaCode },
  { id: "security", label: "Security", icon: FaShieldAlt },
  { id: "tools",    label: "Tools",    icon: FaServer },
];

export const skills = [
  // ☁️ CLOUD
  { name: "Microsoft Azure",   icon: TbBrandAzure,     category: "cloud", accent: "electric" },
  { name: "AKS",               icon: SiKubernetes,     category: "cloud", accent: "neon" },
  { name: "ACR",               icon: FaBoxOpen,        category: "cloud", accent: "steel" },
  { name: "Azure Networking",  icon: FaNetworkWired,   category: "cloud", accent: "electric" },
  { name: "Azure CLI",         icon: FaTerminal,       category: "cloud", accent: "neon" },
  { name: "Azure Monitor",     icon: FaChartLine,      category: "cloud", accent: "steel" },
  { name: "Log Analytics",     icon: FaEye,            category: "cloud", accent: "electric" },

  // 🔁 DEVOPS
  { name: "Docker",            icon: SiDocker,         category: "devops", accent: "neon" },
  { name: "Terraform",         icon: SiTerraform,      category: "devops", accent: "electric" },
  { name: "GitHub Actions",    icon: SiGithubactions,  category: "devops", accent: "steel" },
  { name: "CI/CD",             icon: TbRefresh,        category: "devops", accent: "electric" },
  { name: "Git",               icon: SiGit,            category: "devops", accent: "neon" },
  { name: "GitHub",            icon: SiGithub,         category: "devops", accent: "steel" },

  // 🔒 SECURITY
  { name: "IAM",               icon: FaUserShield,     category: "security", accent: "electric" },
  { name: "Zero Trust",        icon: FaShieldAlt,      category: "security", accent: "neon" },
  { name: "RBAC",              icon: FaLock,           category: "security", accent: "steel" },
  { name: "Least Privilege",   icon: FaKey,            category: "security", accent: "electric" },
  { name: "PIM",               icon: FaClock,          category: "security", accent: "neon" },
  { name: "JIT Access",        icon: FaStream,         category: "security", accent: "steel" },
  { name: "Entra ID",          icon: TbBrandAzure,     category: "security", accent: "electric" },
  { name: "Microsoft Sentinel", icon: TbShieldCheck,   category: "security", accent: "neon" },

  // 🛠️ TOOLS
  { name: "Linux",             icon: SiLinux,          category: "tools", accent: "steel" },
  { name: "Entra ID",          icon: TbBrandAzure,     category: "tools", accent: "electric" },
  { name: "Docker",            icon: SiDocker,         category: "tools", accent: "neon" },
  { name: "Terraform",         icon: SiTerraform,      category: "tools", accent: "electric" },
  { name: "Azure CLI",         icon: FaTerminal,       category: "tools", accent: "neon" }
];

export const learningSkills = [
  { name: "Ansible",            icon: FaLayerGroup,    accent: "neon" },
  { name: "DevOps Monitoring",  icon: TbChartDots,     accent: "electric" },
  { name: "GitOps",             icon: TbShip,          accent: "steel" },
  { name: "Helm",               icon: FaCube,          accent: "electric" },
];