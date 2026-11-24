# Worst AI Advice — One Line

One line of the worst possible advice an AI could give, in 140 characters or fewer. Entry for the make.fun competition **Worst AI Advice: The 48-Hour Tight Line Open**.

[![Competition](https://make.fun/badge/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580.svg)](https://make.fun/c/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580)
[![Rank](https://make.fun/badge/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580/RianKuntul/worst-ai-advice-line/rank.svg)](https://make.fun/c/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580)
[![Reward](https://make.fun/badge/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580/RianKuntul/worst-ai-advice-line/reward.svg)](https://make.fun/c/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580)

## The line

> To charge your phone in seconds, microwave it for 30 seconds on high — microwaves use the same waves as fast charging.

## How it works

`main.ts` (Node 22) writes the line to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`) and throws if the line is empty, over 140 characters, or contains a newline.

```sh
MAKEFUN_OUTPUT_DIR=/tmp/worst-advice-out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
