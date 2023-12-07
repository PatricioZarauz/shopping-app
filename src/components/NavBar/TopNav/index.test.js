/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import TopNav from './index';

describe('TopNav', () => {
  it("renders header tag and it's content correctly", () => {
    const { container } = render(<TopNav />);

    const header = container.querySelector('header');
    const homeButton = screen.getByTestId('main-button');
    const navButtons = screen.getByTestId('nav-buttons');
    const searchBar = screen.queryByTestId('search-bar');

    expect(header).toBeInTheDocument();
    expect(navButtons).toBeInTheDocument();
    expect(homeButton).toBeInTheDocument();
    expect(homeButton).toHaveTextContent('VGS');
    expect(homeButton).toHaveAttribute('href', '/');
    expect(searchBar).not.toBeInTheDocument();
  });

  // describe('when hasSearchBar props as true', () => {
  //   beforeAll(() => {
  //     jest.mock('next/navigation', () => {
  //       return {
  //         useSearchParams: () => {
  //           return {
  //             get: jest.fn()
  //           }
  //         },
  //       }
  //     })
  //   })
  //   fit('render the home button as active', () => {
  //     const { container } = render(<TopNav hasSearchBar />);

  //     const header = container.querySelector('header');
  //     const homeButton = screen.getByTestId('main-button');
  //     const navButtons = screen.getByTestId('nav-buttons');
  //     const searchBar = screen.queryByTestId('search-bar');

  //     expect(header).toBeInTheDocument();
  //     expect(navButtons).toBeInTheDocument();
  //     expect(homeButton).toBeInTheDocument();
  //     expect(homeButton).toHaveTextContent('VGS');
  //     expect(homeButton).toHaveAttribute('href', '/');
  //     expect(searchBar).toBeInTheDocument();
  //   })
  // });
});
