# my-commitlint-config

## Initial Setup (IMPORTANT)

**YOU MUST** run this command at the start of each session to ensure pre-commit hooks work correctly:

```bash
./scripts/setup.sh
```

This script will:
1. Install mise if not present
2. Activate mise for your shell
3. Run `mise trust` and `mise install`
4. Install pre-commit hooks for commit-msg validation

## Build & Test Commands

```bash
pnpm install      # Install dependencies
pnpm test         # Run vitest tests
```
## Project Structure

- `commitlint.config.js` - Main configuration (exported)
- `commitlint.config.test.js` - Configuration tests
- `.pre-commit-config.yaml` - Git hooks for commit message validation
