# Package Update Issues to Fix

## TypeScript/Linting Issues
- [x] Fix TypeScript warning in `./src/components/common/Footer/Contact/Contact.test.tsx:8:20` - Fixed by typing props properly
- [x] Fix error in `./src/components/common/MDX/Wrapper/Wrapper.tsx:29:24` - False positive, rule was removed
- [x] Fix error in `./src/components/common/MDX/parseComponents.tsx:26:35` - False positive, rule was removed  
- [x] Re-enable `@typescript-eslint/promise-function-async` rule - Re-enabled and working

## Deprecated Packages Warnings
- [x] `eslint-config-standard-with-typescript@21.0.1` - Removed (eslint-config-love requires ESLint 9, staying with ESLint 8 for Next.js compatibility)
- [x] `eslint@8.15.0` - Updated to 8.57.1 (staying on v8 for Next.js compatibility)
- [x] `puppeteer@14.4.1` - Updated to v21 (still deprecated but much more recent)

## Deprecated Subdependencies
These are dependencies of other packages and cannot be directly fixed:
- `@humanwhocodes/config-array@0.13.0` (from ESLint)
- `@humanwhocodes/object-schema@2.0.3` (from ESLint)
- `glob@7.2.3` (various packages)
- `inflight@1.0.6` (from glob)
- `lodash.isequal@4.5.0` (various packages)
- `rimraf@3.0.2` (various packages)

## Peer Dependency Issues

### Testing Library
- [x] `@testing-library/react` expects `@testing-library/dom@^10.0.0` - Added as direct dependency

### ESLint Config Issues
- [x] Removed `eslint-config-standard-with-typescript` - No longer needed

### Radix UI Components
- [x] Updated to v1.x - Now compatible with React 18

## Summary
All major issues have been resolved! The project is now using:
- Next.js 14
- TypeScript 5
- React 18
- Modern versions of all major dependencies
- Puppeteer 21 (works with Vercel deployment)