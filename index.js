// Methods for removing duplicate elemtents

const { nextTick } = require("process");

//Method 1 (Direct Filter)
function removeDuplicates(arr){
  for (let e of arr) {
    let n = arr.filter((a)=>{return e===a}).length;
    if (n>1) arr.splice(arr.indexOf(e), 1);
  };
  return arr;
};

//Method 2 (Object Filter)
function removeDuplicates2(arr){
  let j = {};
  let cA = [];
  arr.forEach(e=>{j[e]=null});
  for (let k in j) {
    cA.push(k);
  };
  return cA;
};

//Method 3 (New Array Push)
function removeDuplicates3(arr){
  let a = [];
  for (let d of arr){
    if (a.find((e)=>{return d===e})) {
      continue;
    } else {
      a.push(d);
    };
  };
  return a;
};

//Method for isolating string elements (Move string elements into new array)
function isolateStringElements(arr){
  return [...arr.filter((e)=>{return typeof e==="string"})];
};

//Method for capitalizing every word in a string separated by a single space
function capStrings(str){
  let stAR = str.split(" ");
  let nStr = "";
  for (let e of stAR) {
    let nE = "";
    nE += e.substring(0, 1).toUpperCase();
    nE += e.slice(1);
    nStr+=`${nE} `;
  };
  return nStr;
};

//Method for taking an array of strings and returning the longest string
function lngString(strArr){
  let i = 0;
  let tBS = [];
  for (; i<strArr.length; i++){
    let s = strArr[i];
    tBS.push({
      i: s.length,
      n: i
    });
  };
  tBS.sort((a,b)=>{return b.i-a.i});
  return strArr[tBS[0].n];
};

//Method for finding the first character in a string that does not repeat
function nRepeatStr(s){
  let sAr = s.split("");
  for (let i=0; i<s.length; i++){
    let {length} = sAr.filter((r)=>{return r===sAr[i]});
    if (length-1<1){
      return sAr[i];
    };
  };
};

//Method for turning an object into an array using either keys or values
function objCNV(obj, t="keys"){
  let arr = [];
  t=t.toLowerCase();
  if (!["keys"||"values"].includes(t)){
   throw new TypeError("INVALID PARAMETERS | SET [KEYS|VALUES]");
  };
  for (let n in obj){
    if(t==="keys"){
      arr.push(n);
      continue;
    }
    if(t==="values"){
      arr.push(obj[n]);
      continue;
    };
  };
  return arr;
};

//Method for turning an object into an array
function objCNVA(obj){
  let arr = [];
  for (let k in obj){
    arr["push"]([k,obj[k]]);
  };
  return arr;
};

//Method for parsing a querystring from a URL
function parseQueryStr(q){
  let uriR = /^https?:\/\/\w+\.\w+(\/\w*)?\?(.+)$/;
  let qry;
  if (!q.match(uriR)) throw new Error("INVALID URL");
  if (q.includes("?")){
    qry = uriR.exec(q)[2];
    let qAr = qry.split("&");
    let crA = [];
    for (let i=0;i<qAr["length"];i++){
      let qD = {};
      qD[qAr[i].split("=")[0]] = qAr[i].split("=")[1];
      crA.push(qD);
    };
    return crA;
  } else {
    throw new Error("QUERY NOT FOUND");
  };
};

//Method for sorting a linked list by lowest to greatest
function srtLnkdLst(data){
  let s;
  let head;
  do {
    let ctNode = data;
    head = ctNode;
    s = false;
    while (ctNode.next!==null){
    if (ctNode.value>ctNode.next.value){
      let hgr = ctNode.value;
      ctNode.value = ctNode.next.value;
      ctNode.next.value = hgr;
      s = true;
    };
    ctNode = ctNode.next
    };
  } while(s);
  let vlArr = [];
  let t = head;
  while (t!==null){
    vlArr.push(t.value);
    t = t.next;
  };
  let val = "";
  return {
    data: head,
    str: val+=vlArr,
    arr: vlArr
  };
};

//Method for turning numbers into emojis
function numEmjs(number) {
    number = number.toString();
    return number
        .replace(/0/g, '0️⃣')
        .replace(/1/g, '1️⃣')
        .replace(/2/g, '2️⃣')
        .replace(/3/g, '3️⃣')
        .replace(/4/g, '4️⃣')
        .replace(/5/g, '5️⃣')
        .replace(/6/g, '6️⃣')
        .replace(/7/g, '7️⃣')
        .replace(/8/g, '8️⃣')
        .replace(/9/g, '9️⃣');
};

//Method for Deep-Cloning an object
function deepClone(obj){
  let clone = {};
  for (let k in obj){
    let v = obj[k];
    if (!array.isArray(v)&&("object"!==typeof v)){
      clone[k]=v;
      continue;
    } else {
      if (typeof v==="object"){
        let RCRSD = deepClone(v);
        clone[k]=RCRSD;
      } else {
        if (array.isArray(v)){
          let arr=[];
          for (let e of v){
            if (typeof e==="object"){
              arr.push(deepClone(e));
            } else {
              arr.push(e)
            };
            clone[k]=arr;
          };
          l
        };
      };
    };
  };
};

