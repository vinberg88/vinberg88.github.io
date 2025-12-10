import Link from 'next/link'

const roadmapMilestones = [
  {
    phase: '0. Foundations',
    title: 'Validate hardware & platform prerequisites',
    description:
      'Ensure firmware virtualization, TPM, and GPU drivers all align before onboarding distros. Capture a baseline image you can revert to.',
    checklist: [
      'Confirm virtualization and Hyper-V support with systeminfo | findstr /i "virtualization"',
      'Update BIOS and enable SVM/VT-x, IOMMU, and TPM 2.0',
      'Install the latest GPU driver with WSL support (NVIDIA 535+, AMD Adrenalin 23.9+, Intel Arc 31.0+)',
      'Back up the base OS image with a bare-metal recovery tool before the rollout'
    ]
  },
  {
    phase: '1. Pilot rollout',
    title: 'Provision a golden image and pilot cohort',
    description:
      'Treat WSL as a managed service. Test the complete workflow with a small team and iterate documentation rapidly.',
    checklist: [
      'Create a reference .wslconfig for resource governance (CPU, memory, swap, networking)',
      'Publish an install script that hardens Windows interop, seeds distros, and configures security tooling',
      'Document the least privilege model (who can install distros, who can mount removable media, etc.)',
      'Capture feedback after the first sprint and bake into the playbook'
    ]
  },
  {
    phase: '2. Broad deployment',
    title: 'Automate distro lifecycle and compliance',
    description:
      'Fold WSL into fleet management. Enforce configuration drift, patching cadence, and asset inventory.',
    checklist: [
      'Use Microsoft Intune, Configuration Manager, or Puppet to push approved distros and .wslconfig updates',
      'Automate wsl --export and attach retention policies for regulated environments',
      'Integrate vulnerability management (Defender for Endpoint, Qualys, Tenable) across Windows and Linux layers',
      'Track distro usage via custom PowerShell telemetry piped into Azure Monitor or Splunk'
    ]
  },
  {
    phase: '3. Optimization',
    title: 'Tune performance and unlock advanced workloads',
    description:
      'Once stable, invest in advanced flows such as GPU ML, container build fleets, and hybrid VDI + WSL workspaces.',
    checklist: [
      'Ship curated distro bundles (WSL app packages) with pre-configured dev containers and toolchains',
      'Adopt DirectML, CUDA, or ONNX Runtime acceleration pipelines as appropriate for teams',
      'Standardize Dev Container definitions for cross-editor consistency',
      'Surface WSL metrics (CPU, memory, disk) in your observability dashboards'
    ]
  }
]

const distroStrategies = [
  {
    name: 'Layered developer experience',
    description:
      'Give engineers a clean separation between base OS, languages, and project dependencies while minimizing drift across projects.',
    steps: [
      'Install a base distro (Ubuntu LTS or Fedora) with only core packages',
      'Layer languages and CLIs using Dev Containers or asdf to avoid polluting /usr/local',
      'Use project-level containerization (Docker, Podman, Nix) for consistent CI/CD parity',
      'Store dotfiles in a bare git repo and apply with chezmoi or yadm on first login'
    ],
    callout: 'This hybrid model lets Windows remain pristine while Linux layers remain disposable and reproducible.'
  },
  {
    name: 'Multi-distro knowledge workers',
    description:
      'Support teams that jump between security-hardened, legacy, and bleeding-edge environments without dual-boot or full VMs.',
    steps: [
      'Provide a locked-down distro for regulated workloads (Debian with interop disabled, custom kernel hardening)',
      'Maintain a rolling-release distro (Fedora, Tumbleweed) to prototype new frameworks',
      'Automate wsl --import/export snapshots around critical releases for fast rollback',
      'Use Windows Terminal profiles and custom icons to differentiate distros visually'
    ],
    callout: 'Clear naming conventions and dedicated Terminal profiles prevent mistakes when juggling multiple distros.'
  },
  {
    name: 'Data science & AI powerhouse',
    description:
      'Blend GPU-accelerated notebooks with Windows productivity suites and cloud identity integration.',
    steps: [
      'Install CUDA, ROCm, or DirectML stacks aligned with your GPU vendor and frameworks (PyTorch, TensorFlow)',
      'Use Conda, Mamba, or uv for environment isolation and version pinning',
      'Secure data access with Azure Key Vault, gMSA, or managed identities bridged via Azure CLI',
      'Adopt VS Code Remote, JupyterLab, or JetBrains Gateway for IDE workflows with GPU support'
    ],
    callout: 'WSLg now supports VirtIO GPU acceleration, so Linux GUIs and notebooks render smoothly alongside Windows apps.'
  }
]

