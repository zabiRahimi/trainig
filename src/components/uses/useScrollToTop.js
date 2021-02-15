
import { useEffect } from 'react';


const useScrollToTop = () => {

    // اسکرول را به اول صفحه می برد
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }
    // نمایش یا عدم نمایش دکمه اسکرول کردن به بالای صفحه
    const showScrollToTop = () => {
        const elementScroll = document.getElementById('scrollToTop');
        let windowH = window.innerHeight - 320;
        let scrollY = window.scrollY;
        (windowH <= window.scrollY) ? elementScroll.style.display = 'flex' : elementScroll.style.display = 'none';
    }

    useEffect(() => {
        function watchScroll() {
            window.addEventListener("scroll", showScrollToTop);
        }
        watchScroll();
        return () => {
            window.removeEventListener("scroll", showScrollToTop);
        };
    });

    return { scrollToTop }
}
export default useScrollToTop;