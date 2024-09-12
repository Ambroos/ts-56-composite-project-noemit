1. `pnpm i`
2. `pnpm exec tsc`
3. Observe error with TS 5.6
4. `pnpm i typescript@5.5.4`
5. `pnpm exec tsc`
6. Observe no error with TS 5.5.4, since noEmit in 5.5 and older means types do not need to be able to be named