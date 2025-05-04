import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CourseItem } from "./courses-item";

describe("course item", () => {
  it("should call delete callback", async () => {
    const onDelete = jest.fn();
    render(
      <CourseItem
        course={{
          id: "1",
          name: "test",
          description: "test",
        }}
        onDelete={onDelete}
      />,
    );
    await userEvent.click(screen.getByText("Удалить"));
    expect(onDelete).toHaveBeenCalled();
  });
});
