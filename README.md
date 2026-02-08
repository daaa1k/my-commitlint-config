# @daaa1k/my-commitlint-config

A shareable [commitlint](https://commitlint.js.org/) configuration for enforcing conventional commit messages.

## Installation

### From GitHub (Recommended)

```bash
npm install github:daaa1k/my-commitlint-config --save-dev
# or
pnpm add github:daaa1k/my-commitlint-config -D
```

### From GitHub Packages

```bash
npm install @daaa1k/my-commitlint-config --save-dev
# or
pnpm add @daaa1k/my-commitlint-config -D
```

> **Note**: GitHub Packages requires authentication. See [GitHub Packages documentation](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry) for setup instructions.

## Usage

Create a `commitlint.config.js` file in your project root:

```javascript
export default {
  extends: ['@daaa1k/my-commitlint-config']
};
```

## Rules

This configuration extends [@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional) with the following customizations:

### Allowed Commit Types

| Type       | Description                                      |
|------------|--------------------------------------------------|
| `feat`     | A new feature                                    |
| `fix`      | A bug fix                                        |
| `docs`     | Documentation only changes                       |
| `style`    | Code style changes (formatting, semicolons, etc) |
| `refactor` | Code refactoring without feature/fix changes     |
| `perf`     | Performance improvements                         |
| `test`     | Adding or updating tests                         |
| `build`    | Build system or external dependency changes      |
| `ci`       | CI configuration changes                         |
| `chore`    | Other changes that don't modify src or test files|

### Subject Line

- Maximum length: **72 characters**

## Commit Message Format

```
<type>(<scope>): <subject>

[optional body]

[optional footer(s)]
```

### Examples

```
feat(auth): add login functionality
fix: resolve memory leak in data processing
docs: update API documentation
refactor(core): simplify validation logic
```

## License

ISC
