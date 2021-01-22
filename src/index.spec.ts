/**
 * @copyright Koj <https://koj.co>
 * @link https://github.com/koj-co/errol
 * 
*/

import { hello } from "./";

test("hello world", () => {
  expect(hello).toBe("world");
});
