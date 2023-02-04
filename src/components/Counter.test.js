import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from './Counter';

test('it should have the correct initial value of 0', () => {
    render(<Counter />)
    const count = screen.getByText(0);
    expect(count).toBeVisible();

});
test('it should have the correct initial value when set to 2', () => {
    render(<Counter initialVal={2} />)
    const count = screen.getByText(2);
    expect(count).toBeVisible();

});

test('it should increase the value correctly add is clicked once', () => {
    render(<Counter initialVal={3} />)
    const addButton = screen.getByText('Add');
    userEvent.click(addButton);
    const count = screen.getByText(4);
    expect(count).toBeVisible();
});
test('it should decrease the value correctly remove is clicked once', () => {
    render(<Counter initialVal={3} />)
    const removeButton = screen.getByText('Remove');
    userEvent.click(removeButton);
    userEvent.click(removeButton);
    const count = screen.getByText(1);
    expect(count).toBeVisible();
});

test('it should have the correct initial value when set to reset', () => {
    render(<Counter initialVal={2} />)
    const resetButton = screen.getByText('Reset');
    userEvent.click(resetButton);
    const count = screen.getByText(0);
    expect(count).toBeVisible();

});
