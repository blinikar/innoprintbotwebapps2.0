/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CoolRectangle, advicePieces } from 'components/CoolRectangle/CoolRectangle';
import styles from './CoolRectangle.module.scss';

test('should render correctly', () => {
  render(<CoolRectangle/>);

  expect(() => screen.getByText(advicePieces[0])).not.toThrow();
});

test('should move cool rectangle when clicked', async () => {
  const { container } = render(<CoolRectangle/>);

  const rectangle = container
    .getElementsByClassName(styles.rectangle).item(0)!;
  expect(rectangle !== null).toEqual(true);

  await userEvent.click(rectangle);

  expect(rectangle.className).toEqual(styles.rectangleOpen);
});

test('should change text when closing the rectangle', async () => {
  const { container } = render(<CoolRectangle/>);

  const rectangle = container
    .getElementsByClassName(styles.rectangle).item(0)!;
  const advice = container
    .getElementsByClassName(styles.advice).item(0)!;

  await userEvent.click(rectangle);
  await userEvent.click(rectangle);

  expect(advice.textContent).toEqual(advicePieces[1]);
});

test('should cycle all of advices list', async () => {
  const { container } = render(<CoolRectangle/>);

  const rectangle = container
    .getElementsByClassName(styles.rectangle).item(0)!;
  const advice = container
    .getElementsByClassName(styles.advice).item(0)!;

  for(const advicePiece of advicePieces) {
    expect(advice.textContent).toEqual(advicePiece);
    await userEvent.click(rectangle);
    await userEvent.click(rectangle);
  }

  // Checking if the list cycles to the beginning
  expect(advice.textContent).toEqual(advicePieces[0]);
});