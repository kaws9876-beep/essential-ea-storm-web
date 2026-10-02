'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';

const storageKey = 'ea-storm-threshold-entered';
const replayEvent = 'ea-storm:replay-threshold';

type ThresholdState = 'checking' | 'visible' | 'opening' | 'hidden';

export function CinematicThreshold() {
  const [state, setState] = useState<ThresholdState>('checking');
  const enterRef = useRef<HTMLAnchorElement>(null);
  const closeTimerRef = useRef<number | undefined>(undefined);

  const rememberEntry = useCallback(() => {
    try {
      window.sessionStorage.setItem(storageKey, 'true');
    } catch {}
  }, []);

  const finish = useCallback(() => {
    window.clearTimeout(closeTimerRef.current);
    setState('hidden');
    document.querySelector<HTMLElement>('#hero-title')?.focus({ preventScroll: true });
  }, []);

  const enter = useCallback(() => {
    if (state === 'opening' || state === 'hidden') return;

    rememberEntry();
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reducedMotion) {
      finish();
      return;
    }

    setState('opening');
    const duration = window.matchMedia('(max-width: 600px)').matches ? 2000 : 2600;
    closeTimerRef.current = window.setTimeout(finish, duration);
  }, [finish, rememberEntry, state]);

  const skip = useCallback(() => {
    rememberEntry();
    finish();
  }, [finish, rememberEntry]);

  useEffect(() => {
    let hasEntered = false;

    try {
      hasEntered = window.sessionStorage.getItem(storageKey) === 'true';
    } catch {
      hasEntered = false;
    }

    queueMicrotask(() => setState(hasEntered ? 'hidden' : 'visible'));
  }, []);

  useEffect(() => {
    if (state !== 'visible') return;

    enterRef.current?.focus({ preventScroll: true });
    const autoTimer = window.setTimeout(enter, 1800);
    return () => window.clearTimeout(autoTimer);
  }, [enter, state]);

  useEffect(() => {
    if (state === 'hidden') return;

    const previousOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = 'hidden';
    return () => {
      document.documentElement.style.overflow = previousOverflow;
    };
  }, [state]);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape' && state !== 'hidden') skip();
    }

    function replay() {
      window.clearTimeout(closeTimerRef.current);
      try {
        window.sessionStorage.removeItem(storageKey);
      } catch {}
      setState('visible');
    }

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener(replayEvent, replay);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener(replayEvent, replay);
    };
  }, [skip, state]);

  useEffect(
    () => () => {
      window.clearTimeout(closeTimerRef.current);
    },
    [],
  );

  if (state === 'hidden') return null;

  return (
    <dialog
      open
      className={`ea-threshold ea-threshold--${state}`}
      aria-modal="true"
      aria-labelledby="threshold-title"
    >
      <div className="ea-threshold__world" aria-hidden="true" />
      <div className="ea-threshold__light" aria-hidden="true" />
      <div className="ea-threshold__doors" aria-hidden="true">
        <div className="ea-threshold__door ea-threshold__door--left" />
        <div className="ea-threshold__door ea-threshold__door--right" />
      </div>
      <div className="ea-threshold__signal" aria-hidden="true" />

      <div className="ea-threshold__content">
        <Image
          className="ea-threshold__logo"
          src="/brand/ea-storm-gold.png"
          alt="EA STORM"
          width={1536}
          height={1024}
          unoptimized
          priority
        />
        <p id="threshold-title">Keep What Matters Moving.</p>
        <p className="ea-threshold__microcopy">People | Operations | Possibilities</p>
        <a
          ref={enterRef}
          className="ea-threshold__enter"
          href="#main-content"
          onClick={(event) => {
            event.preventDefault();
            enter();
          }}
        >
          Enter
          <ArrowRight size={18} aria-hidden="true" />
        </a>
      </div>

      <a
        className="ea-threshold__skip"
        href="#main-content"
        onClick={(event) => {
          event.preventDefault();
          skip();
        }}
      >
        Skip
        <ArrowRight size={15} aria-hidden="true" />
      </a>
    </dialog>
  );
}
