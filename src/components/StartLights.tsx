import { useEffect, useRef, useState } from 'react';

type State =
  | { kind: 'idle' }
  | { kind: 'lighting'; lit: number }
  | { kind: 'hold' }
  | { kind: 'go'; at: number }
  | { kind: 'result'; ms: number }
  | { kind: 'jump' };

const STEP_MS = 550;

/** F1 start lights easter egg: five reds, lights out, then click as fast as you can. */
export default function StartLights() {
  const [state, setState] = useState<State>({ kind: 'idle' });
  const timer = useRef<number>();

  useEffect(() => () => window.clearTimeout(timer.current), []);

  useEffect(() => {
    window.clearTimeout(timer.current);
    if (state.kind === 'lighting') {
      timer.current = window.setTimeout(
        () => setState(state.lit < 5 ? { kind: 'lighting', lit: state.lit + 1 } : { kind: 'hold' }),
        STEP_MS,
      );
    } else if (state.kind === 'hold') {
      // real starts hold for a random beat before lights out
      timer.current = window.setTimeout(() => setState({ kind: 'go', at: performance.now() }), 700 + Math.random() * 1600);
    }
  }, [state]);

  const press = () => {
    switch (state.kind) {
      case 'idle':
      case 'result':
      case 'jump':
        setState({ kind: 'lighting', lit: 1 });
        break;
      case 'lighting':
      case 'hold':
        setState({ kind: 'jump' });
        break;
      case 'go':
        setState({ kind: 'result', ms: Math.round(performance.now() - state.at) });
        break;
    }
  };

  const lit = state.kind === 'lighting' ? state.lit : state.kind === 'hold' ? 5 : 0;
  const label = {
    idle: 'tap for a race start',
    lighting: 'wait for it…',
    hold: 'wait for it…',
    go: 'GO GO GO! tap!',
    result: state.kind === 'result' ? `lights out and away we go · ${state.ms}ms` : '',
    jump: 'jump start! 🚩 tap to retry',
  }[state.kind];

  return (
    <button className={`vp-lights${state.kind === 'go' ? ' go' : ''}`} onClick={press} aria-live="polite">
      <span className="vp-lights-rig" aria-hidden>
        {[1, 2, 3, 4, 5].map((n) => (
          <i key={n} className={n <= lit ? 'on' : ''} />
        ))}
      </span>
      <span className="vp-lights-label">{label}</span>
    </button>
  );
}
