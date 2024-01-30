import React from 'react';

import './App.css';
import FoodBoard from './components/FoodBoard';

class App extends React.Component {
  render() {
    const foodBoard_info = [
      {
        header: 'อาหารคาว',
        subheader: 'ข้าวผัดเนื้อวากิว A5',
        detail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        imgalt: 'รูปข้าวผัดเด้อออ',
        imgsrc: 'https://numsups.com/wp-content/uploads/2022/08/%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%A7%E0%B8%9C%E0%B8%B1%E0%B8%94%E0%B8%A1%E0%B8%B1%E0%B8%99%E0%B9%80%E0%B8%99%E0%B8%B7%E0%B9%89%E0%B8%AD1-1024x749.jpg'
      },
      {
        header: 'อาหารหวาน',
        subheader: 'ข้าวเหนียวมะม่วง',
        detail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        imgalt: 'รูปข้าวเหนียวมะม่วงเด้อออ',
        imgsrc: 'https://www.ofm.co.th/blog/wp-content/uploads/2022/04/%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%A7%E0%B9%80%E0%B8%AB%E0%B8%99%E0%B8%B5%E0%B8%A2%E0%B8%A7%E0%B8%A1%E0%B8%B0%E0%B8%A1%E0%B9%88%E0%B8%A7%E0%B8%87-2.jpg'
      }

    ];
    return (
      <div className='App'>
        <h1>โหวตอาหาร</h1>
        {foodBoard_info.map(data => (
          <FoodBoard
            key={data.header}
            header={data.header}
            subheader={data.subheader}
            detail={data.detail}
            imgalt={data.imgalt}
            imgsrc={data.imgsrc}
          />
        ))}
      </div>
    );
  }
}

export default App;
