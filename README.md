# military-test

CLI để test API
Xem detail tại [chi tiết api](markdown/API_SUMMARY.md)

## API Endpoints

All API endpoints have been mapped in `lib/endpoint.js`, organized by functionality.
See detailed API documentation for each group:

- [Authentication](markdown/API_DESCRIPTION_auth.md)
- [Term management](markdown/API_DESCRIPTION_term.md)
- [Course management](markdown/API_DESCRIPTION_course.md)
- [Class management](markdown/API_DESCRIPTION_class.md)
- [Fitness test management](markdown/API_DESCRIPTION_fitness.md)
- [Violation record management](markdown/API_DESCRIPTION_violation.md)
- [Equipment management](markdown/API_DESCRIPTION_equipment.md)
- [Allowance management](markdown/API_DESCRIPTION_allowance.md)
- [Search functionality](markdown/API_DESCRIPTION_misc.md)
- [Student profile access](markdown/API_DESCRIPTION_misc.md)
- [Grade management](markdown/API_DESCRIPTION_misc.md)
- [Manager operations](markdown/API_DESCRIPTION_misc.md)
- [Dashboard views](markdown/API_DESCRIPTION_misc.md)

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
