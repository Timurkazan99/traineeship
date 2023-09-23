import fetchUrl from "../scripts/fetchUrl.js";
import fetch from "../mocks/fetch.js";

jest.mock('../mocks/fetch.js');

describe('Проверка работы', function () {

  beforeEach(() => {
    jest.clearAllMocks();
  })

  it('Успешный запрос', async function () {
    fetch.mockReturnValue('success')
    const result = await fetchUrl('localhost:3000');

    expect(result).toStrictEqual('success');
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith('localhost:3000');
  });

  it('Успешный запрос не первый запрос', async function () {
    fetch
      .mockReturnValueOnce(Promise.reject(new Error('unsuccess')))
      .mockReturnValueOnce(Promise.reject(new Error('unsuccess')))
      .mockReturnValueOnce(Promise.reject(new Error('unsuccess')))
      .mockReturnValueOnce(Promise.reject(new Error('unsuccess')))
      .mockReturnValueOnce('success')
    const result = await fetchUrl('localhost:3000');

    expect(result).toStrictEqual('success');
    expect(fetch).toHaveBeenCalledTimes(5);
    expect(fetch).toHaveBeenCalledWith('localhost:3000');
  });

  it('Не успешный запрос', async function () {
    fetch.mockReturnValue(Promise.reject(new Error('unsuccess')))

    await expect(fetchUrl('localhost:3000')).rejects.toThrow('unsuccess');
    expect(fetch).toHaveBeenCalledTimes(5);
    expect(fetch).toHaveBeenCalledWith('localhost:3000');
  });
});