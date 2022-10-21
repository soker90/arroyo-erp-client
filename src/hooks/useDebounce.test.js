// @vitest-environment happy-dom
import { act, renderHook } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import useDebounce from './useDebounce';

describe('useDebounce', () => {
  let debounceFunc;

  beforeEach(() => {
    const { result } = renderHook(() => useDebounce());

    debounceFunc = result.current;
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.clearAllTimers();
  });

  afterAll(() => {
    vi.useRealTimers();
  });

  it('Not be called ', () => {
    const myfunc = vi.fn();
    act(() => {
      debounceFunc(myfunc, 10);
    });
    expect(myfunc)
      .not
      .toBeCalled();
  });

  it('Have been called only 1 time ', () => {
    const myfunc = vi.fn();
    act(() => {
      debounceFunc(myfunc, 2);
      vi.advanceTimersByTime(2);
      debounceFunc(myfunc, 2);
      vi.advanceTimersByTime(2);
      debounceFunc(myfunc, 2);
    });

    setTimeout(() => {
      expect(myfunc)
        .toHaveBeenCalledTimes(1);
    }, 10);
  });

  it('Have been called only 2 times ', () => {
    const myfunc = vi.fn();
    act(() => {
      debounceFunc(myfunc, 2);
      vi.advanceTimersByTime(5);
      debounceFunc(myfunc, 2);
      vi.advanceTimersByTime(15);
      debounceFunc(myfunc, 2);
    });

    setTimeout(() => {
      expect(myfunc)
        .toHaveBeenCalledTimes(2);
    }, 10);
  });
});
