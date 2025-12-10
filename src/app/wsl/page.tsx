import Link from 'next/link'

const heroHighlights = [
  'Install a complete Linux userland in minutes\u2014no dual boot, repartitioning, or complex virtualization required.',
  'Share files, networking, and tooling seamlessly between Windows 11 and your favorite Linux distributions.',
  'Accelerate AI, web, and cloud workflows with GPU, USB, and IDE integrations that feel native on both sides.'
]

const pillars = [
  {
    title: 'Linux-first fidelity',
    summary: 'WSL 2 runs a Microsoft-maintained Linux kernel in a lightweight utility VM for near-native performance.',
    bullets: [
      'Full system call support means Docker, Podman, Kubernetes, and build tools behave exactly as they do on bare metal.',
      'Kernel updates are delivered through Windows Update, giving you the latest security patches automatically.'
    ]
  },
  {
    title: 'Tight Windows integration',
    summary: 'Mix Windows productivity with Linux command-line prowess.',
    bullets: [
      'Access your Windows filesystem at /mnt/c while keeping Linux performance for large projects in /home.',
      'Launch Linux binaries from PowerShell and Windows apps from Bash with shared environment variables.'
    ]
  },
  {
    title: 'Graphics & device support',
    summary: 'WSLg and forwarders bridge hardware capabilities between environments.',
    bullets: [
      'Run GUI apps like GNOME Builder, DataGrip, or Firefox with GPU acceleration directly from WSL.',
      'Attach USB devices, serial ports, and GPUs using wsl --mount and the latest CUDA/DirectML drivers.'
    ]
  },
  {
    title: 'Security & governance',
    summary: 'Keep your dev boxes compliant without sacrificing speed.',
    bullets: [
      'Isolate projects per distro, disable interop when you need stricter boundaries, and script teardown with one command.',
      'Use Microsoft Defender for Endpoint and Windows sandboxing features alongside Linux security tooling.'
    ]
  }
]

const setupSteps = [
  {
    title: 'Enable required features',
    description: 'From an elevated PowerShell session, turn on virtualization and the Windows Subsystem for Linux components, then restart.',
    command: `dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart\ndism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart`
  },
  {
    title: 'Install WSL with your preferred distro',
    description: 'Use the simplified installer to download the kernel, set WSL 2 as default, and grab Ubuntu, Debian, or another image in one go.',
    command: 'wsl --install -d Ubuntu'
  },
  {
    title: 'Stay updated and tuned',
    description: 'Apply the latest kernel and set WSL 2 as your default version so new distros use the performant virtualization stack.',
    command: `wsl --update\nwsl --set-default-version 2`
  },
  {
    title: 'Bootstrap the distro',
    description: 'Complete the Linux user setup, refresh packages, and install essential tooling from inside the distribution shell.',
    command: 'sudo apt update && sudo apt upgrade && sudo apt install build-essential git curl unzip'
  }
]

const distroCommands = [
  {
    command: 'wsl -l -v',
    description: 'List installed distributions with their version (WSL 1 or WSL 2) and current state.'
  },
  {
    command: 'wsl --set-version Ubuntu-24.04 2',
    description: 'Convert a distro to WSL 2 when you need full system call compatibility and better file I/O.'
  },
  {
    command: 'wsl --set-default Ubuntu-24.04',
    description: 'Choose the distribution that launches when you type wsl in Windows Terminal.'
  },
  {
    command: 'wsl --export Debian debian-backup.tar',
    description: 'Capture a snapshot you can version, store off-machine, or restore with wsl --import.'
  },
  {
    command: 'wsl --terminate Ubuntu-24.04',
    description: 'Gracefully shut down a running distro before freeing disk space or resizing the virtual disk.'
  }
]

