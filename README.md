# military-test

CLI để test API
Xem detail tại [chi tiết api](API_SUMMARY.md)

## Installation

```bash
# Install dependencies
npm install

# Install CLI globally
npm link
```

## Commands

```bash
# Run all
military-test all

# Run flow cụ thể (tên file trong folder /flows)
military-test flow <flow_name>
military-test f <flow_name>

# Help
military-test --help

# Version
military-test --version
```

## Examples

```bash
# Login flow
military-test f login

# Sample flow
military-test f sample
