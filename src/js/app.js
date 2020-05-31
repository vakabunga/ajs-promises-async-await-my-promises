/* eslint-disable no-unused-vars */
import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static load() {
    return new Promise((resolve, reject) => {
      const data = read();
      data.then((response) => {
        const value = json(response);
        value.then((result) => resolve(result));
      });
    });
  }
}

GameSavingLoader.load().then((saving) => JSON.parse(saving));
