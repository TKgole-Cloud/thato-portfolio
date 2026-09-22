export const projects = [
  // ============================================================
  // 🔒 PROJECT 1 — IAM
  // ============================================================
  {
    slug: "azure-iam-least-privilege-lab",
    title: "Azure IAM & Least-Privilege Lab",
    category: "Cloud Security / IAM",
    shortTitle: "IAM Lab",
    description:
      "Designed an Azure identity and access management environment demonstrating role-based access control, least privilege, privileged identity management, and controlled administrative access.",
    tags: ["Azure", "Entra ID", "RBAC", "PIM"],
    github: "https://github.com/TKgole-Cloud/AzureTech-IAM-Lab",
    demo: null,
    featured: true,
    accent: "electric",
  },

  // ============================================================
  // 🔒 PROJECT 2 — NETWORK SEGMENTATION
  // ============================================================
  {
    slug: "azure-secure-network-segmentation-lab",
    title: "Azure Secure Network Segmentation Lab",
    category: "Cloud Security / Networking",
    shortTitle: "Network Segmentation",
    description:
      "Built a segmented Azure network separating web, backend, and database workloads and controlled communication between tiers using Network Security Groups.",
    tags: ["Azure", "VNet", "NSG", "Networking"],
    github:
      "https://github.com/TKgole-Cloud/Azure-Secure-Network-Segmentation-Lab",
    demo: null,
    featured: true,
    accent: "neon",
  },

  // ============================================================
  // 🔒 PROJECT 3 — SECURITY REMEDIATION
  // ============================================================
  {
    slug: "cloud-security-remediation-lab",
    title: "Cloud Security Remediation Lab",
    category: "Cloud Security",
    shortTitle: "Security Remediation",
    description:
      "Simulated a security remediation workflow where cloud security findings were identified, prioritized, remediated through infrastructure changes, and validated after implementation.",
    tags: ["Azure", "Defender for Cloud", "Security"],
    github:
      "https://github.com/TKgole-Cloud/cloud-security-remediation-lab",
    demo: null,
    featured: true,
    accent: "steel",
  },

  // ============================================================
  // 🔒 PROJECT 4 — CONTRACTOR ACCESS
  // ============================================================
  {
    slug: "azure-contractor-third-party-access-lab",
    title: "Azure Contractor / Third-Party Access Lab",
    category: "Cloud Security / IAM",
    shortTitle: "Contractor Access",
    description:
      "Designed controlled access for external contractors while limiting permissions and scope to only the resources required for their work.",
    tags: ["Azure", "Entra ID", "RBAC", "Least Privilege"],
    github:
      "https://github.com/TKgole-Cloud/Azure-Contractor-Third-Party-Access-Lab",
    demo: null,
    featured: true,
    accent: "electric",
  },

  // ============================================================
  // 🔒 PROJECT 5 — ZERO TRUST
  // ============================================================
  {
    slug: "azure-zero-trust-security-lab",
    title: "Azure Zero Trust Security Lab",
    category: "Cloud Security",
    shortTitle: "Zero Trust",
    description:
      "Implemented Zero Trust principles in Azure — verify explicitly, use least-privilege access, and assume breach — through Conditional Access, PIM, and network segmentation.",
    tags: ["Azure", "Zero Trust", "Conditional Access"],
    github:
      "https://github.com/TKgole-Cloud/azure-zero-trust-security-lab",
    demo: null,
    featured: true,
    accent: "neon",
  },

  // ============================================================
  // 🔒 PROJECT 6 — SECURE LANDING ZONE
  // ============================================================
  {
    slug: "azure-secure-landing-zone",
    title: "Azure Secure Landing Zone",
    category: "Cloud Engineering / Governance",
    shortTitle: "Landing Zone",
    description:
      "Built a secure Azure landing zone foundation with subscription structure, network topology, policy enforcement, and identity baseline aligned to Microsoft's Cloud Adoption Framework.",
    tags: ["Azure", "Governance", "Azure Policy", "Networking"],
    github:
      "https://github.com/TKgole-Cloud/-azure-secure-landing-zone",
    demo: null,
    featured: true,
    accent: "steel",
  },

  // ============================================================
  // 🚀 PROJECT 7 — AKS WEB APP
  // ============================================================
  {
    slug: "azure-aks-static-web-app",
    title: "Azure AKS Static Web Application",
    category: "DevOps / Kubernetes",
    shortTitle: "AKS Web App",
    description:
      "Containerized a web application, pushed the image to Azure Container Registry, deployed it to Azure Kubernetes Service, and exposed the application through a Kubernetes Service.",
    tags: ["Azure", "AKS", "ACR", "Docker", "Kubernetes"],
    github: "https://github.com/TKgole-Cloud/AKS-Static-Web-App",
    demo: null,
    featured: false,
    accent: "neon",
  },

  // ============================================================
  // 🔍 PROJECT 8 — AKS TROUBLESHOOTING
  // ============================================================
  {
    slug: "aks-troubleshooting-lab",
    title: "AKS Troubleshooting Lab",
    category: "DevOps / Kubernetes",
    shortTitle: "AKS Troubleshooting",
    description:
      "A hands-on troubleshooting lab covering common AKS failures — pod crashes, networking issues, node pool scaling, and observability with Azure Monitor and Log Analytics.",
    tags: ["AKS", "Kubernetes", "Azure Monitor", "Troubleshooting"],
    github: "https://github.com/TKgole-Cloud/aks-troubleshooting-lab",
    demo: null,
    featured: false,
    accent: "electric",
  },
];

export const projectCategories = [
  { id: "all",      label: "All Projects" },
  { id: "security", label: "Security" },
  { id: "devops",   label: "DevOps" },
  { id: "cloud",    label: "Cloud" },
];