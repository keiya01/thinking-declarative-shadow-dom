import { $event, $props, html } from "wc-ssr";

export type Todo = { text: string; isChecked: boolean };

export type Props = {
  todos: Todo[];
  text?: string;
  handleChangeTodo?: (ev?: InputEvent) => void;
  handleAddTodo?: () => void;
};

const style = html`
  <style>
    h1 {
      color: blue;
    }
    .wrapper {
      display: flex;
    }
  </style>
`;

/**
 * TODO
 * - client side rendering を行うTODOアプリを作ってみる
 * - todoの追加・編集・削除は同一ページで行う
 * - チェックしたtodoは別ページで表示する
 */
export const template = ({
  todos,
  text,
  handleChangeTodo,
  handleAddTodo,
}: Props) => html`
  <todo-page ${$props({ todos })}>
    <template shadowroot="open">
      ${style}
      <div class="container">
        <h1>TODO</h1>
        <div class="wrapper">
          <ul>
            ${todos.map((todo) => html`<li>${todo.text}</li>`)}
          </ul>
          <ul>
            ${todos.map((todo) => html`<li>${todo.text}</li>`)}
          </ul>
        </div>
        <input
          name="todo"
          ${$event("input", handleChangeTodo)}
          value="${text || ""}"
        />
        <button ${$event("click", handleAddTodo)}>add todo</button>
      </div>
    </template>
  </todo-page>
`;