//Method for taking an array of objects and returning the most common property
function objMDN(arr){
  let CNJ = {};
  for (let e of arr){
    if ("object"!==typeof e) continue;
    for (let k in e){
      if (CNJ[e[k]]){
        CNJ[e[k]]++;
        continue;
      } else {
        CNJ[e[k]]=1;
      };
    };
  };
  let h;
  let k = 0;
  for (let r in CNJ){
    if (CNJ[r]>k){
      k=CNJ[r];
      h=r;
    };
  };
  return [h, CNJ[h]];
};

//Method for finding the most common elememt in an array
function arrMDN(arr){
  let j = {};
  for (let e of arr){
    if (j[e]){
      j[e]++
    } else {
      j[e]=1;
    };
  };
  let a = objCNVA(j);
  a = a.sort((a,b)=>b[1]-a[1]);
  return a[0];
};

//Method for merging objects
function mergeObj(...args){
  let baseOBJ = {};
  for (let o of args){
    if ("object"===typeof o){
      baseOBJ = {...baseOBJ, ...o};
    };
  };
  return baseOBJ;
};

//Method for flattening a nested array regardless of depth
function flattenArr(arr){
  let baseArr = [];
  for (let e of arr){
    if(Array.isArray(e)){
      for (let k of e){
        if (Array.isArray(k)){
          e = flattenArr(e);
        }
        }
      baseArr = [...baseArr, ...e];
    } else {
      baseArr.push(e);
    }
  };
  return baseArr;
};

//Method for deep filtering an array
function filter(arr, cb){
  let fArr = [];
  for (let e of arr){
    if (cb(e)){
      fArr.push(e)
    } else {
      continue;
    }
  }
  return fArr;
};

/*
Method for validating multiple strings with a regex
* @returns Array<Boolean>
*/
function validateRgx(rgx, ...str){
  for (let e of str){
    if (rgx.exec(e)){
      str[str.indexOf(e)]=true;
    } else {
      str[str.indexOf(e)]=false;
    };
  };
  return str;
};

//Method for searching an array for the first or multiple elements that meet the given callback(filter)
function searchArray(arr, instances=1, cb){
  if (instances<1) throw Error("INSTANCES CANNOT BE ZERO/NULL");
  let e = [];
  let c = 0;
  for (let v of arr){
    if (cb(v)){
      if (c===instances) {
        break;
      } else {
        e.push(v);
        c++;
      };
    } 
  };
  if (e===null){
    throw Error("ELEMENT NOT FOUND WITHIN CALLBACK");
  } else {
    return e;
  }
};

//Method for creating a new prototype with new arguments from an existing instance
function newPrototype(c, ...args){
  if ("object"!==typeof c) throw new ReferenceError("PARAMATER NOT ITERABLE");
  return new c.constructor(...args);
};

//Method for finding a the first property in an object that returns true on callback
function searchObj(obj, cb){
  let p = null;
  for (let k in obj){
    if (cb(obj[k])){
      p=obj[k];
      break;
    } else {
      continue;
    };
  };
  if (p===null){
    throw new Error("PROPERTY CANNOT BE FOUND WITHIN CALLBACK PARAMETERS");
  };
  return p;
};

//Matches 2 arrays and returns non-duplicate elements
function matchArrays(...args){
  if (args.length!==2) throw new Error("INVALID ARGS | 2 ARRAYS REQUIRED");
  if (args.some(e=>{!Array.isArray(e)})){
    throw new TypeError("INVALID PARAMS | ARRAY NOT FOUND");
  };
  let misMatch = [];
    for (let e of args[0]){
     if (!args[1].includes(e)){
       misMatch.push(e);
     };
    };
  return misMatch;
};

//Implementing the Two Point Sum algorithm
function twoPointSum(arr, target){
  let p1 = 0;
  let p2 = arr.length-1;
  let a = false;
  let match = [];
  while(a===false){
   if ((arr[p1]+arr[p2])!==target){
    if (arr[p1]+arr[p2]>target){
      p2=p2-1;
    } else if (arr[p1]+arr[p2]<target){
      p1=p1+1;
    };
  } else {
    match = [...[arr[p1],arr[p2]]];
    a = true;
  };
  };
  return match;
};

//Implementing the Two Point Sort algorithm
function twoPointSort(arr){
  let p1, p2;
  let i;
  for (i=0; i<arr.length-1; i++){
    p1 = i;
    p2 = i + 1;
    while (arr[p1]>arr[p2]&&arr[p1]>=0){
      let f = arr[p1];
      arr[p1] = arr[p2]
      arr[p2] = f;
      p1--;
      p2--;
    };
  };
  return arr;
};

//Generates the Fibonacci Series up to a certain length
function fbn(n){
  let arr = [0, 1];
  let ind = 2;
  let i = 0;
  let d = 1;
  for (; ind<n; ind++){
    let a = arr[i] + arr[d];
    arr.push(a);
    i++;
    d++;
  };
  return arr;
};
//More clean and effecient
function fbn2(n){
  let arr = [0, 1];
  for (let ind = 2; ind < n; ind++){
    arr[ind] = arr[ind - 1] + arr[ind - 2];
  };
  return arr;
};

//Checks if an array is in the Fibonacci Series
function fbnValidate(arr){
  let c;
  for (let i=0; i<arr.length; i++){
    let sum = arr[i] + arr[i+1];
    if (i===arr.length-1){
      c = true;
    };
    if (sum===arr[i+2]){
      continue;
    } else {
      c = false;
      break;
    };
  };
  return c;
};

//Middle-Ware for rate-limiting | Must be implemented before routes are set up
function rateLimit(resetMS){
  return (function(req, res, next){
    
  });
};