const governanceControls = [
  {
    title: 'Security baselines',
    items: [
      'Enforce Secure Boot, BitLocker, and Windows Hello for Business on the host OS',
      'Disable Windows-Linux interoperability per distro when handling classified data (set interop=false in /etc/wsl.conf)',
      'Require sudo password prompts by editing /etc/sudoers to remove NOPASSWD entries',
      'Use Linux security modules (AppArmor, SELinux) where supported to sandbox processes'
    ]
  },
  {
    title: 'Data residency & compliance',
    items: [
      'Mount encrypted VHDX files for projects with strict retention policies',
      'Automate VHDX compaction and deletion with change management approvals',
      'Log command history to an audit trail (at minimum, centralize Bash history via composed PROMPT_COMMAND hooks)',
      'Document incident response steps for both Windows and Linux sides, including forensic imaging of ext4.vhdx'
    ]
  },
  {
    title: 'Networking governance',
    items: [
      'Limit outbound hosts via Windows Firewall rules scoped to wslhost.exe and vmwp.exe',
      'Use proxy auto-config (PAC) scripts or WPAD for distros that require internet access policy enforcement',
      'Forward only approved ports from Linux to Windows and audit with Get-NetTCPConnection',
      'Use split tunneling policies carefully: decide when VPN traffic from WSL should re-enter Windows'
    ]
  },
  {
    title: 'Identity & access management',
    items: [
      'Mirror Windows user identity inside distros using win32 metadata (getent passwd) or SSSD with AD integration',
      'Rotate secrets with Azure Key Vault or HashiCorp Vault CLI plugins installed in WSL',
      'Disable password-based SSH and rely on hardware-backed keys (YubiKey, Windows Hello FIDO2)',
      'Set inactivity timeouts and automatic logout via TMOUT in /etc/profile or systemd logind'
    ]
  }
]

const workflows = [
  {
    name: 'Hybrid cloud microservices',
    narrative:
      'Develop microservices locally with WSL while mirroring the production Kubernetes stack. Use Dev Containers for ephemeral service sandboxes, debug with VS Code, and deploy through GitHub Actions runners hosted on Windows.',
    stages: [
      'Bootstrap the service repo with devcontainer.json referencing your distro toolchain',
      'Use kind inside WSL for a local K8s cluster; mirror cluster add-ons (CoreDNS, Ingress) to avoid surprises',
      'Attach live logs via kubectl logs -f and port-forwarding to Windows browsers or Postman',
      'Push artifacts to Azure Container Registry using az acr login from WSL with federated credentials'
    ]
  },
  {
    name: 'Secure research environments',
    narrative:
      'Academic and security researchers can isolate experiments per distro, freeze them via snapshots, and move results through approved review workflows.',
    stages: [
      'Clone a clean distro, apply reproducible infrastructure scripts (Ansible, Nix), and export as a sealed baseline',
      'Run tooling (IDA Pro, Ghidra, custom ML pipelines) with network egress disabled',
      'Capture findings in secured Windows workspaces with DLP protections',
      'Decommission the distro with wsl --unregister once the research cycle concludes'
    ]
  },
  {
    name: 'Device & IoT prototyping',
    narrative:
      'Pair WSL with Windows driver toolkits for embedded development. Use USB/IP, serial forwarding, and WSLg for device dashboards.',
    stages: [
      'Forward hardware with wsl --mount or usbipd wsl attach',
      'Program/debug firmware using openocd, pyocd, or vendor SDKs inside WSL',
      'Visualize sensor data with GNOME Builder, Grafana, or Qt tools thanks to WSLg',
      'Package OTA updates via Azure IoT Hub or MQTT brokers running on Windows hosts'
    ]
  }
]

