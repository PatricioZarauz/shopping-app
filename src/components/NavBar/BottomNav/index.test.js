/**
 * @jest-environment jsdom
 */
import { render, screen, waitFor } from '@testing-library/react'
import BottomNav from './index'

describe('BottomNav', () => {
  it("renders nav tag and it's content correctly", () => {
    const { container } = render(<BottomNav />);

    const nav = container.querySelector('nav');
    const homeButton = screen.getByTestId('home-button')

    expect(nav).toBeInTheDocument();
    expect(homeButton).toBeInTheDocument();
    expect(homeButton).toHaveTextContent('Home');
  });

  describe('when user is on home page', () => {
    beforeAll(() => {
      jest.mock('next/navigation', () => ({
        usePathname() {
          return '/';
        },
      }));
    })
    afterAll(() => {
      jest.clearAllMocks()
    });
    it('render the home button as active', () => {
      render(<BottomNav />);

      const homeButton = screen.getByTestId('home-button');

      waitFor(() => {
        expect(homeButton).toHaveClass('active');
      })
    })
  });
});