const integrations = [
  {
    title: 'Editor & IDE workflow',
    points: [
      'Use VS Code with the Remote - WSL extension for Linux terminals, debugging, and IntelliSense from Windows.',
      'Neovim, JetBrains Gateway, and Fleet all support remote targets that point at your WSL workspace.'
    ]
  },
  {
    title: 'Container & cloud tooling',
    points: [
      'Docker Desktop integrates with WSL 2 backends, letting Linux containers share the Windows networking stack.',
      'Podman, nerdctl, and kind work inside WSL with native cgroups and overlayfs support.'
    ]
  },
  {
    title: 'Graphics, AI, and data',
    points: [
      'Access GPUs via NVIDIA CUDA on WSL, AMD ROCm, or DirectML for machine learning workloads.',
      'Run Jupyter, VS Code notebooks, or data visualization apps with hardware acceleration through WSLg.'
    ]
  },
  {
    title: 'Operational excellence',
    points: [
      'Forward ports to Windows with wsl --port, or expose services to the LAN by binding to 0.0.0.0 inside the distro.',
      'Use Windows Task Scheduler or GitHub Actions runners to orchestrate scripts that target WSL environments.'
    ]
  }
]

const performance = [
  {
    title: 'Optimize file placement',
    body: 'Keep active project files on the Linux side (~/projects) for the best git, npm, and compile speeds. Use /mnt/c only for quick asset sharing or when Windows-only tooling must access the data.'
  },
  {
    title: 'Control resource usage',
    body: 'Create a .wslconfig in your Windows user profile to pin CPU, memory, and swap allocations. This prevents runaway processes and keeps laptops cool during long builds.'
  },
  {
    title: 'Mindful shutdowns',
    body: 'Use wsl --shutdown or Windows Terminal\u2019s \u201cClose all tabs\u201d to flush disks cleanly. Combine with bcdedit /set hypervisorlaunchtype off when you need to temporarily disable virtualization.'
  }
]

const automation = [
  {
    title: 'One-command onboarding',
    points: [
      'Publish a PowerShell profile snippet that installs WSL, your preferred distro image, configures git, and seeds dotfiles.',
      'Pair with cloud-init or Ansible inside the distro to bootstrap languages, SSH keys, and secrets managers.'
    ],
    cta: 'Store Bootstrap scripts in a public GitHub Gist and reference them from your team handbook.'
  },
  {
    title: 'Scheduled maintenance',
    points: [
      'Use schtasks or PowerShell scheduled jobs to run wsl --update nightly and apply apt security patches.',
      'Automate wsl --export backups to OneDrive, Azure Files, or an external disk for disaster recovery.'
    ],
    cta: 'Tag exports with timestamps (wsl --export Ubuntu backup-%DATE%.tar) for simple retention policies.'
  },
  {
    title: 'Compliance & hardening',
    points: [
      'Disable interop via /etc/wsl.conf (set interop=false) when policy requires strict separation between Windows and Linux.',
      'Mount encrypted VHDX files for sensitive projects and wipe them with wsl --unregister when the engagement ends.'
    ],
    cta: 'Document the hardening checklist in your security wiki and version it alongside infrastructure-as-code.'
  }
]

const resources = [
  {
    name: 'WSL Documentation Hub',
    href: 'https://learn.microsoft.com/windows/wsl/',
    description: 'Official Microsoft docs covering installation, advanced management, WSLg, and troubleshooting topics.'
  },
  {
    name: 'WSL Release Notes',
    href: 'https://github.com/microsoft/WSL/releases',
    description: 'Track kernel updates, new features, and bug fixes delivered through Windows Update and the Store.'
  },
  {
    name: 'Windows Terminal',
    href: 'https://aka.ms/terminal',
    description: 'Customize profiles, GPU-accelerated rendering, and quake mode access to all your distros.'
  },
  {
    name: 'Dev Container Templates',
    href: 'https://containers.dev/templates',
    description: 'Launch consistent developer environments by combining WSL with Dev Containers and VS Code.'
  },
  {
    name: 'Kernel & virtualization tuning',
    href: 'https://learn.microsoft.com/windows/wsl/wsl-config',
    description: 'Fine-tune .wslconfig, memory usage, networking, and filesystem behavior for enterprise fleets.'
  },
  {
    name: 'Community projects & samples',
    href: 'https://github.com/sponsors/sirredbeard',
    description: 'Discover curated WSL distros, scripts, and dotfile setups maintained by the WSL community.'
  }
]

