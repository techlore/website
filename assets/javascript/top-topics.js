/**
 * @overview Generates a list of the top topics on a Discourse forum.
 * @author Jonah Aragon <jonah@triplebit.net>
 * @version 1.0.0
 * @license
 * Copyright (c) 2023 Jonah Aragon
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

async function getData(url) {
  const response = await fetch(url);
  return response.json()
}

/**
 * @todo Create configuration variables.
 */

async function main() {
  const data = await getData('https://discuss.techlore.tech/top.json?period=weekly');
  var list = data['topic_list']['topics'];

  for (var i = 0; i< 8; i++) {

    var title = list[i]['title'];
    var id = list[i]['id'];
    var excerpt = list[i]['excerpt']
    excerpt = excerpt.replace(/(\r\n|\n|\r)/gm, "");

    if (excerpt == "") {
      var reply_count = list[i]['reply_count'];
      if (reply_count > 1) {
        excerpt = "Read " + reply_count + " replies on our forum:"
      }
      else if (reply_count == 1) {
        excerpt = "Read one reply on our forum:"
      }
      else {
        excerpt = "Learn more about this on our forum:"
      }
    }

    var ul = document.getElementById("discourse-topic-list");
    var li = document.createElement("li");

    var h3 = document.createElement('h3');
    var a1 = document.createElement('a');
    a1.className = "discourse-title";
    a1.href = 'https://discuss.techlore.tech/t/' + id;
    a1.innerText = title;
    h3.appendChild(a1);

    var p = document.createElement('p');
    p.className = "discourse-excerpt";
    p.innerHTML = excerpt + ' ';

    var a2 = document.createElement('a');
    a2.className = "discourse-more-link";
    a2.href = 'https://discuss.techlore.tech/t/' + id;
    a2.innerText = "Read more...";
    p.appendChild(a2);
    
    li.appendChild(h3);
    li.appendChild(p);
    ul.appendChild(li);
  }
}

main();
