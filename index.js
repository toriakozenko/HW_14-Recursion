//Task 'Рекурсія: HTML tree'

let htmlTree = {
  tagName: "body",
  children: [
    {
      tagName: "div",
      parent: "body",
      children: [
        {
          tagName: "span",
          parent: "div",
          children: ["Enter a data please:"]
        },
        {
          tagName: "input",
          parent: "div",
          attrs: {
            type: "text",
            id: "name"
          }
        },
        {
          tagName: "input",
          parent: "div",
          attrs: {
            type: "text",
            id: "surname"
          }
        }
      ]
    },
    {
      tagName: "div",
      parent: "body",
      children: [
        {
          tagName: "button",
          parent: "div",
          attrs: {
            id: "ok"
          },
          children: ["OK"]
        },
        {
          tagName: "button",
          parent: "div",
          attrs: {
            id: "cancel"
          },
          children: ["Cancel"]
        }
      ]
    }
  ]
}


// function generateHTML(node) {
//   if (!node) {
//     return '';
//   }
//   let html = `<${node.tagName}`;
//   if (node.attrs) {
//     Object.keys(node.attrs).forEach(key => {
//       html += ` ${key}="${node.attrs[key]}"`;
//     });
//   }
//   html += '>';
//   if (node.children) {
//     if (typeof node.children === 'string' || typeof node.children[0] === 'string') {
//       html += node.children;
//     } else if (Array.isArray(node.children)) {
//       node.children.forEach(child => {
//         html += generateHTML(child);
//       });
//     }
//   }
//   html += `</${node.tagName}>`;
//   return html;
// }


// document.write(generateHTML(htmlTree));


//Task 'Рекурсія: DOM tree'

const table = document.createElement('table');
domTree(table, htmlTree);
document.body.appendChild(table);

function domTree(parent, node) {
  const element = document.createElement(node.tagName);

  if (node.children && node.children.length > 0) {
    node.children.forEach(childNode => {
      domTree(element, childNode);
    });
  }

  if (node.attrs) {
    Object.keys(node.attrs).forEach(attr => {
      element.setAttribute(attr, node.attrs[attr]);
    });
  }

  if (node.children && node.children.every(child => typeof child === 'string')) {
    element.appendChild(document.createTextNode(node.children.join('')));
  }

  parent.appendChild(element);
}



//Task 'Рекурсія: Deep Copy'

function deepCopy(obj) {
  let newObj = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      newObj[key] = deepCopy(obj[key]); // рекурсивно копіюємо всі вкладені об'єкти та масиви
    } else {
      newObj[key] = obj[key]; // копіюємо значення, які не є об'єктами або масивами
    }
  }
  return newObj;
}

const arr  = [1,"string", null, undefined, {a: 15, b: 10, c: [1,2,3,4],d: undefined, e: true }, true, false]
const arr2 = deepCopy(arr);
console.log(arr2); 
const table2 = deepCopy(table) 



