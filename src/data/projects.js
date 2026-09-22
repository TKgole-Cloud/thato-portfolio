export const projects = [
  {
    title: "Azure IAM Lab",
    shortTitle: "IAM Lab",
    description:
      "Hands-on Identity & Access Management lab on Microsoft Azure — implementing RBAC, Privileged Identity Management (PIM), Conditional Access policies, and Entra ID security hardening.",
    longDescription:
      "A deep dive into Azure identity security. Built a full RBAC hierarchy with custom roles, configured PIM for just-in-time privileged access, and enforced Conditional Access policies for MFA and device compliance.",
    tags: ["Azure", "Entra ID", "RBAC", "PIM", "Zero Trust"],
    category: "security",
    github: "https://github.com/TKgole-Cloud/AzureTech-IAM-Lab.git",
    demo: null,
    featured: true,
    accent: "electric",
  },
  {
    title: "AKS Static Web App",
    shortTitle: "AKS Web App",
    description:
      "Deployed a containerized static web application on Azure Kubernetes Service (AKS) with ingress, TLS termination, and automated CI/CD via GitHub Actions.",
    longDescription:
      "Full end-to-end deployment: Docker multi-stage build → pushed to Azure Container Registry → deployed to AKS via manifests → exposed with NGINX Ingress + cert-manager for automated TLS.",
    tags: ["AKS", "Kubernetes", "Docker", "ACR", "CI/CD", "GitHub Actions"],
    category: "devops",
    github: "https://github.com/TKgole-Cloud/AKS-Static-Web-App.git",
    demo: null,
    featured: true,
    accent: "neon",
  },
  {
    title: "Contractor & Third-Party Access Lab",
    shortTitle: "Third-Party Access",
    description:
      "Designed a secure third-party and contractor access pattern in Azure using Entra ID, Conditional Access, PIM, and time-bound access reviews.",
    longDescription:
      "Solves a real enterprise problem: how do you give external contractors access to internal resources without expanding your attack surface? Uses Entra ID B2B collaboration, Conditional Access for external users, and automated access reviews.",
    tags: ["Azure", "Entra ID", "PIM", "Conditional Access", "Governance"],
    category: "security",
    github:
      "https://github.com/TKgole-Cloud/Azure-Contractor-Third-Party-Access-Lab.git",
    demo: null,
    featured: true,
    accent: "steel",
  },
  {
    title: "AKS Troubleshooting Lab",
    shortTitle: "AKS Troubleshooting",
    description:
      "A hands-on troubleshooting lab covering common AKS failures — pod crashes, networking issues, node pool scaling, and observability with Azure Monitor and Log Analytics.",
    longDescription:
      "Real-world AKS debugging scenarios: CrashLoopBackOff, ImagePullBackOff, DNS resolution failures, network policy conflicts, and node pressure. Uses kubectl, Azure Monitor, and Log Analytics to diagnose and resolve.",
    tags: ["AKS", "Kubernetes", "Azure Monitor", "Log Analytics", "Troubleshooting"],
    category: "devops",
    github: "https://github.com/TKgole-Cloud/aks-troubleshooting-lab.git",
    demo: null,
    featured: false,
    accent: "electric",
  },
];

export const projectCategories = [
  { id: "all", label: "All Projects" },
  { id: "devops", label: "DevOps" },
  { id: "security", label: "Security" },
];