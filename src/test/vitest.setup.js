import { server } from "../mocks/node.js";
import { beforeAll, afterEach, afterAll } from "vitest";

beforeAll(() => {
  server.listen({ onUnhandledRequest: "bypass" });
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});
