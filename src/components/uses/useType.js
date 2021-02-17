import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';


const useType = (words) => {
    const [check, setCheck] = useState(0);
    const [checkStartType, setCheckStartType] = useState('no');
    const [message, setMessage] = useState('');
    const [wordForShow, setWordForShow] = useState(0);



    // دریافت کلمه ها از آرایه و تبدیل آن به متن
    let context = words.map((word) => {
        return word[0].toString();
    }).toString();
    context = context.replace(/,/gi, ' ');

    /*
     تعریف آرایه ای که قرار است عناصر مجزای هر حرف را دریافت کرده و سپس 
     برای نمایش حروف از این آرایه استفاده می شود
    */
    let contextShow = [];




    // هر حرف از متن را بطور مجرا دخل یک عنصر قرار می دهد
    for (let i = 0; i < context.length; i++) {
        contextShow.push(<span key={i} className='type' id={`char${i}`} >{context[i]}</span>);
    }
    // let wordForShow=0;
    const handleWord = () => {

        // دریافت عنصری که حرف اشتباه تایپ شده را نشان می دهد
        const getElementError = document.getElementById(`errorChar`);

        // چنانچه هنگام تایپ حرف قبلی خطایی صورت داده باشد توسط این متد خطای اعلان شده پاک می شود
        hideErrorChar(getElementError);

        const getTextbox = document.getElementById("inputChar");

        // دریافت حرف تایپ شده
        // let wordT = document.getElementById("inputChar").value;
        let wordT = getTextbox.value;

        // خالی کردن تکس باکس برای دریافت حرف بعدی
        // document.getElementById("inputChar").value = '';
        getTextbox.value = '';

        // دریافت عنصری که حرف متناظر با آن باید تایپ شود
        let elementContext = document.getElementById(`char${check}`);

        // دریافت مقدار و محتوای عنصری که حرف متناظر باید تایپ شود
        const elementContextVal = elementContext.innerHTML;

        // مقایسه حرف متن با حرف تایپ شده
        if (elementContextVal === wordT) {
            removeClass(elementContext, 'not');
            removeClass(elementContext, 'lineBottom');
            removeClass(elementContext, 'lineLeft');
            addClass(elementContext, 'ok')

            // چک کردن انتهای تایپ کردن
            if (context.length - 1 === check) {
                handleSetmessage('تایپ تمام شد ! جهت تکرار تمرین دکمه "شروع تایپ" را انتخاب کنید');
                setCheck(0);
                offType();
                removeClassAll();
                showMeanWord();
                setWordForShow(0);



            } else {
                setCheck(() => check + 1)
                let element2 = document.getElementById(`char${check + 1}`);
                addClass(element2, 'lineBottom')
                addClass(element2, 'lineLeft')

                // چک کردن انتهای تایپ یک کلمه و نشان دادن معنی کلمه و تلفظش

                if (element2.innerHTML === ' ') {
                    // let showMean = document.getElementById(`showMean`);
                    // showMean.innerHTML=`
                    // <div>${words[wordForShow][0]}</div>
                    // <div>${words[wordForShow][1]}</div>
                    // <div>${words[wordForShow][2]}</div>
                    // <div>${words[wordForShow][3]}</div>
                    // `

                    // setWordForShow(() => wordForShow + 1)
                    showMeanWord()

                }
            }
        }
        else {
            addClass(elementContext, 'not');
            toggleErrorChar(getElementError);
            handleGetPosition(getElementError);
            setCharErrorChar(getElementError, wordT)
        }
    }
    // پاک کردن یک کلاس از عنصر
    const removeClass = (id, className) => {
        ReactDOM.findDOMNode(id).classList.remove(className);
    }
    // اضافه کردن یک کلاس به عنصر
    const addClass = (id, className) => {
        ReactDOM.findDOMNode(id).classList.add(className);
    }
    const removeClassAll = () => {
        let element = document.querySelectorAll('span.type');
        for (let o = 0; o < element.length; o++) {
            element[o].classList.remove('ok');
        }
    }
    // ارسال پیام پایان تایپ
    const handleSetmessage = (mess) => {
        setMessage(mess)
    }

    // جهت نمایش دادن معنی و تلفظ کلمه هنگام تمرین سرعت تایپ
    const showMeanWord = () => {
        let showMean = document.getElementById(`showMean`);
        showMean.innerHTML = `
                <div key='1'>${words[wordForShow][0]}</div>
                <div key='2'>${words[wordForShow][1]}</div>
                <div key='3'>${words[wordForShow][2]}</div>
                <div key='4'>${words[wordForShow][3]}</div>
                `;

        setWordForShow(() => wordForShow + 1)
    }
    useEffect(() => {
        // خط چشمک زن
        if (checkStartType === 'ok') {
            const interval_id = setInterval(() => {
                let element3 = document.getElementById(`char${check}`);
                ReactDOM.findDOMNode(element3).classList.toggle("lineLeft");
            }, 500);
            return () => {
                clearInterval(interval_id)
            }
        }
    }, [check, checkStartType]);

    const handleGetPosition = (elementError) => {
        let getElementChar = document.getElementById(`char${check}`);
        let getPositionChar = getElementChar.getBoundingClientRect();
        console.log(getElementChar.offsetLeft);
        elementError.style.top = `${getElementChar.offsetTop - 33}px`;
        elementError.style.left = `${getElementChar.offsetLeft - 10}px`;
    }
    const toggleErrorChar = (elementError) => {
        if (elementError.style.display === "none") {
            elementError.style.display = "flex";
        } else {
            elementError.style.display = "none";
        }
    }
    const hideErrorChar = (elementError) => {
        elementError.style.display = "none";
    }
    const setCharErrorChar = (elementError, char) => {
        elementError.innerHTML = char
    }

    const startType = () => {
        setCheckStartType('ok');
        document.getElementById("inputChar").focus();
    }
    const offType = () => {
        setCheckStartType('no');
        document.getElementById("inputChar").blur();
    }
    return { contextShow, startType, handleWord, message }
}

export default useType;