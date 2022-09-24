import { act, renderHook } from '@testing-library/react'
import useDebounce from './useDebounce';

describe('useDebounce', () => {
  let debounceFunc;

  beforeEach(() => {
    const { result } = renderHook(() => useDebounce());

    debounceFunc = result.current;
  });

  test('Not be called ', () => {
    const myfunc = jest.fn();
    act(() => {
      debounceFunc(myfunc, 10);
    });
    expect(myfunc)
      .not
      .toBeCalled();
  });

  test('Have been called ', () => {
    const myfunc = jest.fn();
    act(() => {
      debounceFunc(myfunc, 2);
    });

    setTimeout(() => {
      expect(myfunc)
        .toHaveBeenCalledTimes(1);
    }, 5);
  });

  test('Have been called onle 1 time ', () => {
    const myfunc = jest.fn();
    act(() => {
      debounceFunc(myfunc, 2);
      debounceFunc(myfunc, 2);
      debounceFunc(myfunc, 2);
    });

    setTimeout(() => {
      expect(myfunc)
        .toHaveBeenCalledTimes(1);
    }, 10);
  });
});
