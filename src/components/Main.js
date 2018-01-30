require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

// 获取图片相关数据
let imageDatas = require('../data/imageData.json');
//利用自实行函数，将图片信息专程图片url路径信息
imageDatas = (function getImageUrl(imageDataArr){
  for(let i = 0; i < imageDataArr.lengt; i++){
    let singleImageData = imageDataArr[i];
    singleImageData.imageUrl = require('../images／' + singleImageData.fileName);
    imageDataArr[i] = singleImageData;
  }
  return imageDataArr;
},imageDatas);


class AppComponent extends React.Component {
  render() {
    return (
      <div className='stage'>
        <div className="content"></div>
        <div className='nav'></div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
