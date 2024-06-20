type box<T> = T extends { blue: infer U, red: infer V } ? [U, V] : never;
type mybox = box<{ blue: 10; red: 5; }>;
type mybox2 = box<{}>;
type mybox3 = box<{ blue: 10; }>;

const boxImplementation: mybox = [10, 5];

function box2Implementation(): mybox2 {
  throw new Error('error');
}

function box3Implementation(): mybox3 {
  throw new Error('error');
}