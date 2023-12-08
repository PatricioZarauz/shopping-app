/**
 * @jest-environment jsdom
 */
import { render, screen, fireEvent } from '@testing-library/react'
import OneActionModal from './index'

describe('OneActionModal', () => {
  beforeAll(() => {
    HTMLDialogElement.prototype.showModal = jest.fn();
    HTMLDialogElement.prototype.close = jest.fn();
  });

  it("renders dialog and it's content correctly", () => {
    render(
      <OneActionModal
        onCloseHandler={jest.fn}
        mainActionHandler={jest.fn}
        title="Title"
        content={<p data-testid="dialog-content">example content</p>}
      />
    );

    const dialog = screen.getByTestId('dialog-component')
    const dialogTitle = screen.getByTestId('dialog-title')
    const content = screen.getByTestId('dialog-content')

    expect(dialog).toBeInTheDocument();
    expect(dialogTitle).toBeInTheDocument();
    expect(dialogTitle).toHaveTextContent('Title');
    expect(content).toBeInTheDocument();
    expect(content).toHaveTextContent('example content');
  });

  it('cancel button, executes the exitAction correctly', () => {
    const closeHandler = jest.fn();

    render(
      <OneActionModal
        onCloseHandler={closeHandler}
        mainActionHandler={jest.fn}
        title="Title"
        content={<p data-testid="dialog-content">example content</p>}
        cancelActionText="Cancel"
      />
    );

    const dialog = screen.getByTestId('dialog-component')
    const cancelButton = screen.getByTestId('cancel-button')

    expect(dialog).toBeInTheDocument();
    expect(cancelButton).toHaveTextContent('Cancel');

    fireEvent.click(cancelButton)

    expect(closeHandler).toHaveBeenCalled()

  });

  it('main button, executes the mainAction correctly', () => {
    const mainHandler = jest.fn();

    render(
      <OneActionModal
        onCloseHandler={jest.fn}
        mainActionHandler={mainHandler}
        title="Title"
        content={<p data-testid="dialog-content">example content</p>}
        mainActionText="OK"
      />
    );

    const dialog = screen.getByTestId('dialog-component')
    const mainButton = screen.getByTestId('loading-button')

    expect(dialog).toBeInTheDocument();
    expect(mainButton).toHaveTextContent('OK');

    fireEvent.click(mainButton)

    expect(mainHandler).toHaveBeenCalled()

  });
});
