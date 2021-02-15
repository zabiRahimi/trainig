const useToChunkLesson=()=>{
/* 
این هوک برای رفتن به هر قسمت از درس است. بدن صورت که 
چنانچه کاربر بر روی سرصصفحه هر قسمت 
از درس کلیک کند به همان درس منتقل می شود
 */
const toChunkLesson=(id)=>{
  
    const element = document.getElementById(id);
    const elementClass = document.querySelectorAll('div.chunkLesson');
    for (let o = 0; o < elementClass.length; o++) {
      elementClass[o].classList.remove('selectTitle');
    }
    element.classList.add('selectTitle');
    const topElement =element.offsetTop - 25;
    window.scrollTo({
      top: topElement,
      behavior: 'smooth',
    });
  }
  return {toChunkLesson}
}

export default useToChunkLesson;