const automationPatterns = [
  {
    title: 'Idempotent onboarding script',
    description:
      'Create a PowerShell script that installs WSL, configures policies, and seeds base images without manual intervention.',
    snippet: `# Install WSL and a curated Ubuntu image
wsl --install -d Ubuntu-24.04 --web-download
wsl --update
wsl --set-default-version 2

# Configure resource limits
@"
[wsl2]
memory=8GB
processors=4
localhostForwarding=true
"@ | Set-Content "$env:USERPROFILE/.wslconfig"

# Import organization image if available
if (Test-Path ".\\artifacts\\org-base.tar") {
  wsl --import OrgUbuntu "C:\\WSL\\OrgUbuntu" .\\artifacts\\org-base.tar --version 2
}`
  },
  {
    title: 'Scheduled health checks',
    description:
      'Use Task Scheduler or systemd timers to audit distro status, update cadence, and disk consumption.',
    snippet: `# PowerShell script invoked nightly
$timestamp = Get-Date -Format o
$distros = wsl -l -v | Select-String "[0-9]"

$report = @{
  Timestamp = $timestamp
  Distros   = $distros
  DiskUsage = (Get-ChildItem "$env:LOCALAPPDATA\\Packages" -Filter ext4.vhdx -Recurse |
    Measure-Object Length -Sum).Sum / 1GB
}

$report | ConvertTo-Json | Out-File -FilePath "C:\\WSL\\reports\\health-$($timestamp.Replace(':','-')).json"`
  },
  {
    title: 'GitOps for distro images',
    description:
      'Treat distro exports as artifacts. Version-control the process, store images in object storage, and promote them like container images.',
    snippet: `name: Publish WSL Base Image

on:
  push:
    branches:
      - main
    paths:
      - 'distros/**'

jobs:
  export-image:
    runs-on: windows-latest
    steps:
      - uses: actions/checkout@v4
      - name: Import distro recipe
        run: wsl --import BuildUbuntu C:\\WSL\\BuildUbuntu distros\\ubuntu.tar --version 2
      - name: Run configuration script
        run: wsl -d BuildUbuntu -- bash scripts/configure.sh
      - name: Export image artifact
        run: wsl --export BuildUbuntu artifacts\\ubuntu-ready.tar
      - uses: actions/upload-artifact@v4
        with:
          name: ubuntu-ready-wsl
          path: artifacts/ubuntu-ready.tar`
  }
]

const readingList = [
  {
    title: 'WSL Architecture overview',
    href: 'https://learn.microsoft.com/windows/wsl/compare-versions',
    summary: 'Understand the VM-based WSL 2 architecture, syscall pass-through, and performance advantages over WSL 1.'
  },
  {
    title: 'Enterprise deployment guide',
    href: 'https://learn.microsoft.com/windows/wsl/deploy-enterprise',
    summary: 'Microsoft’s official guidance for rolling out WSL across large organizations with governance in mind.'
  },
  {
    title: 'GPU acceleration on WSL',
    href: 'https://learn.microsoft.com/windows/wsl/tutorials/gpu-compute',
    summary: 'Step-by-step instructions to enable CUDA, DirectML, and compute frameworks for AI workloads.'
  },
  {
    title: 'USB/IP on Windows',
    href: 'https://learn.microsoft.com/windows/wsl/connect-usb',
    summary: 'Attach USB devices directly into WSL with usbipd, a must for embedded and IoT developers.'
  },
  {
    title: 'Security best practices for WSL',
    href: 'https://aka.ms/wsl-security',
    summary: 'A living document aggregating Microsoft Security guidance for mixed Windows/Linux estates.'
  },
  {
    title: 'Dev Container specification',
    href: 'https://containers.dev/',
    summary: 'Leverage Dev Containers alongside WSL for deterministic dev environments that match CI/CD.'
  }
]

