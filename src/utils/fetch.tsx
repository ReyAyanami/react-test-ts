//tslint:disable
export default class FetchApi {
  static fetch(request: Request): Promise<any> {
    return new Promise(function (resolve, reject) {
      fetch(request)
        .then(response => response.json())
        .then(result => resolve(result))
        .catch(e => reject(e));
    });
  }
}
