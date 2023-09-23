import arrDelayLog from "../scripts/arrDelayLog.js";

jest.useFakeTimers();
jest.spyOn(global, 'setTimeout');
jest.spyOn(global.console, 'log');

describe('Проверка работы', function () {

  beforeEach(() => {
    jest.clearAllMocks();
  })

  it('', async function () {
    const arr = [10, 12, 15, 21];
    arrDelayLog(arr);

    jest.runAllTimers();

    expect(setTimeout).toHaveBeenCalledTimes(4);
    expect(console.log).toHaveBeenCalledTimes(4);

    arr.forEach((value, i) => {
      expect(console.log).toHaveBeenNthCalledWith(i + 1, 'value:', value,  'index:', i);
      expect(setTimeout).toHaveBeenNthCalledWith(i + 1, expect.any(Function), 3000);
    });
  });
});