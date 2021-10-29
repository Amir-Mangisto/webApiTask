async function getResult() {
  try {
    return await fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => console.log(json));
  } catch (error) {
    console.log(error);
  }
}
//   getResult()
////////////////////////////////////////////////////////////////////////
async function printToLog() {
  try {
    return await fetch("https://jsonplaceholder.typicode.com/posts").then(
      (response) => response.json()
    );
  } catch (error) {
    console.log(error);
  }
}
// printToLog() .then(res => console.log(res))
////////////////////////////////////////////

async function printComment() {
  try {
    return await fetch("https://jsonplaceholder.typicode.com/comments").then(
      (response) => response.json()
    );
  } catch (error) {
    console.log(error);
  }
}
// printComment() .then(res=>console.log(res))
////////////////////////////////////
async function print() {
  try {
    return await fetch("https://jsonplaceholder.typicode.com/todos/5").then(
      (response) => response.json()
    );
  } catch (error) {
    console.log(error);
  }
}
// print().then(res=>console.log(res))
////////////////////////////////////////////
async function printComment9() {
  try {
    return await fetch("https://jsonplaceholder.typicode.com/comments/9").then(
      (response) => response.json()
    );
  } catch (error) {
    console.log(error);
  }
}

// printComment9().then(res=>console.log(res))
////////////////////////////////////////////
async function printAlbums() {
  try {
    return await fetch("https://jsonplaceholder.typicode.com/albums").then(
      (response) => response.json()
    );
  } catch (error) {
    console.log(error);
  }
}
// printAlbums().then(res=>console.log(res))
//////////////////////////////////////////
const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");
async function printToDom() {
  try {
    return await fetch("https://jsonplaceholder.typicode.com/albums/2").then(
      (response) => response.json()
    );
  } catch (error) {
    console.log(error);
  }
}
// printToDom ().then((res)=>{
//     for (const key in res) {
//         div1.innerHTML += `<p>${key} - ${res[key]} </p>`;
//     }
// })
//////////////////////////////////
async function printAllUsers() {
  try {
    return await fetch("https://jsonplaceholder.typicode.com/users").then(
      (response) => response.json()
    );
  } catch (error) {
    console.log(error);
  }
}
// printAllUsers ().then((res)=>{
//     for (let item of res) {
//         for (let key in item) {
//             div2.innerHTML += `<p>${key} - ${item[key]} </p>`;
//         }
//     }
// })
////////////////////////////////////
// async function userNumber22() {
//   try {
//     return await getAbove("https://jsonplaceholder.typicode.com/users", 2).then(
//       (response) => response.json()
//     );
//   } catch (error) {
//     alert(error);
//   }
// }
// userNumber22().then((res) => {
//   for (let key in item) {
//     div3.innerHTML += `<p>${key} - ${item[key]} </p>`;
//   }
// });
// ////////////////////////////////////////////////////
//  function getAbove(api, someId) {
//     return new Promise((resolve,reject)=>{
//         fetch(`${api}/${someId}`)
//         .then(response=>response.json()).then((res)=>{res.id?resolve(res):reject({message:"user not found"})})
//     })

// }
///////////////////////////////////////////////////
//1
const option = {
  method: `POST`,
};
async function goToApi() {
  try {
    return await fetch(
      "https://jsonplaceholder.typicode.com/todos",
      option
    ).then((response) => response.json());
  } catch (error) {
    console.log(error);
  }
}
goToApi().then((res) => {
  console.log(res);
});
/////////////////////////////
//2
const option2 = {
  method: `POST`,
};
async function goToApi2() {
  try {
    return await fetch(
      "https://jsonplaceholder.typicode.com/posts",
      option2
    ).then((response) => response.json());
  } catch (error) {
    console.log(error);
  }
}
goToApi2().then((res) => {
  console.log(res);
});
///////////////////////////////////////
//3
const option3 = {
  method: `POST`,
  body: `JSON.stringify(myUser)`,
};
const myUser = {
  name: "dan",
  age: 12,
  city: "london",
};
async function printToLog5Post() {
  try {
    return await fetch(
      "https://jsonplaceholder.typicode.com/users",
      option3
    ).then((response) => response.json());
  } catch (error) {
    console.log(error);
  }
}
printToLog5Post().then((res) => {
  console.log(res);
});
//////////////////////////////////////////
//14
const option4 = {
  method: `POST`,
  body: `JSON.stringify(obj)`,
};
const obj = {
  name: "nmb",
  location: "kjh",
  street: 21,
};
async function taskFourtheen() {
  try {
    return await fetch("https://jsonplaceholder.typicode.com/posts",option4).then(
      (response) => response.json()
    );
  } catch (error) {}
}
taskFourtheen().then((res) => {
  console.log(res);
});
/////////////////////////////////////////////
//15
const btn=document.getElementById("btn")
btn.onclick = () => {
  const objUser = {
    name: nameInp.value,
    age: ageInp.value,
    city: cityInp.value,
  };
  const option5 = {
    method: "POST",
    body: JSON.stringify(objUser),
  };
  async function task15(api) {
    try {
      return await fetch(`${api}` , option5)

    } catch (error) {
      console.log(error);
    }
  }
    switch (select.value) {
      case "posts":
         task15("https://jsonplaceholder.typicode.com/posts").then(response=>response.json()).then((res)=>{console.log(res)})
        break;
      case "users":
        task15("https://jsonplaceholder.typicode.com/users").then(response=>response.json()).then((res)=>{console.log(res)})
        break;
      case "comments":
        task15("https://jsonplaceholder.typicode.com/comments").then(response=>response.json()).then((res)=>{console.log(res)})
        break;
  
      default:
        break;
    }
}

