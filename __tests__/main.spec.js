// @ts-check

import '@hexlet/tic-tac-toe/public/style.css';
import { test, expect } from 'vitest';
import { debug } from 'vitest-preview';
import { screen } from '@testing-library/dom';
import { TicTacToe } from '@hexlet/tic-tac-toe';

test('main', async () => {
  const game = new TicTacToe(document.body);
  game.start();
  const header = screen.getByRole('heading', { name: 'Tic Tac Toe' });
  expect(header).toBeTruthy();

  debug();
});
