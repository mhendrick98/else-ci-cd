import {ItemQuery} from './item';

export default class Remote {
  /**
   * Get items from remote endpoint
   *
   * @param {ItemQuery} query Query to match
   * @param {String} url URL to call
   * @param {function(ItemList)} callback Called when the query is done
   *
   * @example
   * remote.get({completed: true}, localhost, data => {
	 *	 // data shall contain items whose completed properties are true
	 * })
   */
  get(query, url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onreadystatechange = () => {
      if (xhr.readyState > 3 && xhr.status === 200) {
        callback(xhr.responseText);
      } else if (xhr.readyState > 3 && xhr.status === 404) {
        throw new Error('URL not found.');
      }
    };
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr.send();

    return xhr;
  }
}
