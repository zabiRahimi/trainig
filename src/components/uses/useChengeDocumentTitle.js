import { useEffect} from 'react';

const useChengeDocumentTitle=(title)=>{
    useEffect(()=>{
        document.getElementsByTagName('title')[0].innerHTML=title;
    },[])
    
}
export default useChengeDocumentTitle;