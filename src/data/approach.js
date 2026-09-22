export const approach = {
  intro:
    "My engineering approach follows a deliberate cycle — build something, break it intentionally, investigate the failure, fix it properly, validate the result, and document everything.",

  steps: [
    {
      number: "01",
      title: "Build",
      description:
        "Create the infrastructure or application. Start with a clear goal — deploy Azure resources, wire up networking, containerize an app, or provision cloud services via code.",
      icon: "🔨",
    },
    {
      number: "02",
      title: "Break",
      description:
        "Intentionally introduce problems to understand failure conditions. Misconfigure NSG rules, revoke permissions, corrupt manifests, or simulate outages.",
      icon: "💥",
    },
    {
      number: "03",
      title: "Investigate",
      description:
        "Use logs, metrics, CLI commands, documentation, and testing to identify the cause. Trace the failure from symptom to root cause.",
      icon: "🔍",
    },
    {
      number: "04",
      title: "Fix",
      description:
        "Apply the appropriate change — infrastructure code, security control, configuration, or application logic. Never guess; always confirm.",
      icon: "🔧",
    },
    {
      number: "05",
      title: "Validate",
      description:
        "Confirm the fix actually works. Re-run tests, re-check metrics, re-verify access controls. Evidence over assumption.",
      icon: "✅",
    },
    {
      number: "06",
      title: "Document",
      description:
        "Record the architecture, the problem, the solution, the evidence, and the lessons learned — so others (and future me) can benefit.",
      icon: "📝",
    },
  ],
};