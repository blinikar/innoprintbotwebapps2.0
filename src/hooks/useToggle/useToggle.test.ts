import { renderHook } from '@testing-library/react';
import { test, expect } from 'vitest';
import { useToggle } from 'hooks/useToggle/useToggle';
import { act } from 'react-dom/test-utils';

test('should initialize with false by default', () => {
  const { result } = renderHook(() => useToggle());

  const [state,] = result.current;

  expect(state).toBe(false);
});

test('should initialize with true when provided', () => {
  const { result } = renderHook(() => useToggle(true));

  const [state,] = result.current;

  expect(state).toBe(true);
});

test('should switch correctly', () => {
  const { result } = renderHook(() => useToggle());

  const [, toggle] = result.current;

  act(() => {
    toggle();
  });

  expect(result.current[0]).toEqual(true);

  act(() => {
    toggle();
  });

  expect(result.current[0]).toEqual(false);
});

