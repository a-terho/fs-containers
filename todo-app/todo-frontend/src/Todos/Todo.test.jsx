import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Todo from './Todo';

const onClickDelete = vi.fn();
const onClickComplete = vi.fn();

describe('<Todo />', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders content correctly when not done', () => {
    const todo = {
      text: 'Write first test',
      done: false,
    };

    render(
      <Todo
        todo={todo}
        onClickDelete={onClickDelete}
        onClickComplete={onClickComplete}
      />,
    );

    expect(screen.getByText(todo.text)).toBeVisible();
    expect(screen.getByText('This todo is not done')).toBeVisible();
    expect(screen.getByRole('button', { name: 'Delete' })).toBeVisible();
    expect(screen.getByRole('button', { name: 'Set as done' })).toBeVisible();
  });

  it('renders content correctly when done', () => {
    const todo = {
      text: 'Write second test',
      done: true,
    };

    render(
      <Todo
        todo={todo}
        onClickDelete={onClickDelete}
        onClickComplete={onClickComplete}
      />,
    );

    expect(screen.getByText(todo.text)).toBeVisible();
    expect(screen.getByText('This todo is done')).toBeVisible();
    expect(screen.getByRole('button', { name: 'Delete' })).toBeVisible();
    expect(screen.queryByRole('button', { name: 'Set as done' })).toBeNull();
  });

  test('button handlers are called when pressed', async () => {
    const client = userEvent.setup();
    const todo = {
      text: 'Write more tests',
      done: false,
    };

    render(
      <Todo
        todo={todo}
        onClickDelete={onClickDelete}
        onClickComplete={onClickComplete}
      />,
    );

    await client.click(screen.getByRole('button', { name: 'Set as done' }));
    await client.click(screen.getByRole('button', { name: 'Delete' }));

    expect(onClickDelete).toHaveBeenCalledTimes(1);
    expect(onClickComplete).toHaveBeenCalledTimes(1);
  });
});
