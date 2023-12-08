/**
 * @jest-environment jsdom
 */
import { render, screen, fireEvent } from '@testing-library/react'
import LoadingButton from './index'

describe('LoadingButton', () => {
  it("renders the button and it's content correctly", () => {
    render(
      <LoadingButton
        isLoading={false}
        onClickAction={jest.fn()}
        content="OK"
      />
    );

    const button = screen.getByTestId('loading-button')

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('OK');
  });

  it('the button executes the onClickAction correctly', () => {
    const action = jest.fn();
    render(
      <LoadingButton
        isLoading={false}
        onClickAction={action}
        content="OK"
      />
    );

    const button = screen.getByTestId('loading-button')

    expect(button).toBeInTheDocument();

    fireEvent.click(button);

    expect(action).toHaveBeenCalled();
  });

  it('main button, renders correctly the loading text when isLoading is true', () => {
    render(
      <LoadingButton
        isLoading={true}
        onClickAction={jest.fn()}
        content="OK"
      />
    );

    const button = screen.getByTestId('loading-button')

    expect(button).toBeInTheDocument();
    expect(button).not.toHaveTextContent('OK');
    expect(button).toHaveTextContent('loading');
  });
});