const tableOfContents = [
  {
    title: 'Why WSL matters',
    href: '#why-wsl',
    description: 'Explore the four pillars that blend Windows convenience with Linux fidelity.'
  },
  {
    title: 'Choose your Linux distro',
    href: '#choose-distro',
    description: 'Compare Ubuntu, Debian, Fedora, and openSUSE profiles for WSL workloads.'
  },
  {
    title: 'Install & configure WSL',
    href: '#install',
    description: 'Follow a hardened step-by-step installer playbook with repeatable commands.'
  },
  {
    title: 'Manage distros like a pro',
    href: '#distro-management',
    description: 'Use wsl.exe commands to list, convert, export, and terminate distros cleanly.'
  },
  {
    title: 'Daily Linux operations',
    href: '#linux-ops',
    description: 'Standardize package updates, installs, and cleanups across major distros.'
  },
  {
    title: 'Desktop environments in WSL',
    href: '#desktop-envs',
    description: 'Install GNOME, KDE, or Xfce over WSLg for full-fledged Linux desktops.'
  },
  {
    title: 'Integrate tooling',
    href: '#integrations',
    description: 'Wire up editors, containers, and automation runners to your WSL projects.'
  },
  {
    title: 'Performance tuning',
    href: '#performance',
    description: 'Optimize storage layout, resource usage, and subsystem lifecycle.'
  },
  {
    title: 'Automate everything',
    href: '#automation',
    description: 'Script onboarding, updates, backups, and compliance tasks for teams.'
  },
  {
    title: 'Troubleshoot Linux behavior',
    href: '#linux-troubleshooting',
    description: 'Diagnose systemd, clock drift, disk growth, and NTFS performance issues.'
  },
  {
    title: 'FAQ',
    href: '#faq',
    description: 'Get quick answers about systemd services, SSH key sharing, and Docker usage.'
  },
  {
    title: 'Curated resources',
    href: '#resources',
    description: 'Jump to official docs, release notes, templates, and community projects.'
  }
]

const distroProfiles = [
  {
    name: 'Ubuntu LTS',
    tagline: 'Canonical-supported distro with predictable releases and the richest community docs.',
    bestFor: 'Teams that want stability, long-term support (5 years), and easy access to PPAs for language stacks.',
    packageManager: 'APT',
    setupPointers: [
      'Enable the Partner repository when you need proprietary fonts or codecs.',
      'Use sudo apt install ubuntu-wsl to grab curated defaults tuned for WSL.'
    ]
  },
  {
    name: 'Debian Stable',
    tagline: 'Minimalist base with conservative updates and rock-solid reliability.',
    bestFor: 'CI agents, automation scripts, or developers who value minimal changes between updates.',
    packageManager: 'APT',
    setupPointers: [
      'Add backports when you need newer toolchains such as GCC or Clang.',
      'Pair with direnv and asdf to keep per-project tool versions isolated.'
    ]
  },
  {
    name: 'Fedora Kinoite / Workstation',
    tagline: 'Leading-edge GNOME experience with SELinux and a fast cadence.',
    bestFor: 'Frontier developers testing new compilers, GNOME tooling, or Wayland-first workflows.',
    packageManager: 'DNF',
    setupPointers: [
      'Install sudo dnf groupinstall "Development Tools" for build essentials.',
      'Use rpm-ostree for immutable deployments or when layering packages over Kinoite.'
    ]
  },
  {
    name: 'openSUSE Leap / Tumbleweed',
    tagline: 'YaST-powered control with both rolling and regular release options.',
    bestFor: 'Ops teams that need Btrfs snapshots, transactional updates, and granular system administration.',
    packageManager: 'Zypper',
    setupPointers: [
      'Pattern-based installs (sudo zypper in -t pattern devel_basis) accelerate language bootstrapping.',
      'Use snapper to snapshot before major changes; combine with wsl --export for belt-and-suspenders backups.'
    ]
  }
]

