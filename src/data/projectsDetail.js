export const projectsDetail = {
  /* ============================================================
     🔒 PROJECT 1 — Azure IAM & Least-Privilege Lab
     ============================================================ */
  "azure-iam-least-privilege-lab": {
    title: "Azure IAM & Least-Privilege Lab",
    category: "Cloud Security / IAM",
    accent: "electric",
    year: "2026",
    github: "https://github.com/TKgole-Cloud/AzureTech-IAM-Lab",

    overview:
      "Designed an Azure identity and access management environment demonstrating role-based access control, least privilege, privileged identity management, and controlled administrative access.",

    architecture: `┌──────────────────────────────────────────────┐
│              Entra ID (Azure AD)             │
│  ┌────────────┐  ┌────────────┐  ┌─────────┐ │
│  │   Users    │──│   Groups   │──│  Roles  │ │
│  └────────────┘  └────────────┘  └─────────┘ │
│         │               │              │     │
│         └───────┬───────┴──────┬───────┘     │
│                 ▼              ▼             │
│          ┌───────────┐   ┌────────────┐      │
│          │   RBAC    │   │    PIM     │      │
│          │  Custom   │   │  Just-in-  │      │
│          │  Roles    │   │    Time    │      │
│          └───────────┘   └────────────┘      │
│                 │              │             │
└─────────────────┼──────────────┼─────────────┘
                  ▼              ▼
        ┌──────────────────────────────────┐
        │         Azure Resources          │
        │   (Scoped Permissions per Role)  │
        └──────────────────────────────────┘`,

    technologies: [
      "Microsoft Azure",
      "Entra ID",
      "RBAC",
      "PIM",
      "Conditional Access",
      "Terraform",
    ],

    implementation: [
      "Built a hierarchical resource group structure for Dev, Test, and Prod environments, then defined custom Azure roles scoped to specific resource types — avoiding over-permissioned built-in roles.",
      "Created Azure AD groups mapped to role assignments, so access is granted to groups rather than individuals — making offboarding a single group-membership removal.",
      "Configured Privileged Identity Management (PIM) for just-in-time elevation, with approval workflows and time-bound assignments for privileged roles like Contributor and User Access Administrator.",
      "Enforced Conditional Access policies for MFA, device compliance, and location-based restrictions on privileged sign-ins.",
    ],

    securityDecisions: [
      {
        title: "Least privilege over built-in roles",
        description:
          "Instead of assigning the Contributor role (which allows almost everything), I built custom roles scoped to only the actions each team needed.",
      },
      {
        title: "Group-based access, not user-based",
        description:
          "Granting permissions to groups rather than individuals makes access reviews fast and offboarding a single API call.",
      },
      {
        title: "Just-in-time elevation with PIM",
        description:
          "Privileged roles are never permanent. Users must elevate, provide justification, and get approval — all logged.",
      },
      {
        title: "Conditional Access for admin sign-ins",
        description:
          "Admin portal access requires compliant device + MFA + trusted location. This closes the most common privilege-escalation path.",
      },
    ],

    troubleshooting: [
      {
        problem:
          "A user couldn't access a resource even after being added to the correct group.",
        cause:
          "Role assignment was scoped at the subscription level, but the resource was in a different subscription — PIM elevation was active for the wrong scope.",
        fix:
          "Re-scoped the role assignment to the correct subscription, then re-triggered PIM elevation. Verified access with 'Check access' in IAM blade.",
      },
    ],

    lessons: [
      "Access scoping is a hierarchy — subscription → resource group → resource. Getting the scope wrong silently breaks access.",
      "PIM elevation has an activation window. Testing too quickly after assignment fails because elevation hasn't propagated yet.",
      "Documentation of group-to-role mappings is essential — without it, access reviews become guesswork.",
    ],
  },

  /* ============================================================
     🔒 PROJECT 2 — Network Segmentation
     ============================================================ */
  "azure-secure-network-segmentation-lab": {
    title: "Azure Secure Network Segmentation Lab",
    category: "Cloud Security / Networking",
    accent: "neon",
    year: "2026",
    github: "https://github.com/TKgole-Cloud",

    overview:
      "Built a segmented Azure network separating web, backend, and database workloads and controlled communication between tiers using Network Security Groups.",

    architecture: `Internet
   │
   ▼
┌───────────────────────────────┐
│   VNet (10.0.0.0/16)          │
│  ┌─────────────────────┐      │
│  │  Web Subnet         │      │
│  │  10.0.1.0/24        │      │
│  └────────┬────────────┘      │
│           │ NSG-Web           │
│           ▼                   │
│  ┌─────────────────────┐      │
│  │  Backend Subnet     │      │
│  │  10.0.2.0/24        │      │
│  └────────┬────────────┘      │
│           │ NSG-Backend       │
│           ▼                   │
│  ┌─────────────────────┐      │
│  │  Database Subnet    │      │
│  │  10.0.3.0/24        │      │
│  └─────────────────────┘      │
└───────────────────────────────┘`,

    technologies: ["Microsoft Azure", "VNet", "NSG", "Terraform"],

    implementation: [
      "Created a single VNet with three subnets (web, backend, database), each isolated and addressed in separate /24 ranges.",
      "Attached NSGs to each subnet with deny-by-default rules — only explicitly allowed traffic passes.",
      "Web subnet accepts HTTP/HTTPS from the internet. Backend subnet accepts traffic only from the web subnet. Database subnet accepts only from the backend subnet.",
      "Used service tags (like 'Internet', 'VirtualNetwork') instead of IP ranges where possible, so rules survive IP changes.",
    ],

    securityDecisions: [
      {
        title: "Deny by default",
        description:
          "Azure NSGs default-allow Intra-VNet traffic. I added explicit deny rules so only intended paths work.",
      },
      {
        title: "Tier isolation",
        description:
          "Database subnet has zero internet exposure. Even if the web tier is compromised, the database is unreachable.",
      },
      {
        title: "Service tags over IPs",
        description:
          "Using 'VirtualNetwork' and 'Internet' tags keeps rules maintainable as infrastructure scales.",
      },
    ],

    troubleshooting: [
      {
        problem: "Backend VM couldn't reach database VM despite correct NSG rules.",
        cause:
          "Default NSG rules on the database subnet allowed intra-VNet traffic — but my custom deny rule was evaluated first, blocking all traffic before the allow rule could match.",
        fix:
          "Adjusted rule priorities (lower number = higher priority). Moved the allow rule from the web subnet to priority 100, and the deny rule to priority 200.",
      },
    ],

    lessons: [
      "NSG rule priority determines evaluation order — lower number wins.",
      "Default NSG rules exist and can conflict with custom rules. Always audit defaults.",
      "Testing with Network Watcher's IP flow verify saves hours of guesswork.",
    ],
  },

  /* ============================================================
     🔒 PROJECT 3 — Security Remediation
     ============================================================ */
  "cloud-security-remediation-lab": {
    title: "Cloud Security Remediation Lab",
    category: "Cloud Security",
    accent: "steel",
    year: "2026",
    github: "https://github.com/TKgole-Cloud/cloud-security-remediation-lab",

    overview:
      "Simulated a security remediation workflow where cloud security findings were identified, prioritized, remediated through infrastructure changes, and validated after implementation.",

    architecture: `Finding (Defender for Cloud)
      │
      ▼
Risk Assessment ──► Prioritization
      │
      ▼
Remediation (Terraform)
      │
      ▼
Validation (Re-scan)
      │
      ▼
Documentation`,

    technologies: [
      "Microsoft Azure",
      "Defender for Cloud",
      "Terraform",
      "Azure Policy",
    ],

    implementation: [
      "Deployed intentionally vulnerable resources: storage accounts with public blob access, VMs without disk encryption, and NSGs with overly permissive rules.",
      "Used Microsoft Defender for Cloud's Secure Score to identify findings, then categorized them by severity (High / Medium / Low).",
      "Wrote Terraform modules to remediate each finding — disabling public access, enabling encryption, tightening NSG rules.",
      "Re-ran Defender scans and confirmed each finding resolved. Documented before/after evidence.",
    ],

    securityDecisions: [
      {
        title: "Prioritize by real risk, not just score",
        description:
          "Not every finding is equally urgent. Public storage buckets outrank missing diagnostic logs.",
      },
      {
        title: "Remediate through code",
        description:
          "Fixing issues manually in the portal is not repeatable. Terraform means the fix is versioned and re-appliable.",
      },
      {
        title: "Validate with the same tools",
        description:
          "Used the same Defender scan to confirm remediation that found the issue — no assumption.",
      },
    ],

    troubleshooting: [
      {
        problem:
          "Defender continued flagging a storage account for public access even after disabling it in Terraform.",
        cause:
          "Defender's scan runs on a schedule (up to 12 hours). The finding was stale — the actual configuration was already correct.",
        fix:
          "Triggered an on-demand scan via Azure CLI and confirmed the finding cleared within minutes.",
      },
    ],

    lessons: [
      "Security findings have a propagation delay. Patience beats panic.",
      "Infrastructure-as-code remediation is auditable — every change is a commit.",
      "Defender's Secure Score is a guide, not a target. Context matters.",
    ],
  },

  /* ============================================================
     🔒 PROJECT 4 — Contractor Access
     ============================================================ */
  "azure-contractor-third-party-access-lab": {
    title: "Azure Contractor / Third-Party Access Lab",
    category: "Cloud Security / IAM",
    accent: "electric",
    year: "2026",
    github:
      "https://github.com/TKgole-Cloud/Azure-Contractor-Third-Party-Access-Lab",

    overview:
      "Designed controlled access for external contractors while limiting permissions and scope to only the resources required for their work.",

    architecture: `External Contractor
      │
      ▼
Entra ID (B2B Collaboration)
      │
      ▼
Conditional Access
      │
      ▼
Controlled Access Group
      │
      ▼
Scoped Azure Role
      │
      ▼
Specific Resource (Least Privilege)`,

    technologies: [
      "Microsoft Azure",
      "Entra ID",
      "RBAC",
      "PIM",
      "Conditional Access",
    ],

    implementation: [
      "Invited contractor identities as B2B guest users in Entra ID — they authenticate with their own organization's credentials.",
      "Created a dedicated 'Contractors' security group with a custom RBAC role scoped only to the specific resource they support.",
      "Configured Conditional Access to enforce MFA and allowed-location policies specifically for guest users.",
      "Used PIM to make their access time-bound and require approval for elevation.",
    ],

    securityDecisions: [
      {
        title: "B2B identity, not shadow accounts",
        description:
          "Guest accounts prevent password sprawl and let the contractor's own org handle identity lifecycle.",
      },
      {
        title: "Time-bound access",
        description:
          "Contractor assignments expire automatically — no need to remember to remove them.",
      },
      {
        title: "Stricter Conditional Access for guests",
        description:
          "External users face MFA + location restrictions that internal users don't.",
      },
    ],

    troubleshooting: [
      {
        problem: "Contractor couldn't sign in despite correct group assignment.",
        cause:
          "Conditional Access policy blocked sign-ins from their location — the policy only allowed a specific country range, and they were traveling.",
        fix:
          "Added a named location for the new region, then updated the policy. Also documented the process for future location requests.",
      },
    ],

    lessons: [
      "External identities need different security rules than internal ones.",
      "Access reviews for guests should run more frequently than for employees.",
      "Documenting exception processes (like travel approvals) prevents support tickets.",
    ],
  },

  /* ============================================================
     🚀 PROJECT 5 — AKS Static Web App
     ============================================================ */
  "azure-aks-static-web-app": {
    title: "Azure AKS Static Web Application",
    category: "DevOps / Kubernetes",
    accent: "neon",
    year: "2026",
    github: "https://github.com/TKgole-Cloud/AKS-Static-Web-App",

    overview:
      "Containerized a web application, pushed the image to Azure Container Registry, deployed it to Azure Kubernetes Service, and exposed the application through a Kubernetes Service.",

    architecture: `Developer
   │
   ▼
GitHub (Source)
   │
   ▼
Docker Build
   │
   ▼
Azure Container Registry (ACR)
   │
   ▼
Azure Kubernetes Service (AKS)
   │
   ▼
Kubernetes Service (LoadBalancer)
   │
   ▼
Application (Public URL)`,

    technologies: [
      "Microsoft Azure",
      "AKS",
      "ACR",
      "Docker",
      "Kubernetes",
      "GitHub Actions",
    ],

    implementation: [
      "Containerized a static web application using a multi-stage Dockerfile — build stage produces assets, runtime stage serves them via NGINX.",
      "Pushed the image to Azure Container Registry, then granted AKS cluster pull permissions via managed identity (not credentials).",
      "Wrote Kubernetes manifests for Deployment, Service (LoadBalancer), and ConfigMap. Applied them with kubectl.",
      "Automated image builds and deployments with GitHub Actions — on push to main, the workflow builds, pushes to ACR, and rolls out a new revision.",
    ],

    securityDecisions: [
      {
        title: "Managed identity for ACR pull",
        description:
          "AKS pulls images using its own managed identity — no credentials in manifests or secrets.",
      },
      {
        title: "Multi-stage build",
        description:
          "Runtime image is minimal (NGINX + assets only), reducing attack surface and image size.",
      },
      {
        title: "Rolling updates only",
        description:
          "Deployments use rolling update strategy with readiness probes — zero-downtime.",
      },
    ],

    troubleshooting: [
      {
        problem: "Pods stuck in ImagePullBackOff after deployment.",
        cause:
          "AKS managed identity didn't have AcrPull permission on the registry — the role assignment was missing.",
        fix:
          "Assigned the AcrPull role to the AKS kubelet identity on the ACR scope. Pods started within 30 seconds.",
      },
    ],

    lessons: [
      "Managed identities beat credentials — no secrets to rotate.",
      "Readiness probes are essential for zero-downtime rollouts.",
      "kubectl describe pod is the first tool for any pod issue.",
    ],
  },

  /* ============================================================
     🏗️ PROJECT 6 — Infrastructure Automation
     ============================================================ */
  "azure-infrastructure-automation": {
    title: "Azure Infrastructure Automation",
    category: "Cloud Engineering",
    accent: "steel",
    year: "2026",
    github: "https://github.com/TKgole-Cloud",

    overview:
      "Built Azure infrastructure using Terraform to replace manual cloud configuration with repeatable infrastructure-as-code deployments.",

    architecture: `Terraform Code
   │
   ▼
Azure Provider
   │
   ▼
Resource Group
   │
   ├── Network (VNet, Subnets, NSGs)
   ├── Compute (VMs, NICs)
   ├── Storage (Accounts, Containers)
   └── Security (Key Vault, RBAC)`,

    technologies: ["Microsoft Azure", "Terraform", "Azure CLI"],

    implementation: [
      "Structured Terraform code with modules for network, compute, storage, and security — each module independently testable.",
      "Used variables for environment-specific values (region, naming, sizing), enabling dev/test/prod deployments from the same code.",
      "Stored Terraform state in Azure Storage with locking enabled, so teams can collaborate safely.",
      "Outputs expose resource IDs and endpoints for downstream automation.",
    ],

    securityDecisions: [
      {
        title: "Remote state, not local",
        description:
          "State in Azure Storage prevents accidental state loss and enables team collaboration.",
      },
      {
        title: "Secrets in Key Vault",
        description:
          "No secrets in .tf files. Key Vault references keep credentials out of source control.",
      },
      {
        title: "Modular structure",
        description:
          "Small, single-purpose modules are easier to review and safer to change.",
      },
    ],

    troubleshooting: [
      {
        problem: "terraform apply failed with 'resource already exists'.",
        cause:
          "Resources were created manually in the portal, but weren't in state. Terraform tried to create them, then errored.",
        fix:
          "Used 'terraform import' to bring the existing resources into state, then confirmed with 'terraform plan' showing no drift.",
      },
    ],

    lessons: [
      "Never create resources manually if Terraform manages them — always start with code.",
      "State file corruption is recoverable if you have remote backups.",
      "terraform plan should be reviewed line-by-line before apply.",
    ],
  },

  /* ============================================================
     🚌 PROJECT 7 — Tembisa Bus Tracker
     ============================================================ */
  "tembisa-bus-tracker": {
    title: "Tembisa Bus Tracker",
    category: "Full Stack Application",
    accent: "electric",
    year: "2026",
    github: "https://github.com/TKgole-Cloud",

    overview:
      "Built a real-time bus tracking application that displays route information, bus location, and passenger data through a full-stack web application.",

    architecture: `React Frontend
   │
   ▼
Node.js / Express API
   │
   ├── Socket.IO (Real-time)
   │
   ▼
PostgreSQL Database
   │
   ▼
Routes · Buses · Passengers`,

    technologies: [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Socket.IO",
    ],

    implementation: [
      "Built a React frontend with a live map view showing bus locations and route overlays.",
      "Node.js + Express backend exposes REST endpoints for routes, stops, and schedules.",
      "Socket.IO pushes real-time bus position updates to connected clients — no polling.",
      "PostgreSQL stores routes, stops, buses, and passenger records with foreign-key relationships.",
    ],

    securityDecisions: [
      {
        title: "Environment-based config",
        description:
          "All secrets (DB credentials, API keys) live in environment variables — never in source.",
      },
      {
        title: "Input validation",
        description:
          "Express middleware validates all incoming request bodies before hitting the database.",
      },
      {
        title: "Parameterized queries",
        description:
          "PostgreSQL queries use parameterized statements to prevent SQL injection.",
      },
    ],

    troubleshooting: [
      {
        problem:
          "Real-time updates stopped working after ~5 minutes of continuous use.",
        cause:
          "Socket.IO connections were being dropped by an idle proxy timeout without reconnection logic.",
        fix:
          "Enabled Socket.IO's built-in reconnection with exponential backoff, and added a heartbeat ping every 30 seconds.",
      },
    ],

    lessons: [
      "Real-time systems need explicit reconnection and heartbeat handling.",
      "Parameterized queries are non-negotiable for any user-facing backend.",
      "Testing WebSocket behavior behind proxies requires simulating network interruptions.",
    ],
  },

    /* ============================================================
     🔒 PROJECT 5 — Zero Trust
     ============================================================ */
  "azure-zero-trust-security-lab": {
    title: "Azure Zero Trust Security Lab",
    category: "Cloud Security",
    accent: "neon",
    year: "2026",
    github: "https://github.com/TKgole-Cloud/azure-zero-trust-security-lab",

    overview:
      "Implemented Zero Trust principles in Azure — verify explicitly, use least-privilege access, and assume breach — through Conditional Access, PIM, and network segmentation.",

    architecture: `User / Device
      │
      ▼
Entra ID (Verify Explicitly)
      │
      ▼
Conditional Access Policies
      │
      ▼
Least-Privilege Access (RBAC + PIM)
      │
      ▼
Segmented Resources (Assume Breach)
      │
      ▼
Continuous Monitoring (Defender)        `,

    technologies: [
      "Microsoft Azure",
      "Entra ID",
      "Conditional Access",
      "PIM",
      "Defender for Cloud",
    ],

    implementation: [
      "Configured Conditional Access policies requiring MFA, compliant devices, and trusted locations for all users — with stricter rules for admin roles.",
      "Applied least-privilege access through custom RBAC roles scoped to specific resource types, then enforced just-in-time elevation via PIM.",
      "Segmented the network into isolated tiers with deny-by-default NSG rules — so even a compromised resource can't reach the database tier.",
      "Enabled Defender for Cloud across all subscriptions, with automatic provisioning of monitoring agents and security baselines.",
    ],

    securityDecisions: [
      {
        title: "Verify explicitly",
        description:
          "Every access request is authenticated and authorized based on identity, device, location, and risk — not just username and password.",
      },
      {
        title: "Least-privilege access",
        description:
          "Permissions are scoped down and time-bound. No permanent admin roles.",
      },
      {
        title: "Assume breach",
        description:
          "Network segmentation and Defender monitoring assume the environment is already compromised, and limit blast radius.",
      },
    ],

    troubleshooting: [
      {
        problem:
          "A user couldn't sign in after a Conditional Access policy change.",
        cause:
          "The policy required a compliant device, but the user's device wasn't enrolled in Intune yet.",
        fix:
          "Documented the device-enrollment process and added a break-glass emergency account excluded from the policy for future lockouts.",
      },
    ],

    lessons: [
      "Always have a break-glass account that Conditional Access doesn't affect — otherwise you can lock yourself out.",
      "Zero Trust is a set of principles, not a single product or setting.",
      "Policy changes should roll out to a pilot group first.",
    ],
  },

  /* ============================================================
     🔒 PROJECT 6 — Secure Landing Zone
     ============================================================ */
  "azure-secure-landing-zone": {
    title: "Azure Secure Landing Zone",
    category: "Cloud Engineering / Governance",
    accent: "steel",
    year: "2026",
    github: "https://github.com/TKgole-Cloud/-azure-secure-landing-zone",

    overview:
      "Built a secure Azure landing zone foundation with subscription structure, network topology, policy enforcement, and identity baseline aligned to Microsoft's Cloud Adoption Framework.",

    architecture: `Management Group (Root)
      │
      ├── Platform Subscriptions
      │     ├── Identity
      │     ├── Management
      │     └── Connectivity (Hub VNet)
      │
      └── Landing Zone Subscriptions
            ├── Corp (Spoke VNet)
            └── Online (Spoke VNet)

Hub ↔ Spoke Peering · Azure Policy · RBAC Baseline`,

    technologies: [
      "Microsoft Azure",
      "Cloud Adoption Framework",
      "Azure Policy",
      "VNet Peering",
      "RBAC",
    ],

    implementation: [
      "Designed a management-group hierarchy aligned to the Cloud Adoption Framework — separating Platform subscriptions from application Landing Zones.",
      "Built a hub-and-spoke network topology: a central Hub VNet hosts shared services, and spoke VNets peer to it for centralized connectivity.",
      "Enforced organizational standards through Azure Policy assignments at the management-group level — inherited by all child subscriptions.",
      "Established an identity baseline with RBAC role assignments scoped per management group, so access is layered by blast radius.",
    ],

    securityDecisions: [
      {
        title: "Separation of duties",
        description:
          "Platform subscriptions are managed by a different team scope than application Landing Zones.",
      },
      {
        title: "Centralized network control",
        description:
          "The Hub VNet allows centralized enforcement of firewall, DNS, and connectivity policies.",
      },
      {
        title: "Policy at the top",
        description:
          "Azure Policy at the management-group level means new subscriptions inherit compliance automatically.",
      },
    ],

    troubleshooting: [
      {
        problem:
          "A spoke VNet couldn't reach resources in another spoke VNet via the hub.",
        cause:
          "Hub VNet peering allows spoke-to-hub traffic, but doesn't automatically forward spoke-to-spoke. Traffic needs explicit routing or Azure Firewall.",
        fix:
          "Deployed Azure Firewall in the Hub and configured user-defined routes to send spoke-to-spoke traffic through the firewall.",
      },
    ],

    lessons: [
      "Hub-spoke topology is powerful but requires careful route planning.",
      "Azure Policy inheritance is a massive time-saver for multi-subscription environments.",
      "Landing zones are foundational — build them right once, and every workload benefits.",
    ],
  },
};

