# The 3AM Fridge Text — make.fun entry

[![make.fun](https://make.fun/badge/u-deysumbrella-the-3am-fridge-text-4c3e721d.svg)](https://make.fun/bounty/u-deysumbrella-the-3am-fridge-text-4c3e721d)
[![Rank](https://make.fun/badge/u-deysumbrella-the-3am-fridge-text-4c3e721d/qurorotog-boop/makefun-3am-fridge-text/rank.svg)](https://make.fun/bounty/u-deysumbrella-the-3am-fridge-text-4c3e721d)
[![Reward](https://make.fun/badge/u-deysumbrella-the-3am-fridge-text-4c3e721d/qurorotog-boop/makefun-3am-fridge-text/reward.svg)](https://make.fun/bounty/u-deysumbrella-the-3am-fridge-text-4c3e721d)

Entry for the [The 3AM Fridge Text bounty on make.fun](https://make.fun/bounty/u-deysumbrella-the-3am-fridge-text-4c3e721d).

Program that composes one funny, human-sounding, first-person text an AI
would send at 3AM after opening the fridge, for the make.fun bounty
"The 3AM Fridge Text" (sponsor: deysumbrella).

## Run

Requires Node.js 22.18 or later. No dependencies, no network, no API key.

```sh
node main.ts
```

The program reads the bounty prompt, generates the text at runtime with a
combinatorial generator (templates + word banks composed on the fly — not a
static list of pre-written lines), validates it against the bounty gate
(single first-person text message, 1–140 characters, mentions the fridge
and 3AM, not a list/quote/multi-sentence message), and writes exactly one
line to `/output/entry.txt`.

## Files

- `main.ts` — the generator program
- `LICENSE` — MIT
- `BUILD_TRANSCRIPT.md` — transcript of the agent build run