const packagePlaybook = [
  {
    distro: 'Ubuntu / Debian',
    manager: 'APT',
    commands: {
      update: 'sudo apt update && sudo apt upgrade',
      search: 'apt search <package>',
      install: 'sudo apt install <package>',
      cleanup: 'sudo apt autoremove && sudo apt clean'
    }
  },
  {
    distro: 'Fedora',
    manager: 'DNF',
    commands: {
      update: 'sudo dnf upgrade --refresh',
      search: 'dnf search <package>',
      install: 'sudo dnf install <package>',
      cleanup: 'sudo dnf autoremove'
    }
  },
  {
    distro: 'openSUSE',
    manager: 'Zypper',
    commands: {
      update: 'sudo zypper refresh && sudo zypper update',
      search: 'zypper search <package>',
      install: 'sudo zypper install <package>',
      cleanup: 'sudo zypper packages --orphaned'
    }
  }
]

const desktopOptions = [
  {
    name: 'Ubuntu Desktop (GNOME)',
    notes: 'Full GNOME Shell experience with WSLg support for windowed apps.',
    steps: [
      'sudo apt install ubuntu-desktop --no-install-recommends',
      'wsl --shutdown to restart the subsystem with new systemd targets.',
      'Use systemctl --user enable --now gnome-keyring-daemon.service for credential prompts.'
    ]
  },
  {
    name: 'KDE Plasma',
    notes: 'Highly customizable Qt-based desktop, great for multi-monitor productivity.',
    steps: [
      'sudo apt install kde-plasma-desktop or sudo dnf groupinstall "KDE Plasma Workspaces"',
      'Install xdg-desktop-portal-kde to improve file dialogs and clipboard bridging.',
      'Set the QT_QPA_PLATFORMTHEME=qt5ct environment variable if theming looks inconsistent.'
    ]
  },
  {
    name: 'Xfce minimal desktop',
    notes: 'Lightweight alternative for resource-constrained machines.',
    steps: [
      'sudo apt install xubuntu-desktop --no-install-recommends',
      'Disable screen lockers (light-locker-command -a) to avoid blank resume screens inside WSLg.',
      'Map Super key shortcuts via xfconf-query for quick launchers alongside Windows hotkeys.'
    ]
  }
]

const linuxLifelines = [
  {
    title: 'Systemd not starting?',
    description: 'Make sure your distro has systemd enabled in /etc/wsl.conf and that you are on WSL 2.',
    actions: [
      'Add [boot]\nsystemd=true to /etc/wsl.conf and restart with wsl --shutdown.',
      'Verify with systemctl list-units --type=target --state=running.'
    ]
  },
  {
    title: 'Clock skew between Windows and Linux',
    description: 'Occasional suspend/resume cycles can desync the hardware clock inside the VM.',
    actions: [
      'Run sudo hwclock --hctosys or use timedatectl set-ntp true.',
      'Schedule wsl.exe --shutdown on resume events via Task Scheduler for clean sync.'
    ]
  },
  {
    title: 'High disk usage in ext4.vhdx',
    description: 'Large node_modules or Docker layers can bloat the virtual disk.',
    actions: [
      'Use sudo du -sh /* to spot growth hotspots.',
      'Compact the disk from Windows: wsl --shutdown && diskpart > select vdisk file=C:\\Users\\<you>\\AppData\\Local\\Packages\\...\\ext4.vhdx > compact vdisk.'
    ]
  },
  {
    title: 'Slow filesystem access from /mnt/c',
    description: 'NTFS passthrough is convenient but slower for many small files.',
    actions: [
      'Clone repos into ~/projects and use git config --global core.autocrlf input.',
      'Leverage \[automount\] options in /etc/wsl.conf to disable metadata translation when not required.'
    ]
  }
]

