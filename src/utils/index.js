/**
 * This is just a simple version of deep copy
 * Has a lot of edge cases bug
 * If you want to use a perfect deep copy, use lodash's _.cloneDeep
 * @param {Object} source
 * @returns {Object}
 */
export const deepClone = data => {
  var type = getObjType(data)
  var obj
  if (type === 'array') {
    obj = []
  } else if (type === 'object') {
    obj = {}
  } else {
    //  不再具有下一层次
    return data
  }
  if (type === 'array') {
    for (var i = 0, len = data.length; i < len; i++) {
      obj.push(deepClone(data[i]))
    }
  } else if (type === 'object') {
    for (var key in data) {
      obj[key] = deepClone(data[key])
    }
  }
  return obj
}
export const getObjType = obj => {
  var toString = Object.prototype.toString
  var map = {
    '[object Boolean]': 'boolean',
    '[object Number]': 'number',
    '[object String]': 'string',
    '[object Function]': 'function',
    '[object Array]': 'array',
    '[object Date]': 'date',
    '[object RegExp]': 'regExp',
    '[object Undefined]': 'undefined',
    '[object Null]': 'null',
    '[object Object]': 'object'
  }
  if (obj instanceof Element) {
    return 'element'
  }
  return map[toString.call(obj)]
}

function getBlob(url) {
  return new Promise(resolve => {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', url, true);
    xhr.responseType = 'blob';
    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(xhr.response);
      }
    };
    xhr.send();
  });
}

function saveAs(blob, filename) {
  if (window.navigator.msSaveOrOpenBlob) {
    navigator.msSaveBlob(blob, filename);
  } else {
    const link = document.createElement('a');

    link.href = window.URL.createObjectURL(blob);
    link.download = filename;
    link.click();

    window.URL.revokeObjectURL(link.href);
  }
}

/**
 * 兼容IE的下载
 * @param url
 * @param filename
 */
export const download =(url, filename) =>{
  getBlob(url).then(blob => {
    saveAs(blob, filename);
  });
}
// @const 保存已创建的js，有则不再添加
const createdScripts = [];
/**
 * 动态加载 script 标签
 * @param src 路径
 * @param chartset 字符编码格式
 */
export function createScript(src, charset = '') {
  if (createdScripts.indexOf(src) !== -1) {
    return;
  }
  const script = document.createElement('script');
  script.type = 'text/javascript';
  if (charset) script.charset = charset;
  script.src = src;
  script.defer = true;
  document.body.appendChild(script);
  createdScripts.push(src);
}

// 按需加载地图相关jsAPI
export function loadMapScript() {
  const mapStatic = [
    'https://map.qq.com/api/gljs?v=2.exp&key=IQZBZ-KIAHJ-JNUFK-XPJPE-5TST6-4EBMT&libraries=service',
    'https://map.qq.com/api/gljs?v=2.exp&key=IQZBZ-KIAHJ-JNUFK-XPJPE-5TST6-4EBMT&referer=location',
    'https://3gimg.qq.com/lightmap/components/geolocation/geolocation.min.js',
    'https://map.qq.com/api/js?v=2.exp&key=IQZBZ-KIAHJ-JNUFK-XPJPE-5TST6-4EBMT&libraries=place',
  ];
  mapStatic.map((ele, idx) => {
    const charset = idx === 1 || idx === 3 ? 'utf-8' : '';
    createScript(ele, charset);
  })
}

/**
 * 使用 XMLHttpRequest 下载文件并兼容 IE
 * @param url
 * @param fileName
 */
export function downloadFile(url, fileName,method='GET') {
  if (window.navigator.msSaveOrOpenBlob) { // 检查是否是 IE 浏览器
    const xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.responseType = 'blob';

    xhr.onload = function() {
      if (xhr.status === 200) {
        window.navigator.msSaveOrOpenBlob(xhr.response, fileName); // 在 IE 中保存或打开 Blob 对象
      }
    };

    xhr.send();
  } else {
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName || url.substring(url.lastIndexOf('/') + 1); // 如果没有指定文件名，则使用默认名称
    // link.download = fileName;

    link.style.display = "none";
    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  }
}

/**
 * 使用 XMLHttpRequest 下载文件并兼容 IE
 * @param res
 * @param filename
 */
export function downloadXLSFiles(res,filename){
  console.log(res)
  let blob = new Blob([res.data],{type:res.data.type||"application/vnd.ms-excel"})
  // let blob = new Blob([res.data],{type:'application/octet-stream'})
  const fileName =filename|| '报名人员'; // 如果没有指定文件名，则使用默认名称

  if (window.navigator && window.navigator.msSaveOrOpenBlob) {
    // IE
    window.navigator.msSaveOrOpenBlob(blob, fileName);
  } else {
    let objectUrl = (window.URL || window.webkitURL).createObjectURL(
      blob
    );
    let downFile = document.createElement("a");
    downFile.style.display = "none";
    downFile.href = objectUrl;
    downFile.download = fileName; // 下载后文件名
    document.body.appendChild(downFile);
    downFile.click();
    setTimeout(() =>{
    document.body.removeChild(downFile); // 下载完成移除元素
    URL.revokeObjectURL(objectUrl); // 只要映射存在，Blob就不能进行垃圾回收，因此一旦不再需要引用，就必须小心撤销URL，释放掉blob对象。
    },100)
    // window.location.href = objectUrl
  }
}


