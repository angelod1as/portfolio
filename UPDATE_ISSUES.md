# Package Update Issues to Fix

## TypeScript/Linting Issues
- [ ] Fix TypeScript warning in `./src/components/common/Footer/Contact/Contact.test.tsx:8:20` - Unexpected any type
- [x] Fix error in `./src/components/common/MDX/Wrapper/Wrapper.tsx:29:24` - Functions that return promises must be async (temporarily disabled rule)
- [x] Fix error in `./src/components/common/MDX/parseComponents.tsx:26:35` - Functions that return promises must be async (temporarily disabled rule)
- [ ] Re-enable `@typescript-eslint/promise-function-async` rule after fixing ESLint/TypeScript compatibility

## Deprecated Packages Warnings
- [x] `eslint-config-standard-with-typescript@21.0.1` - Removed (eslint-config-love requires ESLint 9, staying with ESLint 8 for Next.js compatibility)
- [x] `eslint@8.15.0` - Updated to 8.57.1 (staying on v8 for Next.js compatibility)
- [ ] `puppeteer@14.4.1` - Version < 24.10.2 is no longer supported (will update to v21 as planned)

## Deprecated Subdependencies
- [ ] `@humanwhocodes/config-array@0.9.5`
- [ ] `@humanwhocodes/object-schema@1.2.1`
- [ ] `acorn-import-assertions@1.9.0`
- [ ] `glob@7.2.3`
- [ ] `inflight@1.0.6`
- [ ] `lodash.isequal@4.5.0`
- [ ] `rimraf@3.0.2`

## Peer Dependency Issues

### Testing Library
- [ ] `@testing-library/react` expects `@testing-library/dom@^10.0.0` but found 8.20.1

### ESLint Config Issues
- [ ] `eslint-config-standard-with-typescript` has multiple peer dependency issues:
  - Expects `eslint@^7.12.1` but found 8.15.0
  - Expects `eslint-plugin-promise@^4.2.1 || ^5.0.0` but found 6.6.0
  - Expects `@typescript-eslint/eslint-plugin@^4.0.1` but found 5.62.0

### Radix UI Components (old versions expecting React 16/17)
- [ ] `@radix-ui/react-accordion@0.1.6` - expects React ^16.8 || ^17.0
- [ ] `@radix-ui/react-toggle-group@0.1.5` - expects React ^16.8 || ^17.0
- [ ] All Radix UI subcomponents have the same issue

## Notes
- Many of these issues will be resolved as we continue updating packages
- Radix UI components will be fixed when we update them to v1.x
- ESLint issues will be resolved when we update the ESLint ecosystem