const faqEntries = [
  {
    question: 'Can I run systemd services automatically?',
    answer: 'Yes. Enable systemd in /etc/wsl.conf, then use systemctl --user enable for per-user timers or systemctl enable for global services. WSL 2 honors dependencies on boot.'
  },
  {
    question: 'How do I share SSH keys securely?',
    answer: 'Store keys in your Windows profile, then use ln -s /mnt/c/Users/<you>/.ssh ~/.ssh with chmod 600 permissions inside WSL. Consider Windows Hello backed FIDO2 keys for hardware security.'
  },
  {
    question: 'Is Docker Desktop required?',
    answer: 'Not strictly. Native Docker Engine on WSL works with dockerd-rootless-setuptool.sh or dockerd, but Docker Desktop simplifies updates, networking, and credential helpers.'
  }
]

export default function WslPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="relative overflow-hidden bg-gradient-to-br from-wsl-blue via-sky-600 to-emerald-500 text-white py-20">
        <div className="absolute inset-0 opacity-30 mix-blend-overlay" aria-hidden="true">
          <div className="absolute -top-24 right-1/4 h-72 w-72 rounded-full bg-white/20 blur-3xl" />
          <div className="absolute -bottom-24 left-1/6 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
            <div className="w-full lg:w-7/12">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 border border-white/20 text-sm font-medium">
                <span className="h-2 w-2 rounded-full bg-lime-300" />
                Windows Subsystem for Linux 2
              </span>
              <h1 className="mt-6 text-4xl md:text-6xl font-bold leading-tight">
                Master WSL on Windows 11 for fast, flexible development
              </h1>
              <p className="mt-6 text-lg md:text-xl text-sky-50/90 leading-relaxed max-w-2xl">
                This deep dive explains how to install, configure, and scale WSL 2 so your workflows feel native on both Windows and Linux. Pair the stability of Windows with the power of the Linux CLI, GPU acceleration, and cloud tooling.
              </p>
              <ul className="mt-8 space-y-4 text-base md:text-lg text-white/80">
                {heroHighlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 text-sm font-semibold">✓</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/installation/"
                  className="bg-white text-wsl-blue px-6 py-3 rounded-lg font-semibold shadow-lg shadow-black/10 hover:bg-sky-50 transition-colors"
                >
                  Install WSL now
                </Link>
                <Link
                  href="#distro-management"
                  className="border-2 border-white/70 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-wsl-blue transition-colors"
                >
                  Explore management commands
                </Link>
                <a
                  href="https://learn.microsoft.com/windows/wsl/compare-versions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white/80 hover:text-white font-semibold"
                >
                  Compare WSL 1 vs WSL 2
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="w-full lg:w-5/12">
              <div className="mb-6 flex justify-center">
                <a
                  href="https://github.com/vinberg88/opensuse"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-block"
                  aria-label="Visit the vinberg88 openSUSE project on GitHub"
                >
                  <div className="relative h-32 w-32 rounded-full border-4 border-white/40 shadow-xl shadow-black/20 overflow-hidden transition-transform duration-200 group-hover:scale-105">
                    <img
                      src="/profile.jpg"
                      alt="Portrait of Mattias Vinberg"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-wsl-blue/10 via-transparent to-emerald-300/20" />
                  </div>
                  <div className="mt-3 text-center text-sm text-white/80 group-hover:text-white">
                    Explore my openSUSE configs →
                  </div>
                </a>
              </div>
              <div className="relative rounded-2xl bg-gray-900/80 backdrop-blur border border-white/15 shadow-xl shadow-black/20 overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-lime-300 via-sky-300 to-cyan-300" />
                <div className="px-6 pt-6 pb-3">
                  <div className="flex items-center justify-between text-sm text-white/60">
                    <span className="font-semibold text-white/80">Windows Terminal</span>
                    <span>Admin PowerShell</span>
                  </div>
                  <div className="mt-5 space-y-2 font-mono text-sm text-white/80">
                    <div><span className="text-lime-300">PS C:\\</span><span className="text-white">&gt; wsl --install -d Ubuntu</span></div>
                    <div><span className="text-lime-300">PS C:\\</span><span className="text-white">&gt; wsl --set-default-version 2</span></div>
                    <div><span className="text-lime-300">PS C:\\</span><span className="text-white">&gt; wsl -l -v</span></div>
                    <div><span className="text-lime-300">user@wsl</span><span className="text-cyan-300">:</span><span className="text-cyan-200">~</span><span className="text-white">$ sudo apt update && sudo apt upgrade</span></div>
                    <div><span className="text-lime-300">user@wsl</span><span className="text-cyan-300">:</span><span className="text-cyan-200">~/projects</span><span className="text-white">$ code .</span></div>
                  </div>
                </div>
                <div className="px-6 pb-6 pt-4 bg-gray-900/60 border-t border-white/10">
                  <p className="text-sm text-white/70 leading-relaxed">
                    Tip: pair this workflow with the{' '}
                    <a
                      href="https://learn.microsoft.com/windows/wsl/wsl-config"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-200 underline-offset-4 hover:underline"
                    >
                      .wslconfig
                    </a>{' '}
                    file to fine-tune CPU, memory, and swap for laptops and dev workstations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card mb-12" id="table-of-contents">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Navigate this guide</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Jump directly to the topics you need. Every anchor links to a detailed section that expands on Linux workflows inside WSL.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {tableOfContents.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-label={`${item.title} section`}
                  className="group relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/60 px-5 py-4 flex items-start gap-4 transition-all duration-200 hover:-translate-y-1 hover:border-wsl-blue/60 dark:hover:border-emerald-300/60 hover:shadow-lg hover:shadow-wsl-blue/10"
                >
                  <span className="mt-1 flex h-8 w-8 items-center justify-center rounded-lg bg-wsl-blue/10 text-sm font-semibold text-wsl-blue dark:bg-wsl-blue/20 dark:text-emerald-200">
                    {index + 1 < 10 ? `0${index + 1}` : index + 1}
                  </span>
                  <div className="flex-1">
                    <p className="text-base font-semibold text-gray-900 dark:text-gray-100 group-hover:text-wsl-blue dark:group-hover:text-emerald-300">
                      {item.title}
                    </p>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full border border-transparent text-wsl-blue dark:text-emerald-300 group-hover:bg-wsl-blue/10 group-hover:border-wsl-blue/40 group-hover:dark:bg-emerald-300/10">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="card mb-12" id="why-wsl">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Why WSL 2 is a powerhouse for developers</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-8">
              WSL bridges Windows and Linux so you can choose the best tool for each job without leaving your flow. These pillars show how it balances fidelity, convenience, and governance for modern teams.
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              {pillars.map((pillar) => (
                <div key={pillar.title} className="bg-white/80 dark:bg-gray-900/60 border border-gray-100 dark:border-gray-800 rounded-xl p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">{pillar.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{pillar.summary}</p>
                  <ul className="list-disc list-inside space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    {pillar.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="card mb-12" id="choose-distro">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Choose the right Linux distro for WSL</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-8">
              Each distribution balances release cadence, package availability, and administrative tooling differently. Start with the profile that aligns with your workloads, then branch out for specialized stacks.
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              {distroProfiles.map((profile) => (
                <div key={profile.name} className="bg-white/80 dark:bg-gray-900/60 border border-gray-100 dark:border-gray-800 rounded-xl p-6 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">{profile.name}</h3>
                    <span className="text-xs font-semibold uppercase tracking-wide text-wsl-blue dark:text-emerald-300">
                      {profile.packageManager}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{profile.tagline}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <span className="font-semibold text-gray-700 dark:text-gray-200">Best for:</span> {profile.bestFor}
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-sm text-gray-600 dark:text-gray-300 mb-4">
                    {profile.setupPointers.map((note) => (
                      <li key={note}>{note}</li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-800 text-sm text-gray-500 dark:text-gray-400">
                    Tip: pair distro exports (wsl --export) with your dotfiles repo for reproducible environments.
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card mb-12" id="install">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Install and configure WSL 2 step by step</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-8">
              Follow these steps to provision WSL 2 cleanly. Each command is safe to rerun and can be automated across organizations.
            </p>
            <div className="space-y-8">
              {setupSteps.map((step, index) => (
                <div key={step.title} className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 bg-white/80 dark:bg-gray-900/60">
                  <div className="flex gap-4 items-start">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-wsl-blue/10 text-wsl-blue font-semibold">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{step.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mt-2 mb-4">{step.description}</p>
                      <div className="terminal-window">
                        <div className="terminal-header">
                          <div className="terminal-dot bg-red-500" />
                          <div className="terminal-dot bg-yellow-500" />
                          <div className="terminal-dot bg-green-500" />
                          <span className="ml-3 text-gray-300 text-xs">PowerShell</span>
                        </div>
                        <div className="terminal-content text-sm">
                          <code className="text-white whitespace-pre-wrap">{step.command}</code>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
              Need a visual walkthrough? Jump to the{' '}
              <Link href="/installation/" className="text-wsl-blue dark:text-emerald-300 underline-offset-4 hover:underline">
                installation guide
              </Link>{' '}for screenshots and hardware prerequisites.
            </p>
          </div>

          <div className="card mb-12" id="distro-management">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Manage distros like a pro</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-8">
              The wsl.exe CLI controls the lifecycle of each distribution. Combine these commands with scripts to keep projects tidy and reproducible.
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              {distroCommands.map((item) => (
                <div key={item.command} className="bg-white/80 dark:bg-gray-900/60 border border-gray-100 dark:border-gray-800 rounded-xl p-6">
                  <h3 className="font-mono text-lg text-gray-900 dark:text-gray-100 mb-2">{item.command}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="card mb-12" id="linux-ops">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Daily Linux operations playbook</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-8">
              Keep your distributions healthy with a predictable maintenance rhythm. Standardize package manager commands so teammates and automation know exactly what to run.
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              {packagePlaybook.map((entry) => (
                <div key={entry.distro} className="bg-white/80 dark:bg-gray-900/60 border border-gray-100 dark:border-gray-800 rounded-xl p-6 flex flex-col">
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{entry.distro}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Package manager: {entry.manager}</p>
                  </div>
                  <div className="terminal-window mt-auto">
                    <div className="terminal-header">
                      <div className="terminal-dot bg-red-500" />
                      <div className="terminal-dot bg-yellow-500" />
                      <div className="terminal-dot bg-green-500" />
                      <span className="ml-3 text-gray-300 text-xs">Shell</span>
                    </div>
                    <div className="terminal-content text-xs space-y-2">
                      <div>
                        <span className="text-lime-300"># Update</span>
                        <pre className="text-white whitespace-pre-wrap">{entry.commands.update}</pre>
                      </div>
                      <div>
                        <span className="text-lime-300"># Search</span>
                        <pre className="text-white whitespace-pre-wrap">{entry.commands.search}</pre>
                      </div>
                      <div>
                        <span className="text-lime-300"># Install</span>
                        <pre className="text-white whitespace-pre-wrap">{entry.commands.install}</pre>
                      </div>
                      <div>
                        <span className="text-lime-300"># Cleanup</span>
                        <pre className="text-white whitespace-pre-wrap">{entry.commands.cleanup}</pre>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
              Store these commands in a shared README.md or onboarding script so every new hire understands the expected hygiene tasks.
            </p>
          </div>

          <div className="card mb-12" id="desktop-envs">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Desktop environments in WSLg</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-8">
              WSLg brings full Linux GUI support. These desktop recipes give you a polished workstation without leaving Windows. Pick the one that matches your workflow and hardware budget.
            </p>
            <div className="space-y-6">
              {desktopOptions.map((option) => (
                <div key={option.name} className="bg-white/80 dark:bg-gray-900/60 border border-gray-100 dark:border-gray-800 rounded-xl p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">{option.name}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{option.notes}</p>
                    </div>
                    <span className="inline-flex items-center rounded-full bg-blue-50 dark:bg-wsl-blue/10 px-3 py-1 text-xs font-medium text-wsl-blue dark:text-emerald-300">
                      WSLg ready
                    </span>
                  </div>
                  <ol className="list-decimal list-inside space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    {option.steps.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
              Heads up: heavy desktop sessions can increase VRAM usage. Use <code className="font-mono text-xs">wsl --shutdown</code> after long GUI sessions to reclaim resources.
            </p>
          </div>

          <div className="card mb-12" id="integrations">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Integrate WSL with your tooling</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-8">
              WSL thrives when you pair it with modern editors, container runtimes, and automation workflows. Start with these integration patterns and tailor them to your stack.
            </p>
            <div className="space-y-6">
              {integrations.map((integration) => (
                <div key={integration.title} className="bg-white/80 dark:bg-gray-900/60 border border-gray-100 dark:border-gray-800 rounded-xl p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-3">{integration.title}</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                    {integration.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="card mb-12" id="performance">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Performance tuning & reliability</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {performance.map((item) => (
                <div key={item.title} className="bg-white/80 dark:bg-gray-900/60 border border-gray-100 dark:border-gray-800 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">{item.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="card mb-12" id="automation">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Automate everything</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-8">
              Treat WSL environments as disposable, reproducible dev shells. Automation keeps everyone aligned, whether you manage a team or personal projects.
            </p>
            <div className="space-y-6">
              {automation.map((block) => (
                <div key={block.title} className="bg-white/80 dark:bg-gray-900/60 border border-gray-100 dark:border-gray-800 rounded-xl p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-3">{block.title}</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 mb-3">
                    {block.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  <p className="text-sm text-wsl-blue dark:text-emerald-300 font-medium">{block.cta}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="card mb-12" id="linux-troubleshooting">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Troubleshoot Linux behavior</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-8">
              When the Linux side of WSL misbehaves, use these diagnostics before rebuilding a distro. They capture the most common cross-OS friction points.
            </p>
            <div className="space-y-6">
              {linuxLifelines.map((lifeline) => (
                <div key={lifeline.title} className="bg-white/80 dark:bg-gray-900/60 border border-gray-100 dark:border-gray-800 rounded-xl p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">{lifeline.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{lifeline.description}</p>
                  <ul className="list-disc list-inside space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    {lifeline.actions.map((action) => (
                      <li key={action}>{action}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="card mb-12" id="faq">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Frequently asked questions</h2>
            <div className="space-y-6">
              {faqEntries.map((entry) => (
                <div key={entry.question} className="bg-white/80 dark:bg-gray-900/60 border border-gray-100 dark:border-gray-800 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">{entry.question}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{entry.answer}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="card" id="resources">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Curated resources</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Keep this list handy as you explore deeper capabilities, troubleshoot edge cases, or align a Windows fleet around WSL-based development.
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              {resources.map((resource) => (
                <a
                  key={resource.name}
                  href={resource.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 bg-white/80 dark:bg-gray-900/60 border border-gray-100 dark:border-gray-800 rounded-xl hover:shadow-lg hover:shadow-sky-500/20 transition-shadow"
                >
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">{resource.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{resource.description}</p>
                </a>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
              <span>Ready for cross-platform workflows?</span>
              <Link href="/development/" className="text-wsl-blue dark:text-emerald-300 font-semibold underline-offset-4 hover:underline">
                Continue with Development best practices
              </Link>
              <span className="hidden sm:inline">\u2022</span>
              <Link href="/node/" className="text-wsl-blue dark:text-emerald-300 font-semibold underline-offset-4 hover:underline">
                Jump to the Node.js guide
              </Link>
              <span className="hidden sm:inline">\u2022</span>
              <Link href="/wsl-pro/" className="text-wsl-blue dark:text-emerald-300 font-semibold underline-offset-4 hover:underline">
                Explore the WSL enterprise playbook
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
