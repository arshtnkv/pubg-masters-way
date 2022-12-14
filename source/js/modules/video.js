import {createElement} from '../utils/create-element';

const initVideo = () => {
  const videos = document.querySelectorAll('.video');

  if (!videos.length) {
    return;
  }

  const getTemplate = (id, cover) => {
    return `<div class="le-video-container"><iframe srcdoc="<style>*{padding:0;margin:0;box-sizing:border-box}a,img{display:block;position:absolute;top:0;left:0;object-fit: cover;width:100%;height:100%;mix-blend-mode:lighten;opacity:.7;}a::before{content:'';position:absolute;top:0;left:0;z-index:10;width:100%;height:100%;background:rgba(0,0,0,0.3);opacity:0;-webkit-transition:opacity .3s ease;-o-transition:opacity .3s ease;transition:opacity .3s ease}a:hover::before{opacity:1}a:hover .video__btn{background-image:-webkit-gradient(linear,left bottom,left top,from(#23892f),to(#23892f)),-webkit-gradient(linear,left bottom,left top,from(#33bc42),to(#33bc42));background-image:-o-linear-gradient(bottom,#23892f,#23892f),-o-linear-gradient(bottom,#33bc42,#33bc42);background-image:linear-gradient(0deg,#23892f,#23892f),linear-gradient(0deg,#33bc42,#33bc42)}a:hover .video__btn span{-webkit-transform:scale(1.3);-ms-transform:scale(1.3);transform:scale(1.3)}a:hover .video__btn::after{-webkit-transform:scale(1.3);-ms-transform:scale(1.3);transform:scale(1.3)}a:hover .video__btn::before{opacity:1}.video__btn{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:4;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0;background:rgba(255,255,255,0);border:0;border-radius:50%;outline:0;cursor:pointer;}.video__btn-play{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:78px;height:78px;background-color: #212121;border: 1px solid #c8102e;border-radius:50%;-webkit-transition:-webkit-transform .3s ease;transition:-webkit-transform .3s ease;-o-transition:transform .3s ease;transition:transform .3s ease;transition:transform .3s ease,-webkit-transform .3s ease}.video__btn::before{content:'';position:absolute;width:150px;height:150px;background:-webkit-gradient(linear,left top,left bottom,from(#c8102e),to(rgba(35,137,47,0))) border-box;background:-o-linear-gradient(top,#c8102e 0%,rgba(35,137,47,0) 100%) border-box;background:linear-gradient(180deg,#c8102e 0%,rgba(35,137,47,0) 100%) border-box;border-width:1px;border-style:solid;border-color:transparent;border-radius:inherit;-webkit-transform:scale(-1,-1);-ms-transform:scale(-1,-1);transform:scale(-1,-1);opacity:0;will-change:transform;-webkit-transition:opacity .3s ease;-o-transition:opacity .3s ease;transition:opacity .3s ease;-webkit-mask:-webkit-gradient(linear,left top,left bottom,from(#fff),to(#fff)) padding-box,-webkit-gradient(linear,left top,left bottom,from(#fff),to(#fff));-webkit-mask:linear-gradient(#fff,#fff) padding-box,linear-gradient(#fff,#fff);mask:-webkit-gradient(linear,left top,left bottom,from(#fff),to(#fff)) padding-box,-webkit-gradient(linear,left top,left bottom,from(#fff),to(#fff));mask:linear-gradient(#fff,#fff) padding-box,linear-gradient(#fff,#fff);-webkit-mask-composite:xor;mask-composite:exclude}.video__btn svg{color:#c8102e;width:14px;height:17px}</style><a href='https://www.youtube.com/embed/${id}'><span class='video__btn'><span class='video__btn-play'><svg width='14' height='17' viewBox='0 0 14 17' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M13 6.76795C14.3333 7.53775 14.3333 9.46225 13 10.2321L3.25 15.8612C1.91667 16.631 0.249999 15.6688 0.249999 14.1292L0.25 2.87084C0.25 1.33123 1.91667 0.368984 3.25 1.13878L13 6.76795Z' fill='currentColor'/></svg></span></span><img src='${cover}' alt=''></a>'" src='https://www.youtube.com/embed/${id}' frameborder='0' allowfullscreen=''></iframe></div>`;
  };

  videos.forEach((item) => {
    if (item.classList.contains('video--min')) {
      return;
    }

    const frame = item.querySelector('.video__iframe');
    const videoId = frame.dataset.video;
    const cover = frame.dataset.cover;

    frame.append(createElement(getTemplate(videoId, cover)));
  });
};

export {initVideo};