export default function WslProPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <section className="relative overflow-hidden bg-gradient-to-br from-wsl-blue via-indigo-600 to-fuchsia-600 text-white py-24">
        <div className="absolute inset-0 opacity-20 mix-blend-screen" aria-hidden="true">
          <div className="absolute -top-24 left-1/3 h-96 w-96 rounded-full bg-white/20 blur-3xl" />
          <div className="absolute -bottom-32 right-1/4 h-80 w-80 rounded-full bg-white/10 blur-2xl" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-7/12">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 border border-white/25 text-sm font-medium">
                <span className="h-2 w-2 rounded-full bg-lime-300" />
                Enterprise playbook
              </span>
              <h1 className="mt-6 text-4xl md:text-6xl font-bold leading-tight">
                Scale Windows Subsystem for Linux without friction
              </h1>
              <p className="mt-6 text-lg md:text-xl text-sky-50/90 leading-relaxed max-w-2xl">
                Move beyond the basics. This guide covers the architecture, automation, and governance patterns needed to roll out WSL across modern engineering organizations while keeping compliance, performance, and developer joy in sync.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="#roadmap"
                  className="bg-white text-wsl-blue px-6 py-3 rounded-lg font-semibold shadow-lg shadow-black/10 hover:bg-sky-50 transition-colors"
                >
                  View the rollout roadmap
                </Link>
                <Link
                  href="#automation"
                  className="border-2 border-white/70 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-wsl-blue transition-colors"
                >
                  Automate everything
                </Link>
                <Link
                  href="/wsl/"
                  className="inline-flex items-center gap-2 text-white/80 hover:text-white font-semibold"
                >
                  Return to the core WSL guide
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="w-full lg:w-5/12">
              <div className="relative rounded-2xl bg-gray-900/80 backdrop-blur border border-white/15 shadow-xl shadow-black/20 overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-lime-300 via-sky-300 to-cyan-300" />
                <div className="px-6 pt-6 pb-3">
                  <div className="flex items-center justify-between text-sm text-white/60">
                    <span className="font-semibold text-white/80">WSL Control Tower</span>
                    <span>week 6 rollout</span>
                  </div>
                  <div className="mt-4 space-y-2 text-sm text-white/80">
                    <div className="flex items-center justify-between">
                      <span className="uppercase text-xs tracking-wide text-white/60">Distros</span>
                      <span className="text-base font-semibold">245</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="uppercase text-xs tracking-wide text-white/60">Exported snapshots</span>
                      <span className="text-base font-semibold">418</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="uppercase text-xs tracking-wide text-white/60">Policy drift</span>
                      <span className="text-base font-semibold text-emerald-300">0.7%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="uppercase text-xs tracking-wide text-white/60">GPU enabled seats</span>
                      <span className="text-base font-semibold">122</span>
                    </div>
                  </div>
                </div>
                <div className="px-6 pb-6 pt-4 bg-gray-900/60 border-t border-white/10">
                  <p className="text-sm text-white/70 leading-relaxed">
                    Tip: bundle telemetry from PowerShell (Get-WmiObject) and Linux (journald) into a single Azure Monitor workspace. It keeps compliance officers and SREs aligned.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16" id="roadmap">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Rollout roadmap</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-8">
              Use this phased approach to take WSL from pilot to a first-class citizen in your engineering toolchain. Each milestone highlights the guardrails needed to keep developers productive without compromising governance.
            </p>
            <div className="space-y-8">
              {roadmapMilestones.map((milestone) => (
                <div key={milestone.phase} className="bg-white/80 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-800 rounded-xl p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div>
                      <span className="inline-flex items-center rounded-full bg-wsl-blue/10 px-3 py-1 text-xs font-semibold text-wsl-blue dark:bg-wsl-blue/20 dark:text-emerald-300 uppercase tracking-wide">
                        {milestone.phase}
                      </span>
                      <h3 className="mt-3 text-2xl font-semibold text-gray-900 dark:text-gray-100">{milestone.title}</h3>
                      <p className="mt-3 text-gray-600 dark:text-gray-300 leading-relaxed">{milestone.description}</p>
                    </div>
                    <div className="md:w-2/5">
                      <div className="terminal-window">
                        <div className="terminal-header">
                          <div className="terminal-dot bg-red-500" />
                          <div className="terminal-dot bg-yellow-500" />
                          <div className="terminal-dot bg-green-500" />
                          <span className="ml-3 text-gray-300 text-xs">Milestone checklist</span>
                        </div>
                        <div className="terminal-content text-xs space-y-2">
                          <ul className="list-disc list-inside space-y-1 text-white/80">
                            {milestone.checklist.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Architecting distro strategy</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-8">
              Mix and match these patterns to cover the breadth of teams in your organization. Document the intent of each distro so new joiners know where to build, experiment, or secure workloads.
            </p>
            <div className="space-y-6">
              {distroStrategies.map((strategy) => (
                <div key={strategy.name} className="bg-white/80 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-800 rounded-xl p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                    <div className="md:w-2/3">
                      <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-3">{strategy.name}</h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">{strategy.description}</p>
                      <ol className="list-decimal list-inside space-y-2 text-sm text-gray-600 dark:text-gray-300">
                        {strategy.steps.map((step) => (
                          <li key={step}>{step}</li>
                        ))}
                      </ol>
                    </div>
                    <div className="md:w-1/3">
                      <div className="h-full rounded-lg border border-wsl-blue/30 dark:border-emerald-300/30 bg-wsl-blue/5 dark:bg-emerald-300/10 p-4 text-sm text-wsl-blue dark:text-emerald-200">
                        <p className="font-semibold mb-2">Field insight</p>
                        <p className="leading-relaxed">{strategy.callout}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Governance controls</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-8">
              Blend Windows and Linux security principles. The goal is to uphold policy while enabling fast iteration. Tailor these controls by sensitivity level and document deviations explicitly.
            </p>
            <div className="grid gap-6 lg:grid-cols-2">
              {governanceControls.map((control) => (
                <div key={control.title} className="bg-white/80 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-800 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">{control.title}</h3>
                  <ul className="list-disc list-inside space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    {control.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950" id="workflows">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Cross-platform workflows</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-8">
              These real-world scenarios showcase how teams marry Windows strengths (productivity, identity, tooling) with Linux agility. Tailor them to your pipelines and highlight where guardrails live.
            </p>
            <div className="space-y-8">
              {workflows.map((workflow) => (
                <div key={workflow.name} className="bg-white/90 dark:bg-gray-900/70 border border-gray-200 dark:border-gray-800 rounded-xl p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                    <div className="md:w-2/3">
                      <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-3">{workflow.name}</h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">{workflow.narrative}</p>
                      <ul className="list-disc list-inside space-y-2 text-sm text-gray-600 dark:text-gray-300">
                        {workflow.stages.map((stage) => (
                          <li key={stage}>{stage}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="md:w-1/3">
                      <div className="rounded-xl border border-wsl-blue/30 dark:border-emerald-300/30 bg-wsl-blue/5 dark:bg-emerald-300/10 p-4 text-sm text-wsl-blue dark:text-emerald-200">
                        <p className="font-semibold mb-2">Playbook tip</p>
                        <p className="leading-relaxed">
                          Pair each workflow with a checklist in your internal docs. It keeps tempo across squads and reduces onboarding friction.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16" id="automation">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Automation patterns that scale</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-8">
              Codify every manual step. These patterns form the backbone of resilient WSL operations, covering onboarding, ongoing health, and GitOps-style image promotion.
            </p>
            <div className="grid gap-6 lg:grid-cols-3">
              {automationPatterns.map((pattern) => (
                <div key={pattern.title} className="bg-white/80 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-800 rounded-xl p-6 flex flex-col">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">{pattern.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">{pattern.description}</p>
                  <div className="terminal-window mt-auto">
                    <div className="terminal-header">
                      <div className="terminal-dot bg-red-500" />
                      <div className="terminal-dot bg-yellow-500" />
                      <div className="terminal-dot bg-green-500" />
                      <span className="ml-3 text-gray-300 text-xs">Automation snippet</span>
                    </div>
                    <div className="terminal-content text-[0.7rem] leading-relaxed">
                      <code className="text-white whitespace-pre-wrap">{pattern.snippet}</code>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card" id="resources">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Further reading & templates</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Keep these references bookmarked for architecture deep dives, deployment tooling, and community playbooks that evolve with WSL.
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              {readingList.map((resource) => (
                <a
                  key={resource.title}
                  href={resource.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 bg-white/80 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-800 rounded-xl hover:shadow-lg hover:shadow-wsl-blue/15 transition-shadow"
                >
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">{resource.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{resource.summary}</p>
                </a>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
              <span>Building a dual-track enablement program?</span>
              <Link href="/best-practices/" className="text-wsl-blue dark:text-emerald-300 font-semibold underline-offset-4 hover:underline">
                Layer in best practices next
              </Link>
              <span className="hidden sm:inline">•</span>
              <Link href="/troubleshooting/" className="text-wsl-blue dark:text-emerald-300 font-semibold underline-offset-4 hover:underline">
                Jump to troubleshooting runbooks
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
