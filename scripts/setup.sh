#!/usr/bin/env bash
set -eo pipefail

echo "=== Project Setup ==="

# Install mise if not present
install_mise() {
  if command -v mise &> /dev/null; then
    echo "mise is already installed: $(mise --version)"
    return 0
  fi

  echo "Installing mise..."
  curl https://mise.run | sh

  # Add to PATH for this session
  export PATH="$HOME/.local/bin:$PATH"

  echo "mise installed successfully"
}

# Setup mise tools
setup_mise() {
  echo "Trusting mise configuration..."
  mise trust

  echo "Installing mise tools..."
  mise install
}

# Setup pre-commit hooks
setup_pre_commit() {
  echo "Setting up pre-commit hooks..."

  # Ensure pnpm dependencies are installed
  if [[ ! -d "node_modules" ]]; then
    echo "Installing pnpm dependencies..."
    pnpm install
  fi

  # Install pre-commit hooks
  if command -v prek &> /dev/null; then
    # prek is installed via mise
    prek install --hook-type commit-msg
    echo "pre-commit hooks installed via prek"
  else
    echo "Warning: prek not found. Run 'mise install' first."
    return 1
  fi
}

main() {
  # Change to project root (script location's parent)
  cd "$(dirname "$0")/.."

  install_mise
  setup_mise
  setup_pre_commit

  echo ""
  echo "=== Setup Complete ==="
  echo "All tools and pre-commit hooks are configured."
}

main "$@"
