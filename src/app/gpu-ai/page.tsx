import Link from 'next/link'

export default function GpuAiPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            GPU &amp; AI in WSL
          </h1>
          <p className="text-xl text-purple-100">
            Unlock GPU passthrough, CUDA, and machine-learning frameworks inside WSL&nbsp;2 for local AI development.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* GPU Passthrough */}
          <div className="card mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">GPU Passthrough in WSL&nbsp;2</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              WSL&nbsp;2 supports GPU paravirtualization through the <code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm">vGPU</code> driver model.
              Your Windows GPU driver automatically exposes the GPU inside every WSL distro — no extra guest driver required.
            </p>

            <div className="space-y-4 mb-6">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-100 text-green-600 dark:bg-green-900/40 dark:text-green-300 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-700 dark:text-gray-300"><strong>NVIDIA:</strong> Install the latest Game Ready or Studio driver on Windows — CUDA support is included automatically.</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-100 text-green-600 dark:bg-green-900/40 dark:text-green-300 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-700 dark:text-gray-300"><strong>AMD:</strong> Use the Adrenalin driver with DirectML support for inference workloads.</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-100 text-green-600 dark:bg-green-900/40 dark:text-green-300 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-700 dark:text-gray-300"><strong>Intel:</strong> Arc and integrated GPUs work via the Intel GPU driver with DirectML and oneAPI support.</p>
              </div>
            </div>

            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500"></div>
                <div className="terminal-dot bg-yellow-500"></div>
                <div className="terminal-dot bg-green-500"></div>
                <span className="ml-4 text-gray-300 text-sm">Ubuntu (WSL)</span>
              </div>
              <div className="terminal-content">
                <div className="space-y-2">
                  <div className="text-gray-400"># Verify GPU is visible inside WSL</div>
                  <div>
                    <span className="text-wsl-green">user@wsl</span>
                    <span className="text-blue-300">:</span>
                    <span className="text-blue-400">~</span>
                    <span className="text-white">$ nvidia-smi</span>
                  </div>
                  <div className="text-gray-300">+-----------------------------------------------------------------------------------------+</div>
                  <div className="text-gray-300">| NVIDIA-SMI 560.x  Driver Version: 560.x  CUDA Version: 12.6                            |</div>
                  <div className="text-gray-300">| GPU  Name           ... |</div>
                  <div className="text-gray-300">| 0    NVIDIA GeForce RTX 4090  ... |</div>
                  <div className="text-gray-300">+-----------------------------------------------------------------------------------------+</div>
                </div>
              </div>
            </div>
          </div>

          {/* CUDA Installation */}
          <div className="card mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">CUDA Toolkit Installation</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              With the Windows driver providing GPU access, you only need the CUDA toolkit <em>inside</em> WSL — <strong>not</strong> a
              separate Linux GPU driver.
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 dark:bg-yellow-900/30 dark:border-yellow-500/70 p-4 mb-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-yellow-700 dark:text-yellow-200">
                    <strong>Important:</strong> Do <em>not</em> install a separate NVIDIA Linux driver inside WSL.
                    The Windows host driver handles all GPU communication. Installing a Linux driver will break GPU passthrough.
                  </p>
                </div>
              </div>
            </div>

            <div className="terminal-window mb-6">
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500"></div>
                <div className="terminal-dot bg-yellow-500"></div>
                <div className="terminal-dot bg-green-500"></div>
                <span className="ml-4 text-gray-300 text-sm">Ubuntu (WSL)</span>
              </div>
              <div className="terminal-content">
                <div className="space-y-2">
                  <div className="text-gray-400"># Add NVIDIA CUDA repository</div>
                  <div>
                    <span className="text-wsl-green">user@wsl</span>
                    <span className="text-blue-300">:</span>
                    <span className="text-blue-400">~</span>
                    <span className="text-white">$ wget https://developer.download.nvidia.com/compute/cuda/repos/wsl-ubuntu/x86_64/cuda-wsl-ubuntu.pin</span>
                  </div>
                  <div>
                    <span className="text-wsl-green">user@wsl</span>
                    <span className="text-blue-300">:</span>
                    <span className="text-blue-400">~</span>
                    <span className="text-white">$ sudo mv cuda-wsl-ubuntu.pin /etc/apt/preferences.d/cuda-repository-pin-600</span>
                  </div>
                  <div className="mt-2 text-gray-400"># Install CUDA toolkit (without the driver)</div>
                  <div>
                    <span className="text-wsl-green">user@wsl</span>
                    <span className="text-blue-300">:</span>
                    <span className="text-blue-400">~</span>
                    <span className="text-white">$ sudo apt update &amp;&amp; sudo apt install -y cuda-toolkit-12-6</span>
                  </div>
                  <div className="mt-2 text-gray-400"># Add CUDA to your PATH</div>
                  <div>
                    <span className="text-wsl-green">user@wsl</span>
                    <span className="text-blue-300">:</span>
                    <span className="text-blue-400">~</span>
                    <span className="text-white">{`$ echo 'export PATH=/usr/local/cuda/bin:\${PATH}' >> ~/.bashrc`}</span>
                  </div>
                  <div>
                    <span className="text-wsl-green">user@wsl</span>
                    <span className="text-blue-300">:</span>
                    <span className="text-blue-400">~</span>
                    <span className="text-white">{`$ echo 'export LD_LIBRARY_PATH=/usr/local/cuda/lib64:\${LD_LIBRARY_PATH}' >> ~/.bashrc`}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500"></div>
                <div className="terminal-dot bg-yellow-500"></div>
                <div className="terminal-dot bg-green-500"></div>
                <span className="ml-4 text-gray-300 text-sm">Ubuntu (WSL)</span>
              </div>
              <div className="terminal-content">
                <div className="space-y-2">
                  <div className="text-gray-400"># Verify CUDA installation</div>
                  <div>
                    <span className="text-wsl-green">user@wsl</span>
                    <span className="text-blue-300">:</span>
                    <span className="text-blue-400">~</span>
                    <span className="text-white">$ nvcc --version</span>
                  </div>
                  <div className="text-gray-300">nvcc: NVIDIA (R) Cuda compiler driver</div>
                  <div className="text-gray-300">Cuda compilation tools, release 12.6, V12.6.x</div>
                </div>
              </div>
            </div>
          </div>

          {/* PyTorch & TensorFlow */}
          <div className="card mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">PyTorch &amp; TensorFlow Setup</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Both frameworks detect CUDA inside WSL automatically. Use a virtual environment to keep your system Python clean.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">PyTorch with CUDA</h3>
            <div className="terminal-window mb-6">
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500"></div>
                <div className="terminal-dot bg-yellow-500"></div>
                <div className="terminal-dot bg-green-500"></div>
                <span className="ml-4 text-gray-300 text-sm">Ubuntu (WSL)</span>
              </div>
              <div className="terminal-content">
                <div className="space-y-2">
                  <div className="text-gray-400"># Create a virtual environment</div>
                  <div>
                    <span className="text-wsl-green">user@wsl</span>
                    <span className="text-blue-300">:</span>
                    <span className="text-blue-400">~</span>
                    <span className="text-white">$ python3 -m venv ~/ai-env &amp;&amp; source ~/ai-env/bin/activate</span>
                  </div>
                  <div className="mt-2 text-gray-400"># Install PyTorch with CUDA support</div>
                  <div>
                    <span className="text-wsl-green">(ai-env) user@wsl</span>
                    <span className="text-blue-300">:</span>
                    <span className="text-blue-400">~</span>
                    <span className="text-white">$ pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu126</span>
                  </div>
                  <div className="mt-2 text-gray-400"># Verify GPU is available</div>
                  <div>
                    <span className="text-wsl-green">(ai-env) user@wsl</span>
                    <span className="text-blue-300">:</span>
                    <span className="text-blue-400">~</span>
                    <span className="text-white">{`$ python3 -c "import torch; print(torch.cuda.is_available(), torch.cuda.get_device_name(0))"`}</span>
                  </div>
                  <div className="text-emerald-300">True NVIDIA GeForce RTX 4090</div>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">TensorFlow with CUDA</h3>
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500"></div>
                <div className="terminal-dot bg-yellow-500"></div>
                <div className="terminal-dot bg-green-500"></div>
                <span className="ml-4 text-gray-300 text-sm">Ubuntu (WSL)</span>
              </div>
              <div className="terminal-content">
                <div className="space-y-2">
                  <div className="text-gray-400"># Install TensorFlow (GPU support included by default)</div>
                  <div>
                    <span className="text-wsl-green">(ai-env) user@wsl</span>
                    <span className="text-blue-300">:</span>
                    <span className="text-blue-400">~</span>
                    <span className="text-white">$ pip install tensorflow</span>
                  </div>
                  <div className="mt-2 text-gray-400"># Verify GPU detection</div>
                  <div>
                    <span className="text-wsl-green">(ai-env) user@wsl</span>
                    <span className="text-blue-300">:</span>
                    <span className="text-blue-400">~</span>
                    <span className="text-white">{`$ python3 -c "import tensorflow as tf; print(tf.config.list_physical_devices('GPU'))"`}</span>
                  </div>
                  <div className="text-emerald-300">{`[PhysicalDevice(name='/physical_device:GPU:0', device_type='GPU')]`}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Jupyter Notebooks */}
          <div className="card mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Jupyter Notebooks in WSL</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Run Jupyter Lab inside WSL and access it from your Windows browser. VS Code&#39;s Jupyter extension also connects
              to WSL kernels seamlessly.
            </p>

            <div className="terminal-window mb-6">
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500"></div>
                <div className="terminal-dot bg-yellow-500"></div>
                <div className="terminal-dot bg-green-500"></div>
                <span className="ml-4 text-gray-300 text-sm">Ubuntu (WSL)</span>
              </div>
              <div className="terminal-content">
                <div className="space-y-2">
                  <div className="text-gray-400"># Install JupyterLab</div>
                  <div>
                    <span className="text-wsl-green">(ai-env) user@wsl</span>
                    <span className="text-blue-300">:</span>
                    <span className="text-blue-400">~</span>
                    <span className="text-white">$ pip install jupyterlab ipykernel</span>
                  </div>
                  <div className="mt-2 text-gray-400"># Register the virtual environment as a Jupyter kernel</div>
                  <div>
                    <span className="text-wsl-green">(ai-env) user@wsl</span>
                    <span className="text-blue-300">:</span>
                    <span className="text-blue-400">~</span>
                    <span className="text-white">$ python3 -m ipykernel install --user --name=ai-env --display-name &quot;AI Environment&quot;</span>
                  </div>
                  <div className="mt-2 text-gray-400"># Launch JupyterLab (opens in Windows browser automatically)</div>
                  <div>
                    <span className="text-wsl-green">(ai-env) user@wsl</span>
                    <span className="text-blue-300">:</span>
                    <span className="text-blue-400">~</span>
                    <span className="text-white">$ jupyter lab --no-browser --ip=0.0.0.0 --port=8888</span>
                  </div>
                  <div className="text-gray-300">    http://127.0.0.1:8888/lab?token=abc123...</div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 dark:bg-blue-900/20 dark:border-blue-500/70 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-blue-700 dark:text-blue-200">
                    <strong>VS Code tip:</strong> Open VS Code with the Remote&nbsp;-&nbsp;WSL extension, then open any <code className="bg-blue-100 dark:bg-blue-800/40 px-1 py-0.5 rounded text-xs">.ipynb</code> file.
                    VS Code will detect your Jupyter kernels inside WSL automatically.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Performance Tips */}
          <div className="card mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Performance Tips</h2>
            <div className="space-y-4">
              <div className="rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 p-5">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Store datasets on the Linux filesystem</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Keep training data under <code className="bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded text-xs">/home/user/data</code> instead of <code className="bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded text-xs">/mnt/c/</code>.
                  Cross-filesystem I/O is significantly slower and can bottleneck data-loading pipelines.
                </p>
              </div>
              <div className="rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 p-5">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Allocate enough memory in .wslconfig</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Large models need RAM. Set <code className="bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded text-xs">memory=16GB</code> (or more) in <code className="bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded text-xs">%USERPROFILE%\.wslconfig</code> to
                  avoid out-of-memory crashes during training.
                </p>
              </div>
              <div className="rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 p-5">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Use Docker with GPU support</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Docker Desktop with the WSL&nbsp;2 backend passes through GPUs. Use <code className="bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded text-xs">docker run --gpus all</code> to
                  run containers with CUDA access — great for reproducible ML pipelines.
                </p>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="card">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Next Steps</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/development" className="block p-6 bg-blue-50 dark:bg-wsl-blue/10 rounded-lg hover:bg-blue-100 dark:hover:bg-wsl-blue/20 transition-colors">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Development Setup</h3>
                <p className="text-gray-600 dark:text-gray-300">Set up full dev environments with Docker, VS Code, and language runtimes.</p>
              </Link>
              <Link href="/configuration" className="block p-6 bg-green-50 dark:bg-green-900/30 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/40 transition-colors">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">WSL Configuration</h3>
                <p className="text-gray-600 dark:text-gray-300">Fine-tune .wslconfig for memory, CPU, and networking to optimize GPU workloads.</p>
              </Link>
              <Link href="/networking" className="block p-6 bg-purple-50 dark:bg-purple-900/30 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-colors">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Networking Deep Dive</h3>
                <p className="text-gray-600 dark:text-gray-300">Configure port forwarding to expose Jupyter and model endpoints to your network.</p>
              </Link>
              <Link href="/troubleshooting" className="block p-6 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg hover:bg-yellow-100 dark:hover:bg-yellow-900/40 transition-colors">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Troubleshooting</h3>
                <p className="text-gray-600 dark:text-gray-300">Fix common GPU detection issues and CUDA version mismatches.</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
